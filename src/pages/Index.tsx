
import React from 'react';
import { Layout } from '@/components/Layout';
import { DashboardOverview } from '@/components/DashboardOverview';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your crypto trading activity.
          </p>
        </div>
        
        <DashboardOverview />
      </div>
    </Layout>
  );
};

export default Index;
