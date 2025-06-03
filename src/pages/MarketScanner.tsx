
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MarketScanner = () => {
  const scanResults = [
    { symbol: 'BTC/USDT', price: '$65,432', change: '+2.34%', volume: '$2.1B', signal: 'strong_buy' },
    { symbol: 'ETH/USDT', price: '$3,245', change: '-1.23%', volume: '$1.5B', signal: 'sell' },
    { symbol: 'BNB/USDT', price: '$412', change: '+0.56%', volume: '$456M', signal: 'hold' },
    { symbol: 'ADA/USDT', price: '$0.67', change: '+3.45%', volume: '$234M', signal: 'buy' },
  ];

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case 'strong_buy': return 'bg-green-600';
      case 'buy': return 'bg-green-500';
      case 'hold': return 'bg-yellow-500';
      case 'sell': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market Scanner</h1>
          <p className="text-muted-foreground">
            Scan markets for trading opportunities with technical analysis
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Scan Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scanResults.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="font-medium">{item.symbol}</div>
                      <div className="text-sm text-muted-foreground">Vol: {item.volume}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-bold">{item.price}</div>
                      <div className={`text-sm flex items-center ${
                        item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {item.change.startsWith('+') ? (
                          <TrendingUp className="w-4 h-4 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 mr-1" />
                        )}
                        {item.change}
                      </div>
                    </div>
                    <Badge className={getSignalColor(item.signal)}>
                      {item.signal.replace('_', ' ').toUpperCase()}
                    </Badge>
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

export default MarketScanner;
