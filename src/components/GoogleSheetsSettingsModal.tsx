import React, { useState, useEffect } from 'react';
import {
  X,
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  PlusCircle,
  RefreshCw,
  Copy,
  Check,
  ShieldCheck,
  LogOut,
  Send,
  Database,
  Info,
} from 'lucide-react';
import {
  googleSignIn,
  logout,
  initAuth,
  getAccessToken,
} from '../services/firebaseAuth';
import {
  getSheetsConfig,
  saveSheetsConfig,
  createInquiriesSpreadsheet,
  getStoredSubmissions,
  submitFormToGoogleSheet,
  GoogleSheetsConfig,
  FormSubmissionData,
} from '../services/googleSheetsService';
import { User } from 'firebase/auth';

interface GoogleSheetsSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSheetsSettingsModal: React.FC<GoogleSheetsSettingsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [hasToken, setHasToken] = useState(false);
  const [config, setConfig] = useState<GoogleSheetsConfig>(getSheetsConfig());
  const [submissions, setSubmissions] = useState<FormSubmissionData[]>([]);
  
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isCreatingSheet, setIsCreatingSheet] = useState(false);
  const [isSendingTest, setIsSendingTest] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [copiedScript, setCopiedScript] = useState(false);

  const [activeTab, setActiveTab] = useState<'connect' | 'appsscript' | 'logs'>('connect');

  // Input states
  const [sheetIdInput, setSheetIdInput] = useState(config.spreadsheetId || '');
  const [sheetNameInput, setSheetNameInput] = useState(config.sheetName || 'Inquiries');
  const [appsScriptUrlInput, setAppsScriptUrlInput] = useState(config.appsScriptUrl || '');

  useEffect(() => {
    if (!isOpen) return;

    // Load initial config & submissions
    const currentConfig = getSheetsConfig();
    setConfig(currentConfig);
    setSheetIdInput(currentConfig.spreadsheetId || '');
    setSheetNameInput(currentConfig.sheetName || 'Inquiries');
    setAppsScriptUrlInput(currentConfig.appsScriptUrl || '');
    setSubmissions(getStoredSubmissions());

    // Subscribe to auth state
    const unsubscribe = initAuth(
      (user) => {
        setCurrentUser(user);
        setHasToken(true);
      },
      () => {
        setCurrentUser(null);
        getAccessToken().then((token) => setHasToken(!!token));
      }
    );

    return () => unsubscribe();
  }, [isOpen]);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setIsAuthenticating(true);
    setStatusMessage(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setCurrentUser(result.user);
        setHasToken(true);
        setStatusMessage({
          type: 'success',
          text: `Connected as ${result.user.email}. Google Sheets permission granted.`,
        });
      }
    } catch (err: any) {
      console.error(err);
      setStatusMessage({
        type: 'error',
        text: err.message || 'Failed to sign in with Google. Please try again.',
      });
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await logout();
      setCurrentUser(null);
      setHasToken(false);
      setStatusMessage({ type: 'info', text: 'Signed out from Google account.' });
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err.message });
    }
  };

  const handleCreateNewSheet = async () => {
    setIsCreatingSheet(true);
    setStatusMessage(null);
    try {
      const { spreadsheetId, spreadsheetUrl } = await createInquiriesSpreadsheet(
        'Vaibhav AI Academy - Website Inquiries'
      );
      setSheetIdInput(spreadsheetId);
      const updated = saveSheetsConfig({ spreadsheetId, sheetName: 'Inquiries' });
      setConfig(updated);
      setStatusMessage({
        type: 'success',
        text: `New Google Sheet created! Form submissions will automatically write to this sheet.`,
      });
    } catch (err: any) {
      console.error(err);
      setStatusMessage({
        type: 'error',
        text: err.message || 'Could not create Google Sheet. Please check permissions.',
      });
    } finally {
      setIsCreatingSheet(false);
    }
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = saveSheetsConfig({
      spreadsheetId: sheetIdInput.trim(),
      sheetName: sheetNameInput.trim() || 'Inquiries',
      appsScriptUrl: appsScriptUrlInput.trim(),
    });
    setConfig(updated);
    setStatusMessage({
      type: 'success',
      text: 'Settings saved successfully!',
    });
  };

  const handleSendTestSubmission = async () => {
    setIsSendingTest(true);
    setStatusMessage(null);
    try {
      const result = await submitFormToGoogleSheet({
        parentName: 'Test Parent (Demo)',
        studentName: 'Aarav (Test Student)',
        studentClass: 'Class 8',
        phoneNumber: '+91 98765 43210',
      });
      setSubmissions(getStoredSubmissions());
      setStatusMessage({
        type: 'success',
        text: `Test submission appended successfully! (${result.details || 'Destination: ' + result.destination})`,
      });
    } catch (err: any) {
      console.error(err);
      setStatusMessage({
        type: 'error',
        text: `Test failed: ${err.message}`,
      });
    } finally {
      setIsSendingTest(false);
    }
  };

  const appsScriptCode = `function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add header if sheet is brand new
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Submission Date & Time',
        'Parent / Guardian Name',
        'Student Name',
        'Student Class',
        'WhatsApp / Phone Number',
        'Status',
        'Submission ID'
      ]);
    }
    
    // Append submission row
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString(),
      data.parentName || '',
      data.studentName || '',
      data.studentClass || '',
      data.phoneNumber || '',
      data.status || 'New Inquiry',
      data.submissionId || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(appsScriptCode);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  const isConnected = !!(config.spreadsheetId && hasToken) || !!config.appsScriptUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-sm">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Poppins']">
                  Google Sheet Automation
                </h3>
                {isConnected ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Connected
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800">
                    Setup Needed
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">
                Form submissions automatically append as new rows to your Google Sheet
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-100/60 px-6 pt-2 gap-2 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('connect')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'connect'
                ? 'border-violet-600 text-violet-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Google OAuth / Direct API</span>
          </button>

          <button
            onClick={() => setActiveTab('appsscript')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'appsscript'
                ? 'border-violet-600 text-violet-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Google Apps Script (Webhook)</span>
          </button>

          <button
            onClick={() => setActiveTab('logs')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'logs'
                ? 'border-violet-600 text-violet-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Submissions Log ({submissions.length})</span>
          </button>
        </div>

        {/* Status Toast Notification */}
        {statusMessage && (
          <div
            className={`mx-6 mt-4 p-3 rounded-xl text-xs flex items-start gap-2.5 ${
              statusMessage.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : statusMessage.type === 'error'
                ? 'bg-rose-50 text-rose-800 border border-rose-200'
                : 'bg-sky-50 text-sky-800 border border-sky-200'
            }`}
          >
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            ) : statusMessage.type === 'error' ? (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            ) : (
              <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            )}
            <p className="flex-1 leading-relaxed">{statusMessage.text}</p>
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'connect' && (
            <div className="space-y-6">
              {/* Account Authorization Card */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      1. Authorize Google Sheets Access
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {currentUser ? (
                        <>Connected as: <span className="font-semibold text-slate-800">{currentUser.email}</span></>
                      ) : (
                        'Sign in with your Google account to grant write permission to your Google Sheets.'
                      )}
                    </p>
                  </div>

                  {currentUser ? (
                    <button
                      onClick={handleGoogleSignOut}
                      className="px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-200/70 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer w-fit"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleGoogleSignIn}
                      disabled={isAuthenticating}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-300 shadow-sm flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {/* Google G Icon */}
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      <span>{isAuthenticating ? 'Signing In...' : 'Sign in with Google'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* 2. Target Spreadsheet Configuration */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      2. Target Google Sheet
                    </h4>
                    <p className="text-xs text-slate-500">
                      Select or auto-generate the spreadsheet where submissions should be appended.
                    </p>
                  </div>

                  {hasToken && (
                    <button
                      onClick={handleCreateNewSheet}
                      disabled={isCreatingSheet}
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer disabled:opacity-50"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>{isCreatingSheet ? 'Creating...' : 'Auto-Create Inquiries Sheet'}</span>
                    </button>
                  )}
                </div>

                <form onSubmit={handleSaveConfig} className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Spreadsheet ID
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g., 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
                        value={sheetIdInput}
                        onChange={(e) => setSheetIdInput(e.target.value)}
                        className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-violet-500"
                      />
                      {config.spreadsheetId && (
                        <a
                          href={`https://docs.google.com/spreadsheets/d/${config.spreadsheetId}/edit`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors"
                        >
                          <span>Open</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Found in your Google Sheet URL: https://docs.google.com/spreadsheets/d/
                      <span className="font-semibold text-slate-600">[SPREADSHEET_ID]</span>/edit
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Sheet Tab Name
                      </label>
                      <input
                        type="text"
                        placeholder="Inquiries"
                        value={sheetNameInput}
                        onChange={(e) => setSheetNameInput(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
                    >
                      Save Settings
                    </button>

                    <button
                      type="button"
                      onClick={handleSendTestSubmission}
                      disabled={isSendingTest}
                      className="px-3 py-1.5 rounded-xl border border-violet-200 bg-violet-50 hover:bg-violet-100 text-violet-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSendingTest ? 'Sending Test...' : 'Send Test Row'}</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Data Schema Explanation */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-violet-600" />
                  <span>Standard Data Schema (Columns A to G)</span>
                </div>
                <p className="leading-relaxed">
                  Each visitor submission automatically creates a new row with the following fields:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
                  <span className="p-1.5 rounded bg-white border border-slate-200">A: Timestamp</span>
                  <span className="p-1.5 rounded bg-white border border-slate-200">B: Parent Name</span>
                  <span className="p-1.5 rounded bg-white border border-slate-200">C: Student Name</span>
                  <span className="p-1.5 rounded bg-white border border-slate-200">D: Student Class</span>
                  <span className="p-1.5 rounded bg-white border border-slate-200">E: Phone Number</span>
                  <span className="p-1.5 rounded bg-white border border-slate-200">F: Status</span>
                  <span className="p-1.5 rounded bg-white border border-slate-200">G: Submission ID</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appsscript' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
                <h4 className="text-sm font-bold text-slate-900">
                  Google Apps Script Web App (Zero-Auth Visitor Option)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If you want public visitors to write directly to your Google Sheet without requiring any login popups, you can deploy this tiny 10-line Google Apps Script on your sheet:
                </p>

                <ol className="list-decimal list-inside text-xs text-slate-600 space-y-1.5 pl-1">
                  <li>Open your Google Sheet, go to <span className="font-semibold text-slate-800">Extensions → Apps Script</span>.</li>
                  <li>Paste the code snippet below into the editor.</li>
                  <li>Click <span className="font-semibold text-slate-800">Deploy → New deployment</span>.</li>
                  <li>Select type: <span className="font-semibold text-slate-800">Web app</span>, set <i>Execute as: Me</i>, and <i>Who has access: Anyone</i>.</li>
                  <li>Copy the resulting Web app URL and paste it into the field below.</li>
                </ol>

                <div className="relative pt-2">
                  <pre className="p-3.5 rounded-xl bg-slate-900 text-slate-100 text-[11px] font-mono overflow-x-auto max-h-48">
                    {appsScriptCode}
                  </pre>
                  <button
                    onClick={handleCopyScript}
                    className="absolute top-4 right-2 px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-[11px] font-medium flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedScript ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedScript ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Apps Script Web App URL
                </label>
                <input
                  type="url"
                  placeholder="https://script.google.com/macros/s/.../exec"
                  value={appsScriptUrlInput}
                  onChange={(e) => setAppsScriptUrlInput(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-violet-500"
                />

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={handleSaveConfig}
                    className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
                  >
                    Save Apps Script URL
                  </button>

                  <button
                    type="button"
                    onClick={handleSendTestSubmission}
                    disabled={isSendingTest || !appsScriptUrlInput}
                    className="px-3 py-1.5 rounded-xl border border-violet-200 bg-violet-50 hover:bg-violet-100 text-violet-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSendingTest ? 'Sending...' : 'Test Webhook'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  Total captured inquiries: <span className="font-bold text-slate-800">{submissions.length}</span>
                </p>
                <button
                  onClick={() => setSubmissions(getStoredSubmissions())}
                  className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg text-xs flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Refresh</span>
                </button>
              </div>

              {submissions.length === 0 ? (
                <div className="text-center py-10 border border-dashed border-slate-200 rounded-2xl">
                  <Database className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs text-slate-500">No submissions recorded yet.</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Submissions through the website inquiry form will appear here and in your Google Sheet.
                  </p>
                </div>
              ) : (
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                      <tr>
                        <th className="py-2.5 px-3">Date & Time</th>
                        <th className="py-2.5 px-3">Parent</th>
                        <th className="py-2.5 px-3">Student</th>
                        <th className="py-2.5 px-3">Class</th>
                        <th className="py-2.5 px-3">Phone</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {submissions.map((sub, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-2.5 px-3 text-slate-500 whitespace-nowrap text-[11px]">
                            {sub.timestamp}
                          </td>
                          <td className="py-2.5 px-3 font-semibold text-slate-900">
                            {sub.parentName}
                          </td>
                          <td className="py-2.5 px-3 text-slate-700">
                            {sub.studentName}
                          </td>
                          <td className="py-2.5 px-3 text-slate-600">
                            <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-medium text-[10px]">
                              {sub.studentClass}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 font-mono text-slate-700 text-[11px]">
                            {sub.phoneNumber}
                          </td>
                          <td className="py-2.5 px-3">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10px]">
                              {sub.status || 'Logged'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between text-xs">
          <div className="text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Zero-loss backup enabled automatically.</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
