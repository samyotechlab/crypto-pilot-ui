
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { User, Shield, Bell, Save } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SettingsPage = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('settings')}</h1>
          <p className="text-muted-foreground">
            {t('manage.account.preferences')}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {t('profile.information')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="fullName">{t('full.name')}</Label>
              <Input
                id="fullName"
                defaultValue="John Doe"
                placeholder={t('full.name')}
              />
            </div>

            <div>
              <Label htmlFor="email">{t('email.address')}</Label>
              <Input
                id="email"
                type="email"
                defaultValue="john.doe@example.com"
                placeholder={t('email.address')}
              />
            </div>

            <div>
              <Label htmlFor="phone">{t('phone.number')}</Label>
              <Input
                id="phone"
                type="tel"
                defaultValue="+1 234 567 8900"
                placeholder={t('phone.number')}
              />
            </div>

            <Button>
              <Save className="w-4 h-4 mr-2" />
              {t('update.profile')}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              {t('security.settings')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">{t('change.password')}</h4>
              <div>
                <Label htmlFor="currentPassword">{t('current.password')}</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  placeholder={t('current.password')}
                />
              </div>
              <div>
                <Label htmlFor="newPassword">{t('new.password')}</Label>
                <Input
                  id="newPassword"
                  type="password"
                  placeholder={t('new.password')}
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">{t('confirm.password')}</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder={t('confirm.password')}
                />
              </div>
              <Button>
                {t('update.password')}
              </Button>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="font-medium">{t('two.factor.authentication')}</h4>
              <div className="flex items-center space-x-2">
                <Switch id="2fa" />
                <Label htmlFor="2fa">{t('enable.2fa')}</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              {t('notification.preferences')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="tradeNotifications">{t('trade.notifications')}</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when your bots execute trades
                </p>
              </div>
              <Switch id="tradeNotifications" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="priceAlerts">{t('price.alerts.notifications')}</Label>
                <p className="text-sm text-muted-foreground">
                  Receive alerts when price targets are reached
                </p>
              </div>
              <Switch id="priceAlerts" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="systemUpdates">{t('system.updates')}</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about system updates and maintenance
                </p>
              </div>
              <Switch id="systemUpdates" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="marketingEmails">{t('marketing.emails')}</Label>
                <p className="text-sm text-muted-foreground">
                  Receive newsletters and promotional content
                </p>
              </div>
              <Switch id="marketingEmails" />
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SettingsPage;
