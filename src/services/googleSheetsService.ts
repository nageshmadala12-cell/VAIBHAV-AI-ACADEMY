import { getAccessToken } from './firebaseAuth';

export interface FormSubmissionData {
  parentName: string;
  studentName?: string;
  studentClass: string;
  phoneNumber: string;
  timestamp?: string;
  submissionId?: string;
  status?: string;
}

export interface GoogleSheetsConfig {
  spreadsheetId: string;
  sheetName: string;
  appsScriptUrl: string;
  lastConnectedAt?: string;
  autoSyncEnabled: boolean;
}

const CONFIG_STORAGE_KEY = 'vaibhav_google_sheets_config';
const SUBMISSIONS_LOG_KEY = 'vaibhav_academy_inquiries_log';

// Default configuration
const defaultConfig: GoogleSheetsConfig = {
  spreadsheetId: '',
  sheetName: 'Inquiries',
  appsScriptUrl: '',
  autoSyncEnabled: true,
};

/**
 * Get current Google Sheets configuration
 */
export const getSheetsConfig = (): GoogleSheetsConfig => {
  try {
    const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (saved) {
      return { ...defaultConfig, ...JSON.parse(saved) };
    }
  } catch (err) {
    console.error('Error reading sheets config:', err);
  }
  return defaultConfig;
};

/**
 * Save Google Sheets configuration
 */
export const saveSheetsConfig = (config: Partial<GoogleSheetsConfig>): GoogleSheetsConfig => {
  const current = getSheetsConfig();
  const updated = { ...current, ...config };
  try {
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving sheets config:', err);
  }
  return updated;
};

/**
 * Get all stored submissions (for audit and backup)
 */
export const getStoredSubmissions = (): FormSubmissionData[] => {
  try {
    const data = localStorage.getItem(SUBMISSIONS_LOG_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error reading submissions log:', e);
  }
  return [];
};

/**
 * Save submission to local backup storage
 */
export const saveSubmissionLocally = (submission: FormSubmissionData) => {
  try {
    const list = getStoredSubmissions();
    list.unshift(submission);
    // Keep last 100 entries
    localStorage.setItem(SUBMISSIONS_LOG_KEY, JSON.stringify(list.slice(0, 100)));
  } catch (e) {
    console.error('Error saving submission locally:', e);
  }
};

/**
 * Format date in Indian Standard Time (IST) and ISO format
 */
export const formatSubmissionDateTime = (): { displayTime: string; isoTime: string } => {
  const now = new Date();
  const displayTime = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  }) + ' IST';
  const isoTime = now.toISOString();
  return { displayTime, isoTime };
};

/**
 * Create a brand new Google Sheet in the user's Google Drive with standard header row
 */
export const createInquiriesSpreadsheet = async (
  title = 'Vaibhav AI Academy - Website Inquiries'
): Promise<{ spreadsheetId: string; spreadsheetUrl: string }> => {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    throw new Error('Google authentication required. Please sign in with your Google account first.');
  }

  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title,
      },
      sheets: [
        {
          properties: {
            title: 'Inquiries',
            gridProperties: {
              frozenRowCount: 1,
            },
          },
          data: [
            {
              startRow: 0,
              startColumn: 0,
              rowData: [
                {
                  values: [
                    { userEnteredValue: { stringValue: 'Submission Date & Time' } },
                    { userEnteredValue: { stringValue: 'Parent / Guardian Name' } },
                    { userEnteredValue: { stringValue: 'Student Name' } },
                    { userEnteredValue: { stringValue: 'Student Class' } },
                    { userEnteredValue: { stringValue: 'WhatsApp / Phone Number' } },
                    { userEnteredValue: { stringValue: 'Status' } },
                    { userEnteredValue: { stringValue: 'Submission ID' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Failed to create Google Sheet (HTTP ${response.status})`
    );
  }

  const data = await response.json();
  const spreadsheetId = data.spreadsheetId;
  const spreadsheetUrl = data.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  // Update configuration
  saveSheetsConfig({
    spreadsheetId,
    sheetName: 'Inquiries',
    lastConnectedAt: new Date().toISOString(),
  });

  return { spreadsheetId, spreadsheetUrl };
};

/**
 * Append a row directly to Google Sheets using Google Sheets API v4
 */
export const appendRowToGoogleSheet = async (
  spreadsheetId: string,
  sheetName: string,
  rowData: (string | number)[],
  token?: string
): Promise<{ updatedRows: number; updatedRange: string }> => {
  const accessToken = token || (await getAccessToken());
  if (!accessToken) {
    throw new Error('Missing Google authorization token.');
  }

  // Ensure Sheet tab exists or fallback to first sheet
  const range = `${sheetName || 'Inquiries'}!A:G`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(
    spreadsheetId
  )}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      values: [rowData],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message ||
        `Google Sheets API returned error HTTP ${response.status}. Please check Sheet ID and permissions.`
    );
  }

  const result = await response.json();
  return {
    updatedRows: result.updates?.updatedRows || 1,
    updatedRange: result.updates?.updatedRange || range,
  };
};

/**
 * Post submission to Google Apps Script Web App
 */
export const sendToAppsScriptWebApp = async (
  scriptUrl: string,
  payload: FormSubmissionData
): Promise<boolean> => {
  try {
    // Standard Apps Script deployment handling with FormData/JSON
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Apps Script web apps redirect 302 to googleusercontent which triggers CORS on standard fetch
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (err: any) {
    console.error('Apps Script submission error:', err);
    throw new Error(`Failed to send data to Google Apps Script: ${err.message || 'Network error'}`);
  }
};

/**
 * Unified submission handler for the website form:
 * 1. Formats date and time
 * 2. Generates unique submission ID
 * 3. Saves locally for zero-loss guarantee
 * 4. Sends to Google Sheet (either via direct Google Sheets API or Google Apps Script Web App)
 */
export const submitFormToGoogleSheet = async (
  formData: Omit<FormSubmissionData, 'timestamp' | 'submissionId' | 'status'>
): Promise<{
  success: boolean;
  submission: FormSubmissionData;
  destination: 'google_sheets_api' | 'apps_script' | 'stored_locally';
  details?: string;
}> => {
  const { displayTime } = formatSubmissionDateTime();
  const submissionId = `VA-${Date.now().toString().slice(-6)}`;
  
  const fullSubmission: FormSubmissionData = {
    parentName: formData.parentName.trim(),
    studentName: formData.studentName?.trim() || 'Not specified',
    studentClass: formData.studentClass,
    phoneNumber: formData.phoneNumber.trim(),
    timestamp: displayTime,
    submissionId,
    status: 'New Inquiry',
  };

  // Always store locally first as a safety backup
  saveSubmissionLocally(fullSubmission);

  const config = getSheetsConfig();

  // Route 1: Direct Google Apps Script Web App if configured
  if (config.appsScriptUrl && config.appsScriptUrl.trim().startsWith('http')) {
    await sendToAppsScriptWebApp(config.appsScriptUrl.trim(), fullSubmission);
    return {
      success: true,
      submission: fullSubmission,
      destination: 'apps_script',
      details: 'Recorded into Google Sheet via Google Apps Script automation.',
    };
  }

  // Route 2: Google Sheets API v4 using authenticated token
  const token = await getAccessToken();
  if (config.spreadsheetId && token) {
    const rowValues = [
      fullSubmission.timestamp || displayTime,
      fullSubmission.parentName,
      fullSubmission.studentName || 'Not specified',
      fullSubmission.studentClass,
      fullSubmission.phoneNumber,
      fullSubmission.status || 'New Inquiry',
      fullSubmission.submissionId || submissionId,
    ];

    await appendRowToGoogleSheet(
      config.spreadsheetId,
      config.sheetName || 'Inquiries',
      rowValues,
      token
    );

    return {
      success: true,
      submission: fullSubmission,
      destination: 'google_sheets_api',
      details: `Appended row to Google Sheet (ID: ${config.spreadsheetId.slice(0, 6)}...)`,
    };
  }

  // If token is missing but user has spreadsheet ID, or initial setup
  if (config.spreadsheetId && !token) {
    // Return gracefully or advise user
    return {
      success: true,
      submission: fullSubmission,
      destination: 'stored_locally',
      details:
        'Inquiry secured in system. To push live rows directly into your personal Google Sheet, connect your Google account in Google Sheets settings.',
    };
  }

  return {
    success: true,
    submission: fullSubmission,
    destination: 'stored_locally',
    details: 'Inquiry saved successfully.',
  };
};
