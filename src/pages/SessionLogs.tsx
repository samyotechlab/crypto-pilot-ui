
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Monitor, Smartphone, Tablet, MapPin, Clock, Shield, Search } from 'lucide-react';

const SessionLogs = () => {
  const sessions = [
    {
      id: 1,
      device: 'Chrome on Windows',
      deviceType: 'desktop',
      location: 'New York, USA',
      ip: '192.168.1.100',
      loginTime: '2024-01-15 14:30:25',
      status: 'Active',
      current: true
    },
    {
      id: 2,
      device: 'Safari on iPhone',
      deviceType: 'mobile',
      location: 'San Francisco, USA',
      ip: '10.0.0.50',
      loginTime: '2024-01-15 09:15:42',
      status: 'Active',
      current: false
    },
    {
      id: 3,
      device: 'Firefox on MacOS',
      deviceType: 'desktop',
      location: 'London, UK',
      ip: '172.16.0.75',
      loginTime: '2024-01-14 22:45:18',
      status: 'Expired',
      current: false
    },
    {
      id: 4,
      device: 'Chrome on Android',
      deviceType: 'mobile',
      location: 'Tokyo, Japan',
      ip: '203.0.113.25',
      loginTime: '2024-01-14 16:20:33',
      status: 'Terminated',
      current: false
    }
  ];

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'mobile': return Smartphone;
      case 'tablet': return Tablet;
      default: return Monitor;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Expired': return 'bg-yellow-100 text-yellow-800';
      case 'Terminated': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Session Logs</h1>
            <p className="text-muted-foreground">
              Monitor and manage your account sessions
            </p>
          </div>
          <Button variant="destructive">
            <Shield className="w-4 h-4 mr-2" />
            Terminate All Sessions
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search sessions..."
              className="pl-10"
            />
          </div>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sessions</SelectItem>
              <SelectItem value="active">Active Only</SelectItem>
              <SelectItem value="expired">Expired Only</SelectItem>
              <SelectItem value="terminated">Terminated Only</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4">
          {sessions.map((session) => {
            const DeviceIcon = getDeviceIcon(session.deviceType);
            
            return (
              <Card key={session.id} className={session.current ? 'ring-2 ring-blue-500' : ''}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <DeviceIcon className="w-6 h-6 text-gray-600" />
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{session.device}</h3>
                          {session.current && (
                            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                              Current Session
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{session.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{session.loginTime}</span>
                          </div>
                          <span>IP: {session.ip}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(session.status)}>
                        {session.status}
                      </Badge>
                      
                      {!session.current && session.status === 'Active' && (
                        <Button size="sm" variant="outline">
                          Terminate
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Security Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Monitor Unknown Sessions</h4>
                <p className="text-sm text-gray-600">
                  If you see sessions from unfamiliar locations or devices, terminate them immediately and change your password.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Use Secure Networks</h4>
                <p className="text-sm text-gray-600">
                  Avoid logging in from public Wi-Fi networks. Use a VPN when accessing your account from untrusted networks.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Regular Session Cleanup</h4>
                <p className="text-sm text-gray-600">
                  Regularly terminate old or unused sessions to maintain better security hygiene.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SessionLogs;
