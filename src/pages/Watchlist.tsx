
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, TrendingDown, Plus } from 'lucide-react';

const Watchlist = () => {
  const watchlistItems = [
    { symbol: 'BTC/USDT', price: '$65,432', change: '+2.34%', volume: '$2.1B', favorited: true },
    { symbol: 'ETH/USDT', price: '$3,245', change: '-1.23%', volume: '$1.5B', favorited: true },
    { symbol: 'BNB/USDT', price: '$412', change: '+0.56%', volume: '$456M', favorited: false },
    { symbol: 'ADA/USDT', price: '$0.67', change: '+3.45%', volume: '$234M', favorited: true },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Watchlist</h1>
            <p className="text-muted-foreground">
              Track your favorite cryptocurrencies
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add to Watchlist
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>My Watchlist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {watchlistItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="p-0">
                      <Star className={`w-5 h-5 ${item.favorited ? 'fill-yellow-500 text-yellow-500' : 'text-gray-400'}`} />
                    </Button>
                    <div>
                      <div className="font-medium">{item.symbol}</div>
                      <div className="text-sm text-muted-foreground">Vol: {item.volume}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{item.price}</div>
                    <div className={`text-sm flex items-center justify-end ${
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
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Watchlist;
