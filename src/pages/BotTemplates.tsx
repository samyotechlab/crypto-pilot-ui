
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Star } from 'lucide-react';

const BotTemplates = () => {
  const templates = [
    { 
      name: 'Conservative Grid', 
      description: 'Low-risk grid trading strategy for stable returns',
      rating: 4.5,
      downloads: 1234,
      category: 'Grid Trading'
    },
    { 
      name: 'Aggressive DCA', 
      description: 'High-frequency dollar cost averaging for volatile markets',
      rating: 4.2,
      downloads: 890,
      category: 'DCA'
    },
    { 
      name: 'Scalping Pro', 
      description: 'Quick profit scalping strategy for experienced traders',
      rating: 4.8,
      downloads: 567,
      category: 'Scalping'
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Strategy Templates</h1>
          <p className="text-muted-foreground">
            Pre-configured bot strategies ready to deploy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <Badge variant="outline">{template.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{template.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span>{template.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    <span>{template.downloads}</span>
                  </div>
                </div>

                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Use Template
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BotTemplates;
