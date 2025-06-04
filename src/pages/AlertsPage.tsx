
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Plus, Edit, Trash } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AlertsPage = () => {
  const { t } = useLanguage();
  
  const activeAlerts = [
    { asset: 'BTC/USDT', condition: 'above', targetPrice: '$70,000', status: 'active', method: 'email' },
    { asset: 'ETH/USDT', condition: 'below', targetPrice: '$3,000', status: 'active', method: 'push' },
    { asset: 'BNB/USDT', condition: 'above', targetPrice: '$500', status: 'triggered', method: 'webhook' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t('alerts')}</h1>
            <p className="text-muted-foreground">
              {t('create.manage.alerts')}
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            {t('create.new.alert')}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('active.alerts')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
                <div>{t('asset')}</div>
                <div>{t('condition')}</div>
                <div>{t('target.price')}</div>
                <div>{t('status')}</div>
                <div>{t('notification.method')}</div>
                <div>{t('actions')}</div>
              </div>
              {activeAlerts.map((alert, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center py-2">
                  <div className="font-medium">{alert.asset}</div>
                  <div className="capitalize">{t(alert.condition)}</div>
                  <div>{alert.targetPrice}</div>
                  <div>
                    <Badge className={
                      alert.status === 'active' ? 'bg-green-500' : 
                      alert.status === 'triggered' ? 'bg-blue-500' : 'bg-gray-500'
                    }>
                      {t(alert.status)}
                    </Badge>
                  </div>
                  <div className="capitalize">{t(alert.method)}</div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-500">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <Bell className="w-5 h-5 mr-2 inline" />
              {t('create.new.alert')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="asset">{t('asset')}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('select.asset')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="btc-usdt">BTC/USDT</SelectItem>
                  <SelectItem value="eth-usdt">ETH/USDT</SelectItem>
                  <SelectItem value="bnb-usdt">BNB/USDT</SelectItem>
                  <SelectItem value="ada-usdt">ADA/USDT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="condition">{t('condition')}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('select.condition')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="above">{t('above')}</SelectItem>
                  <SelectItem value="below">{t('below')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="targetPrice">{t('target.price')}</Label>
              <Input
                id="targetPrice"
                type="number"
                placeholder={t('enter.target.price')}
              />
            </div>

            <div>
              <Label htmlFor="method">{t('notification.method')}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('notification.method')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">{t('email')}</SelectItem>
                  <SelectItem value="push">{t('push')}</SelectItem>
                  <SelectItem value="webhook">{t('webhook')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button>
              {t('create.alert')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AlertsPage;
