
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Zap } from 'lucide-react';

const CreateBot = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create New Bot</h1>
          <p className="text-muted-foreground">
            Set up a new trading bot with your preferred strategy
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Bot Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="botName">Bot Name</Label>
                <Input id="botName" placeholder="Enter bot name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tradingPair">Trading Pair</Label>
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
                <Label htmlFor="strategy">Strategy Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select strategy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grid">Grid Trading</SelectItem>
                    <SelectItem value="dca">DCA (Dollar Cost Average)</SelectItem>
                    <SelectItem value="scalping">Scalping</SelectItem>
                    <SelectItem value="arbitrage">Arbitrage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="investment">Investment Amount</Label>
                <Input id="investment" placeholder="Enter amount in USDT" type="number" />
              </div>
            </div>
            
            <Button className="w-full">
              <Zap className="w-4 h-4 mr-2" />
              Create Bot
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateBot;
