import type { AgentsContent, HomeContent } from './types';

export const home: HomeContent = {
  meta: {
    title: 'BRVM Intelligence | Analyse boursière multi-agents IA',
    description:
      'Analyse boursière quotidienne par agents IA pour la BRVM. Construit avec TradingAgents 0.2.x — 7 agents LLM spécialisés, données Supabase réelles, PDF professionnel.',
  },
  nav: [
    { href: '#about', label: 'À propos' },
    { href: '#agents', label: 'Agents IA' },
    { href: '#pipeline', label: 'Pipeline' },
    { href: '#results', label: 'Résultats' },
    { href: '#use-cases', label: 'Applications' },
    { href: '#stack', label: 'Stack' },
  ],
  hero: {
    badge: "FinTech · Agents IA · TradingAgents 0.2.x · Afrique de l'Ouest",
    title: 'Analyse quotidienne automatisée par agents IA pour la bourse BRVM',
    text: '<strong>BRVM Intelligence (BAQA)</strong> orchestre <strong>7 agents IA spécialisés</strong> construits avec le framework <strong>TradingAgents 0.2.x</strong> (LangGraph) pour analyser chaque soir les actions de la watchlist après le fixing. Données BRVM réelles via Supabase, débat structuré, et bulletin PDF professionnel avec recommandations <strong>BUY / HOLD / SELL</strong> — en français, en FCFA.',
    ctaResults: 'Voir les résultats',
    ctaAgents: 'Explorer les agents IA',
    ctaSource: 'Code source',
  },
  about: {
    title: 'À propos du projet',
    subtitle:
      "La BRVM est la seule bourse régionale partagée par 8 pays d'Afrique de l'Ouest (UEMOA). Ce projet rend l'analyse professionnelle accessible via un pipeline multi-agents automatisé.",
    stats: [
      { num: '7', label: 'Agents IA' },
      { num: '5', label: 'Tickers watchlist' },
      { num: '21', label: 'Tests unitaires' },
      { num: '12/12', label: 'Checklist validée' },
    ],
    cards: [
      {
        icon: '🤖',
        title: 'Agents IA via TradingAgents 0.2.x',
        text: '7 agents LLM configurés et orchestrés avec TradingAgents — fondamentaux, technique, actualités, sentiment, puis débat contradictoire.',
        badge: 'Cœur du projet',
        badgeClass: 'badge-core',
      },
      {
        icon: '📊',
        title: 'Données BRVM réelles',
        text: 'BOC officiel via Supabase : PER, DNPA, capitalisation, indices sectoriels — tout en FCFA, fixing quotidien.',
        badge: 'Implémenté',
        badgeClass: 'badge-done',
      },
      {
        icon: '📄',
        title: 'Bulletin PDF professionnel',
        text: 'Page de garde, indicateurs marché, synthèse des décisions, analyses par ticker, légende BUY/HOLD/SELL en français.',
        badge: 'Implémenté',
        badgeClass: 'badge-done',
      },
      {
        icon: '⚖️',
        title: 'Débat Bull vs Bear',
        text: 'Les chercheurs Haussier et Baissier argumentent à partir des 4 rapports — réduisant les biais avant la recommandation finale.',
        badge: 'Implémenté',
        badgeClass: 'badge-done',
      },
    ],
  },
  agents: {
    title: 'Les 7 agents IA — Cœur du système',
    subtitle:
      'Chaque agent a été conçu, configuré et connecté aux données BRVM réelles via le framework multi-agents <strong>TradingAgents 0.2.x</strong>. Ensemble, ils forment un workflow complet de recherche en investissement.',
    bannerTitle: 'Pourquoi 7 agents sur TradingAgents ?',
    bannerText:
      "TradingAgents fournit la couche d'orchestration LangGraph — j'ai personnalisé les system prompts de chaque agent (français, FCFA, contexte BRVM) et branché un vendor Supabase custom ('brvm'). La spécialisation + le débat produisent des recommandations plus équilibrées et auditables.",
    bannerCta: 'Documentation complète des agents →',
    items: [
      {
        num: 'Agent 1',
        title: 'Analyste Fondamental 📊',
        role: "Évalue la santé financière d'une action BRVM",
        items: ['PER actuel vs PER sectoriel', 'DNPA (Dividende Net Par Action) en FCFA', 'Rendement net et compartiment boursier', "Carnet d'ordres et liquidité réelle"],
        source: '<strong>Source :</strong> BOC officiel BRVM',
      },
      {
        num: 'Agent 2',
        title: 'Analyste Technique 📈',
        role: 'Lit les signaux de prix et de volumes',
        items: ['Historique OHLCV quotidien', 'Tendances 30 / 60 / 90 jours', 'MACD, RSI, moyennes mobiles', 'Beta et volatilité relative'],
        source: '<strong>Source :</strong> Sikafinance via pipeline BRVM',
      },
      {
        num: 'Agent 3',
        title: 'Analyste Actualités 📰',
        role: "Interprète l'impact des événements macro",
        items: ['Actualités boursières liées à la société', 'Contexte macro UEMOA : PER marché, prime de risque', 'Indices sectoriels (TEL, FIN, CB, IND, ENE…)', 'Palmarès du jour : hausses et baisses'],
        source: '<strong>Source :</strong> Supabase news + boc_market_summary',
      },
      {
        num: 'Agent 4',
        title: 'Analyste Sentiment 📡',
        role: "Capture l'humeur du marché autour du titre",
        items: ['Tendance sentiment des actualités', 'Performance relative vs marché', 'Anomalies de volumes, écarts de cours'],
        source: '<strong>Source :</strong> Agrégation news & données marché',
      },
      {
        num: 'Agents 5 & 6',
        title: 'Chercheur Haussier & Baissier ⚖️',
        role: 'Débat contradictoire à partir des 4 rapports',
        items: ['<strong>Haussier :</strong> potentiel de croissance, sous-évaluation', '<strong>Baissier :</strong> risques, surévaluation, liquidité BRVM', 'Débat structuré pour réduire les biais'],
        source: '<strong>Sortie :</strong> champ investment_plan dans le JSON',
        variant: 'debate',
      },
      {
        num: 'Agent 7',
        title: 'Trader + Risk Manager 🎯',
        role: 'Synthétise le débat en recommandation finale',
        items: ['Décision finale : <strong>BUY / HOLD / SELL</strong>', 'Niveau de confiance', "Plan d'action détaillé avec justification", 'Risques spécifiques BRVM (liquidité, fixing quotidien)'],
        source: '<strong>Sortie :</strong> final_trade_decision dans le PDF',
        variant: 'decision',
      },
    ],
  },
  pipeline: {
    title: 'Pipeline de traitement',
    subtitle: 'Flux de données de Supabase au bulletin PDF professionnel.',
    steps: [
      { title: '📥 Supabase', detail: 'Données BRVM<br>BOC, cours, news' },
      { title: "🔌 Vendor 'brvm'", detail: 'brvm_supabase.py<br>9 fonctions' },
      { title: '🤖 TradingAgents 0.2.x', detail: '7 agents IA<br>orchestration LangGraph' },
      { title: '💾 État JSON', detail: 'eval_results/<br>full_states_log' },
      { title: '📄 Bulletin PDF', detail: 'report_generator.py<br>BUY/HOLD/SELL' },
    ],
  },
  results: {
    title: 'Résultats visuels',
    subtitle:
      'Captures du bulletin réel généré (SNTS.sn — Sonatel, 2026-03-28). Données BRVM réelles — pas de mock.',
    items: [
      {
        title: "1. Page de garde — Vue d'ensemble",
        meta: ['Composant : report_generator.py → _build_cover_page()', 'Date : 2026-03-28', '1 ticker analysé · HOLD : 1'],
        image: 'assets/results/01-cover.webp',
        imageAlt: 'Page de garde BRVM Intelligence',
        caption:
          "<strong>Ce que vous voyez :</strong> La page de garde du bulletin quotidien, générée automatiquement après le cycle d'analyse des 7 agents IA.<br><strong>Pourquoi c'est important :</strong> Résumé immédiat — tickers analysés et compteurs BUY / HOLD / SELL — sans lire tout le rapport.",
      },
      {
        title: '2. Indicateurs marché BRVM — Données Supabase',
        meta: ['Source : boc_market_summary', 'BRVM Composite YTD : 17,48 %', 'Capitalisation : 15,6 T XOF'],
        image: 'assets/results/02-market-overview.webp',
        imageAlt: 'Tableau indicateurs marché BRVM',
        caption:
          "<strong>Ce que vous voyez :</strong> Indicateurs marché BRVM en temps réel depuis Supabase (indice composite, capitalisation, PER moyen, titres cotés).<br><strong>Pourquoi c'est important :</strong> Chaque recommandation est contextualisée par des données UEMOA réelles — pas une sortie LLM générique.",
      },
      {
        title: '3. Analyse technique + Décision HOLD (Agents 2 & 7)',
        meta: ['Ticker : SNTS.sn (Sonatel)', 'Indicateurs : SMA, MACD, RSI, Bollinger'],
        image: 'assets/results/03-technical-decision.webp',
        imageAlt: 'Analyse technique SNTS.sn avec décision HOLD',
        caption:
          "<strong>Ce que vous voyez :</strong> Sortie de l'agent Analyste Technique (indicateurs) et de l'agent Trader (décision HOLD pour Sonatel).<br><strong>Pourquoi c'est important :</strong> Collaboration bout-en-bout entre agents IA — analyse spécialisée menant à une recommandation claire et colorée.",
      },
      {
        title: '4. Sentiment & Actualités (Agents 3 & 4)',
        meta: ['Champs : sentiment_report + news_report', 'Langue : Français'],
        image: 'assets/results/04-sentiment-news.webp',
        imageAlt: 'Sections sentiment et actualités',
        caption:
          "<strong>Ce que vous voyez :</strong> Rapports des agents Sentiment et Actualités — en français, avec contexte macro UEMOA et couverture par société.<br><strong>Pourquoi c'est important :</strong> Les agents vont au-delà des prix pour interpréter l'actualité et l'humeur du marché — compétence clé en conception d'agents IA.",
      },
    ],
  },
  useCases: {
    title: "Domaines d'application",
    subtitle:
      "BRVM Intelligence répond à des cas d'usage concrets dans l'écosystème financier UEMOA — des investisseurs particuliers aux SGI, la diaspora et la recherche académique.",
    items: [
      { title: '👤 Investisseurs particuliers', text: "Recevoir chaque soir un bulletin d'analyse clair en français. Prendre des décisions éclairées sur la BRVM sans être analyste financier, et découvrir les opportunités de valeur identifiées par les agents." },
      { title: '🏦 SGI (Intermédiaires boursiers)', text: "Multiplier la capacité d'analyse sans recruter. Produire des notes de recherche pour leurs clients institutionnels et détecter automatiquement les anomalies de marché." },
      { title: '🌍 Diaspora ivoirienne & UEMOA', text: "Investir sur la BRVM depuis l'étranger avec des analyses à jour. Comprendre le marché UEMOA — FCFA, fixing quotidien, dynamiques sectorielles — sans expertise financière préalable." },
      { title: '🎓 Recherche académique', text: "Explorer 15 ans de données BRVM (2010–2026) pour des thèses et publications. Backtester des stratégies d'investissement sur le marché africain." },
      { title: '📱 FinTech & WealthTech', text: "Intégrer une analyse BRVM automatisée dans des néobanques, robo-advisors ou applications mobiles d'investissement. Sortie JSON structurée et bulletins PDF prêts pour l'intégration API et les tableaux de bord clients." },
    ],
  },
  stack: {
    title: 'Stack technique',
    pills: ['Python 3.10+', 'TradingAgents 0.2.x', 'LangGraph', 'OpenRouter / gpt-4o-mini', 'Supabase PostgreSQL', 'ReportLab', 'Multi-Agents IA', 'FinTech', 'BRVM / UEMOA', 'pytest', 'Astro'],
  },
  footer: {
    lines: [
      "<strong>BRVM Intelligence</strong> — Bulletin d'Analyse Quotidien Automatisé (BAQA)",
      'Code source : <a href="https://github.com/voksir/BRVM-Intelligence" target="_blank" rel="noopener">github.com/voksir/BRVM-Intelligence</a>',
      "Auteur : JCG (voksir) — Côte d'Ivoire",
    ],
  },
};

export const agents: AgentsContent = {
  meta: { title: 'Agents IA — BRVM Intelligence' },
  nav: [
    { href: '#agents', label: 'Agents' },
    { href: '#results', label: 'Résultats' },
  ],
  hero: {
    title: 'Les 7 agents IA — Documentation complète',
    text: "Rôles détaillés, sources de données et sorties de chaque agent — plus un parcours CLI en direct du workflow en arrière-plan avant le PDF final.",
    ctaCli: 'Workflow CLI en arrière-plan',
    ctaBack: '← Retour au portfolio',
  },
  cli: {
    title: 'Coulisses — Workflow CLI en arrière-plan',
    text: "Le bulletin PDF est la sortie visible — mais avant la décision finale <strong>BUY / HOLD / SELL</strong>, les 7 agents IA exécutent un cycle complet de recherche en arrière-plan. Avec <code>python run_daily.py --ticker SNTS.sn --date 2026-03-28 --debug</code>, TradingAgents affiche chaque étape dans le terminal : initialisation du pipeline, appels d'outils de données, raisonnement structuré des agents, débat contradictoire, puis génération PDF + JSON. Voici ce workflow capturé en direct (SNTS.sn — Sonatel, 2026-03-28).",
    steps: [
      {
        step: 'Étape 1',
        title: "Initialisation du pipeline & lancement de l'analyse",
        meta: ['Commande : run_daily.py --ticker SNTS.sn --date 2026-03-28', "TradingAgentsGraph initialisé avec le vendor 'brvm'"],
        image: 'assets/results/cli/05-cli-pipeline-start.webp',
        imageAlt: 'Logs CLI run_daily.py — initialisation BAQA',
        caption:
          "<strong>Ce que vous voyez :</strong> BAQA démarre, charge la config BRVM, initialise la couche d'orchestration LangGraph et entre en mode ticker unique pour SNTS.sn.<br><strong>Pourquoi c'est important :</strong> Point d'entrée unique — une commande CLI déclenche l'ensemble du pipeline multi-agents.",
      },
      {
        step: 'Étape 2',
        title: 'Récupération des données — outil <code>get_stock_data</code>',
        meta: ['Agent : Analyste Technique', 'Source : daily_quotes via brvm_supabase.py', '22 séances · FCFA · BRVM/UEMOA'],
        image: 'assets/results/cli/06-cli-tool-stock-data.webp',
        imageAlt: 'Sortie get_stock_data — OHLCV SNTS.sn',
        caption:
          "<strong>Ce que vous voyez :</strong> L'agent Analyste Technique invoque <code>get_stock_data</code> et reçoit l'historique OHLCV réel — cours, volumes en titres et en XOF, variation quotidienne %.<br><strong>Pourquoi c'est important :</strong> Les agents ne hallucinent pas les prix — ils raisonnent sur des données Supabase via le vendor 'brvm'.",
      },
      {
        step: 'Étape 3',
        title: 'Indicateurs techniques — outil <code>get_indicators</code>',
        meta: ['Agent : Analyste Technique', 'Indicateurs : ATR, clôtures, volumes, variations'],
        image: 'assets/results/cli/07-cli-tool-indicators.webp',
        imageAlt: 'Sortie get_indicators — valeurs ATR SNTS.sn',
        caption:
          "<strong>Ce que vous voyez :</strong> Un second appel d'outil retourne les indicateurs calculés (ATR, clôture, volume, variation) formatés pour le LLM.<br><strong>Pourquoi c'est important :</strong> Illustre le pattern tool-use — les agents appellent des fonctions de données spécialisées, puis interprètent les résultats.",
      },
      {
        step: 'Étape 4',
        title: 'Raisonnement agent — Conclusion fondamentale',
        meta: ['Agent : Analyste Fondamental', 'Champs : PER, DNPA, rendement, historique dividende', 'Sortie : FINAL TRANSACTION PROPOSAL'],
        image: 'assets/results/cli/08-cli-fundamentals-decision.webp',
        imageAlt: 'Conclusion fondamentale avec tableau PER DNPA et proposition BUY',
        caption:
          "<strong>Ce que vous voyez :</strong> L'Analyste Fondamental synthétise les données BOC en conclusion structurée — tableau (PER 6,87, DNPA 1 655 FCFA, rendement 5,83 %) et proposition de transaction initiale.<br><strong>Pourquoi c'est important :</strong> Chaque agent produit un raisonnement auditable en français — alimentant le débat Bull vs Bear avant la décision finale du Trader.",
      },
      {
        step: 'Étape 5',
        title: 'Décision finale & génération PDF',
        meta: ['Agent 7 : Trader + Risk Manager', 'Décision : SELL (run debug)', 'Sorties : BRVM_Bulletin_*.pdf + BRVM_*.json'],
        image: 'assets/results/cli/09-cli-final-pdf-generation.webp',
        imageAlt: 'Décision SELL finale et logs génération PDF JSON',
        caption:
          "<strong>Ce que vous voyez :</strong> Après le cycle complet (4 analystes → débat Haussier/Baissier → Trader), le pipeline logue la décision finale (<strong>SELL</strong> dans ce run debug), puis <code>report_generator.py</code> assemble le bulletin PDF et sauvegarde l'état JSON brut.<br><strong>Pourquoi c'est important :</strong> Boucle complète — d'une commande CLI à une recommandation actionnable et un PDF client, en moins de 3 minutes.",
      },
    ],
  },
  details: [
    {
      num: 'Agent 1 — Analyste Fondamental',
      title: '📊 Évaluation de la santé financière',
      role: "Rôle : Évaluer si une action BRVM est fondamentalement saine pour l'investissement",
      items: ['<strong>PER</strong> actuel vs PER sectoriel', '<strong>DNPA</strong> — Dividende Net Par Action en FCFA', '<strong>Rendement net</strong> et compartiment (Prestige / Principal)', "<strong>Carnet d'ordres</strong> et liquidité réelle du titre"],
      source: '<strong>Source :</strong> Supabase boc_daily, boc_order_book<br><strong>Sortie JSON :</strong> fundamentals_report<br><strong>Section PDF :</strong> Analyse Fondamentale',
    },
    {
      num: 'Agent 2 — Analyste Technique',
      title: '📈 Analyse des signaux prix & volumes',
      role: 'Rôle : Détecter tendances, momentum et signaux techniques',
      items: ['Historique OHLCV quotidien', 'Tendances sur 30, 60 et 90 jours', 'MACD, RSI, moyennes mobiles (50 SMA, 200 SMA)', 'Bandes de Bollinger pour signaux de retournement', 'Beta et volatilité relative au marché BRVM'],
      source: '<strong>Source :</strong> daily_quotes via pipeline Sikafinance<br><strong>Sortie JSON :</strong> market_report',
    },
    {
      num: 'Agent 3 — Analyste Actualités',
      title: '📰 Interprétation macro & actualités',
      role: "Rôle : Relier les événements externes à la thèse d'investissement",
      items: ['Actualités boursières liées à la société', 'Contexte macro UEMOA : PER marché, prime de risque', 'Performance des indices sectoriels', 'Palmarès du jour : plus fortes hausses et baisses'],
      source: '<strong>Source :</strong> news, boc_market_summary, palmares<br><strong>Sortie JSON :</strong> news_report',
    },
    {
      num: 'Agent 4 — Analyste Sentiment',
      title: "📡 Humeur du marché & signaux d'alerte",
      role: 'Rôle : Mesurer le sentiment investisseur et détecter les anomalies',
      items: ['Tendance sentiment des actualités récentes', 'Performance relative vs indice BRVM', 'Anomalies de volumes, écarts de cours inhabituels'],
      source: '<strong>Sortie JSON :</strong> sentiment_report',
    },
    {
      num: 'Agents 5 & 6 — Chercheur Haussier & Baissier',
      title: "⚖️ Débat contradictoire d'investissement",
      role: 'Rôle : Forcer une analyse équilibrée par contradiction structurée',
      items: ['<strong>Haussier :</strong> indicateurs positifs, croissance, sous-évaluation', '<strong>Baissier :</strong> risques, surévaluation, faible liquidité BRVM, macro défavorable'],
      source: "<strong>Sortie JSON :</strong> investment_plan<br><strong>Section PDF :</strong> Plan d'Investissement (Debat Bull vs Bear)",
      variant: 'debate',
    },
    {
      num: 'Agent 7 — Trader + Risk Manager',
      title: 'Recommandation finale & gestion du risque',
      role: 'Rôle : Synthétiser toute l\'analyse en décision actionnable',
      items: ['<strong>Décision finale :</strong> BUY / HOLD / SELL', 'Niveau de confiance', "Plan d'action détaillé avec justification", 'Risques BRVM : fixing quotidien, contraintes de liquidité'],
      source: '<strong>Sortie JSON :</strong> final_trade_decision<br><strong>PDF :</strong> Encadré décision coloré + section Décision Finale',
      variant: 'decision',
    },
  ],
  footer: { back: '← Retour au portfolio', source: 'Code source' },
};
