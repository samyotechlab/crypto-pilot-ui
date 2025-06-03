
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Users, TrendingUp } from 'lucide-react';

const SignalTrading = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Signal Trading</h1>
          <p className="text-muted-foreground">
            Follow professional trading signals automatically
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Crypto Expert Pro
                <Badge className="bg-green-500">Active</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Win Rate</span>
                <span className="font-medium text-green-500">78%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Followers</span>
                <span className="font-medium">2,345</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg ROI</span>
                <span className="font-medium text-green-500">+12.5%</span>
              </div>
              <Button className="w-full">
                <Zap className="w-4 h-4 mr-2" />
                Follow Signals
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                DeFi Master
                <Badge variant="outline">Premium</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Win Rate</span>
                <span className="font-medium text-green-500">82%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Followers</span>
                <span className="font-medium">1,678</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg ROI</span>
                <span className="font-medium text-green-500">+18.3%</span>
              </div>
              <Button className="w-full">
                <Users className="w-4 h-4 mr-2" />
                Join Premium
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Scalp King
                <Badge variant="secondary">Free</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Win Rate</span>
                <span className="font-medium text-green-500">65%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Followers</span>
                <span className="font-medium">892</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg ROI</span>
                <span className="font-medium text-green-500">+8.7%</span>
              </div>
              <Button className="w-full" variant="outline">
                <TrendingUp className="w-4 h-4 mr-2" />
                Try Free
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Signals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { pair: 'BTC/USDT', action: 'BUY', price: '$65,420', time: '2 min ago', provider: 'Crypto Expert Pro' },
                { pair: 'ETH/USDT', action: 'SELL', price: '$3,245', time: '5 min ago', provider: 'DeFi Master' },
                { pair: 'BNB/USDT', action: 'BUY', price: '$412', time: '12 min ago', provider: 'Scalp King' },
              ].map((signal, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Badge className={signal.action === 'BUY' ? 'bg-green-500' : 'bg-red-500'}>
                      {signal.action}
                    </Badge>
                    <div>
                      <div className="font-medium">{signal.pair}</div>
                      <div className="text-sm text-muted-foreground">{signal.provider}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{signal.price}</div>
                    <div className="text-sm text-muted-foreground">{signal.time}</div>
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

export default SignalTrading;
