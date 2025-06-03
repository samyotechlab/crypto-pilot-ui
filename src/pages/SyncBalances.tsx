
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Coins } from 'lucide-react';

const SyncBalances = () => {
  const balances = [
    { exchange: 'Binance', btc: '0.5234', eth: '2.456', usdt: '1,234.56', lastSync: '2 min ago' },
    { exchange: 'Coinbase Pro', btc: '0.1234', eth: '1.234', usdt: '567.89', lastSync: '5 min ago' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Sync Balances</h1>
            <p className="text-muted-foreground">
              Keep your exchange balances synchronized
            </p>
          </div>
          <Button>
            <RefreshCw className="w-4 h-4 mr-2" />
            Sync All
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {balances.map((balance) => (
            <Card key={balance.exchange}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{balance.exchange}</CardTitle>
                  <Badge variant="outline">Last sync: {balance.lastSync}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Coins className="w-6 h-6 mx-auto mb-1 text-orange-500" />
                    <p className="text-sm font-medium">BTC</p>
                    <p className="text-lg font-bold">{balance.btc}</p>
                  </div>
                  <div className="text-center">
                    <Coins className="w-6 h-6 mx-auto mb-1 text-blue-500" />
                    <p className="text-sm font-medium">ETH</p>
                    <p className="text-lg font-bold">{balance.eth}</p>
                  </div>
                  <div className="text-center">
                    <Coins className="w-6 h-6 mx-auto mb-1 text-green-500" />
                    <p className="text-sm font-medium">USDT</p>
                    <p className="text-lg font-bold">{balance.usdt}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Sync {balance.exchange}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SyncBalances;
