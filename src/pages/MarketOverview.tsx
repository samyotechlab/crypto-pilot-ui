
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MarketOverview = () => {
  const { t } = useLanguage();
  
  const marketData = [
    { symbol: 'BTC/USDT', price: '$65,432', change: '+2.34%', volume: '$2.1B' },
    { symbol: 'ETH/USDT', price: '$3,245', change: '-1.23%', volume: '$1.5B' },
    { symbol: 'BNB/USDT', price: '$412', change: '+0.56%', volume: '$456M' },
    { symbol: 'ADA/USDT', price: '$0.67', change: '+3.45%', volume: '$234M' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('market.overview')}</h1>
          <p className="text-muted-foreground">
            {t('real.time.market.data')}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('top.cryptocurrencies')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketData.map((item) => (
                <div key={item.symbol} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">{item.symbol}</div>
                    <div className="text-sm text-muted-foreground">{t('volume')}: {item.volume}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{item.price}</div>
                    <div className={`text-sm flex items-center ${
                      item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {item.change.startsWith('+') ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      )}
                      {item.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MarketOverview;
