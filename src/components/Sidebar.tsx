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

interface SidebarItem {
  title: string;
  href?: string;
  icon: any;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    children: [
      { title: 'Overview', href: '/', icon: Activity },
      { title: 'Performance Summary', href: '/performance', icon: ChartLine },
      { title: 'Market Overview', href: '/market-overview', icon: BarChart3 }
    ]
  },
  {
    title: 'Bots',
    icon: Bot,
    children: [
      { title: 'Create New Bot', href: '/bots/create', icon: Zap },
      { title: 'My Bots', href: '/bots', icon: Bot },
      { title: 'Bot Performance', href: '/bots/performance', icon: ChartLine },
      { title: 'Strategy Templates', href: '/bots/templates', icon: Settings }
    ]
  },
  {
    title: 'Trading',
    icon: Activity,
    children: [
      { title: 'Manual Trading', href: '/trading/manual', icon: Activity },
      { title: 'Signal Trading', href: '/trading/signals', icon: Zap },
      { title: 'Paper Trading', href: '/trading/paper', icon: ChartLine }
    ]
  },
  {
    title: 'Markets',
    icon: BarChart3,
    children: [
      { title: 'Live Charts', href: '/markets/charts', icon: ChartLine },
      { title: 'Market Scanner', href: '/markets/scanner', icon: Activity },
      { title: 'Watchlist', href: '/markets/watchlist', icon: Activity },
      { title: 'Price Alerts', href: '/markets/alerts', icon: Bell }
    ]
  },
  {
    title: 'Exchanges & API',
    icon: Key,
    children: [
      { title: 'Connect Exchange', href: '/exchanges', icon: Activity },
      { title: 'API Management', href: '/api', icon: Key },
      { title: 'Sync Balances', href: '/balances', icon: Coins }
    ]
  },
  {
    title: 'Alerts',
    icon: Bell,
    children: [
      { title: 'Create Alert', href: '/alerts/create', icon: Zap },
      { title: 'Notification Settings', href: '/alerts/settings', icon: Settings },
      { title: 'Alert Logs', href: '/alerts/logs', icon: Activity }
    ]
  },
  {
    title: 'Strategy Builder',
    icon: Settings,
    children: [
      { title: 'Build Strategy', href: '/strategy/build', icon: Zap },
      { title: 'Saved Strategies', href: '/strategy/saved', icon: Activity },
      { title: 'Backtesting', href: '/strategy/backtest', icon: ChartLine },
      { title: 'Marketplace', href: '/strategy/marketplace', icon: Activity }
    ]
  },
  {
    title: 'Security & Settings',
    icon: Shield,
    children: [
      { title: 'Profile Settings', href: '/settings/profile', icon: User },
      { title: 'Two-Factor Auth', href: '/settings/2fa', icon: Shield },
      { title: 'Theme Settings', href: '/settings/theme', icon: Activity },
      { title: 'Session Logs', href: '/settings/sessions', icon: Activity }
    ]
  },
  {
    title: 'Help',
    icon: HelpCircle,
    children: [
      { title: 'Documentation', href: '/help/docs', icon: Activity },
      { title: 'Contact Support', href: '/help/support', icon: Activity },
      { title: 'Bug Reports', href: '/help/bugs', icon: Activity },
      { title: 'Community', href: '/help/community', icon: Users }
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
        "fixed left-0 top-0 h-full bg-gray-900 border-r border-gray-800 z-50 transition-transform duration-300 ease-in-out",
        "w-64 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">CryptoBot Pro</span>
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-1 text-gray-400 hover:bg-gray-800 rounded"
          >
            <X className="w-5 h-5" />
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
                        "text-gray-300 hover:bg-gray-800",
                        (expandedItems.includes(item.title) || isParentActive(item.children)) && "bg-gray-800"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </div>
                      {expandedItems.includes(item.title) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
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
                                ? "bg-blue-500 text-white font-medium" 
                                : "text-gray-300 hover:bg-gray-800"
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
                        ? "bg-blue-500 text-white" 
                        : "text-gray-300 hover:bg-gray-800"
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
