import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'ar' | 'es' | 'fr' | 'hi' | 'de' | 'pt' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Set document direction for RTL languages
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translation dictionary
const translations = {
  en: {
    // Header
    'search.placeholder': 'Search markets, bots...',
    'market.status': 'Markets Open',
    'user.name': 'John Doe',
    
    // Sidebar
    'app.name': 'CryptoBot Pro',
    'dashboard': 'Dashboard',
    'overview': 'Overview',
    'performance.summary': 'Performance Summary',
    'market.overview': 'Market Overview',
    
    'bots': 'Bots',
    'create.new.bot': 'Create New Bot',
    'my.bots': 'My Bots',
    'bot.performance': 'Bot Performance',
    'strategy.templates': 'Strategy Templates',
    
    'trading': 'Trading',
    'manual.trading': 'Manual Trading',
    'signal.trading': 'Signal Trading',
    'paper.trading': 'Paper Trading',
    
    'markets': 'Markets',
    'live.charts': 'Live Charts',
    'market.scanner': 'Market Scanner',
    'watchlist': 'Watchlist',
    'price.alerts': 'Price Alerts',
    
    'exchanges.api': 'Exchanges & API',
    'connect.exchange': 'Connect Exchange',
    'api.management': 'API Management',
    'sync.balances': 'Sync Balances',
    
    'alerts': 'Alerts',
    'create.alert': 'Create Alert',
    'notification.settings': 'Notification Settings',
    'alert.logs': 'Alert Logs',
    
    'strategy.builder': 'Strategy Builder',
    'build.strategy': 'Build Strategy',
    'saved.strategies': 'Saved Strategies',
    'backtesting': 'Backtesting',
    'marketplace': 'Marketplace',
    
    'security.settings': 'Security & Settings',
    'profile.settings': 'Profile Settings',
    'two.factor.auth': 'Two-Factor Auth',
    'theme.settings': 'Theme Settings',
    'session.logs': 'Session Logs',
    
    'help': 'Help',
    'documentation': 'Documentation',
    'contact.support': 'Contact Support',
    'bug.reports': 'Bug Reports',
    'community': 'Community',
    
    // Page content
    'welcome.back': 'Welcome back! Here\'s an overview of your crypto trading activity.',
    'total.pnl': 'Total P&L',
    'total.roi': 'Total ROI',
    'win.rate': 'Win Rate',
    'total.trades': 'Total Trades',
    'create.bot': 'Create Bot',
    'bot.name': 'Bot Name',
    'trading.pair': 'Trading Pair',
    'strategy.type': 'Strategy Type',
    'investment.amount': 'Investment Amount',
    'select.trading.pair': 'Select trading pair',
    'select.strategy': 'Select strategy',
    'enter.amount.usdt': 'Enter amount in USDT',
    'enter.bot.name': 'Enter bot name',
    
    // Languages
    'language': 'Language',
    'english': 'English',
    'arabic': 'العربية',
    'spanish': 'Español',
    'french': 'Français',
    'hindi': 'हिंदी',
    'german': 'Deutsch',
    'portuguese': 'Português',
    'chinese': '中文',

    // Market Overview
    'real.time.market.data': 'Real-time market data and trends',
    'top.cryptocurrencies': 'Top Cryptocurrencies',
    'volume': 'Vol',
    
    // Bots
    'manage.monitor.bots': 'Manage and monitor your trading bots',
    'profit': 'Profit',
    'roi': 'ROI',
    'trades': 'Trades',
    'created': 'Created',
    'active': 'Active',
    'paused': 'Paused',
    'start': 'Start',
    'pause': 'Pause',
    'error': 'Error',
    'total.bots': 'Total Bots',
    
    // Bot Templates
    'preconfigured.bot.strategies': 'Pre-configured bot strategies ready to deploy',
    'use.template': 'Use Template',
    
    // Manual Trading
    'execute.trades.manually': 'Execute trades manually with real-time market data',
    'trading.chart': 'Trading Chart',
    'tradingview.chart.placeholder': 'TradingView Chart Placeholder',
    'place.order': 'Place Order',
    'buy': 'Buy',
    'sell': 'Sell',
    'order.type': 'Order Type',
    'select.order.type': 'Select order type',
    'market': 'Market',
    'limit': 'Limit',
    'stop': 'Stop',
    'price': 'Price',
    'amount': 'Amount',
    'order.book': 'Order Book',
    
    // Paper Trading
    'practice.trading.strategies': 'Practice trading strategies with virtual money',
    'virtual.balance': 'Virtual Balance',
    'paper.pnl': 'Paper P&L',
    'paper.trades': 'Paper Trades',
    'paper.trading.history': 'Paper Trading History',
    'closed': 'Closed',
    'open': 'Open',
    'start.new.paper.trading': 'Start New Paper Trading Session',
    'reset.virtual.balance': 'Reset Virtual Balance & Start Fresh',
    
    // Live Charts
    'realtime.trading.charts': 'Real-time trading charts with technical indicators',
    'advanced.tradingview.chart': 'Advanced TradingView Chart Integration',
    
    // Bot Performance
    'detailed.performance.metrics': 'Detailed performance metrics for all your trading bots',
  },
  ar: {
    // Header
    'search.placeholder': 'البحث في الأسواق والروبوتات...',
    'market.status': 'الأسواق مفتوحة',
    'user.name': 'جون دو',
    
    // Sidebar
    'app.name': 'كريبتو بوت برو',
    'dashboard': 'لوحة التحكم',
    'overview': 'نظرة عامة',
    'performance.summary': 'ملخص الأداء',
    'market.overview': 'نظرة عامة على السوق',
    
    'bots': 'الروبوتات',
    'create.new.bot': 'إنشاء روبوت جديد',
    'my.bots': 'روبوتاتي',
    'bot.performance': 'أداء الروبوت',
    'strategy.templates': 'قوالب الاستراتيجية',
    
    'trading': 'التداول',
    'manual.trading': 'التداول اليدوي',
    'signal.trading': 'تداول الإشارات',
    'paper.trading': 'التداول الورقي',
    
    'markets': 'الأسواق',
    'live.charts': 'الرسوم البيانية المباشرة',
    'market.scanner': 'ماسح السوق',
    'watchlist': 'قائمة المراقبة',
    'price.alerts': 'تنبيهات الأسعار',
    
    'exchanges.api': 'المنصات والواجهة البرمجية',
    'connect.exchange': 'ربط المنصة',
    'api.management': 'إدارة الواجهة البرمجية',
    'sync.balances': 'مزامنة الأرصدة',
    
    'alerts': 'التنبيهات',
    'create.alert': 'إنشاء تنبيه',
    'notification.settings': 'إعدادات الإشعارات',
    'alert.logs': 'سجلات التنبيهات',
    
    'strategy.builder': 'منشئ الاستراتيجية',
    'build.strategy': 'بناء استراتيجية',
    'saved.strategies': 'الاستراتيجيات المحفوظة',
    'backtesting': 'اختبار خلفي',
    'marketplace': 'السوق',
    
    'security.settings': 'الأمان والإعدادات',
    'profile.settings': 'إعدادات الملف الشخصي',
    'two.factor.auth': 'المصادقة الثنائية',
    'theme.settings': 'إعدادات السمة',
    'session.logs': 'سجلات الجلسة',
    
    'help': 'المساعدة',
    'documentation': 'التوثيق',
    'contact.support': 'اتصل بالدعم',
    'bug.reports': 'تقارير الأخطاء',
    'community': 'المجتمع',
    
    // Page content
    'welcome.back': 'مرحباً بعودتك! إليك نظرة عامة على نشاط تداول العملات المشفرة الخاص بك.',
    'total.pnl': 'إجمالي الربح والخسارة',
    'total.roi': 'إجمالي العائد على الاستثمار',
    'win.rate': 'معدل الفوز',
    'total.trades': 'إجمالي الصفقات',
    'create.bot': 'إنشاء روبوت',
    'bot.name': 'اسم الروبوت',
    'trading.pair': 'زوج التداول',
    'strategy.type': 'نوع الاستراتيجية',
    'investment.amount': 'مبلغ الاستثمار',
    'select.trading.pair': 'اختر زوج التداول',
    'select.strategy': 'اختر الاستراتيجية',
    'enter.amount.usdt': 'أدخل المبلغ بـ USDT',
    'enter.bot.name': 'أدخل اسم الروبوت',
    
    // Languages
    'language': 'اللغة',
    'english': 'English',
    'arabic': 'العربية',
    'spanish': 'Español',
    'french': 'Français',
    'hindi': 'हिंदी',
    'german': 'Deutsch',
    'portuguese': 'Português',
    'chinese': '中文',

    // Market Overview
    'real.time.market.data': 'بيانات السوق المباشرة والاتجاهات',
    'top.cryptocurrencies': 'أفضل العملات المشفرة',
    'volume': 'الحجم',
    
    // Bots
    'manage.monitor.bots': 'إدارة ومراقبة روبوتات التداول الخاصة بك',
    'profit': 'الربح',
    'roi': 'العائد على الاستثمار',
    'trades': 'الصفقات',
    'created': 'تم الإنشاء',
    'active': 'نشط',
    'paused': 'متوقف',
    'start': 'بدء',
    'pause': 'إيقاف',
    'error': 'خطأ',
    'total.bots': 'إجمالي الروبوتات',
    
    // Bot Templates
    'preconfigured.bot.strategies': 'استراتيجيات الروبوت المعدة مسبقاً جاهزة للنشر',
    'use.template': 'استخدام القالب',
    
    // Manual Trading
    'execute.trades.manually': 'تنفيذ الصفقات يدوياً مع بيانات السوق المباشرة',
    'trading.chart': 'مخطط التداول',
    'tradingview.chart.placeholder': 'عنصر نائب لمخطط TradingView',
    'place.order': 'وضع طلب',
    'buy': 'شراء',
    'sell': 'بيع',
    'order.type': 'نوع الطلب',
    'select.order.type': 'اختر نوع الطلب',
    'market': 'السوق',
    'limit': 'حد',
    'stop': 'توقف',
    'price': 'السعر',
    'amount': 'الكمية',
    'order.book': 'دفتر الطلبات',
    
    // Paper Trading
    'practice.trading.strategies': 'ممارسة استراتيجيات التداول بأموال افتراضية',
    'virtual.balance': 'الرصيد الافتراضي',
    'paper.pnl': 'ربح وخسارة ورقية',
    'paper.trades': 'صفقات ورقية',
    'paper.trading.history': 'تاريخ التداول الورقي',
    'closed': 'مغلق',
    'open': 'مفتوح',
    'start.new.paper.trading': 'بدء جلسة تداول ورقية جديدة',
    'reset.virtual.balance': 'إعادة تعيين الرصيد الافتراضي وبدء جديد',
    
    // Live Charts
    'realtime.trading.charts': 'مخططات التداول المباشرة مع المؤشرات الفنية',
    'advanced.tradingview.chart': 'تكامل مخطط TradingView المتقدم',
    
    // Bot Performance
    'detailed.performance.metrics': 'مقاييس الأداء التفصيلية لجميع روبوتات التداول الخاصة بك',
  },
  es: {
    // Header
    'search.placeholder': 'Buscar mercados, bots...',
    'market.status': 'Mercados Abiertos',
    'user.name': 'Juan Pérez',
    
    // Sidebar
    'app.name': 'CryptoBot Pro',
    'dashboard': 'Panel de Control',
    'overview': 'Resumen',
    'performance.summary': 'Resumen de Rendimiento',
    'market.overview': 'Resumen del Mercado',
    
    'bots': 'Bots',
    'create.new.bot': 'Crear Nuevo Bot',
    'my.bots': 'Mis Bots',
    'bot.performance': 'Rendimiento del Bot',
    'strategy.templates': 'Plantillas de Estrategia',
    
    'trading': 'Trading',
    'manual.trading': 'Trading Manual',
    'signal.trading': 'Trading de Señales',
    'paper.trading': 'Trading en Papel',
    
    'markets': 'Mercados',
    'live.charts': 'Gráficos en Vivo',
    'market.scanner': 'Escáner de Mercado',
    'watchlist': 'Lista de Seguimiento',
    'price.alerts': 'Alertas de Precio',
    
    'exchanges.api': 'Exchanges y API',
    'connect.exchange': 'Conectar Exchange',
    'api.management': 'Gestión de API',
    'sync.balances': 'Sincronizar Saldos',
    
    'alerts': 'Alertas',
    'create.alert': 'Crear Alerta',
    'notification.settings': 'Configuración de Notificaciones',
    'alert.logs': 'Registros de Alertas',
    
    'strategy.builder': 'Constructor de Estrategias',
    'build.strategy': 'Construir Estrategia',
    'saved.strategies': 'Estrategias Guardadas',
    'backtesting': 'Backtesting',
    'marketplace': 'Mercado',
    
    'security.settings': 'Seguridad y Configuración',
    'profile.settings': 'Configuración del Perfil',
    'two.factor.auth': 'Autenticación de Dos Factores',
    'theme.settings': 'Configuración de Tema',
    'session.logs': 'Registros de Sesión',
    
    'help': 'Ayuda',
    'documentation': 'Documentación',
    'contact.support': 'Contactar Soporte',
    'bug.reports': 'Reportes de Errores',
    'community': 'Comunidad',
    
    // Page content
    'welcome.back': '¡Bienvenido de vuelta! Aquí tienes un resumen de tu actividad de trading de criptomonedas.',
    'total.pnl': 'P&L Total',
    'total.roi': 'ROI Total',
    'win.rate': 'Tasa de Ganancia',
    'total.trades': 'Operaciones Totales',
    'create.bot': 'Crear Bot',
    'bot.name': 'Nombre del Bot',
    'trading.pair': 'Par de Trading',
    'strategy.type': 'Tipo de Estrategia',
    'investment.amount': 'Cantidad de Inversión',
    'select.trading.pair': 'Seleccionar par de trading',
    'select.strategy': 'Seleccionar estrategia',
    'enter.amount.usdt': 'Ingresar cantidad en USDT',
    'enter.bot.name': 'Ingresar nombre del bot',
    
    // Languages
    'language': 'Idioma',
    'english': 'English',
    'arabic': 'العربية',
    'spanish': 'Español',
    'french': 'Français',
    'hindi': 'हिंदी',
    'german': 'Deutsch',
    'portuguese': 'Português',
    'chinese': '中文',

    // Market Overview
    'real.time.market.data': 'Datos de mercado y tendencias en tiempo real',
    'top.cryptocurrencies': 'Principales Criptomonedas',
    'volume': 'Vol',
    
    // Bots
    'manage.monitor.bots': 'Gestiona y monitorea tus bots de trading',
    'profit': 'Ganancia',
    'roi': 'ROI',
    'trades': 'Operaciones',
    'created': 'Creado',
    'active': 'Activo',
    'paused': 'Pausado',
    'start': 'Iniciar',
    'pause': 'Pausar',
    'error': 'Error',
    'total.bots': 'Total de Bots',
    
    // Bot Templates
    'preconfigured.bot.strategies': 'Estrategias de bot preconfiguradas listas para implementar',
    'use.template': 'Usar Plantilla',
    
    // Manual Trading
    'execute.trades.manually': 'Ejecuta operaciones manualmente con datos de mercado en tiempo real',
    'trading.chart': 'Gráfico de Trading',
    'tradingview.chart.placeholder': 'Marcador de Posición del Gráfico TradingView',
    'place.order': 'Colocar Orden',
    'buy': 'Comprar',
    'sell': 'Vender',
    'order.type': 'Tipo de Orden',
    'select.order.type': 'Seleccionar tipo de orden',
    'market': 'Mercado',
    'limit': 'Límite',
    'stop': 'Stop',
    'price': 'Precio',
    'amount': 'Cantidad',
    'order.book': 'Libro de Órdenes',
    
    // Paper Trading
    'practice.trading.strategies': 'Practica estrategias de trading con dinero virtual',
    'virtual.balance': 'Balance Virtual',
    'paper.pnl': 'P&L en Papel',
    'paper.trades': 'Operaciones en Papel',
    'paper.trading.history': 'Historial de Trading en Papel',
    'closed': 'Cerrado',
    'open': 'Abierto',
    'start.new.paper.trading': 'Iniciar Nueva Sesión de Trading en Papel',
    'reset.virtual.balance': 'Resetear Balance Virtual y Empezar de Nuevo',
    
    // Live Charts
    'realtime.trading.charts': 'Gráficos de trading en tiempo real con indicadores técnicos',
    'advanced.tradingview.chart': 'Integración Avanzada del Gráfico TradingView',
    
    // Bot Performance
    'detailed.performance.metrics': 'Métricas detalladas de rendimiento para todos tus bots de trading',
  },
  fr: {
    // Header
    'search.placeholder': 'Rechercher marchés, bots...',
    'market.status': 'Marchés Ouverts',
    'user.name': 'Jean Dupont',
    
    // Sidebar
    'app.name': 'CryptoBot Pro',
    'dashboard': 'Tableau de Bord',
    'overview': 'Aperçu',
    'performance.summary': 'Résumé des Performances',
    'market.overview': 'Aperçu du Marché',
    
    'bots': 'Bots',
    'create.new.bot': 'Créer Nouveau Bot',
    'my.bots': 'Mes Bots',
    'bot.performance': 'Performance du Bot',
    'strategy.templates': 'Modèles de Stratégie',
    
    'trading': 'Trading',
    'manual.trading': 'Trading Manuel',
    'signal.trading': 'Trading de Signaux',
    'paper.trading': 'Trading Papier',
    
    'markets': 'Marchés',
    'live.charts': 'Graphiques en Direct',
    'market.scanner': 'Scanner de Marché',
    'watchlist': 'Liste de Surveillance',
    'price.alerts': 'Alertes de Prix',
    
    'exchanges.api': 'Exchanges et API',
    'connect.exchange': 'Connecter Exchange',
    'api.management': 'Gestion API',
    'sync.balances': 'Synchroniser Soldes',
    
    'alerts': 'Alertes',
    'create.alert': 'Créer Alerte',
    'notification.settings': 'Paramètres de Notification',
    'alert.logs': 'Journaux d\'Alertes',
    
    'strategy.builder': 'Constructeur de Stratégie',
    'build.strategy': 'Construire Stratégie',
    'saved.strategies': 'Stratégies Sauvegardées',
    'backtesting': 'Backtesting',
    'marketplace': 'Marché',
    
    'security.settings': 'Sécurité et Paramètres',
    'profile.settings': 'Paramètres du Profil',
    'two.factor.auth': 'Authentification à Deux Facteurs',
    'theme.settings': 'Paramètres de Thème',
    'session.logs': 'Journaux de Session',
    
    'help': 'Aide',
    'documentation': 'Documentation',
    'contact.support': 'Contacter le Support',
    'bug.reports': 'Rapports de Bugs',
    'community': 'Communauté',
    
    // Page content
    'welcome.back': 'Bon retour ! Voici un aperçu de votre activité de trading crypto.',
    'total.pnl': 'P&L Total',
    'total.roi': 'ROI Total',
    'win.rate': 'Taux de Gain',
    'total.trades': 'Trades Totaux',
    'create.bot': 'Créer Bot',
    'bot.name': 'Nom du Bot',
    'trading.pair': 'Paire de Trading',
    'strategy.type': 'Type d\'Ordre',
    'investment.amount': 'Montant d\'Investissement',
    'select.trading.pair': 'Sélectionner paire de trading',
    'select.strategy': 'Sélectionner stratégie',
    'enter.amount.usdt': 'Entrer montant en USDT',
    'enter.bot.name': 'Entrer nom du bot',
    
    // Languages
    'language': 'Langue',
    'english': 'English',
    'arabic': 'العربية',
    'spanish': 'Español',
    'french': 'Français',
    'hindi': 'हिंदी',
    'german': 'Deutsch',
    'portuguese': 'Português',
    'chinese': '中文',

    // Market Overview
    'real.time.market.data': 'Données de marché et tendances en temps réel',
    'top.cryptocurrencies': 'Principales Cryptomonnaies',
    'volume': 'Vol',
    
    // Bots
    'manage.monitor.bots': 'Gérez et surveillez vos bots de trading',
    'profit': 'Profit',
    'roi': 'ROI',
    'trades': 'Trades',
    'created': 'Créé',
    'active': 'Actif',
    'paused': 'En Pause',
    'start': 'Démarrer',
    'pause': 'Pause',
    'error': 'Erreur',
    'total.bots': 'Total des Bots',
    
    // Bot Templates
    'preconfigured.bot.strategies': 'Stratégies de bot préconfigurées prêtes à déployer',
    'use.template': 'Utiliser le Modèle',
    
    // Manual Trading
    'execute.trades.manually': 'Exécutez des trades manuellement avec des données de marché en temps réel',
    'trading.chart': 'Graphique de Trading',
    'tradingview.chart.placeholder': 'Placeholder du Graphique TradingView',
    'place.order': 'Placer un Ordre',
    'buy': 'Acheter',
    'sell': 'Vendre',
    'order.type': 'Type d\'Ordre',
    'select.order.type': 'Sélectionner le type d\'ordre',
    'market': 'Marché',
    'limit': 'Limite',
    'stop': 'Stop',
    'price': 'Prix',
    'amount': 'Montant',
    'order.book': 'Carnet d\'Ordres',
    
    // Paper Trading
    'practice.trading.strategies': 'Pratiquez les stratégies de trading avec de l\'argent virtuel',
    'virtual.balance': 'Solde Virtuel',
    'paper.pnl': 'P&L Papier',
    'paper.trades': 'Trades Papier',
    'paper.trading.history': 'Historique du Trading Papier',
    'closed': 'Fermé',
    'open': 'Ouvert',
    'start.new.paper.trading': 'Démarrer une Nouvelle Session de Trading Papier',
    'reset.virtual.balance': 'Réinitialiser le Solde Virtuel et Recommencer',
    
    // Live Charts
    'realtime.trading.charts': 'Graphiques de trading en temps réel avec indicateurs techniques',
    'advanced.tradingview.chart': 'Intégration Avancée du Graphique TradingView',
    
    // Bot Performance
    'detailed.performance.metrics': 'Métriques de performance détaillées pour tous vos bots de trading',
  },
  hi: {
    // Header
    'search.placeholder': 'मार्केट, बॉट्स खोजें...',
    'market.status': 'मार्केट खुला है',
    'user.name': 'जॉन डो',
    
    // Sidebar
    'app.name': 'क्रिप्टोबॉट प्रो',
    'dashboard': 'डैशबोर्ड',
    'overview': 'अवलोकन',
    'performance.summary': 'प्रदर्शन सारांश',
    'market.overview': 'मार्केट अवलोकन',
    
    'bots': 'बॉट्स',
    'create.new.bot': 'नया बॉट बनाएं',
    'my.bots': 'मेरे बॉट्स',
    'bot.performance': 'बॉट प्रदर्शन',
    'strategy.templates': 'रणनीति टेम्प्लेट',
    
    'trading': 'ट्रेडिंग',
    'manual.trading': 'मैन्युअल ट्रेडिंग',
    'signal.trading': 'सिग्नल ट्रेडिंग',
    'paper.trading': 'पेपर ट्रेडिंग',
    
    'markets': 'मार्केट्स',
    'live.charts': 'लाइव चार्ट्स',
    'market.scanner': 'मार्केट स्कैनर',
    'watchlist': 'वॉचलिस्ट',
    'price.alerts': 'प्राइस अलर्ट',
    
    'exchanges.api': 'एक्सचेंज और API',
    'connect.exchange': 'एक्सचेंज कनेक्ट करें',
    'api.management': 'API प्रबंधन',
    'sync.balances': 'बैलेंस सिंक करें',
    
    'alerts': 'अलर्ट्स',
    'create.alert': 'अलर्ट बनाएं',
    'notification.settings': 'नोटिफिकेशन सेटिंग्स',
    'alert.logs': 'अलर्ट लॉग्स',
    
    'strategy.builder': 'रणनीति निर्माता',
    'build.strategy': 'रणनीति बनाएं',
    'saved.strategies': 'सेव की गई रणनीतियां',
    'backtesting': 'बैकटेस्टिंग',
    'marketplace': 'मार्केटप्लेस',
    
    'security.settings': 'सुरक्षा और सेटिंग्स',
    'profile.settings': 'प्रोफाइल सेटिंग्स',
    'two.factor.auth': 'दो-कारक प्रमाणीकरण',
    'theme.settings': 'थीम सेटिंग्स',
    'session.logs': 'सेशन लॉग्स',
    
    'help': 'मदद',
    'documentation': 'दस्तावेज़ीकरण',
    'contact.support': 'सपोर्ट से संपर्क करें',
    'bug.reports': 'बग रिपोर्ट्स',
    'community': 'समुदाय',
    
    // Page content
    'welcome.back': 'वापसी पर स्वागत है! यहाँ आपकी क्रिप्टो ट्रेडिंग गतिविधि का अवलोकन है।',
    'total.pnl': 'कुल P&L',
    'total.roi': 'कुल ROI',
    'win.rate': 'जीत दर',
    'total.trades': 'कुल ट्रेड्स',
    'create.bot': 'बॉट बनाएं',
    'bot.name': 'बॉट का नाम',
    'trading.pair': 'ट्रेडिंग पेयर',
    'strategy.type': 'रणनीति का प्रकार',
    'investment.amount': 'निवेश राशि',
    'select.trading.pair': 'ट्रेडिंग पेयर चुनें',
    'select.strategy': 'रणनीति चुनें',
    'enter.amount.usdt': 'USDT में राशि दर्ज करें',
    'enter.bot.name': 'बॉट का नाम दर्ज करें',
    
    // Languages
    'language': 'भाषा',
    'english': 'English',
    'arabic': 'العربية',
    'spanish': 'Español',
    'french': 'Français',
    'hindi': 'हिंदी',
    'german': 'Deutsch',
    'portuguese': 'Português',
    'chinese': '中文',

    // Market Overview
    'real.time.market.data': 'वास्तविक समय बाजार डेटा और रुझान',
    'top.cryptocurrencies': 'शीर्ष क्रिप्टोकरेंसी',
    'volume': 'वॉल्यूम',
    
    // Bots
    'manage.monitor.bots': 'अपने ट्रेडिंग बॉट्स का प्रबंधन और निगरानी करें',
    'profit': 'लाभ',
    'roi': 'ROI',
    'trades': 'ट्रेड्स',
    'created': 'बनाया गया',
    'active': 'सक्रिय',
    'paused': 'रोका गया',
    'start': 'शुरू',
    'pause': 'रोकें',
    'error': 'त्रुटि',
    'total.bots': 'कुल बॉट्स',
    
    // Bot Templates
    'preconfigured.bot.strategies': 'पूर्व-कॉन्फ़िगर किए गए बॉट रणनीतियां तैनाती के लिए तैयार',
    'use.template': 'टेम्प्लेट का उपयोग करें',
    
    // Manual Trading
    'execute.trades.manually': 'वास्तविक समय बाजार डेटा के साथ मैन्युअल रूप से ट्रेड्स निष्पादित करें',
    'trading.chart': 'ट्रेडिंग चार्ट',
    'tradingview.chart.placeholder': 'TradingView चार्ट प्लेसहोल्डर',
    'place.order': 'ऑर्डर दें',
    'buy': 'खरीदें',
    'sell': 'बेचें',
    'order.type': 'ऑर्डर प्रकार',
    'select.order.type': 'ऑर्डर प्रकार चुनें',
    'market': 'मार्केट',
    'limit': 'लिमिट',
    'stop': 'स्टॉप',
    'price': 'कीमत',
    'amount': 'राशि',
    'order.book': 'ऑर्डर बुक',
    
    // Paper Trading
    'practice.trading.strategies': 'वर्चुअल पैसे से ट्रेडिंग रणनीतियों का अभ्यास करें',
    'virtual.balance': 'वर्चुअल बैलेंस',
    'paper.pnl': 'पेपर P&L',
    'paper.trades': 'पेपर ट्रेड्स',
    'paper.trading.history': 'पेपर ट्रेडिंग इतिहास',
    'closed': 'बंद',
    'open': 'खुला',
    'start.new.paper.trading': 'नया पेपर ट्रेडिंग सेशन शुरू करें',
    'reset.virtual.balance': 'वर्चुअल बैलेंस रीसेट करें और नया शुरू करें',
    
    // Live Charts
    'realtime.trading.charts': 'तकनीकी संकेतकों के साथ वास्तविक समय ट्रेडिंग चार्ट',
    'advanced.tradingview.chart': 'उन्नत TradingView चार्ट एकीकरण',
    
    // Bot Performance
    'detailed.performance.metrics': 'आपके सभी ट्रेडिंग बॉट्स के लिए विस्तृत प्रदर्शन मेट्रिक्स',
  },
  de: {
    // Header
    'search.placeholder': 'Märkte, Bots suchen...',
    'market.status': 'Märkte Geöffnet',
    'user.name': 'Hans Mueller',
    
    // Sidebar
    'app.name': 'CryptoBot Pro',
    'dashboard': 'Dashboard',
    'overview': 'Übersicht',
    'performance.summary': 'Leistungsübersicht',
    'market.overview': 'Marktübersicht',
    
    'bots': 'Bots',
    'create.new.bot': 'Neuen Bot Erstellen',
    'my.bots': 'Meine Bots',
    'bot.performance': 'Bot-Leistung',
    'strategy.templates': 'Strategie-Vorlagen',
    
    'trading': 'Trading',
    'manual.trading': 'Manuelles Trading',
    'signal.trading': 'Signal Trading',
    'paper.trading': 'Paper Trading',
    
    'markets': 'Märkte',
    'live.charts': 'Live-Charts',
    'market.scanner': 'Markt-Scanner',
    'watchlist': 'Watchlist',
    'price.alerts': 'Preisalarme',
    
    'exchanges.api': 'Börsen & API',
    'connect.exchange': 'Börse Verbinden',
    'api.management': 'API-Verwaltung',
    'sync.balances': 'Salden Synchronisieren',
    
    'alerts': 'Alarme',
    'create.alert': 'Alarm Erstellen',
    'notification.settings': 'Benachrichtigungseinstellungen',
    'alert.logs': 'Alarm-Protokolle',
    
    'strategy.builder': 'Strategie-Builder',
    'build.strategy': 'Strategie Erstellen',
    'saved.strategies': 'Gespeicherte Strategien',
    'backtesting': 'Backtesting',
    'marketplace': 'Marktplatz',
    
    'security.settings': 'Sicherheit & Einstellungen',
    'profile.settings': 'Profil-Einstellungen',
    'two.factor.auth': 'Zwei-Faktor-Authentifizierung',
    'theme.settings': 'Theme-Einstellungen',
    'session.logs': 'Sitzungsprotokolle',
    
    'help': 'Hilfe',
    'documentation': 'Dokumentation',
    'contact.support': 'Support Kontaktieren',
    'bug.reports': 'Fehlerberichte',
    'community': 'Community',
    
    // Page content
    'welcome.back': 'Willkommen zurück! Hier ist eine Übersicht Ihrer Krypto-Trading-Aktivitäten.',
    'total.pnl': 'Gesamt P&L',
    'total.roi': 'Gesamt ROI',
    'win.rate': 'Gewinnrate',
    'total.trades': 'Gesamt Trades',
    'create.bot': 'Bot Erstellen',
    'bot.name': 'Bot-Name',
    'trading.pair': 'Trading-Paar',
    'strategy.type': 'Strategie-Typ',
    'investment.amount': 'Investitionsbetrag',
    'select.trading.pair': 'Trading-Paar auswählen',
    'select.strategy': 'Strategie auswählen',
    'enter.amount.usdt': 'Betrag in USDT eingeben',
    'enter.bot.name': 'Bot-Namen eingeben',
    
    // Languages
    'language': 'Sprache',
    'english': 'English',
    'arabic': 'العربية',
    'spanish': 'Español',
    'french': 'Français',
    'hindi': 'हिंदी',
    'german': 'Deutsch',
    'portuguese': 'Português',
    'chinese': '中文',

    // Market Overview
    'real.time.market.data': 'Echtzeit-Marktdaten und Trends',
    'top.cryptocurrencies': 'Top Kryptowährungen',
    'volume': 'Vol',
    
    // Bots
    'manage.monitor.bots': 'Verwalten und überwachen Sie Ihre Trading-Bots',
    'profit': 'Gewinn',
    'roi': 'ROI',
    'trades': 'Trades',
    'created': 'Erstellt',
    'active': 'Aktiv',
    'paused': 'Pausiert',
    'start': 'Starten',
    'pause': 'Pausieren',
    'error': 'Fehler',
    'total.bots': 'Gesamt Bots',
    
    // Bot Templates
    'preconfigured.bot.strategies': 'Vorkonfigurierte Bot-Strategien bereit zum Einsatz',
    'use.template': 'Vorlage Verwenden',
    
    // Manual Trading
    'execute.trades.manually': 'Führen Sie Trades manuell mit Echtzeit-Marktdaten aus',
    'trading.chart': 'Trading-Chart',
    'tradingview.chart.placeholder': 'TradingView Chart Platzhalter',
    'place.order': 'Order Platzieren',
    'buy': 'Kaufen',
    'sell': 'Verkaufen',
    'order.type': 'Order-Typ',
    'select.order.type': 'Order-Typ auswählen',
    'market': 'Markt',
    'limit': 'Limit',
    'stop': 'Stop',
    'price': 'Preis',
    'amount': 'Betrag',
    'order.book': 'Orderbuch',
    
    // Paper Trading
    'practice.trading.strategies': 'Üben Sie Trading-Strategien mit virtuellem Geld',
    'virtual.balance': 'Virtuelles Guthaben',
    'paper.pnl': 'Paper P&L',
    'paper.trades': 'Paper Trades',
    'paper.trading.history': 'Paper Trading Verlauf',
    'closed': 'Geschlossen',
    'open': 'Offen',
    'start.new.paper.trading': 'Neue Paper Trading Sitzung Starten',
    'reset.virtual.balance': 'Virtuelles Guthaben Zurücksetzen und Neu Beginnen',
    
    // Live Charts
    'realtime.trading.charts': 'Echtzeit-Trading-Charts mit technischen Indikatoren',
    'advanced.tradingview.chart': 'Erweiterte TradingView Chart Integration',
    
    // Bot Performance
    'detailed.performance.metrics': 'Detaillierte Leistungsmetriken für alle Ihre Trading-Bots',
  },
  pt: {
    // Header
    'search.placeholder': 'Pesquisar mercados, bots...',
    'market.status': 'Mercados Abertos',
    'user.name': 'João Silva',
    
    // Sidebar
    'app.name': 'CryptoBot Pro',
    'dashboard': 'Painel',
    'overview': 'Visão Geral',
    'performance.summary': 'Resumo de Performance',
    'market.overview': 'Visão Geral do Mercado',
    
    'bots': 'Bots',
    'create.new.bot': 'Criar Novo Bot',
    'my.bots': 'Meus Bots',
    'bot.performance': 'Performance do Bot',
    'strategy.templates': 'Modelos de Estratégia',
    
    'trading': 'Trading',
    'manual.trading': 'Trading Manual',
    'signal.trading': 'Trading de Sinais',
    'paper.trading': 'Paper Trading',
    
    'markets': 'Mercados',
    'live.charts': 'Gráficos ao Vivo',
    'market.scanner': 'Scanner de Mercado',
    'watchlist': 'Lista de Observação',
    'price.alerts': 'Alertas de Preço',
    
    'exchanges.api': 'Exchanges e API',
    'connect.exchange': 'Conectar Exchange',
    'api.management': 'Gerenciamento de API',
    'sync.balances': 'Sincronizar Saldos',
    
    'alerts': 'Alertas',
    'create.alert': 'Criar Alerta',
    'notification.settings': 'Configurações de Notificação',
    'alert.logs': 'Logs de Alertas',
    
    'strategy.builder': 'Construtor de Estratégia',
    'build.strategy': 'Construir Estratégia',
    'saved.strategies': 'Estratégias Salvas',
    'backtesting': 'Backtesting',
    'marketplace': 'Marketplace',
    
    'security.settings': 'Segurança e Configurações',
    'profile.settings': 'Configurações do Perfil',
    'two.factor.auth': 'Autenticação de Dois Fatores',
    'theme.settings': 'Configurações de Tema',
    'session.logs': 'Logs de Sessão',
    
    'help': 'Ajuda',
    'documentation': 'Documentação',
    'contact.support': 'Contatar Suporte',
    'bug.reports': 'Relatórios de Bugs',
    'community': 'Comunidade',
    
    // Page content
    'welcome.back': 'Bem-vindo de volta! Aqui está uma visão geral da sua atividade de trading de criptomoedas.',
    'total.pnl': 'P&L Total',
    'total.roi': 'ROI Total',
    'win.rate': 'Taxa de Vitória',
    'total.trades': 'Trades Totais',
    'create.bot': 'Criar Bot',
    'bot.name': 'Nome do Bot',
    'trading.pair': 'Par de Trading',
    'strategy.type': 'Tipo de Estratégia',
    'investment.amount': 'Valor do Investimento',
    'select.trading.pair': 'Selecionar par de trading',
    'select.strategy': 'Selecionar estratégia',
    'enter.amount.usdt': 'Inserir valor em USDT',
    'enter.bot.name': 'Inserir nome do bot',
    
    // Languages
    'language': 'Idioma',
    'english': 'English',
    'arabic': 'العربية',
    'spanish': 'Español',
    'french': 'Français',
    'hindi': 'हिंदी',
    'german': 'Deutsch',
    'portuguese': 'Português',
    'chinese': '中文',

    // Market Overview
    'real.time.market.data': 'Dados de mercado e tendências em tempo real',
    'top.cryptocurrencies': 'Principais Criptomoedas',
    'volume': 'Vol',
    
    // Bots
    'manage.monitor.bots': 'Gerencie e monitore seus bots de trading',
    'profit': 'Lucro',
    'roi': 'ROI',
    'trades': 'Trades',
    'created': 'Criado',
    'active': 'Ativo',
    'paused': 'Pausado',
    'start': 'Iniciar',
    'pause': 'Pausar',
    'error': 'Erro',
    'total.bots': 'Total de Bots',
    
    // Bot Templates
    'preconfigured.bot.strategies': 'Estratégias de bot pré-configuradas prontas para implementar',
    'use.template': 'Usar Template',
    
    // Manual Trading
    'execute.trades.manually': 'Execute trades manualmente com dados de mercado em tempo real',
    'trading.chart': 'Gráfico de Trading',
    'tradingview.chart.placeholder': 'Placeholder do Gráfico TradingView',
    'place.order': 'Colocar Ordem',
    'buy': 'Comprar',
    'sell': 'Vender',
    'order.type': 'Tipo de Ordem',
    'select.order.type': 'Selecionar tipo de ordem',
    'market': 'Mercado',
    'limit': 'Limite',
    'stop': 'Stop',
    'price': 'Preço',
    'amount': 'Quantidade',
    'order.book': 'Livro de Ordens',
    
    // Paper Trading
    'practice.trading.strategies': 'Pratique estratégias de trading com dinheiro virtual',
    'virtual.balance': 'Saldo Virtual',
    'paper.pnl': 'P&L Papel',
    'paper.trades': 'Trades Papel',
    'paper.trading.history': 'Histórico de Trading Papel',
    'closed': 'Fechado',
    'open': 'Aberto',
    'start.new.paper.trading': 'Iniciar Nova Sessão de Paper Trading',
    'reset.virtual.balance': 'Redefinir Saldo Virtual e Começar do Zero',
    
    // Live Charts
    'realtime.trading.charts': 'Gráficos de trading em tempo real com indicadores técnicos',
    'advanced.tradingview.chart': 'Integração Avançada do Gráfico TradingView',
    
    // Bot Performance
    'detailed.performance.metrics': 'Métricas detalhadas de performance para todos os seus bots de trading',
  },
  zh: {
    // Header
    'search.placeholder': '搜索市场、机器人...',
    'market.status': '市场开放',
    'user.name': '张三',
    
    // Sidebar
    'app.name': '加密机器人专业版',
    'dashboard': '仪表板',
    'overview': '概览',
    'performance.summary': '绩效摘要',
    'market.overview': '市场概览',
    
    'bots': '机器人',
    'create.new.bot': '创建新机器人',
    'my.bots': '我的机器人',
    'bot.performance': '机器人性能',
    'strategy.templates': '策略模板',
    
    'trading': '交易',
    'manual.trading': '手动交易',
    'signal.trading': '信号交易',
    'paper.trading': '模拟交易',
    
    'markets': '市场',
    'live.charts': '实时图表',
    'market.scanner': '市场扫描器',
    'watchlist': '观察列表',
    'price.alerts': '价格提醒',
    
    'exchanges.api': '交易所和API',
    'connect.exchange': '连接交易所',
    'api.management': 'API管理',
    'sync.balances': '同步余额',
    
    'alerts': '提醒',
    'create.alert': '创建提醒',
    'notification.settings': '通知设置',
    'alert.logs': '提醒日志',
    
    'strategy.builder': '策略构建器',
    'build.strategy': '构建策略',
    'saved.strategies': '已保存策略',
    'backtesting': '回测',
    'marketplace': '市场',
    
    'security.settings': '安全和设置',
    'profile.settings': '个人资料设置',
    'two.factor.auth': '双重身份验证',
    'theme.settings': '主题设置',
    'session.logs': '会话日志',
    
    'help': '帮助',
    'documentation': '文档',
    'contact.support': '联系支持',
    'bug.reports': '错误报告',
    'community': '社区',
    
    // Page content
    'welcome.back': '欢迎回来！这是您的加密货币交易活动概览。',
    'total.pnl': '总盈亏',
    'total.roi': '总投资回报率',
    'win.rate': '胜率',
    'total.trades': '总交易次数',
    'create.bot': '创建机器人',
    'bot.name': '机器人名称',
    'trading.pair': '交易对',
    'strategy.type': '策略类型',
    'investment.amount': '投资金额',
    'select.trading.pair': '选择交易对',
    'select.strategy': '选择策略',
    'enter.amount.usdt': '输入USDT金额',
    'enter.bot.name': '输入机器人名称',
    
    // Languages
    'language': '语言',
    'english': 'English',
    'arabic': 'العربية',
    'spanish': 'Español',
    'french': 'Français',
    'hindi': 'हिंदी',
    'german': 'Deutsch',
    'portuguese': 'Português',
    'chinese': '中文',

    // Market Overview
    'real.time.market.data': '实时市场数据和趋势',
    'top.cryptocurrencies': '顶级加密货币',
    'volume': '成交量',
    
    // Bots
    'manage.monitor.bots': '管理和监控您的交易机器人',
    'profit': '利润',
    'roi': '投资回报率',
    'trades': '交易',
    'created': '创建时间',
    'active': '活跃',
    'paused': '暂停',
    'start': '开始',
    'pause': '暂停',
    'error': '错误',
    'total.bots': '总机器人数',
    
    // Bot Templates
    'preconfigured.bot.strategies': '预配置的机器人策略，随时可部署',
    'use.template': '使用模板',
    
    // Manual Trading
    'execute.trades.manually': '使用实时市场数据手动执行交易',
    'trading.chart': '交易图表',
    'tradingview.chart.placeholder': 'TradingView 图表占位符',
    'place.order': '下单',
    'buy': '买入',
    'sell': '卖出',
    'order.type': '订单类型',
    'select.order.type': '选择订单类型',
    'market': '市价',
    'limit': '限价',
    'stop': '止损',
    'price': '价格',
    'amount': '数量',
    'order.book': '订单簿',
    
    // Paper Trading
    'practice.trading.strategies': '使用虚拟资金练习交易策略',
    'virtual.balance': '虚拟余额',
    'paper.pnl': '模拟盈亏',
    'paper.trades': '模拟交易',
    'paper.trading.history': '模拟交易历史',
    'closed': '已关闭',
    'open': '开放',
    'start.new.paper.trading': '开始新的模拟交易会话',
    'reset.virtual.balance': '重置虚拟余额并重新开始',
    
    // Live Charts
    'realtime.trading.charts': '带有技术指标的实时交易图表',
    'advanced.tradingview.chart': '高级 TradingView 图表集成',
    
    // Bot Performance
    'detailed.performance.metrics': '所有交易机器人的详细性能指标',
  }
};
