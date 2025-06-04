
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Settings, TrendingUp, TrendingDown, Play, Pause, Trash } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t('my.bots')}</h1>
            <p className="text-muted-foreground">
              {t('manage.monitor.bots')}
            </p>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Zap className="w-4 h-4 mr-2" />
            {t('create.new.bot')}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {botsData.map((botItem) => (
            <Card key={botItem.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{botItem.name}</CardTitle>
                  <Badge className={
                    botItem.status === 'active' ? 'bg-green-500' : 
                    botItem.status === 'paused' ? 'bg-yellow-500' : 
                    'bg-red-500'
                  }>
                    {t(botItem.status)}
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
                    <div className="text-sm text-muted-foreground">{t('profit')}</div>
                    <div className={`text-lg font-bold ${
                      botItem.profit > 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {botItem.profit > 0 ? '+' : ''}${botItem.profit.toFixed(2)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t('roi')}</div>
                    <div className={`text-lg font-bold flex items-center ${
                      botItem.profitPercent > 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {botItem.profitPercent > 0 ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      )}
                      {botItem.profitPercent > 0 ? '+' : ''}{botItem.profitPercent}%
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{t('trades')}</span>
                    <span className="font-medium">{botItem.trades}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('created')}</span>
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
                        <Pause className="w-4 h-4 mr-2" />
                        {t('pause')}
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        {t('start')}
                      </>
                    )}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-500 hover:text-red-500">
                    <Trash className="w-4 h-4" />
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
                  <div className="text-sm text-muted-foreground">{t('total.bots')}</div>
                </div>
                <Bot className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-500">8</div>
                  <div className="text-sm text-muted-foreground">{t('active')}</div>
                </div>
                <Play className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-yellow-500">3</div>
                  <div className="text-sm text-muted-foreground">{t('paused')}</div>
                </div>
                <Pause className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-red-500">1</div>
                  <div className="text-sm text-muted-foreground">{t('error')}</div>
                </div>
                <Zap className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Bots;
