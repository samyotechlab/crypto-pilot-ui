
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePicker } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, BarChart3, TrendingUp, TrendingDown } from 'lucide-react';

const Backtesting = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const runBacktest = () => {
    setIsRunning(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const results = {
    totalReturn: '24.5%',
    maxDrawdown: '-8.2%',
    sharpeRatio: '1.85',
    winRate: '68%',
    totalTrades: 145,
    profitFactor: '2.1'
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Backtesting</h1>
            <p className="text-muted-foreground">
              Test your strategies against historical data
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Backtest Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Strategy</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select strategy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rsi">RSI Momentum</SelectItem>
                    <SelectItem value="ma">MA Crossover</SelectItem>
                    <SelectItem value="bb">Bollinger Bands</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
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

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label>Start Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>End Date</Label>
                  <Input type="date" />
                </div>
              </div>

              <div>
                <Label>Initial Capital</Label>
                <Input placeholder="10000" />
              </div>

              <div>
                <Label>Commission (%)</Label>
                <Input placeholder="0.1" />
              </div>

              {isRunning ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Running backtest...</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} />
                </div>
              ) : (
                <Button onClick={runBacktest} className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Run Backtest
                </Button>
              )}
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-500" />
                    <p className="text-sm text-gray-500">Total Return</p>
                    <p className="text-xl font-bold text-green-600">{results.totalReturn}</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <TrendingDown className="w-6 h-6 mx-auto mb-2 text-red-500" />
                    <p className="text-sm text-gray-500">Max Drawdown</p>
                    <p className="text-xl font-bold text-red-600">{results.maxDrawdown}</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <BarChart3 className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                    <p className="text-sm text-gray-500">Sharpe Ratio</p>
                    <p className="text-xl font-bold">{results.sharpeRatio}</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-sm text-gray-500">Win Rate</p>
                    <p className="text-xl font-bold">{results.winRate}</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-sm text-gray-500">Total Trades</p>
                    <p className="text-xl font-bold">{results.totalTrades}</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-sm text-gray-500">Profit Factor</p>
                    <p className="text-xl font-bold">{results.profitFactor}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Equity Curve</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-500">Chart will appear here after running backtest</p>
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

export default Backtesting;
