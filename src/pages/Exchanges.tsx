
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Key, CheckCircle, AlertCircle } from 'lucide-react';

const Exchanges = () => {
  const exchanges = [
    { name: 'Binance', status: 'connected', balance: '$12,345.67', pairs: 1240 },
    { name: 'Coinbase Pro', status: 'disconnected', balance: '$0.00', pairs: 340 },
    { name: 'Kraken', status: 'error', balance: '$0.00', pairs: 180 },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Exchange Connections</h1>
            <p className="text-muted-foreground">
              Connect your trading accounts to enable automated trading
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Exchange
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exchanges.map((exchange) => (
            <Card key={exchange.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{exchange.name}</CardTitle>
                  <Badge className={
                    exchange.status === 'connected' ? 'bg-green-500' :
                    exchange.status === 'error' ? 'bg-red-500' : 'bg-gray-500'
                  }>
                    {exchange.status === 'connected' && <CheckCircle className="w-3 h-3 mr-1" />}
                    {exchange.status === 'error' && <AlertCircle className="w-3 h-3 mr-1" />}
                    {exchange.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Balance</p>
                  <p className="text-xl font-bold">{exchange.balance}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Trading Pairs</p>
                  <p className="font-medium">{exchange.pairs}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto Trading</span>
                  <Switch checked={exchange.status === 'connected'} />
                </div>
                <Button 
                  variant={exchange.status === 'connected' ? 'outline' : 'default'}
                  className="w-full"
                >
                  <Key className="w-4 h-4 mr-2" />
                  {exchange.status === 'connected' ? 'Manage' : 'Connect'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Exchanges;
