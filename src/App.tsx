
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
          
          {/* Placeholder routes for remaining sections */}
          <Route path="/exchanges" element={<div>Exchanges - Coming Soon</div>} />
          <Route path="/api" element={<div>API Management - Coming Soon</div>} />
          <Route path="/balances" element={<div>Sync Balances - Coming Soon</div>} />
          <Route path="/alerts/create" element={<div>Create Alert - Coming Soon</div>} />
          <Route path="/alerts/settings" element={<div>Notification Settings - Coming Soon</div>} />
          <Route path="/alerts/logs" element={<div>Alert Logs - Coming Soon</div>} />
          <Route path="/strategy/build" element={<div>Build Strategy - Coming Soon</div>} />
          <Route path="/strategy/saved" element={<div>Saved Strategies - Coming Soon</div>} />
          <Route path="/strategy/backtest" element={<div>Backtesting - Coming Soon</div>} />
          <Route path="/strategy/marketplace" element={<div>Strategy Marketplace - Coming Soon</div>} />
          <Route path="/settings/profile" element={<div>Profile Settings - Coming Soon</div>} />
          <Route path="/settings/2fa" element={<div>Two-Factor Auth - Coming Soon</div>} />
          <Route path="/settings/theme" element={<div>Theme Settings - Coming Soon</div>} />
          <Route path="/settings/sessions" element={<div>Session Logs - Coming Soon</div>} />
          <Route path="/admin/users" element={<div>User Management - Coming Soon</div>} />
          <Route path="/admin/logs" element={<div>System Logs - Coming Soon</div>} />
          <Route path="/admin/stats" element={<div>Usage Stats - Coming Soon</div>} />
          <Route path="/admin/monitor" element={<div>Server Monitor - Coming Soon</div>} />
          <Route path="/help/docs" element={<div>Documentation - Coming Soon</div>} />
          <Route path="/help/support" element={<div>Contact Support - Coming Soon</div>} />
          <Route path="/help/bugs" element={<div>Bug Reports - Coming Soon</div>} />
          <Route path="/help/community" element={<div>Community - Coming Soon</div>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
