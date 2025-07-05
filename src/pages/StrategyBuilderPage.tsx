
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Save, Play, Settings, Trash2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StrategyBuilderPage = () => {
  const { t } = useLanguage();
  
  const strategies = [
    { id: 1, name: 'RSI Strategy', status: 'active', performance: '+12.5%' },
    { id: 2, name: 'MA Crossover', status: 'paused', performance: '+8.3%' },
    { id: 3, name: 'Bollinger Bands', status: 'draft', performance: '-' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t('strategy.builder')}</h1>
            <p className="text-muted-foreground">
              {t('create.custom.strategies')}
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            {t('build.strategy')}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('my.strategies')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {strategies.map((strategy) => (
                    <div key={strategy.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="font-medium">{strategy.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {t('strategy.performance')}: {strategy.performance}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={
                          strategy.status === 'active' ? 'bg-green-500' :
                          strategy.status === 'paused' ? 'bg-yellow-500' : 'bg-gray-500'
                        }>
                          {t(strategy.status)}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Settings className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('public.strategies')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">Grid Trading Pro</div>
                      <div className="text-sm text-muted-foreground">By TradingExpert</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Popular</Badge>
                      <Button size="sm" variant="outline">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('backtest.results')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">+15.2%</div>
                  <div className="text-sm text-muted-foreground">{t('roi')}</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">{t('trades')}</div>
                    <div className="font-medium">247</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Win Rate</div>
                    <div className="font-medium">68%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  {t('save.strategy')}
                </Button>
                <Button variant="outline" className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  {t('test.strategy')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StrategyBuilderPage;
