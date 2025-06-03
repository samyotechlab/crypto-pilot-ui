
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  activity, 
  bot, 
  chart-line, 
  settings, 
  bell, 
  shield, 
  help,
  menu,
  x,
  chevron-down,
  chevron-right,
  layout-dashboard,
  user,
  chart-bar,
  zap,
  coins,
  key,
  users
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItem {
  title: string;
  href?: string;
  icon: any;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Dashboard',
    icon: layout-dashboard,
    children: [
      { title: 'Overview', href: '/', icon: activity },
      { title: 'Performance Summary', href: '/performance', icon: chart-line },
      { title: 'Market Overview', href: '/market-overview', icon: chart-bar }
    ]
  },
  {
    title: 'Bots',
    icon: bot,
    children: [
      { title: 'Create New Bot', href: '/bots/create', icon: zap },
      { title: 'My Bots', href: '/bots', icon: bot },
      { title: 'Bot Performance', href: '/bots/performance', icon: chart-line },
      { title: 'Strategy Templates', href: '/bots/templates', icon: settings }
    ]
  },
  {
    title: 'Trading',
    icon: activity,
    children: [
      { title: 'Manual Trading', href: '/trading/manual', icon: activity },
      { title: 'Signal Trading', href: '/trading/signals', icon: zap },
      { title: 'Paper Trading', href: '/trading/paper', icon: chart-line }
    ]
  },
  {
    title: 'Markets',
    icon: chart-bar,
    children: [
      { title: 'Live Charts', href: '/markets/charts', icon: chart-line },
      { title: 'Market Scanner', href: '/markets/scanner', icon: search },
      { title: 'Watchlist', href: '/markets/watchlist', icon: star },
      { title: 'Price Alerts', href: '/markets/alerts', icon: bell }
    ]
  },
  {
    title: 'Exchanges & API',
    icon: key,
    children: [
      { title: 'Connect Exchange', href: '/exchanges', icon: link },
      { title: 'API Management', href: '/api', icon: key },
      { title: 'Sync Balances', href: '/balances', icon: coins }
    ]
  },
  {
    title: 'Alerts',
    icon: bell,
    children: [
      { title: 'Create Alert', href: '/alerts/create', icon: zap },
      { title: 'Notification Settings', href: '/alerts/settings', icon: settings },
      { title: 'Alert Logs', href: '/alerts/logs', icon: activity }
    ]
  },
  {
    title: 'Strategy Builder',
    icon: settings,
    children: [
      { title: 'Build Strategy', href: '/strategy/build', icon: zap },
      { title: 'Saved Strategies', href: '/strategy/saved', icon: folder },
      { title: 'Backtesting', href: '/strategy/backtest', icon: chart-line },
      { title: 'Marketplace', href: '/strategy/marketplace', icon: grid-2x2 }
    ]
  },
  {
    title: 'Security & Settings',
    icon: shield,
    children: [
      { title: 'Profile Settings', href: '/settings/profile', icon: user },
      { title: 'Two-Factor Auth', href: '/settings/2fa', icon: shield },
      { title: 'Theme Settings', href: '/settings/theme', icon: sun },
      { title: 'Session Logs', href: '/settings/sessions', icon: activity }
    ]
  },
  {
    title: 'Admin Panel',
    icon: users,
    children: [
      { title: 'User Management', href: '/admin/users', icon: users },
      { title: 'System Logs', href: '/admin/logs', icon: activity },
      { title: 'Usage Stats', href: '/admin/stats', icon: chart-bar },
      { title: 'Server Monitor', href: '/admin/monitor', icon: monitor }
    ]
  },
  {
    title: 'Help',
    icon: help,
    children: [
      { title: 'Documentation', href: '/help/docs', icon: book },
      { title: 'Contact Support', href: '/help/support', icon: mail },
      { title: 'Bug Reports', href: '/help/bugs', icon: activity },
      { title: 'Community', href: '/help/community', icon: users }
    ]
  }
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Dashboard']);
  const location = useLocation();

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const isParentActive = (children: SidebarItem[]) => {
    return children.some(child => child.href && isActive(child.href));
  };

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
        "fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border z-50 transition-transform duration-300 ease-in-out",
        "w-64 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-sidebar-foreground">CryptoBot Pro</span>
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-1 text-sidebar-foreground hover:bg-sidebar-accent rounded"
          >
            <x className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto scrollbar-hide p-4">
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <div key={item.title}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.title)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 text-sm font-medium rounded-lg transition-colors",
                        "text-sidebar-foreground hover:bg-sidebar-accent",
                        (expandedItems.includes(item.title) || isParentActive(item.children)) && "bg-sidebar-accent"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </div>
                      {expandedItems.includes(item.title) ? (
                        <chevron-down className="w-4 h-4" />
                      ) : (
                        <chevron-right className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedItems.includes(item.title) && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.title}
                            to={child.href!}
                            className={({ isActive }) => cn(
                              "flex items-center space-x-3 p-2 text-sm rounded-lg transition-colors",
                              isActive 
                                ? "bg-primary text-primary-foreground font-medium" 
                                : "text-sidebar-foreground hover:bg-sidebar-accent"
                            )}
                          >
                            <child.icon className="w-4 h-4" />
                            <span>{child.title}</span>
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
                        ? "bg-primary text-primary-foreground" 
                        : "text-sidebar-foreground hover:bg-sidebar-accent"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};
