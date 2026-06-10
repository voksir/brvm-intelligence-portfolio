import type { AgentsContent, HomeContent } from './types';

export const home: HomeContent = {
  meta: {
    title: 'BRVM Intelligence | AI Agent-Powered Stock Analysis',
    description:
      'AI agent-powered daily stock analysis for the BRVM. Built with TradingAgents 0.2.x — 7 specialized LLM agents, real Supabase data, professional PDF output.',
  },
  nav: [
    { href: '#about', label: 'About' },
    { href: '#agents', label: 'AI Agents' },
    { href: '#pipeline', label: 'Pipeline' },
    { href: '#results', label: 'Results' },
    { href: '#use-cases', label: 'Use Cases' },
    { href: '#stack', label: 'Tech Stack' },
  ],
  hero: {
    badge: 'FinTech · AI Agents · TradingAgents 0.2.x · West Africa',
    title: 'AI Agent–Powered Automated Daily Analysis for the BRVM Stock Market',
    text: '<strong>BRVM Intelligence (BAQA)</strong> orchestrates <strong>7 specialized AI agents</strong> built on the <strong>TradingAgents 0.2.x</strong> framework (LangGraph) to analyze West African equities every evening after market close. Real BRVM data from Supabase, structured debate, and a professional PDF bulletin with <strong>BUY / HOLD / SELL</strong> recommendations — in French, in FCFA.',
    ctaResults: 'View Results',
    ctaAgents: 'Explore AI Agents',
    ctaSource: 'Source Repository',
  },
  about: {
    title: 'About the Project',
    subtitle:
      'The BRVM is the only regional stock exchange shared by 8 West African countries (UEMOA). This project makes professional-grade analysis accessible through an automated multi-agent pipeline.',
    stats: [
      { num: '7', label: 'AI Agents' },
      { num: '5', label: 'Watchlist Tickers' },
      { num: '21', label: 'Unit Tests' },
      { num: '12/12', label: 'Validation Checklist' },
    ],
    cards: [
      {
        icon: '🤖',
        title: 'AI Agents via TradingAgents 0.2.x',
        text: '7 specialized LLM agents configured and orchestrated with TradingAgents — fundamentals, technicals, news, sentiment, then adversarial debate.',
        badge: 'Core Feature',
        badgeClass: 'badge-core',
      },
      {
        icon: '📊',
        title: 'Real BRVM Data',
        text: 'Official BOC data via Supabase: PER, DNPA, market cap, sector indices — all in FCFA, daily fixing.',
        badge: 'Implemented',
        badgeClass: 'badge-done',
      },
      {
        icon: '📄',
        title: 'Professional PDF Bulletin',
        text: 'Cover page, market overview, decision summary, per-ticker analysis sections, BUY/HOLD/SELL legend in French.',
        badge: 'Implemented',
        badgeClass: 'badge-done',
      },
      {
        icon: '⚖️',
        title: 'Structured Bull vs Bear Debate',
        text: 'Bull and Bear researchers argue from the 4 analyst reports — reducing bias before the Trader emits the final call.',
        badge: 'Implemented',
        badgeClass: 'badge-done',
      },
    ],
  },
  agents: {
    title: 'The 7 AI Agents — Heart of the System',
    subtitle:
      'Each agent was designed, configured, and connected to real BRVM data using the <strong>TradingAgents 0.2.x</strong> multi-agent framework. Together they form a complete investment research workflow — from raw market data to an actionable recommendation.',
    bannerTitle: 'Why 7 agents on TradingAgents?',
    bannerText:
      "TradingAgents provides the LangGraph orchestration layer — I customized each agent's system prompts (French, FCFA, BRVM context) and wired a custom Supabase data vendor ('brvm'). Specialization + structured debate produces more balanced, auditable recommendations.",
    bannerCta: 'Full Agent Documentation →',
    items: [
      {
        num: 'Agent 1',
        title: 'Fundamentals Analyst 📊',
        role: 'Evaluates financial health of a BRVM stock',
        items: ['PER vs sector average', 'DNPA (dividend per share) in FCFA', 'Net yield & market compartment', 'Order book & real liquidity'],
        source: '<strong>Source:</strong> Official BRVM BOC (Bulletin Officiel de la Cote)',
      },
      {
        num: 'Agent 2',
        title: 'Market / Technical Analyst 📈',
        role: 'Reads price and volume signals',
        items: ['Daily OHLCV history', '30 / 60 / 90-day price trends', 'MACD, RSI, moving averages', 'Beta & relative volatility'],
        source: '<strong>Source:</strong> Sikafinance via BRVM data pipeline',
      },
      {
        num: 'Agent 3',
        title: 'News Analyst 📰',
        role: 'Interprets macro events impacting the stock',
        items: ['Company-related market news', 'UEMOA macro context: market PER, risk premium', 'Sector index performance (TEL, FIN, CB…)', 'Daily leaderboard: top gainers & losers'],
        source: '<strong>Source:</strong> Supabase news + boc_market_summary',
      },
      {
        num: 'Agent 4',
        title: 'Sentiment Analyst 📡',
        role: 'Captures market mood around the ticker',
        items: ['News sentiment trends', 'Relative performance vs market', 'Volume anomalies & unusual price gaps'],
        source: '<strong>Source:</strong> Aggregated from news & market data',
      },
      {
        num: 'Agents 5 & 6',
        title: 'Bull Researcher & Bear Researcher ⚖️',
        role: 'Adversarial debate from the 4 analyst reports',
        items: ['<strong>Bull:</strong> growth potential, undervaluation, positive indicators', '<strong>Bear:</strong> risks, overvaluation, BRVM liquidity, macro headwinds', 'Structured debate reduces single-model bias'],
        source: '<strong>Output:</strong> investment_plan field in JSON',
        variant: 'debate',
      },
      {
        num: 'Agent 7',
        title: 'Trader + Risk Manager 🎯',
        role: 'Synthesizes debate into final recommendation',
        items: ['Final decision: <strong>BUY / HOLD / SELL</strong>', 'Confidence level', 'Detailed action plan with justification', 'BRVM-specific risk assessment (liquidity, daily fixing)'],
        source: '<strong>Output:</strong> final_trade_decision in PDF bulletin',
        variant: 'decision',
      },
    ],
  },
  pipeline: {
    title: 'Processing Pipeline',
    subtitle: 'End-to-end data flow from Supabase to professional PDF bulletin.',
    steps: [
      { title: '📥 Supabase', detail: 'BRVM daily data<br>BOC, quotes, news' },
      { title: "🔌 Vendor 'brvm'", detail: 'brvm_supabase.py<br>9 data functions' },
      { title: '🤖 TradingAgents 0.2.x', detail: '7 AI agents<br>LangGraph orchestration' },
      { title: '💾 JSON State', detail: 'eval_results/<br>full_states_log' },
      { title: '📄 PDF Bulletin', detail: 'report_generator.py<br>BUY/HOLD/SELL' },
    ],
  },
  results: {
    title: 'Visual Results',
    subtitle:
      'Screenshots from the actual generated bulletin (SNTS.sn — Sonatel, 2026-03-28). No mock data — real BRVM market indicators and agent analysis.',
    items: [
      {
        title: '1. Cover Page — Daily Bulletin Overview',
        meta: ['Component: report_generator.py → _build_cover_page()', 'Date: 2026-03-28', 'Tickers: 1 analyzed · HOLD: 1'],
        image: 'assets/results/01-cover.webp',
        imageAlt: 'BRVM Intelligence cover page with BUY HOLD SELL summary',
        caption:
          '<strong>What you see:</strong> The daily bulletin cover page produced automatically after the 7 AI agents complete their analysis cycle.<br><strong>Why it matters:</strong> Recruiters and investors get an at-a-glance summary — tickers analyzed and BUY / HOLD / SELL counts — without reading the full report.',
        metrics: [{ text: '<strong>Decision:</strong> HOLD' }, { text: '<strong>Market:</strong> BRVM / UEMOA' }],
      },
      {
        title: '2. Market Overview — Real BRVM Indicators',
        meta: ['Source: Supabase boc_market_summary', 'BRVM Composite YTD: 17.48%', 'Market cap: 15.6T XOF'],
        image: 'assets/results/02-market-overview.webp',
        imageAlt: 'BRVM market indicators table from Supabase',
        caption:
          '<strong>What you see:</strong> Live BRVM market indicators pulled from Supabase (composite index, market cap, average PER, listed stocks).<br><strong>Why it matters:</strong> The bulletin contextualizes each stock recommendation against real UEMOA market data — not generic LLM output.',
        metrics: [
          { text: '<strong>PER moyen:</strong> 14.01' },
          { text: '<strong>Listed stocks:</strong> 47' },
          { text: '<strong>Yield:</strong> 6.4%' },
        ],
      },
      {
        title: '3. Technical Analysis + HOLD Decision (Agent 2 + Agent 7)',
        meta: ['Ticker: SNTS.sn (Sonatel)', 'Agents: Market Analyst + Trader', 'Indicators: SMA, MACD, RSI, Bollinger'],
        image: 'assets/results/03-technical-decision.webp',
        imageAlt: 'Technical analysis with HOLD decision box for SNTS.sn',
        caption:
          '<strong>What you see:</strong> Output from the Market Analyst agent (technical indicators) and the Trader agent (final HOLD decision for Sonatel).<br><strong>Why it matters:</strong> Demonstrates end-to-end AI agent collaboration — specialized analysis feeding into a clear, color-coded investment recommendation.',
        metrics: [{ text: '<strong>Decision:</strong> HOLD', class: 'td-hold' }, { text: '<strong>Section:</strong> market_report' }],
      },
      {
        title: '4. Sentiment & News Analysis (Agents 3 & 4)',
        meta: ['Fields: sentiment_report + news_report', 'Language: French', 'Macro UEMOA context included'],
        image: 'assets/results/04-sentiment-news.webp',
        imageAlt: 'Sentiment and news analysis sections in French',
        caption:
          '<strong>What you see:</strong> Reports from the Sentiment and News agents — written in French with UEMOA macro context and company-specific coverage.<br><strong>Why it matters:</strong> Shows that agents go beyond price data to interpret news flow and market mood, a key skill for real-world AI agent design.',
      },
    ],
  },
  useCases: {
    title: 'Application Domains',
    subtitle:
      'BRVM Intelligence is designed for real-world use cases across the UEMOA financial ecosystem — from individual investors to institutional research and emerging FinTech platforms.',
    items: [
      { title: '👤 Retail Investors', text: 'Receive a clear French-language analysis bulletin every evening after market close. Make informed BRVM decisions without being a financial analyst, and discover value opportunities identified by the agents.' },
      { title: '🏦 Broker-Dealers (SGI)', text: 'Scale research capacity without hiring additional analysts. Produce structured research notes for institutional clients and automatically flag unusual market patterns across the watchlist.' },
      { title: '🌍 Ivorian & UEMOA Diaspora', text: 'Invest in the BRVM from abroad with up-to-date analysis. Understand the UEMOA market context — FCFA, daily fixing, sector dynamics — without prior financial expertise.' },
      { title: '🎓 Academic Research', text: "Explore 15+ years of BRVM data (2010–2026) for theses and publications. Backtest investment strategies on one of Africa's most structured regional equity markets." },
      { title: '📱 FinTech & WealthTech Platforms', text: 'Embed automated nightly BRVM analysis into neobanks, robo-advisors, or mobile investment apps. Structured JSON output and PDF bulletins ready for API integration and client-facing dashboards.' },
    ],
  },
  components: {
    title: 'Key Components',
    subtitle: 'Mapping from agent roles to system outputs.',
    rows: [
      { name: 'Fundamentals Analyst', type: 'LLM Agent', role: 'PER, DNPA, BOC data', output: 'fundamentals_report' },
      { name: 'Market Analyst', type: 'LLM Agent', role: 'OHLCV, RSI, MACD', output: 'market_report' },
      { name: 'News Analyst', type: 'LLM Agent', role: 'Macro & company news', output: 'news_report' },
      { name: 'Sentiment Analyst', type: 'LLM Agent', role: 'Market mood signals', output: 'sentiment_report' },
      { name: 'Bull / Bear Researchers', type: 'LLM Agents', role: 'Adversarial debate', output: 'investment_plan' },
      { name: 'Trader + Risk Manager', type: 'LLM Agent', role: 'Final synthesis', output: 'BUY / HOLD / SELL', outputClass: 'td-hold' },
      { name: 'report_generator.py', type: 'Python / ReportLab', role: 'JSON → PDF assembly', output: 'BRVM_Bulletin_*.pdf' },
      { name: 'brvm_supabase.py', type: 'Data vendor', role: 'Supabase → TradingAgents', output: '9 data functions' },
    ],
  },
  stack: {
    title: 'Tech Stack',
    subtitle: 'Technologies and skills demonstrated by this project.',
    pills: ['Python 3.10+', 'TradingAgents 0.2.x', 'LangGraph', 'OpenRouter / gpt-4o-mini', 'Supabase PostgreSQL', 'ReportLab', 'Multi-Agent AI', 'FinTech', 'BRVM / UEMOA', 'pytest', 'Loguru', 'Pandas', 'Astro'],
  },
  footer: {
    lines: [
      '<strong>BRVM Intelligence</strong> — Automated Daily Analysis Bulletin (BAQA)',
      'Portfolio: <a href="https://voksir.github.io/brvm-intelligence-portfolio/">voksir.github.io/brvm-intelligence-portfolio</a>',
      'Source code: <a href="https://github.com/voksir/BRVM-Intelligence" target="_blank" rel="noopener">github.com/voksir/BRVM-Intelligence</a>',
      "Author: Jean Claude GBAH (voksir) — Côte d'Ivoire",
    ],
  },
};

export const agents: AgentsContent = {
  meta: { title: 'AI Agents — BRVM Intelligence' },
  nav: [
    { href: '#about', label: 'About' },
    { href: '#agents', label: 'Agents' },
    { href: '#results', label: 'Results' },
  ],
  hero: {
    title: 'The 7 AI Agents — Full Documentation',
    text: 'Detailed roles, data sources, and outputs for each agent — plus a live CLI walkthrough of the background workflow before the final PDF.',
    ctaCli: 'CLI Background Workflow',
    ctaBack: '← Back to portfolio',
  },
  cli: {
    title: 'Behind the Scenes — CLI Background Workflow',
    text: 'The PDF bulletin is the visible output — but before the final <strong>BUY / HOLD / SELL</strong> decision, the 7 AI agents run a full research cycle in the background. With <code>python run_daily.py --ticker SNTS.sn --date 2026-03-28 --debug</code>, TradingAgents streams every step to the terminal: pipeline initialization, data tool calls, structured agent reasoning, adversarial debate, and finally PDF + JSON generation. Below is that workflow captured live (SNTS.sn — Sonatel, 2026-03-28).',
    steps: [
      {
        step: 'Step 1',
        title: 'Pipeline Initialization & Analysis Launch',
        meta: ['Command: run_daily.py --ticker SNTS.sn --date 2026-03-28', "TradingAgentsGraph initialized with vendor 'brvm'"],
        image: 'assets/results/cli/05-cli-pipeline-start.webp',
        imageAlt: 'run_daily.py CLI logs — BAQA initialization and analysis start',
        caption:
          '<strong>What you see:</strong> BAQA starts, loads the BRVM config, initializes the LangGraph orchestration layer, and enters single-ticker analysis mode for SNTS.sn.<br><strong>Why it matters:</strong> This is the entry point — one CLI command triggers the entire multi-agent pipeline end-to-end.',
      },
      {
        step: 'Step 2',
        title: 'Data Retrieval — <code>get_stock_data</code> Tool Call',
        meta: ['Agent: Market / Technical Analyst', 'Source: daily_quotes via brvm_supabase.py', '22 trading days · FCFA · BRVM/UEMOA'],
        image: 'assets/results/cli/06-cli-tool-stock-data.webp',
        imageAlt: 'get_stock_data tool output — OHLCV CSV for SNTS.sn',
        caption:
          "<strong>What you see:</strong> The Market Analyst agent invokes <code>get_stock_data</code> and receives real OHLCV history — Open, High, Low, Close, Volume in shares and XOF, daily variation %.<br><strong>Why it matters:</strong> Agents don't hallucinate prices — they reason on live Supabase data pulled through the custom 'brvm' vendor.",
      },
      {
        step: 'Step 3',
        title: 'Technical Indicators — <code>get_indicators</code> Tool Call',
        meta: ['Agent: Market / Technical Analyst', 'Indicators: ATR, close prices, volume, variation'],
        image: 'assets/results/cli/07-cli-tool-indicators.webp',
        imageAlt: 'get_indicators tool output — ATR values for SNTS.sn',
        caption:
          '<strong>What you see:</strong> A second tool call returns computed indicators (ATR, close, volume, daily variation) formatted for LLM consumption.<br><strong>Why it matters:</strong> Demonstrates the tool-use pattern — agents call specialized data functions, then interpret the results in natural language.',
      },
      {
        step: 'Step 4',
        title: 'Agent Reasoning — Fundamentals Conclusion',
        meta: ['Agent: Fundamentals Analyst', 'Fields: PER, DNPA, yield, dividend history', 'Output: FINAL TRANSACTION PROPOSAL'],
        image: 'assets/results/cli/08-cli-fundamentals-decision.webp',
        imageAlt: 'Fundamentals agent conclusion with PER DNPA table and BUY proposal',
        caption:
          "<strong>What you see:</strong> The Fundamentals Analyst synthesizes BOC data into a structured conclusion — company profile table (PER 6.87, DNPA 1 655 FCFA, yield 5.83%) and an initial transaction proposal.<br><strong>Why it matters:</strong> Each agent produces auditable, structured reasoning in French — not a black-box score. This feeds into the Bull vs Bear debate before the Trader's final call.",
      },
      {
        step: 'Step 5',
        title: 'Final Decision & PDF Generation',
        meta: ['Agent 7: Trader + Risk Manager', 'Decision: SELL (debug run)', 'Outputs: BRVM_Bulletin_*.pdf + BRVM_*.json'],
        image: 'assets/results/cli/09-cli-final-pdf-generation.webp',
        imageAlt: 'Final SELL decision and PDF JSON generation logs',
        caption:
          '<strong>What you see:</strong> After the full agent cycle (4 analysts → Bull/Bear debate → Trader), the pipeline logs the final decision (<strong>SELL</strong> in this debug run), then <code>report_generator.py</code> assembles the professional PDF bulletin and saves the raw JSON state.<br><strong>Why it matters:</strong> The complete loop — from one CLI command to an actionable recommendation and a client-ready PDF, in under 3 minutes.',
      },
    ],
  },
  details: [
    {
      num: 'Agent 1 — Fundamentals Analyst',
      title: '📊 Financial Health Evaluation',
      role: 'Role: Assess whether a BRVM stock is fundamentally sound for investment',
      intro: 'This agent reads official BOC (Bulletin Officiel de la Cote) data and compares the stock against sector benchmarks.',
      items: ['<strong>PER</strong> (Price Earnings Ratio) — current vs sector average', '<strong>DNPA</strong> — Net Dividend Per Share in FCFA', '<strong>Net yield</strong> and market compartment (Prestige / Principal)', '<strong>Order book</strong> depth and real trading liquidity'],
      source: '<strong>Data source:</strong> Supabase boc_daily, boc_order_book, stocks<br><strong>JSON output:</strong> fundamentals_report<br><strong>PDF section:</strong> Analyse Fondamentale',
    },
    {
      num: 'Agent 2 — Market / Technical Analyst',
      title: '📈 Price & Volume Signal Analysis',
      role: 'Role: Detect trends, momentum, and technical entry/exit signals',
      items: ['Daily OHLCV (Open, High, Low, Close, Volume) history', 'Price trends over 30, 60, and 90 days', 'Technical indicators: MACD, RSI, moving averages (50 SMA, 200 SMA)', 'Bollinger Bands for reversal signals', 'Beta and volatility relative to the BRVM market'],
      source: '<strong>Data source:</strong> daily_quotes via Sikafinance pipeline<br><strong>JSON output:</strong> market_report<br><strong>PDF section:</strong> Analyse Technique & Marche',
    },
    {
      num: 'Agent 3 — News Analyst',
      title: '📰 Macro & Company News Interpretation',
      role: "Role: Connect external events to the stock's investment thesis",
      items: ['Recent market news related to the company', 'UEMOA macro context: market PER, risk premium, liquidity', 'Sector index performance (TEL, FIN, CB, IND, ENE…)', 'Daily palmares: strongest gainers and losers on BRVM'],
      source: '<strong>Data source:</strong> news, boc_market_summary, boc_sector_indices, palmares<br><strong>JSON output:</strong> news_report<br><strong>PDF section:</strong> Analyse des Actualites',
    },
    {
      num: 'Agent 4 — Sentiment Analyst',
      title: '📡 Market Mood & Alert Signals',
      role: 'Role: Gauge investor sentiment and detect unusual market behavior',
      items: ['Sentiment trend from recent news flow', 'Stock performance vs BRVM composite (outperformance / underperformance)', 'Alert signals: volume anomalies, unusual price gaps'],
      source: '<strong>Data source:</strong> news + market comparison data<br><strong>JSON output:</strong> sentiment_report<br><strong>PDF section:</strong> Sentiment de Marche',
    },
    {
      num: 'Agents 5 & 6 — Bull & Bear Researchers',
      title: '⚖️ Adversarial Investment Debate',
      role: 'Role: Force balanced analysis through structured contradiction',
      intro: 'Both researchers receive the 4 analyst reports and must argue their case before the Trader decides.',
      items: ['<strong>Bull Researcher</strong> argues FOR investment: positive indicators, growth potential, undervaluation', '<strong>Bear Researcher</strong> argues AGAINST: identified risks, overvaluation, low BRVM liquidity, unfavorable macro', 'Structured debate reduces single-model confirmation bias'],
      source: "<strong>Input:</strong> 4 analyst reports<br><strong>JSON output:</strong> investment_plan<br><strong>PDF section:</strong> Plan d'Investissement (Debat Bull vs Bear)",
      variant: 'debate',
    },
    {
      num: 'Agent 7 — Trader + Risk Manager',
      title: '🎯 Final Recommendation & Risk Assessment',
      role: 'Role: Synthesize all analysis into an actionable investment decision',
      items: ['<strong>Final decision:</strong> BUY / HOLD / SELL', 'Confidence level of the recommendation', 'Detailed action plan with full justification', 'BRVM-specific risk factors: daily fixing (no intraday trading), liquidity constraints'],
      source: '<strong>Input:</strong> Bull vs Bear debate + all reports<br><strong>JSON output:</strong> final_trade_decision<br><strong>PDF output:</strong> Colored decision box + Decision Finale section',
      variant: 'decision',
    },
  ],
  footer: { back: '← Back to portfolio', source: 'Source code' },
};
