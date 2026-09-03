export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface LearningModule {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  details: string[];
  icon: string;
  gradient: string;
}

export interface MethodStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
}

export interface WhyAiCard {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface StudentExperienceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  previewPrompt: string;
  sampleOutput: string;
}

export interface OutcomeItem {
  title: string;
  description: string;
}

export interface BonusItem {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
