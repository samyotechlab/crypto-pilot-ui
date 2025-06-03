
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Plus, Save, Play, Settings } from 'lucide-react';

const BuildStrategy = () => {
  const [strategyName, setStrategyName] = useState('');

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Build Strategy</h1>
            <p className="text-muted-foreground">
              Create and customize your trading strategies
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Save className="w-4 h-4 mr-2" />
              Save Draft
            </Button>
            <Button>
              <Play className="w-4 h-4 mr-2" />
              Test Strategy
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Strategy Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Strategy Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter strategy name"
                    value={strategyName}
                    onChange={(e) => setStrategyName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Trading Pair</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pair" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btc-usdt">BTC/USDT</SelectItem>
                        <SelectItem value="eth-usdt">ETH/USDT</SelectItem>
                        <SelectItem value="ada-usdt">ADA/USDT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Timeframe</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1m">1 Minute</SelectItem>
                        <SelectItem value="5m">5 Minutes</SelectItem>
                        <SelectItem value="1h">1 Hour</SelectItem>
                        <SelectItem value="1d">1 Day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strategy Logic</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="conditions" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="conditions">Entry Conditions</TabsTrigger>
                    <TabsTrigger value="exit">Exit Conditions</TabsTrigger>
                    <TabsTrigger value="risk">Risk Management</TabsTrigger>
                  </TabsList>
                  <TabsContent value="conditions" className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Plus className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-gray-500">Add entry conditions</p>
                      <Button variant="outline" className="mt-2">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Condition
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="exit" className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Plus className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-gray-500">Add exit conditions</p>
                      <Button variant="outline" className="mt-2">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Condition
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="risk" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Stop Loss (%)</Label>
                        <Input placeholder="2.0" />
                      </div>
                      <div>
                        <Label>Take Profit (%)</Label>
                        <Input placeholder="5.0" />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Strategy Templates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">RSI Divergence</h4>
                    <Badge variant="secondary">Popular</Badge>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Buy on RSI oversold</p>
                </div>
                <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <h4 className="font-medium">Moving Average Cross</h4>
                  <p className="text-sm text-gray-500 mt-1">Golden cross strategy</p>
                </div>
                <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <h4 className="font-medium">Bollinger Bands</h4>
                  <p className="text-sm text-gray-500 mt-1">Mean reversion</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strategy Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Conditions</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Complexity</span>
                  <Badge variant="outline">Simple</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Est. Signals/Day</span>
                  <span className="font-medium">-</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuildStrategy;
