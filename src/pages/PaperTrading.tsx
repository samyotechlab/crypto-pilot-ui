
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const PaperTrading = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Paper Trading</h1>
          <p className="text-muted-foreground">
            Practice trading strategies with virtual money
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">$100,000</div>
                  <div className="text-sm text-muted-foreground">Virtual Balance</div>
                </div>
                <DollarSign className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-500">+$5,420</div>
                  <div className="text-sm text-muted-foreground">Paper P&L</div>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-muted-foreground">Paper Trades</div>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Paper Trading History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { pair: 'BTC/USDT', type: 'BUY', amount: '0.1', price: '$65,000', pnl: '+$320', status: 'closed' },
                { pair: 'ETH/USDT', type: 'SELL', amount: '2.5', price: '$3,200', pnl: '-$125', status: 'closed' },
                { pair: 'BNB/USDT', type: 'BUY', amount: '10', price: '$410', pnl: '+$85', status: 'open' },
              ].map((trade, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Badge className={trade.type === 'BUY' ? 'bg-green-500' : 'bg-red-500'}>
                      {trade.type}
                    </Badge>
                    <div>
                      <div className="font-medium">{trade.pair}</div>
                      <div className="text-sm text-muted-foreground">{trade.amount} @ {trade.price}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium ${trade.pnl.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {trade.pnl}
                    </div>
                    <Badge variant={trade.status === 'open' ? 'default' : 'secondary'}>
                      {trade.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Start New Paper Trading Session</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Reset Virtual Balance & Start Fresh
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PaperTrading;
