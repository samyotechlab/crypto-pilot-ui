
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Bell, Plus } from 'lucide-react';

const CreateAlert = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Alert</h1>
          <p className="text-muted-foreground">
            Set up custom alerts for price movements and trading events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Price Alert</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="symbol">Trading Pair</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select trading pair" />
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
                    <SelectItem value="change-up">% Change Up</SelectItem>
                    <SelectItem value="change-down">% Change Down</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="value">Target Value</Label>
                <Input id="value" placeholder="Enter value" type="number" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email">Email Notification</Label>
                  <Switch id="email" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push">Push Notification</Label>
                  <Switch id="push" defaultChecked />
                </div>
              </div>
              
              <Button className="w-full">
                <Bell className="w-4 h-4 mr-2" />
                Create Price Alert
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bot Alert</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bot">Select Bot</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grid-bot-1">Grid Bot #1</SelectItem>
                    <SelectItem value="dca-bot-1">DCA Bot #1</SelectItem>
                    <SelectItem value="scalp-bot-1">Scalping Bot #1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="event">Event Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="order-filled">Order Filled</SelectItem>
                    <SelectItem value="stop-loss">Stop Loss Triggered</SelectItem>
                    <SelectItem value="take-profit">Take Profit Hit</SelectItem>
                    <SelectItem value="error">Bot Error</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-bot">Email Notification</Label>
                  <Switch id="email-bot" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-bot">Push Notification</Label>
                  <Switch id="push-bot" defaultChecked />
                </div>
              </div>
              
              <Button className="w-full">
                <Bell className="w-4 h-4 mr-2" />
                Create Bot Alert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAlert;
