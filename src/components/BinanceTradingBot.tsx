
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { AlertCircle, TrendingUp, TrendingDown, Play, Pause, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BotConfig {
  name: string;
  symbol: string;
  strategy: string;
  investment: number;
  takeProfit: number;
  stopLoss: number;
  isActive: boolean;
}

interface Trade {
  id: string;
  symbol: string;
  side: 'BUY' | 'SELL';
  quantity: number;
  price: number;
  timestamp: number;
  profit?: number;
}

const BinanceTradingBot = () => {
  const { t } = useLanguage();
  const [botConfig, setBotConfig] = useState<BotConfig>({
    name: 'BTC Grid Bot',
    symbol: 'BTCUSDT',
    strategy: 'grid',
    investment: 1000,
    takeProfit: 2.0,
    stopLoss: 1.0,
    isActive: false
  });

  const [trades, setTrades] = useState<Trade[]>([]);
  const [marketPrice, setMarketPrice] = useState<number>(65000);
  const [profit, setProfit] = useState<number>(0);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  // Simulate market price updates
  useEffect(() => {
    if (!botConfig.isActive) return;

    const interval = setInterval(() => {
      setMarketPrice(prev => {
        const change = (Math.random() - 0.5) * 200; // Random price movement
        return Math.max(prev + change, 1000); // Minimum price of $1000
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [botConfig.isActive]);

  // Simulate trading logic
  useEffect(() => {
    if (!botConfig.isActive || !isConnected) return;

    const tradingInterval = setInterval(() => {
      // Simple grid trading simulation
      const shouldTrade = Math.random() > 0.7; // 30% chance to trade
      
      if (shouldTrade) {
        const side: 'BUY' | 'SELL' = Math.random() > 0.5 ? 'BUY' : 'SELL';
        const quantity = 0.001 + Math.random() * 0.01; // Random quantity
        const priceVariation = (Math.random() - 0.5) * 50;
        const tradePrice = marketPrice + priceVariation;
        
        const newTrade: Trade = {
          id: Date.now().toString(),
          symbol: botConfig.symbol,
          side,
          quantity,
          price: tradePrice,
          timestamp: Date.now(),
          profit: side === 'SELL' ? quantity * priceVariation : undefined
        };

        setTrades(prev => [newTrade, ...prev.slice(0, 9)]); // Keep last 10 trades
        
        // Update profit
        if (newTrade.profit) {
          setProfit(prev => prev + newTrade.profit!);
        }
      }
    }, 5000);

    return () => clearInterval(tradingInterval);
  }, [botConfig.isActive, isConnected, marketPrice, botConfig.symbol]);

  const handleStart = () => {
    if (!isConnected) {
      alert('Please connect to Binance API first');
      return;
    }
    setBotConfig(prev => ({ ...prev, isActive: true }));
  };

  const handleStop = () => {
    setBotConfig(prev => ({ ...prev, isActive: false }));
  };

  const handleConfigChange = (field: keyof BotConfig, value: any) => {
    setBotConfig(prev => ({ ...prev, [field]: value }));
  };

  const connectToBinance = () => {
    // Simulate connection to Binance
    setIsConnected(true);
    console.log('Connected to Binance API (simulated)');
  };

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Binance Trading Bot
            <Badge className={isConnected ? 'bg-green-500' : 'bg-red-500'}>
              {isConnected ? 'Connected' : 'Disconnected'}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!isConnected && (
            <div className="flex items-center space-x-2 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-sm font-medium">Not connected to Binance</p>
                <p className="text-xs text-muted-foreground">
                  Connect your Binance API to enable live trading
                </p>
              </div>
              <Button onClick={connectToBinance} size="sm">
                Connect
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bot Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Bot Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="botName">{t('bot.name')}</Label>
              <Input
                id="botName"
                value={botConfig.name}
                onChange={(e) => handleConfigChange('name', e.target.value)}
                disabled={botConfig.isActive}
              />
            </div>

            <div>
              <Label htmlFor="symbol">{t('trading.pair')}</Label>
              <Select
                value={botConfig.symbol}
                onValueChange={(value) => handleConfigChange('symbol', value)}
                disabled={botConfig.isActive}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BTCUSDT">BTC/USDT</SelectItem>
                  <SelectItem value="ETHUSDT">ETH/USDT</SelectItem>
                  <SelectItem value="BNBUSDT">BNB/USDT</SelectItem>
                  <SelectItem value="ADAUSDT">ADA/USDT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="strategy">{t('strategy.type')}</Label>
              <Select
                value={botConfig.strategy}
                onValueChange={(value) => handleConfigChange('strategy', value)}
                disabled={botConfig.isActive}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grid">Grid Trading</SelectItem>
                  <SelectItem value="dca">DCA</SelectItem>
                  <SelectItem value="scalping">Scalping</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="takeProfit">Take Profit (%)</Label>
                <Input
                  id="takeProfit"
                  type="number"
                  value={botConfig.takeProfit}
                  onChange={(e) => handleConfigChange('takeProfit', parseFloat(e.target.value))}
                  disabled={botConfig.isActive}
                />
              </div>
              <div>
                <Label htmlFor="stopLoss">Stop Loss (%)</Label>
                <Input
                  id="stopLoss"
                  type="number"
                  value={botConfig.stopLoss}
                  onChange={(e) => handleConfigChange('stopLoss', parseFloat(e.target.value))}
                  disabled={botConfig.isActive}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="investment">{t('investment.amount')} (USDT)</Label>
              <Input
                id="investment"
                type="number"
                value={botConfig.investment}
                onChange={(e) => handleConfigChange('investment', parseFloat(e.target.value))}
                disabled={botConfig.isActive}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                checked={botConfig.isActive}
                onCheckedChange={(checked) => checked ? handleStart() : handleStop()}
                disabled={!isConnected}
              />
              <Label>Auto Trading</Label>
            </div>

            <div className="flex space-x-2">
              {!botConfig.isActive ? (
                <Button onClick={handleStart} className="flex-1" disabled={!isConnected}>
                  <Play className="w-4 h-4 mr-2" />
                  {t('start')}
                </Button>
              ) : (
                <Button onClick={handleStop} variant="outline" className="flex-1">
                  <Pause className="w-4 h-4 mr-2" />
                  {t('pause')}
                </Button>
              )}
              <Button variant="outline">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>{t('performance')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">${marketPrice.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Current Price</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  ${profit.toFixed(2)}
                </div>
                <div className="text-sm text-muted-foreground">{t('profit')}</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold">{trades.length}</div>
                <div className="text-xs text-muted-foreground">{t('trades')}</div>
              </div>
              <div>
                <div className="text-lg font-bold">
                  {botConfig.isActive ? 'Running' : 'Stopped'}
                </div>
                <div className="text-xs text-muted-foreground">{t('status')}</div>
              </div>
              <div>
                <div className="text-lg font-bold">
                  {((profit / botConfig.investment) * 100).toFixed(2)}%
                </div>
                <div className="text-xs text-muted-foreground">{t('roi')}</div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Recent Trades</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {trades.map((trade) => (
                  <div key={trade.id} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
                    <div className="flex items-center space-x-2">
                      {trade.side === 'BUY' ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      <span>{trade.side}</span>
                      <span>{trade.quantity.toFixed(4)}</span>
                    </div>
                    <div className="text-right">
                      <div>${trade.price.toFixed(2)}</div>
                      {trade.profit && (
                        <div className={`text-xs ${trade.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {trade.profit >= 0 ? '+' : ''}${trade.profit.toFixed(2)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {trades.length === 0 && (
                  <div className="text-center text-muted-foreground py-4">
                    No trades yet
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BinanceTradingBot;
