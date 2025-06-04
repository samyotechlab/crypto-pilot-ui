
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

const LiveCharts = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t('live.charts')}</h1>
            <p className="text-muted-foreground">
              {t('realtime.trading.charts')}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Select defaultValue="btc-usdt">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="btc-usdt">BTC/USDT</SelectItem>
                <SelectItem value="eth-usdt">ETH/USDT</SelectItem>
                <SelectItem value="bnb-usdt">BNB/USDT</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="h-[600px] bg-muted rounded flex items-center justify-center">
              <p className="text-muted-foreground">{t('advanced.tradingview.chart')}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default LiveCharts;
