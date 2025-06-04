
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, Users, Trophy, TrendingUp, ExternalLink, Calendar, Star } from 'lucide-react';

const Community = () => {
  const forumCategories = [
    {
      title: 'General Discussion',
      description: 'General crypto trading discussions',
      posts: 1248,
      topics: 156,
      icon: MessageSquare,
      color: 'text-blue-500'
    },
    {
      title: 'Strategy Sharing',
      description: 'Share and discuss trading strategies',
      posts: 892,
      topics: 89,
      icon: TrendingUp,
      color: 'text-green-500'
    },
    {
      title: 'Technical Support',
      description: 'Get help with technical issues',
      posts: 634,
      topics: 234,
      icon: Users,
      color: 'text-purple-500'
    },
    {
      title: 'Feature Requests',
      description: 'Suggest new features and improvements',
      posts: 423,
      topics: 67,
      icon: Star,
      color: 'text-orange-500'
    }
  ];

  const recentPosts = [
    {
      title: 'Best RSI settings for volatile markets?',
      author: 'CryptoTrader',
      category: 'Strategy Sharing',
      replies: 23,
      time: '2 hours ago',
      avatar: 'CT'
    },
    {
      title: 'How to handle API rate limits?',
      author: 'TechUser',
      category: 'Technical Support',
      replies: 8,
      time: '4 hours ago',
      avatar: 'TU'
    },
    {
      title: 'Portfolio rebalancing feature request',
      author: 'InvestorPro',
      category: 'Feature Requests',
      replies: 15,
      time: '6 hours ago',
      avatar: 'IP'
    },
    {
      title: 'Market analysis for next week',
      author: 'MarketGuru',
      category: 'General Discussion',
      replies: 41,
      time: '8 hours ago',
      avatar: 'MG'
    }
  ];

  const topContributors = [
    { name: 'AlexTrader', posts: 489, reputation: 2847, badge: 'Expert' },
    { name: 'CryptoPro', posts: 356, reputation: 2134, badge: 'Veteran' },
    { name: 'TradingBot', posts: 298, reputation: 1876, badge: 'Helper' },
    { name: 'MarketMaven', posts: 267, reputation: 1654, badge: 'Helper' }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Expert': return 'bg-purple-100 text-purple-800';
      case 'Veteran': return 'bg-blue-100 text-blue-800';
      case 'Helper': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Community</h1>
            <p className="text-muted-foreground">
              Connect with fellow traders and share knowledge
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              Discord
            </Button>
            <Button>
              <MessageSquare className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <h3 className="text-2xl font-bold">12,847</h3>
              <p className="text-sm text-gray-600">Active Members</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <h3 className="text-2xl font-bold">3,234</h3>
              <p className="text-sm text-gray-600">Total Posts</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <h3 className="text-2xl font-bold">546</h3>
              <p className="text-sm text-gray-600">Topics</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <h3 className="text-2xl font-bold">24</h3>
              <p className="text-sm text-gray-600">Online Now</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Forum Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {forumCategories.map((category) => (
                    <div key={category.title} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 bg-gray-100 rounded-lg ${category.color}`}>
                          <category.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{category.title}</h4>
                          <p className="text-sm text-gray-600">{category.description}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{category.posts}</p>
                        <p className="text-xs text-gray-500">posts</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <Avatar>
                        <AvatarFallback>{post.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium">{post.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                          <span>by {post.author}</span>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <span>•</span>
                          <span>{post.replies} replies</span>
                          <span>•</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={contributor.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{contributor.name}</p>
                          <p className="text-xs text-gray-500">{contributor.posts} posts</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getBadgeColor(contributor.badge)} variant="outline">
                          {contributor.badge}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{contributor.reputation} rep</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-1">Be respectful</h4>
                  <p className="text-xs text-gray-600">Treat all community members with respect and courtesy.</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Stay on topic</h4>
                  <p className="text-xs text-gray-600">Keep discussions relevant to the category topic.</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">No spam</h4>
                  <p className="text-xs text-gray-600">Avoid posting repetitive or promotional content.</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Help others</h4>
                  <p className="text-xs text-gray-600">Share knowledge and help fellow traders learn.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>External Communities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Discord Server
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Telegram Group
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Reddit Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
