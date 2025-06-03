
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const AlertLogs = () => {
  const alertHistory = [
    { id: 1, type: 'Price Alert', message: 'BTC/USDT reached $67,000', status: 'triggered', time: '2 hours ago' },
    { id: 2, type: 'Bot Alert', message: 'Grid Bot #1 completed trade', status: 'sent', time: '3 hours ago' },
    { id: 3, type: 'System Alert', message: 'API key expires in 7 days', status: 'pending', time: '1 day ago' },
    { id: 4, type: 'Price Alert', message: 'ETH/USDT dropped below $3,200', status: 'triggered', time: '2 days ago' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'triggered': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'sent': return <CheckCircle className="w-4 h-4 text-blue-500" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-500" />;
      default: return <AlertCircle className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Alert Logs</h1>
            <p className="text-muted-foreground">
              View history of all alerts and notifications
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Alerts</SelectItem>
                <SelectItem value="price">Price Alerts</SelectItem>
                <SelectItem value="bot">Bot Alerts</SelectItem>
                <SelectItem value="system">System Alerts</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Alert History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertHistory.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Bell className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium">{alert.message}</div>
                      <div className="text-sm text-muted-foreground">{alert.type} • {alert.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(alert.status)}
                    <Badge variant="outline">
                      {alert.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AlertLogs;
