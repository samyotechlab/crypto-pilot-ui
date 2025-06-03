
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ManualTrading = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manual Trading</h1>
          <p className="text-muted-foreground">
            Execute trades manually with real-time market data
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Trading Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-muted rounded flex items-center justify-center">
                  <p className="text-muted-foreground">TradingView Chart Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Place Order</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="buy" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="buy" className="text-green-600">Buy</TabsTrigger>
                    <TabsTrigger value="sell" className="text-red-600">Sell</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="buy" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="orderType">Order Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select order type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="market">Market</SelectItem>
                          <SelectItem value="limit">Limit</SelectItem>
                          <SelectItem value="stop">Stop</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (USDT)</Label>
                      <Input id="price" placeholder="0.00" type="number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount (BTC)</Label>
                      <Input id="amount" placeholder="0.00" type="number" />
                    </div>
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Buy BTC
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="sell" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="sellOrderType">Order Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select order type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="market">Market</SelectItem>
                          <SelectItem value="limit">Limit</SelectItem>
                          <SelectItem value="stop">Stop</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="sellPrice">Price (USDT)</Label>
                      <Input id="sellPrice" placeholder="0.00" type="number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="sellAmount">Amount (BTC)</Label>
                      <Input id="sellAmount" placeholder="0.00" type="number" />
                    </div>
                    
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Sell BTC
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Book</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Price</span>
                    <span>Amount</span>
                  </div>
                  <div className="space-y-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-red-500">65,{420 + i}</span>
                        <span>0.{i + 1}234</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center py-2 border-y">
                    <span className="font-medium">65,425.00</span>
                  </div>
                  <div className="space-y-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-green-500">65,{415 - i}</span>
                        <span>0.{i + 1}234</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManualTrading;
