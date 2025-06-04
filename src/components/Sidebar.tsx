
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Activity, 
  Bot, 
  ChartLine, 
  Settings, 
  Bell, 
  Shield, 
  HelpCircle,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  User,
  BarChart3,
  Zap,
  Coins,
  Key,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface SidebarItem {
  titleKey: string;
  href?: string;
  icon: any;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    titleKey: 'dashboard',
    icon: LayoutDashboard,
    children: [
      { titleKey: 'overview', href: '/', icon: Activity },
      { titleKey: 'performance.summary', href: '/performance', icon: ChartLine },
      { titleKey: 'market.overview', href: '/market-overview', icon: BarChart3 }
    ]
  },
  {
    titleKey: 'bots',
    icon: Bot,
    children: [
      { titleKey: 'create.new.bot', href: '/bots/create', icon: Zap },
      { titleKey: 'my.bots', href: '/bots', icon: Bot },
      { titleKey: 'bot.performance', href: '/bots/performance', icon: ChartLine },
      { titleKey: 'strategy.templates', href: '/bots/templates', icon: Settings }
    ]
  },
  {
    titleKey: 'trading',
    icon: Activity,
    children: [
      { titleKey: 'manual.trading', href: '/trading/manual', icon: Activity },
      { titleKey: 'signal.trading', href: '/trading/signals', icon: Zap },
      { titleKey: 'paper.trading', href: '/trading/paper', icon: ChartLine }
    ]
  },
  {
    titleKey: 'markets',
    icon: BarChart3,
    children: [
      { titleKey: 'live.charts', href: '/markets/charts', icon: ChartLine },
      { titleKey: 'market.scanner', href: '/markets/scanner', icon: Activity },
      { titleKey: 'watchlist', href: '/markets/watchlist', icon: Activity },
      { titleKey: 'price.alerts', href: '/markets/alerts', icon: Bell }
    ]
  },
  {
    titleKey: 'exchanges.api',
    icon: Key,
    children: [
      { titleKey: 'connect.exchange', href: '/exchanges', icon: Activity },
      { titleKey: 'api.management', href: '/api', icon: Key },
      { titleKey: 'sync.balances', href: '/balances', icon: Coins }
    ]
  },
  {
    titleKey: 'alerts',
    icon: Bell,
    children: [
      { titleKey: 'create.alert', href: '/alerts/create', icon: Zap },
      { titleKey: 'notification.settings', href: '/alerts/settings', icon: Settings },
      { titleKey: 'alert.logs', href: '/alerts/logs', icon: Activity }
    ]
  },
  {
    titleKey: 'strategy.builder',
    icon: Settings,
    children: [
      { titleKey: 'build.strategy', href: '/strategy/build', icon: Zap },
      { titleKey: 'saved.strategies', href: '/strategy/saved', icon: Activity },
      { titleKey: 'backtesting', href: '/strategy/backtest', icon: ChartLine },
      { titleKey: 'marketplace', href: '/strategy/marketplace', icon: Activity }
    ]
  },
  {
    titleKey: 'security.settings',
    icon: Shield,
    children: [
      { titleKey: 'profile.settings', href: '/settings/profile', icon: User },
      { titleKey: 'two.factor.auth', href: '/settings/2fa', icon: Shield },
      { titleKey: 'theme.settings', href: '/settings/theme', icon: Activity },
      { titleKey: 'session.logs', href: '/settings/sessions', icon: Activity }
    ]
  },
  {
    titleKey: 'help',
    icon: HelpCircle,
    children: [
      { titleKey: 'documentation', href: '/help/docs', icon: Activity },
      { titleKey: 'contact.support', href: '/help/support', icon: Activity },
      { titleKey: 'bug.reports', href: '/help/bugs', icon: Activity },
      { titleKey: 'community', href: '/help/community', icon: Users }
    ]
  }
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['dashboard']);
  const location = useLocation();
  const { theme } = useTheme();
  const { t } = useLanguage();

  const toggleExpanded = (titleKey: string) => {
    setExpandedItems(prev => 
      prev.includes(titleKey) 
        ? prev.filter(item => item !== titleKey)
        : [...prev, titleKey]
    );
  };

  const isChildActive = (href: string) => {
    return location.pathname === href;
  };

  const isParentActive = (children: SidebarItem[]) => {
    return children.some(child => child.href && isChildActive(child.href));
  };

  const shouldExpandParent = (children: SidebarItem[]) => {
    return children.some(child => child.href && isChildActive(child.href));
  };

  // Auto-expand parent if child is active
  React.useEffect(() => {
    sidebarItems.forEach(item => {
      if (item.children && shouldExpandParent(item.children)) {
        setExpandedItems(prev => 
          prev.includes(item.titleKey) ? prev : [...prev, item.titleKey]
        );
      }
    });
  }, [location.pathname]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-full border-r z-50 transition-transform duration-300 ease-in-out",
        "w-64 lg:translate-x-0 flex flex-col",
        "bg-sidebar-background border-sidebar-border",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border flex-shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-sidebar-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-sidebar-foreground">{t('app.name')}</span>
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-1 text-sidebar-foreground hover:bg-sidebar-accent rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation with ScrollArea */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <div key={item.titleKey}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.titleKey)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 text-sm font-medium rounded-lg transition-colors",
                        "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        expandedItems.includes(item.titleKey) && !isParentActive(item.children) && "bg-sidebar-accent"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span>{t(item.titleKey)}</span>
                      </div>
                      {expandedItems.includes(item.titleKey) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedItems.includes(item.titleKey) && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.titleKey}
                            to={child.href!}
                            className={({ isActive }) => cn(
                              "flex items-center space-x-3 p-2 text-sm rounded-lg transition-colors",
                              isActive 
                                ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium" 
                                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            )}
                          >
                            <child.icon className="w-4 h-4" />
                            <span>{t(child.titleKey)}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.href!}
                    className={({ isActive }) => cn(
                      "flex items-center space-x-3 p-3 text-sm font-medium rounded-lg transition-colors",
                      isActive 
                        ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{t(item.titleKey)}</span>
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  );
};
