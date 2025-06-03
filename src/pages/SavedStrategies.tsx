
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Play, Edit, Trash2, Copy, Search, Filter } from 'lucide-react';

const SavedStrategies = () => {
  const strategies = [
    {
      id: 1,
      name: 'RSI Momentum',
      pair: 'BTC/USDT',
      status: 'Active',
      performance: '+12.4%',
      trades: 23,
      created: '2024-01-15'
    },
    {
      id: 2,
      name: 'MA Crossover',
      pair: 'ETH/USDT',
      status: 'Paused',
      performance: '+8.7%',
      trades: 15,
      created: '2024-01-10'
    },
    {
      id: 3,
      name: 'Bollinger Bands',
      pair: 'ADA/USDT',
      status: 'Draft',
      performance: 'N/A',
      trades: 0,
      created: '2024-01-12'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Paused': return 'bg-yellow-100 text-yellow-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Saved Strategies</h1>
            <p className="text-muted-foreground">
              Manage and monitor your trading strategies
            </p>
          </div>
          <Button>
            Create New Strategy
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
        </div>

        <div className="grid gap-4">
          {strategies.map((strategy) => (
            <Card key={strategy.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-semibold">{strategy.name}</h3>
                      <p className="text-sm text-gray-500">{strategy.pair}</p>
                    </div>
                    <Badge className={getStatusColor(strategy.status)}>
                      {strategy.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Performance</p>
                      <p className="font-semibold text-green-600">{strategy.performance}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Trades</p>
                      <p className="font-semibold">{strategy.trades}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Created</p>
                      <p className="font-semibold">{strategy.created}</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SavedStrategies;
