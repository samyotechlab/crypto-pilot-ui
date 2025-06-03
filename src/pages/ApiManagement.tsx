
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Copy, Plus, Trash } from 'lucide-react';

const ApiManagement = () => {
  const apiKeys = [
    { name: 'Binance Main', exchange: 'Binance', permissions: ['read', 'trade'], created: '2024-01-15', status: 'active' },
    { name: 'Coinbase Trading', exchange: 'Coinbase Pro', permissions: ['read'], created: '2024-01-10', status: 'active' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">API Management</h1>
            <p className="text-muted-foreground">
              Manage your exchange API keys securely
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add API Key
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((key, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{key.name}</h4>
                        <p className="text-sm text-muted-foreground">{key.exchange}</p>
                      </div>
                      <Badge className={key.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}>
                        {key.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2 mb-2">
                      {key.permissions.map((perm) => (
                        <Badge key={perm} variant="outline">{perm}</Badge>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">Created: {key.created}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </Button>
                      <Button variant="destructive" size="sm">
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
              <CardTitle>Add New API Key</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="keyName">Key Name</Label>
                <Input id="keyName" placeholder="Enter key name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <Input id="apiKey" placeholder="Enter API key" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secretKey">Secret Key</Label>
                <Input id="secretKey" placeholder="Enter secret key" type="password" />
              </div>
              <div className="space-y-2">
                <Label>Permissions</Label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked />
                    <span className="text-sm">Read Access</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span className="text-sm">Trade Access</span>
                  </label>
                </div>
              </div>
              <Button className="w-full">Add API Key</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ApiManagement;
