
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Save, TestTube, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StrategyBuilderPage = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('strategy.builder')}</h1>
          <p className="text-muted-foreground">
            {t('build.test.strategies')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('strategy.name')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="strategyName">{t('strategy.name')}</Label>
                <Input
                  id="strategyName"
                  placeholder={t('strategy.name')}
                />
              </div>

              <div>
                <Label htmlFor="strategyDescription">{t('strategy.description')}</Label>
                <Textarea
                  id="strategyDescription"
                  placeholder={t('strategy.description')}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('indicators')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Select>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder={t('indicators')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rsi">{t('rsi')}</SelectItem>
                    <SelectItem value="macd">{t('macd')}</SelectItem>
                    <SelectItem value="bollinger">{t('bollinger.bands')}</SelectItem>
                    <SelectItem value="ma">{t('moving.average')}</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded">
                  <span>{t('rsi')} (14)</span>
                  <Button size="sm" variant="outline" className="text-red-500">
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span>{t('moving.average')} (20)</span>
                  <Button size="sm" variant="outline" className="text-red-500">
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('conditions')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('indicators')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rsi">{t('rsi')}</SelectItem>
                  <SelectItem value="macd">{t('macd')}</SelectItem>
                  <SelectItem value="ma">{t('moving.average')}</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('condition')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="greater">{t('greater.than')}</SelectItem>
                  <SelectItem value="less">{t('less.than')}</SelectItem>
                  <SelectItem value="crosses_above">{t('crosses.above')}</SelectItem>
                  <SelectItem value="crosses_below">{t('crosses.below')}</SelectItem>
                </SelectContent>
              </Select>

              <Input placeholder="Value" type="number" />

              <Button>
                <Plus className="w-4 h-4 mr-2" />
                {t('add.condition')}
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border rounded">
                <span>{t('rsi')} {t('greater.than')} 70</span>
                <Button size="sm" variant="outline" className="text-red-500">
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <span>{t('moving.average')} {t('crosses.above')} Price</span>
                <Button size="sm" variant="outline" className="text-red-500">
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex space-x-4">
          <Button variant="outline">
            <Save className="w-4 h-4 mr-2" />
            {t('save.strategy')}
          </Button>
          <Button variant="outline">
            <TestTube className="w-4 h-4 mr-2" />
            {t('test.strategy')}
          </Button>
          <Button>
            <Rocket className="w-4 h-4 mr-2" />
            {t('deploy.strategy')}
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default StrategyBuilderPage;
