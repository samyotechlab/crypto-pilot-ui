
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Plus, Trash } from 'lucide-react';

const PriceAlerts = () => {
  const alerts = [
    { symbol: 'BTC/USDT', condition: 'Above $67,000', status: 'active', created: '2024-01-15' },
    { symbol: 'ETH/USDT', condition: 'Below $3,000', status: 'triggered', created: '2024-01-10' },
    { symbol: 'BNB/USDT', condition: 'Above $450', status: 'active', created: '2024-01-20' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Price Alerts</h1>
          <p className="text-muted-foreground">
            Set up price alerts for your favorite cryptocurrencies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Active Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Bell className="w-5 h-5 text-blue-500" />
                        <div>
                          <div className="font-medium">{alert.symbol}</div>
                          <div className="text-sm text-muted-foreground">{alert.condition}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={alert.status === 'active' ? 'bg-green-500' : 'bg-orange-500'}>
                          {alert.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Trash className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Create Alert</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="alertSymbol">Trading Pair</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pair" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="btc-usdt">BTC/USDT</SelectItem>
                    <SelectItem value="eth-usdt">ETH/USDT</SelectItem>
                    <SelectItem value="bnb-usdt">BNB/USDT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="condition">Condition</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="above">Price Above</SelectItem>
                    <SelectItem value="below">Price Below</SelectItem>
                    <SelectItem value="change">% Change</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="price">Target Price</Label>
                <Input id="price" placeholder="Enter price" type="number" />
              </div>
              
              <Button className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Create Alert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PriceAlerts;
