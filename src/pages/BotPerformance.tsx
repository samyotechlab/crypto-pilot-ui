
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown } from 'lucide-react';

const BotPerformance = () => {
  const botPerformanceData = [
    { name: 'Bitcoin Grid Bot', profit: 1234.56, roi: 12.34, trades: 45, status: 'active' },
    { name: 'ETH DCA Bot', profit: -234.12, roi: -2.45, trades: 23, status: 'paused' },
    { name: 'Altcoin Scalper', profit: 567.89, roi: 5.67, trades: 78, status: 'active' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bot Performance</h1>
          <p className="text-muted-foreground">
            Detailed performance metrics for all your trading bots
          </p>
        </div>

        <div className="space-y-4">
          {botPerformanceData.map((bot, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold">{bot.name}</h3>
                      <Badge className={bot.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'}>
                        {bot.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className={`text-lg font-bold ${bot.profit > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        ${bot.profit.toFixed(2)}
                      </div>
                      <div className="text-sm text-muted-foreground">Profit</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold flex items-center ${bot.roi > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {bot.roi > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {bot.roi}%
                      </div>
                      <div className="text-sm text-muted-foreground">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">{bot.trades}</div>
                      <div className="text-sm text-muted-foreground">Trades</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BotPerformance;
