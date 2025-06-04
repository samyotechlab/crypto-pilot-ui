
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings, Plus, TestTube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExchangeSettings = () => {
  const { t } = useLanguage();
  
  const connectedExchanges = [
    { name: 'Binance', status: 'connected', lastSync: '2 minutes ago' },
    { name: 'Coinbase Pro', status: 'connected', lastSync: '5 minutes ago' },
    { name: 'Kraken', status: 'disconnected', lastSync: '2 hours ago' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t('exchanges.api')}</h1>
            <p className="text-muted-foreground">
              {t('connect.manage.exchanges')}
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            {t('add.new.exchange')}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('connected.exchanges')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
                <div>{t('exchange.name')}</div>
                <div>{t('api.status')}</div>
                <div>{t('last.sync')}</div>
                <div>{t('actions')}</div>
              </div>
              {connectedExchanges.map((exchange, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center py-2">
                  <div className="font-medium">{exchange.name}</div>
                  <div>
                    <Badge className={exchange.status === 'connected' ? 'bg-green-500' : 'bg-red-500'}>
                      {t(exchange.status)}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">{exchange.lastSync}</div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Settings className="w-4 h-4 mr-1" />
                      {t('configure')}
                    </Button>
                    {exchange.status === 'connected' ? (
                      <Button size="sm" variant="outline" className="text-red-500">
                        {t('disconnect')}
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="text-green-500">
                        {t('connected')}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('add.new.exchange')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="exchange">{t('select.exchange')}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('select.exchange')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="binance">Binance</SelectItem>
                  <SelectItem value="coinbase">Coinbase Pro</SelectItem>
                  <SelectItem value="kraken">Kraken</SelectItem>
                  <SelectItem value="bybit">Bybit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="apiKey">{t('api.key')}</Label>
              <Input
                id="apiKey"
                type="password"
                placeholder={t('api.key')}
              />
            </div>

            <div>
              <Label htmlFor="apiSecret">{t('api.secret')}</Label>
              <Input
                id="apiSecret"
                type="password"
                placeholder={t('api.secret')}
              />
            </div>

            <div>
              <Label htmlFor="passphrase">{t('passphrase')} (Optional)</Label>
              <Input
                id="passphrase"
                type="password"
                placeholder={t('passphrase')}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="sandbox" />
              <Label htmlFor="sandbox">{t('sandbox.mode')}</Label>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline">
                <TestTube className="w-4 h-4 mr-2" />
                {t('test.connection')}
              </Button>
              <Button>
                {t('save.configuration')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ExchangeSettings;
