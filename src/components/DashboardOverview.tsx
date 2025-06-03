
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { trending-up, trending-down, bot, activity, wallet, zap } from 'lucide-react';

const portfolioData = {
  totalValue: 125847.32,
  dailyChange: 2.34,
  dailyChangeAmount: 2847.21,
  activeBots: 12,
  totalTrades: 1847,
  profitLoss: 18234.56
};

const topCoins = [
  { symbol: 'BTC', name: 'Bitcoin', price: 43285.67, change: 2.34, volume: '1.2B' },
  { symbol: 'ETH', name: 'Ethereum', price: 2641.89, change: -1.45, volume: '890M' },
  { symbol: 'BNB', name: 'Binance Coin', price: 312.45, change: 4.67, volume: '234M' },
  { symbol: 'ADA', name: 'Cardano', price: 0.5234, change: 1.23, volume: '156M' }
];

const recentActivity = [
  { type: 'buy', pair: 'BTC/USDT', amount: '0.1234', price: '43,285.67', time: '2 min ago', status: 'completed' },
  { type: 'sell', pair: 'ETH/USDT', amount: '2.5678', price: '2,641.89', time: '5 min ago', status: 'completed' },
  { type: 'buy', pair: 'BNB/USDT', amount: '15.234', price: '312.45', time: '12 min ago', status: 'pending' },
  { type: 'sell', pair: 'ADA/USDT', amount: '1000.00', price: '0.5234', time: '18 min ago', status: 'completed' }
];

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Portfolio Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio</CardTitle>
            <wallet className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${portfolioData.totalValue.toLocaleString()}</div>
            <div className="flex items-center space-x-1 text-sm">
              {portfolioData.dailyChange > 0 ? (
                <trending-up className="h-4 w-4 text-crypto-green" />
              ) : (
                <trending-down className="h-4 w-4 text-crypto-red" />
              )}
              <span className={portfolioData.dailyChange > 0 ? 'text-crypto-green' : 'text-crypto-red'}>
                {portfolioData.dailyChange > 0 ? '+' : ''}{portfolioData.dailyChange}%
              </span>
              <span className="text-muted-foreground">
                (${portfolioData.dailyChangeAmount.toLocaleString()})
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Bots</CardTitle>
            <bot className="h-4 w-4 text-crypto-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolioData.activeBots}</div>
            <p className="text-xs text-muted-foreground">
              +2 new this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Trades</CardTitle>
            <activity className="h-4 w-4 text-crypto-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolioData.totalTrades}</div>
            <p className="text-xs text-muted-foreground">
              +127 today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profit/Loss</CardTitle>
            <zap className="h-4 w-4 text-crypto-yellow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-crypto-green">
              +${portfolioData.profitLoss.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +12.3% all time
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <trending-up className="h-5 w-5 text-crypto-green" />
              <span>Top Gainers</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCoins.map((coin) => (
                <div key={coin.symbol} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{coin.symbol[0]}</span>
                    </div>
                    <div>
                      <div className="font-medium">{coin.symbol}</div>
                      <div className="text-sm text-muted-foreground">{coin.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${coin.price.toLocaleString()}</div>
                    <div className={`text-sm flex items-center ${
                      coin.change > 0 ? 'text-crypto-green' : 'text-crypto-red'
                    }`}>
                      {coin.change > 0 ? '+' : ''}{coin.change}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <activity className="h-5 w-5 text-crypto-blue" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((trade, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Badge 
                      variant={trade.type === 'buy' ? 'default' : 'secondary'}
                      className={trade.type === 'buy' ? 'bg-crypto-green text-white' : 'bg-crypto-red text-white'}
                    >
                      {trade.type.toUpperCase()}
                    </Badge>
                    <div>
                      <div className="font-medium">{trade.pair}</div>
                      <div className="text-sm text-muted-foreground">{trade.amount}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${trade.price}</div>
                    <div className="text-sm text-muted-foreground">{trade.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
