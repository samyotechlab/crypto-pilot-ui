
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Book, Search, ExternalLink, ChevronRight, Video, FileText } from 'lucide-react';

const Documentation = () => {
  const categories = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of crypto trading and bot setup',
      articles: [
        { title: 'Quick Start Guide', type: 'guide', readTime: '5 min' },
        { title: 'Account Setup', type: 'tutorial', readTime: '10 min' },
        { title: 'First Bot Creation', type: 'tutorial', readTime: '15 min' },
        { title: 'Understanding Trading Pairs', type: 'guide', readTime: '8 min' }
      ]
    },
    {
      title: 'Trading Strategies',
      description: 'Advanced strategies and customization options',
      articles: [
        { title: 'RSI Strategy Explained', type: 'guide', readTime: '12 min' },
        { title: 'Grid Trading Setup', type: 'tutorial', readTime: '18 min' },
        { title: 'Backtesting Your Strategy', type: 'tutorial', readTime: '20 min' },
        { title: 'Risk Management', type: 'guide', readTime: '15 min' }
      ]
    },
    {
      title: 'API & Integrations',
      description: 'Connect exchanges and manage API keys',
      articles: [
        { title: 'Exchange API Setup', type: 'tutorial', readTime: '10 min' },
        { title: 'Webhook Configuration', type: 'guide', readTime: '8 min' },
        { title: 'Third-party Integrations', type: 'guide', readTime: '12 min' },
        { title: 'API Rate Limits', type: 'reference', readTime: '5 min' }
      ]
    },
    {
      title: 'Security',
      description: 'Keep your account and funds secure',
      articles: [
        { title: '2FA Setup Guide', type: 'tutorial', readTime: '7 min' },
        { title: 'API Key Security', type: 'guide', readTime: '10 min' },
        { title: 'Session Management', type: 'guide', readTime: '5 min' },
        { title: 'Security Best Practices', type: 'guide', readTime: '12 min' }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'tutorial': return 'bg-blue-100 text-blue-800';
      case 'guide': return 'bg-green-100 text-green-800';
      case 'reference': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
            <p className="text-muted-foreground">
              Everything you need to know about CryptoBot Pro
            </p>
          </div>
          <Button>
            <Video className="w-4 h-4 mr-2" />
            Video Tutorials
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search documentation..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            API Docs
          </Button>
        </div>

        <div className="grid gap-6">
          {categories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  {category.title}
                </CardTitle>
                <p className="text-sm text-gray-600">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {category.articles.map((article) => (
                    <div key={article.title} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div>
                          <h4 className="font-medium">{article.title}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className={getTypeColor(article.type)}>
                              {article.type}
                            </Badge>
                            <span className="text-xs text-gray-500">{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Popular Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <Video className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <h4 className="font-semibold mb-1">Video Library</h4>
                <p className="text-sm text-gray-600 mb-3">Step-by-step video tutorials</p>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Watch
                </Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <FileText className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <h4 className="font-semibold mb-1">API Reference</h4>
                <p className="text-sm text-gray-600 mb-3">Complete API documentation</p>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Explore
                </Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <Book className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                <h4 className="font-semibold mb-1">Trading Guide</h4>
                <p className="text-sm text-gray-600 mb-3">Comprehensive trading manual</p>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Read
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Documentation;
