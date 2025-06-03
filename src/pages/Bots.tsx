
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { bot, zap, settings, trending-up, trending-down, play, pause, trash } from 'lucide-react';

const botsData = [
  {
    id: 1,
    name: 'Bitcoin Grid Bot',
    pair: 'BTC/USDT',
    strategy: 'Grid Trading',
    status: 'active',
    profit: 1234.56,
    profitPercent: 12.34,
    trades: 45,
    created: '2024-01-15'
  },
  {
    id: 2,
    name: 'ETH DCA Bot',
    pair: 'ETH/USDT',
    strategy: 'DCA',
    status: 'paused',
    profit: -234.12,
    profitPercent: -2.45,
    trades: 23,
    created: '2024-01-10'
  },
  {
    id: 3,
    name: 'Altcoin Scalper',
    pair: 'ADA/USDT',
    strategy: 'Scalping',
    status: 'active',
    profit: 567.89,
    profitPercent: 5.67,
    trades: 78,
    created: '2024-01-20'
  }
];

const Bots = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Bots</h1>
            <p className="text-muted-foreground">
              Manage and monitor your trading bots
            </p>
          </div>
          <Button className="bg-crypto-blue hover:bg-crypto-blue/90">
            <zap className="w-4 h-4 mr-2" />
            Create New Bot
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {botsData.map((botItem) => (
            <Card key={botItem.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{botItem.name}</CardTitle>
                  <Badge className={
                    botItem.status === 'active' ? 'status-active' : 
                    botItem.status === 'paused' ? 'status-paused' : 
                    'status-error'
                  }>
                    {botItem.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>{botItem.pair}</span>
                  <span>•</span>
                  <span>{botItem.strategy}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Profit</div>
                    <div className={`text-lg font-bold ${
                      botItem.profit > 0 ? 'text-crypto-green' : 'text-crypto-red'
                    }`}>
                      {botItem.profit > 0 ? '+' : ''}${botItem.profit.toFixed(2)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">ROI</div>
                    <div className={`text-lg font-bold flex items-center ${
                      botItem.profitPercent > 0 ? 'text-crypto-green' : 'text-crypto-red'
                    }`}>
                      {botItem.profitPercent > 0 ? (
                        <trending-up className="w-4 h-4 mr-1" />
                      ) : (
                        <trending-down className="w-4 h-4 mr-1" />
                      )}
                      {botItem.profitPercent > 0 ? '+' : ''}{botItem.profitPercent}%
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Trades</span>
                    <span className="font-medium">{botItem.trades}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Created</span>
                    <span className="font-medium">{botItem.created}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button 
                    size="sm" 
                    variant={botItem.status === 'active' ? 'outline' : 'default'}
                    className="flex-1"
                  >
                    {botItem.status === 'active' ? (
                      <>
                        <pause className="w-4 h-4 mr-2" />
                        Pause
                      </>
                    ) : (
                      <>
                        <play className="w-4 h-4 mr-2" />
                        Start
                      </>
                    )}
                  </Button>
                  <Button size="sm" variant="outline">
                    <settings className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-crypto-red hover:text-crypto-red">
                    <trash className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-muted-foreground">Total Bots</div>
                </div>
                <bot className="w-8 h-8 text-crypto-blue" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-crypto-green">8</div>
                  <div className="text-sm text-muted-foreground">Active</div>
                </div>
                <play className="w-8 h-8 text-crypto-green" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-crypto-yellow">3</div>
                  <div className="text-sm text-muted-foreground">Paused</div>
                </div>
                <pause className="w-8 h-8 text-crypto-yellow" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-crypto-red">1</div>
                  <div className="text-sm text-muted-foreground">Error</div>
                </div>
                <zap className="w-8 h-8 text-crypto-red" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Bots;
