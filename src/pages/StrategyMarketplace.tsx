
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Star, Download, Search, Filter, TrendingUp } from 'lucide-react';

const StrategyMarketplace = () => {
  const strategies = [
    {
      id: 1,
      name: 'Advanced RSI Strategy',
      author: 'CryptoMaster',
      rating: 4.8,
      downloads: 1240,
      price: 'Free',
      tags: ['RSI', 'Momentum'],
      performance: '+18.5%',
      description: 'A sophisticated RSI-based strategy with multiple confirmations'
    },
    {
      id: 2,
      name: 'Grid Trading Pro',
      author: 'GridBot',
      rating: 4.6,
      downloads: 856,
      price: '$29',
      tags: ['Grid', 'DCA'],
      performance: '+22.1%',
      description: 'Professional grid trading strategy with dynamic adjustments'
    },
    {
      id: 3,
      name: 'Scalping Master',
      author: 'QuickTrade',
      rating: 4.9,
      downloads: 2105,
      price: '$49',
      tags: ['Scalping', 'High-Frequency'],
      performance: '+31.2%',
      description: 'High-frequency scalping strategy for experienced traders'
    },
    {
      id: 4,
      name: 'Trend Following',
      author: 'TrendSeeker',
      rating: 4.4,
      downloads: 634,
      price: 'Free',
      tags: ['Trend', 'Moving Average'],
      performance: '+14.7%',
      description: 'Simple yet effective trend following strategy'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Strategy Marketplace</h1>
            <p className="text-muted-foreground">
              Discover and download proven trading strategies
            </p>
          </div>
          <Button>
            Publish Strategy
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search strategies..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            Sort by Performance
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy) => (
            <Card key={strategy.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{strategy.name}</CardTitle>
                    <p className="text-sm text-gray-500">by {strategy.author}</p>
                  </div>
                  <Badge variant={strategy.price === 'Free' ? 'secondary' : 'default'}>
                    {strategy.price}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{strategy.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {strategy.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{strategy.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4 text-gray-400" />
                    <span>{strategy.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>{strategy.performance}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    Preview
                  </Button>
                  <Button className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Get Strategy
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StrategyMarketplace;
