import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
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
import Documentation from "./pages/Documentation";
import ContactSupport from "./pages/ContactSupport";
import BugReports from "./pages/BugReports";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
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
            
            {/* Strategy Routes */}
            <Route path="/strategy/build" element={<BuildStrategy />} />
            <Route path="/strategy/saved" element={<SavedStrategies />} />
            <Route path="/strategy/backtest" element={<Backtesting />} />
            <Route path="/strategy/marketplace" element={<StrategyMarketplace />} />
            
            {/* Settings Routes */}
            <Route path="/settings/profile" element={<ProfileSettings />} />
            <Route path="/settings/2fa" element={<TwoFactorAuth />} />
            <Route path="/settings/theme" element={<ThemeSettings />} />
            <Route path="/settings/sessions" element={<SessionLogs />} />
            
            {/* Help Routes */}
            <Route path="/help/docs" element={<Documentation />} />
            <Route path="/help/support" element={<ContactSupport />} />
            <Route path="/help/bugs" element={<BugReports />} />
            <Route path="/help/community" element={<Community />} />
            
            {/* Admin placeholder routes */}
            <Route path="/admin/users" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">User Management - Coming Soon</h1></div>} />
            <Route path="/admin/logs" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">System Logs - Coming Soon</h1></div>} />
            <Route path="/admin/stats" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Usage Stats - Coming Soon</h1></div>} />
            <Route path="/admin/monitor" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Server Monitor - Coming Soon</h1></div>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
