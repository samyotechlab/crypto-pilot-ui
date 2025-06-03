
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Bots from "./pages/Bots";
import Performance from "./pages/Performance";
import MarketOverview from "./pages/MarketOverview";
import CreateBot from "./pages/CreateBot";
import BotPerformance from "./pages/BotPerformance";
import BotTemplates from "./pages/BotTemplates";
import ManualTrading from "./pages/ManualTrading";
import SignalTrading from "./pages/SignalTrading";
import PaperTrading from "./pages/PaperTrading";
import LiveCharts from "./pages/LiveCharts";
import MarketScanner from "./pages/MarketScanner";
import Watchlist from "./pages/Watchlist";
import PriceAlerts from "./pages/PriceAlerts";
import Exchanges from "./pages/Exchanges";
import ApiManagement from "./pages/ApiManagement";
import SyncBalances from "./pages/SyncBalances";
import CreateAlert from "./pages/CreateAlert";
import NotificationSettings from "./pages/NotificationSettings";
import AlertLogs from "./pages/AlertLogs";
import BuildStrategy from "./pages/BuildStrategy";
import SavedStrategies from "./pages/SavedStrategies";
import Backtesting from "./pages/Backtesting";
import StrategyMarketplace from "./pages/StrategyMarketplace";
import ProfileSettings from "./pages/ProfileSettings";
import TwoFactorAuth from "./pages/TwoFactorAuth";
import ThemeSettings from "./pages/ThemeSettings";
import SessionLogs from "./pages/SessionLogs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/market-overview" element={<MarketOverview />} />
          
          {/* Bot Routes */}
          <Route path="/bots" element={<Bots />} />
          <Route path="/bots/create" element={<CreateBot />} />
          <Route path="/bots/performance" element={<BotPerformance />} />
          <Route path="/bots/templates" element={<BotTemplates />} />
          
          {/* Trading Routes */}
          <Route path="/trading/manual" element={<ManualTrading />} />
          <Route path="/trading/signals" element={<SignalTrading />} />
          <Route path="/trading/paper" element={<PaperTrading />} />
          
          {/* Market Routes */}
          <Route path="/markets/charts" element={<LiveCharts />} />
          <Route path="/markets/scanner" element={<MarketScanner />} />
          <Route path="/markets/watchlist" element={<Watchlist />} />
          <Route path="/markets/alerts" element={<PriceAlerts />} />
          
          {/* Exchange & API Routes */}
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/api" element={<ApiManagement />} />
          <Route path="/balances" element={<SyncBalances />} />
          
          {/* Alert Routes */}
          <Route path="/alerts/create" element={<CreateAlert />} />
          <Route path="/alerts/settings" element={<NotificationSettings />} />
          <Route path="/alerts/logs" element={<AlertLogs />} />
          
          {/* Placeholder routes for remaining sections */}
          <Route path="/strategy/build" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Build Strategy - Coming Soon</h1></div>} />
          <Route path="/strategy/saved" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Saved Strategies - Coming Soon</h1></div>} />
          <Route path="/strategy/backtest" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Backtesting - Coming Soon</h1></div>} />
          <Route path="/strategy/marketplace" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Strategy Marketplace - Coming Soon</h1></div>} />
          <Route path="/settings/profile" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Profile Settings - Coming Soon</h1></div>} />
          <Route path="/settings/2fa" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Two-Factor Auth - Coming Soon</h1></div>} />
          <Route path="/settings/theme" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Theme Settings - Coming Soon</h1></div>} />
          <Route path="/settings/sessions" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Session Logs - Coming Soon</h1></div>} />
          <Route path="/admin/users" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">User Management - Coming Soon</h1></div>} />
          <Route path="/admin/logs" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">System Logs - Coming Soon</h1></div>} />
          <Route path="/admin/stats" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Usage Stats - Coming Soon</h1></div>} />
          <Route path="/admin/monitor" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Server Monitor - Coming Soon</h1></div>} />
          <Route path="/help/docs" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Documentation - Coming Soon</h1></div>} />
          <Route path="/help/support" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Contact Support - Coming Soon</h1></div>} />
          <Route path="/help/bugs" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Bug Reports - Coming Soon</h1></div>} />
          <Route path="/help/community" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Community - Coming Soon</h1></div>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
