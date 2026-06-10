export type Locale = 'en' | 'fr';

export interface NavLink {
  href: string;
  label: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  text: string;
  badge: string;
  badgeClass: 'badge-core' | 'badge-done';
}

export interface AgentSummary {
  num: string;
  title: string;
  role: string;
  items: string[];
  source: string;
  variant?: 'debate' | 'decision';
}

export interface PipelineStep {
  title: string;
  detail: string;
}

export interface ResultItem {
  title: string;
  meta: string[];
  image: string;
  imageAlt: string;
  caption: string;
  metrics?: { text: string; class?: string }[];
  cliShot?: boolean;
}

export interface UseCase {
  title: string;
  text: string;
}

export interface ComponentRow {
  name: string;
  type: string;
  role: string;
  output: string;
  outputClass?: string;
}

export interface AgentDetail {
  num: string;
  title: string;
  role: string;
  intro?: string;
  items: string[];
  source: string;
  variant?: 'debate' | 'decision';
}

export interface CliStep {
  step: string;
  title: string;
  meta: string[];
  image: string;
  imageAlt: string;
  caption: string;
}

export interface HomeContent {
  meta: { title: string; description: string };
  nav: NavLink[];
  hero: {
    badge: string;
    title: string;
    text: string;
    ctaResults: string;
    ctaAgents: string;
    ctaSource: string;
  };
  about: { title: string; subtitle: string; stats: Stat[]; cards: FeatureCard[] };
  agents: {
    title: string;
    subtitle: string;
    bannerTitle: string;
    bannerText: string;
    bannerCta: string;
    items: AgentSummary[];
  };
  pipeline: { title: string; subtitle: string; steps: PipelineStep[] };
  results: { title: string; subtitle: string; items: ResultItem[] };
  useCases: { title: string; subtitle: string; items: UseCase[] };
  components?: { title: string; subtitle: string; rows: ComponentRow[] };
  stack: { title: string; subtitle?: string; pills: string[] };
  footer: { lines: string[] };
}

export interface AgentsContent {
  meta: { title: string };
  nav: NavLink[];
  hero: { title: string; text: string; ctaCli: string; ctaBack: string };
  cli: { title: string; text: string; steps: CliStep[] };
  details: AgentDetail[];
  footer: { back: string; source: string };
}
