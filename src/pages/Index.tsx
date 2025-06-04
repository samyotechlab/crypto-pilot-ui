
import React from 'react';
import { Layout } from '@/components/Layout';
import { DashboardOverview } from '@/components/DashboardOverview';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('dashboard')}</h1>
          <p className="text-muted-foreground">
            {t('welcome.back')}
          </p>
        </div>
        
        <DashboardOverview />
      </div>
    </Layout>
  );
};

export default Index;
