
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { HelpCircle, MessageSquare, Mail, Book, Video, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HelpPage = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t('how.to.create.bot'),
      answer: 'You can create a trading bot by going to the Bots section and clicking "Create New Bot". Choose your trading pair, strategy, and investment amount.'
    },
    {
      question: t('how.to.connect.exchange'),
      answer: 'Navigate to Exchanges & API section, select your exchange, and enter your API credentials. Make sure to enable trading permissions.'
    },
    {
      question: t('how.to.set.alerts'),
      answer: 'Go to the Alerts section, click "Create New Alert", select your asset, condition, and target price, then choose your notification method.'
    }
  ];

  const guides = [
    { title: t('getting.started.guide'), icon: Book, description: 'Learn the basics of using CryptoBot Pro' },
    { title: t('advanced.trading.guide'), icon: Video, description: 'Advanced strategies and techniques' },
    { title: t('api.documentation'), icon: ExternalLink, description: 'Complete API reference and examples' }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('help')}</h1>
          <p className="text-muted-foreground">
            {t('get.help.support')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                {t('frequently.asked.questions')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                {t('contact.support')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm space-y-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{t('support.email')}</span>
                </div>
                <div className="text-muted-foreground">
                  {t('support.hours')}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="subject">{t('subject')}</Label>
                  <Input
                    id="subject"
                    placeholder={t('subject')}
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t('message')}</Label>
                  <Textarea
                    id="message"
                    placeholder={t('message')}
                    rows={4}
                  />
                </div>

                <Button className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {t('send.message')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('user.guides')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {guides.map((guide, index) => {
                const IconComponent = guide.icon;
                return (
                  <div key={index} className="p-4 border rounded-lg text-center hover:bg-gray-50 cursor-pointer">
                    <IconComponent className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <h4 className="font-semibold mb-1">{guide.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                    <Button size="sm" variant="outline">
                      {guide.icon === Video ? t('watch.tutorial') : t('view.guide')}
                    </Button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default HelpPage;
