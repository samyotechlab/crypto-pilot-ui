
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'es' | 'fr' | 'hi' | 'de' | 'pt' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'dashboard': 'Dashboard',
    'my.bots': 'My Bots',
    'performance': 'Performance',
    'templates': 'Templates',
    'markets': 'Markets',
    'manual.trading': 'Manual Trading',
    'signal.trading': 'Signal Trading',
    'paper.trading': 'Paper Trading',
    'live.charts': 'Live Charts',
    'strategy': 'Strategy',
    'alerts': 'Alerts',
    'exchanges': 'Exchanges',
    'settings': 'Settings',
    'help': 'Help',
    
    // Common
    'active': 'Active',
    'paused': 'Paused',
    'stopped': 'Stopped',
    'error': 'Error',
    'profit': 'Profit',
    'loss': 'Loss',
    'roi': 'ROI',
    'trades': 'Trades',
    'created': 'Created',
    'start': 'Start',
    'pause': 'Pause',
    'stop': 'Stop',
    'status': 'Status',
    'price': 'Price',
    'volume': 'Volume',
    'change': 'Change',
    'high': 'High',
    'low': 'Low',
    'save': 'Save',
    'cancel': 'Cancel',
    'delete': 'Delete',
    'edit': 'Edit',
    'view': 'View',
    'search': 'Search',
    'filter': 'Filter',
    'loading': 'Loading...',
    'no.data': 'No data available',
    
    // Bot related
    'manage.monitor.bots': 'Manage and monitor your trading bots',
    'create.new.bot': 'Create New Bot',
    'total.bots': 'Total Bots',
    'bot.name': 'Bot Name',
    'trading.pair': 'Trading Pair',
    'strategy.type': 'Strategy Type',
    'investment.amount': 'Investment Amount',
    
    // Market related
    'market.overview': 'Market Overview',
    'market.scanner': 'Market Scanner',
    'top.gainers': 'Top Gainers',
    'top.losers': 'Top Losers',
    'trending': 'Trending',
    
    // Strategy related
    'strategy.builder': 'Strategy Builder',
    'build.strategy': 'Build Strategy',
    'saved.strategies': 'Saved Strategies',
    'strategy.marketplace': 'Strategy Marketplace',
    'backtesting': 'Backtesting',
    
    // Alerts related
    'price.alerts': 'Price Alerts',
    'create.alert': 'Create Alert',
    'alert.logs': 'Alert Logs',
    
    // Exchange related
    'api.management': 'API Management',
    'exchange.settings': 'Exchange Settings',
    'sync.balances': 'Sync Balances',
    
    // Settings related
    'profile.settings': 'Profile Settings',
    'notification.settings': 'Notification Settings',
    'theme.settings': 'Theme Settings',
    'two.factor.auth': 'Two Factor Authentication',
    'session.logs': 'Session Logs',
    
    // Help related
    'documentation': 'Documentation',
    'community': 'Community',
    'contact.support': 'Contact Support',
    'bug.reports': 'Bug Reports',
    
    // Performance related
    'total.profit': 'Total Profit',
    'win.rate': 'Win Rate',
    'best.performing': 'Best Performing',
    'worst.performing': 'Worst Performing'
  },
  ar: {
    // Navigation
    'dashboard': 'لوحة التحكم',
    'my.bots': 'روبوتاتي',
    'performance': 'الأداء',
    'templates': 'القوالب',
    'markets': 'الأسواق',
    'manual.trading': 'التداول اليدوي',
    'signal.trading': 'تداول الإشارات',
    'paper.trading': 'التداول الورقي',
    'live.charts': 'الرسوم البيانية المباشرة',
    'strategy': 'الاستراتيجية',
    'alerts': 'التنبيهات',
    'exchanges': 'البورصات',
    'settings': 'الإعدادات',
    'help': 'المساعدة',
    
    // Common
    'active': 'نشط',
    'paused': 'متوقف مؤقتاً',
    'stopped': 'متوقف',
    'error': 'خطأ',
    'profit': 'ربح',
    'loss': 'خسارة',
    'roi': 'العائد على الاستثمار',
    'trades': 'الصفقات',
    'created': 'تم الإنشاء',
    'start': 'بدء',
    'pause': 'إيقاف مؤقت',
    'stop': 'إيقاف',
    'status': 'الحالة',
    'price': 'السعر',
    'volume': 'الحجم',
    'change': 'التغيير',
    'high': 'أعلى',
    'low': 'أقل',
    'save': 'حفظ',
    'cancel': 'إلغاء',
    'delete': 'حذف',
    'edit': 'تعديل',
    'view': 'عرض',
    'search': 'بحث',
    'filter': 'تصفية',
    'loading': 'جاري التحميل...',
    'no.data': 'لا توجد بيانات متاحة',
    
    // Bot related
    'manage.monitor.bots': 'إدارة ومراقبة روبوتات التداول الخاصة بك',
    'create.new.bot': 'إنشاء روبوت جديد',
    'total.bots': 'إجمالي الروبوتات',
    'bot.name': 'اسم الروبوت',
    'trading.pair': 'زوج التداول',
    'strategy.type': 'نوع الاستراتيجية',
    'investment.amount': 'مبلغ الاستثمار',
    
    // Market related
    'market.overview': 'نظرة عامة على السوق',
    'market.scanner': 'ماسح السوق',
    'top.gainers': 'أكبر الرابحين',
    'top.losers': 'أكبر الخاسرين',
    'trending': 'الأكثر رواجاً',
    
    // Strategy related
    'strategy.builder': 'منشئ الاستراتيجية',
    'build.strategy': 'بناء استراتيجية',
    'saved.strategies': 'الاستراتيجيات المحفوظة',
    'strategy.marketplace': 'سوق الاستراتيجيات',
    'backtesting': 'الاختبار التاريخي',
    
    // Alerts related
    'price.alerts': 'تنبيهات الأسعار',
    'create.alert': 'إنشاء تنبيه',
    'alert.logs': 'سجلات التنبيهات',
    
    // Exchange related
    'api.management': 'إدارة واجهة برمجة التطبيقات',
    'exchange.settings': 'إعدادات البورصة',
    'sync.balances': 'مزامنة الأرصدة',
    
    // Settings related
    'profile.settings': 'إعدادات الملف الشخصي',
    'notification.settings': 'إعدادات الإشعارات',
    'theme.settings': 'إعدادات المظهر',
    'two.factor.auth': 'المصادقة الثنائية',
    'session.logs': 'سجلات الجلسة',
    
    // Help related
    'documentation': 'التوثيق',
    'community': 'المجتمع',
    'contact.support': 'اتصل بالدعم',
    'bug.reports': 'تقارير الأخطاء',
    
    // Performance related
    'total.profit': 'إجمالي الربح',
    'win.rate': 'معدل الفوز',
    'best.performing': 'الأفضل أداءً',
    'worst.performing': 'الأسوأ أداءً'
  },
  es: {
    // Navigation
    'dashboard': 'Panel de Control',
    'my.bots': 'Mis Bots',
    'performance': 'Rendimiento',
    'templates': 'Plantillas',
    'markets': 'Mercados',
    'manual.trading': 'Trading Manual',
    'signal.trading': 'Trading de Señales',
    'paper.trading': 'Trading Simulado',
    'live.charts': 'Gráficos en Vivo',
    'strategy': 'Estrategia',
    'alerts': 'Alertas',
    'exchanges': 'Intercambios',
    'settings': 'Configuración',
    'help': 'Ayuda',
    
    // Common
    'active': 'Activo',
    'paused': 'Pausado',
    'stopped': 'Detenido',
    'error': 'Error',
    'profit': 'Ganancia',
    'loss': 'Pérdida',
    'roi': 'ROI',
    'trades': 'Operaciones',
    'created': 'Creado',
    'start': 'Iniciar',
    'pause': 'Pausar',
    'stop': 'Detener',
    'status': 'Estado',
    'price': 'Precio',
    'volume': 'Volumen',
    'change': 'Cambio',
    'high': 'Alto',
    'low': 'Bajo',
    'save': 'Guardar',
    'cancel': 'Cancelar',
    'delete': 'Eliminar',
    'edit': 'Editar',
    'view': 'Ver',
    'search': 'Buscar',
    'filter': 'Filtrar',
    'loading': 'Cargando...',
    'no.data': 'No hay datos disponibles',
    
    // Bot related
    'manage.monitor.bots': 'Gestiona y monitorea tus bots de trading',
    'create.new.bot': 'Crear Nuevo Bot',
    'total.bots': 'Total de Bots',
    'bot.name': 'Nombre del Bot',
    'trading.pair': 'Par de Trading',
    'strategy.type': 'Tipo de Estrategia',
    'investment.amount': 'Cantidad de Inversión',
    
    // Market related
    'market.overview': 'Resumen del Mercado',
    'market.scanner': 'Escáner de Mercado',
    'top.gainers': 'Mayores Ganadores',
    'top.losers': 'Mayores Perdedores',
    'trending': 'Tendencia',
    
    // Strategy related
    'strategy.builder': 'Constructor de Estrategias',
    'build.strategy': 'Construir Estrategia',
    'saved.strategies': 'Estrategias Guardadas',
    'strategy.marketplace': 'Mercado de Estrategias',
    'backtesting': 'Backtesting',
    
    // Alerts related
    'price.alerts': 'Alertas de Precio',
    'create.alert': 'Crear Alerta',
    'alert.logs': 'Registros de Alertas',
    
    // Exchange related
    'api.management': 'Gestión de API',
    'exchange.settings': 'Configuración de Exchange',
    'sync.balances': 'Sincronizar Saldos',
    
    // Settings related
    'profile.settings': 'Configuración de Perfil',
    'notification.settings': 'Configuración de Notificaciones',
    'theme.settings': 'Configuración de Tema',
    'two.factor.auth': 'Autenticación de Dos Factores',
    'session.logs': 'Registros de Sesión',
    
    // Help related
    'documentation': 'Documentación',
    'community': 'Comunidad',
    'contact.support': 'Contactar Soporte',
    'bug.reports': 'Reportes de Errores',
    
    // Performance related
    'total.profit': 'Ganancia Total',
    'win.rate': 'Tasa de Éxito',
    'best.performing': 'Mejor Rendimiento',
    'worst.performing': 'Peor Rendimiento'
  },
  fr: {
    // Navigation
    'dashboard': 'Tableau de Bord',
    'my.bots': 'Mes Bots',
    'performance': 'Performance',
    'templates': 'Modèles',
    'markets': 'Marchés',
    'manual.trading': 'Trading Manuel',
    'signal.trading': 'Trading de Signaux',
    'paper.trading': 'Trading Papier',
    'live.charts': 'Graphiques en Direct',
    'strategy': 'Stratégie',
    'alerts': 'Alertes',
    'exchanges': 'Échanges',
    'settings': 'Paramètres',
    'help': 'Aide',
    
    // Common
    'active': 'Actif',
    'paused': 'En Pause',
    'stopped': 'Arrêté',
    'error': 'Erreur',
    'profit': 'Profit',
    'loss': 'Perte',
    'roi': 'ROI',
    'trades': 'Transactions',
    'created': 'Créé',
    'start': 'Démarrer',
    'pause': 'Pause',
    'stop': 'Arrêter',
    'status': 'Statut',
    'price': 'Prix',
    'volume': 'Volume',
    'change': 'Changement',
    'high': 'Haut',
    'low': 'Bas',
    'save': 'Sauvegarder',
    'cancel': 'Annuler',
    'delete': 'Supprimer',
    'edit': 'Modifier',
    'view': 'Voir',
    'search': 'Rechercher',
    'filter': 'Filtrer',
    'loading': 'Chargement...',
    'no.data': 'Aucune donnée disponible',
    
    // Bot related
    'manage.monitor.bots': 'Gérez et surveillez vos bots de trading',
    'create.new.bot': 'Créer un Nouveau Bot',
    'total.bots': 'Total des Bots',
    'bot.name': 'Nom du Bot',
    'trading.pair': 'Paire de Trading',
    'strategy.type': 'Type de Stratégie',
    'investment.amount': 'Montant d\'Investissement',
    
    // Market related
    'market.overview': 'Aperçu du Marché',
    'market.scanner': 'Scanner de Marché',
    'top.gainers': 'Plus Gros Gagnants',
    'top.losers': 'Plus Gros Perdants',
    'trending': 'Tendance',
    
    // Strategy related
    'strategy.builder': 'Constructeur de Stratégie',
    'build.strategy': 'Construire une Stratégie',
    'saved.strategies': 'Stratégies Sauvegardées',
    'strategy.marketplace': 'Marché des Stratégies',
    'backtesting': 'Test Historique',
    
    // Alerts related
    'price.alerts': 'Alertes de Prix',
    'create.alert': 'Créer une Alerte',
    'alert.logs': 'Journaux d\'Alertes',
    
    // Exchange related
    'api.management': 'Gestion API',
    'exchange.settings': 'Paramètres d\'Exchange',
    'sync.balances': 'Synchroniser les Soldes',
    
    // Settings related
    'profile.settings': 'Paramètres de Profil',
    'notification.settings': 'Paramètres de Notification',
    'theme.settings': 'Paramètres de Thème',
    'two.factor.auth': 'Authentification à Deux Facteurs',
    'session.logs': 'Journaux de Session',
    
    // Help related
    'documentation': 'Documentation',
    'community': 'Communauté',
    'contact.support': 'Contacter le Support',
    'bug.reports': 'Rapports de Bugs',
    
    // Performance related
    'total.profit': 'Profit Total',
    'win.rate': 'Taux de Réussite',
    'best.performing': 'Meilleure Performance',
    'worst.performing': 'Pire Performance'
  },
  hi: {
    // Navigation
    'dashboard': 'डैशबोर्ड',
    'my.bots': 'मेरे बॉट्स',
    'performance': 'प्रदर्शन',
    'templates': 'टेम्प्लेट्स',
    'markets': 'बाज़ार',
    'manual.trading': 'मैन्युअल ट्रेडिंग',
    'signal.trading': 'सिग्नल ट्रेडिंग',
    'paper.trading': 'पेपर ट्रेडिंग',
    'live.charts': 'लाइव चार्ट्स',
    'strategy': 'रणनीति',
    'alerts': 'अलर्ट',
    'exchanges': 'एक्सचेंज',
    'settings': 'सेटिंग्स',
    'help': 'सहायता',
    
    // Common
    'active': 'सक्रिय',
    'paused': 'रोका गया',
    'stopped': 'बंद',
    'error': 'त्रुटि',
    'profit': 'लाभ',
    'loss': 'हानि',
    'roi': 'आरओआई',
    'trades': 'ट्रेड्स',
    'created': 'बनाया गया',
    'start': 'शुरू',
    'pause': 'रोकें',
    'stop': 'बंद करें',
    'status': 'स्थिति',
    'price': 'कीमत',
    'volume': 'वॉल्यूम',
    'change': 'बदलाव',
    'high': 'उच्च',
    'low': 'निम्न',
    'save': 'सेव करें',
    'cancel': 'रद्द करें',
    'delete': 'हटाएं',
    'edit': 'संपादित करें',
    'view': 'देखें',
    'search': 'खोजें',
    'filter': 'फिल्टर',
    'loading': 'लोड हो रहा है...',
    'no.data': 'कोई डेटा उपलब्ध नहीं',
    
    // Bot related
    'manage.monitor.bots': 'अपने ट्रेडिंग बॉट्स को प्रबंधित और मॉनिटर करें',
    'create.new.bot': 'नया बॉट बनाएं',
    'total.bots': 'कुल बॉट्स',
    'bot.name': 'बॉट का नाम',
    'trading.pair': 'ट्रेडिंग जोड़ी',
    'strategy.type': 'रणनीति प्रकार',
    'investment.amount': 'निवेश राशि',
    
    // Market related
    'market.overview': 'बाज़ार अवलोकन',
    'market.scanner': 'मार्केट स्कैनर',
    'top.gainers': 'टॉप गेनर्स',
    'top.losers': 'टॉप लूज़र्स',
    'trending': 'ट्रेंडिंग',
    
    // Strategy related
    'strategy.builder': 'रणनीति निर्माता',
    'build.strategy': 'रणनीति बनाएं',
    'saved.strategies': 'सहेजी गई रणनीतियां',
    'strategy.marketplace': 'रणनीति मार्केटप्लेस',
    'backtesting': 'बैकटेस्टिंग',
    
    // Alerts related
    'price.alerts': 'प्राइस अलर्ट्स',
    'create.alert': 'अलर्ट बनाएं',
    'alert.logs': 'अलर्ट लॉग्स',
    
    // Exchange related
    'api.management': 'एपीआई प्रबंधन',
    'exchange.settings': 'एक्सचेंज सेटिंग्स',
    'sync.balances': 'बैलेंस सिंक करें',
    
    // Settings related
    'profile.settings': 'प्रोफाइल सेटिंग्स',
    'notification.settings': 'नोटिफिकेशन सेटिंग्स',
    'theme.settings': 'थीम सेटिंग्स',
    'two.factor.auth': 'दो-कारक प्रमाणीकरण',
    'session.logs': 'सेशन लॉग्स',
    
    // Help related
    'documentation': 'दस्तावेज़ीकरण',
    'community': 'समुदाय',
    'contact.support': 'सहायता से संपर्क करें',
    'bug.reports': 'बग रिपोर्ट्स',
    
    // Performance related
    'total.profit': 'कुल लाभ',
    'win.rate': 'जीत दर',
    'best.performing': 'बेस्ट परफॉर्मिंग',
    'worst.performing': 'वर्स्ट परफॉर्मिंग'
  },
  de: {
    // Navigation
    'dashboard': 'Dashboard',
    'my.bots': 'Meine Bots',
    'performance': 'Leistung',
    'templates': 'Vorlagen',
    'markets': 'Märkte',
    'manual.trading': 'Manueller Handel',
    'signal.trading': 'Signal Trading',
    'paper.trading': 'Paper Trading',
    'live.charts': 'Live-Charts',
    'strategy': 'Strategie',
    'alerts': 'Warnungen',
    'exchanges': 'Börsen',
    'settings': 'Einstellungen',
    'help': 'Hilfe',
    
    // Common
    'active': 'Aktiv',
    'paused': 'Pausiert',
    'stopped': 'Gestoppt',
    'error': 'Fehler',
    'profit': 'Gewinn',
    'loss': 'Verlust',
    'roi': 'ROI',
    'trades': 'Trades',
    'created': 'Erstellt',
    'start': 'Start',
    'pause': 'Pause',
    'stop': 'Stopp',
    'status': 'Status',
    'price': 'Preis',
    'volume': 'Volumen',
    'change': 'Änderung',
    'high': 'Hoch',
    'low': 'Niedrig',
    'save': 'Speichern',
    'cancel': 'Abbrechen',
    'delete': 'Löschen',
    'edit': 'Bearbeiten',
    'view': 'Ansicht',
    'search': 'Suchen',
    'filter': 'Filter',
    'loading': 'Lädt...',
    'no.data': 'Keine Daten verfügbar',
    
    // Bot related
    'manage.monitor.bots': 'Verwalten und überwachen Sie Ihre Trading-Bots',
    'create.new.bot': 'Neuen Bot erstellen',
    'total.bots': 'Gesamte Bots',
    'bot.name': 'Bot-Name',
    'trading.pair': 'Handelspaar',
    'strategy.type': 'Strategietyp',
    'investment.amount': 'Investitionsbetrag',
    
    // Market related
    'market.overview': 'Marktübersicht',
    'market.scanner': 'Markt-Scanner',
    'top.gainers': 'Top-Gewinner',
    'top.losers': 'Top-Verlierer',
    'trending': 'Trending',
    
    // Strategy related
    'strategy.builder': 'Strategie-Builder',
    'build.strategy': 'Strategie erstellen',
    'saved.strategies': 'Gespeicherte Strategien',
    'strategy.marketplace': 'Strategie-Marktplatz',
    'backtesting': 'Backtesting',
    
    // Alerts related
    'price.alerts': 'Preiswarnungen',
    'create.alert': 'Warnung erstellen',
    'alert.logs': 'Warn-Protokolle',
    
    // Exchange related
    'api.management': 'API-Verwaltung',
    'exchange.settings': 'Börsen-Einstellungen',
    'sync.balances': 'Guthaben synchronisieren',
    
    // Settings related
    'profile.settings': 'Profil-Einstellungen',
    'notification.settings': 'Benachrichtigungseinstellungen',
    'theme.settings': 'Theme-Einstellungen',
    'two.factor.auth': 'Zwei-Faktor-Authentifizierung',
    'session.logs': 'Sitzungsprotokolle',
    
    // Help related
    'documentation': 'Dokumentation',
    'community': 'Community',
    'contact.support': 'Support kontaktieren',
    'bug.reports': 'Fehlerberichte',
    
    // Performance related
    'total.profit': 'Gesamtgewinn',
    'win.rate': 'Gewinnrate',
    'best.performing': 'Beste Leistung',
    'worst.performing': 'Schlechteste Leistung'
  },
  pt: {
    // Navigation
    'dashboard': 'Painel',
    'my.bots': 'Meus Bots',
    'performance': 'Desempenho',
    'templates': 'Modelos',
    'markets': 'Mercados',
    'manual.trading': 'Trading Manual',
    'signal.trading': 'Trading de Sinais',
    'paper.trading': 'Trading Simulado',
    'live.charts': 'Gráficos ao Vivo',
    'strategy': 'Estratégia',
    'alerts': 'Alertas',
    'exchanges': 'Corretoras',
    'settings': 'Configurações',
    'help': 'Ajuda',
    
    // Common
    'active': 'Ativo',
    'paused': 'Pausado',
    'stopped': 'Parado',
    'error': 'Erro',
    'profit': 'Lucro',
    'loss': 'Perda',
    'roi': 'ROI',
    'trades': 'Negociações',
    'created': 'Criado',
    'start': 'Iniciar',
    'pause': 'Pausar',
    'stop': 'Parar',
    'status': 'Status',
    'price': 'Preço',
    'volume': 'Volume',
    'change': 'Variação',
    'high': 'Alta',
    'low': 'Baixa',
    'save': 'Salvar',
    'cancel': 'Cancelar',
    'delete': 'Excluir',
    'edit': 'Editar',
    'view': 'Visualizar',
    'search': 'Buscar',
    'filter': 'Filtrar',
    'loading': 'Carregando...',
    'no.data': 'Nenhum dado disponível',
    
    // Bot related
    'manage.monitor.bots': 'Gerencie e monitore seus bots de trading',
    'create.new.bot': 'Criar Novo Bot',
    'total.bots': 'Total de Bots',
    'bot.name': 'Nome do Bot',
    'trading.pair': 'Par de Trading',
    'strategy.type': 'Tipo de Estratégia',
    'investment.amount': 'Valor do Investimento',
    
    // Market related
    'market.overview': 'Visão Geral do Mercado',
    'market.scanner': 'Scanner de Mercado',
    'top.gainers': 'Maiores Altas',
    'top.losers': 'Maiores Baixas',
    'trending': 'Em Tendência',
    
    // Strategy related
    'strategy.builder': 'Construtor de Estratégia',
    'build.strategy': 'Construir Estratégia',
    'saved.strategies': 'Estratégias Salvas',
    'strategy.marketplace': 'Marketplace de Estratégias',
    'backtesting': 'Backtesting',
    
    // Alerts related
    'price.alerts': 'Alertas de Preço',
    'create.alert': 'Criar Alerta',
    'alert.logs': 'Logs de Alertas',
    
    // Exchange related
    'api.management': 'Gerenciamento de API',
    'exchange.settings': 'Configurações da Corretora',
    'sync.balances': 'Sincronizar Saldos',
    
    // Settings related
    'profile.settings': 'Configurações do Perfil',
    'notification.settings': 'Configurações de Notificação',
    'theme.settings': 'Configurações de Tema',
    'two.factor.auth': 'Autenticação de Dois Fatores',
    'session.logs': 'Logs de Sessão',
    
    // Help related
    'documentation': 'Documentação',
    'community': 'Comunidade',
    'contact.support': 'Contatar Suporte',
    'bug.reports': 'Relatórios de Bug',
    
    // Performance related
    'total.profit': 'Lucro Total',
    'win.rate': 'Taxa de Acerto',
    'best.performing': 'Melhor Desempenho',
    'worst.performing': 'Pior Desempenho'
  },
  zh: {
    // Navigation
    'dashboard': '仪表板',
    'my.bots': '我的机器人',
    'performance': '表现',
    'templates': '模板',
    'markets': '市场',
    'manual.trading': '手动交易',
    'signal.trading': '信号交易',
    'paper.trading': '模拟交易',
    'live.charts': '实时图表',
    'strategy': '策略',
    'alerts': '警报',
    'exchanges': '交易所',
    'settings': '设置',
    'help': '帮助',
    
    // Common
    'active': '活跃',
    'paused': '暂停',
    'stopped': '停止',
    'error': '错误',
    'profit': '利润',
    'loss': '损失',
    'roi': '投资回报率',
    'trades': '交易',
    'created': '创建',
    'start': '开始',
    'pause': '暂停',
    'stop': '停止',
    'status': '状态',
    'price': '价格',
    'volume': '成交量',
    'change': '变化',
    'high': '高',
    'low': '低',
    'save': '保存',
    'cancel': '取消',
    'delete': '删除',
    'edit': '编辑',
    'view': '查看',
    'search': '搜索',
    'filter': '过滤',
    'loading': '加载中...',
    'no.data': '无可用数据',
    
    // Bot related
    'manage.monitor.bots': '管理和监控您的交易机器人',
    'create.new.bot': '创建新机器人',
    'total.bots': '总机器人数',
    'bot.name': '机器人名称',
    'trading.pair': '交易对',
    'strategy.type': '策略类型',
    'investment.amount': '投资金额',
    
    // Market related
    'market.overview': '市场概览',
    'market.scanner': '市场扫描器',
    'top.gainers': '涨幅榜',
    'top.losers': '跌幅榜',
    'trending': '趋势',
    
    // Strategy related
    'strategy.builder': '策略构建器',
    'build.strategy': '构建策略',
    'saved.strategies': '已保存策略',
    'strategy.marketplace': '策略市场',
    'backtesting': '回测',
    
    // Alerts related
    'price.alerts': '价格警报',
    'create.alert': '创建警报',
    'alert.logs': '警报日志',
    
    // Exchange related
    'api.management': 'API管理',
    'exchange.settings': '交易所设置',
    'sync.balances': '同步余额',
    
    // Settings related
    'profile.settings': '个人资料设置',
    'notification.settings': '通知设置',
    'theme.settings': '主题设置',
    'two.factor.auth': '双因素认证',
    'session.logs': '会话日志',
    
    // Help related
    'documentation': '文档',
    'community': '社区',
    'contact.support': '联系支持',
    'bug.reports': '错误报告',
    
    // Performance related
    'total.profit': '总利润',
    'win.rate': '胜率',
    'best.performing': '最佳表现',
    'worst.performing': '最差表现'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
