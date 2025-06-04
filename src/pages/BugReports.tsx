
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Bug, Search, Filter, Upload, ExternalLink } from 'lucide-react';

const BugReports = () => {
  const [severity, setSeverity] = useState('');

  const bugReports = [
    {
      id: 'BUG-001',
      title: 'Bot stops trading after 24 hours',
      severity: 'High',
      status: 'In Progress',
      reporter: 'user123',
      date: '2024-01-15',
      category: 'Trading'
    },
    {
      id: 'BUG-002',
      title: 'Chart not loading on mobile',
      severity: 'Medium',
      status: 'Fixed',
      reporter: 'trader456',
      date: '2024-01-14',
      category: 'UI/UX'
    },
    {
      id: 'BUG-003',
      title: 'API key validation error',
      severity: 'Low',
      status: 'Open',
      reporter: 'crypto789',
      date: '2024-01-13',
      category: 'API'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Fixed': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Bug Reports</h1>
            <p className="text-muted-foreground">
              Report bugs and track issue status
            </p>
          </div>
          <Button>
            <Bug className="w-4 h-4 mr-2" />
            Report Bug
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Submit Bug Report</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="bugTitle">Bug Title</Label>
                  <Input id="bugTitle" placeholder="Brief description of the bug" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trading">Trading</SelectItem>
                        <SelectItem value="ui">UI/UX</SelectItem>
                        <SelectItem value="api">API</SelectItem>
                        <SelectItem value="performance">Performance</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Severity</Label>
                    <Select value={severity} onValueChange={setSeverity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Detailed description of the bug..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="reproduction">Steps to Reproduce</Label>
                  <Textarea 
                    id="reproduction" 
                    placeholder="1. Go to...&#10;2. Click on...&#10;3. See error"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="expected">Expected Behavior</Label>
                  <Textarea 
                    id="expected" 
                    placeholder="What should happen..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="actual">Actual Behavior</Label>
                  <Textarea 
                    id="actual" 
                    placeholder="What actually happens..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Environment</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <Label htmlFor="browser">Browser</Label>
                      <Input id="browser" placeholder="Chrome 120.0" />
                    </div>
                    <div>
                      <Label htmlFor="os">Operating System</Label>
                      <Input id="os" placeholder="Windows 11" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Attachments</Label>
                  <Button variant="outline" className="w-full mt-2">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Screenshots or Files
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="subscribe" />
                  <Label htmlFor="subscribe" className="text-sm">
                    Subscribe to updates on this bug report
                  </Label>
                </div>

                <Button className="w-full">
                  Submit Bug Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Bug Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search bug reports..."
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <div className="space-y-3">
                  {bugReports.map((bug) => (
                    <div key={bug.id} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-sm text-gray-500">{bug.id}</span>
                          <Badge variant="outline">{bug.category}</Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Badge className={getSeverityColor(bug.severity)}>
                            {bug.severity}
                          </Badge>
                          <Badge className={getStatusColor(bug.status)}>
                            {bug.status}
                          </Badge>
                        </div>
                      </div>
                      <h4 className="font-medium mb-1">{bug.title}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Reported by {bug.reporter}</span>
                        <span>{bug.date}</span>
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
                <CardTitle>Bug Report Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-1">Before reporting:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Search existing reports</li>
                    <li>• Try to reproduce the issue</li>
                    <li>• Clear browser cache</li>
                    <li>• Check system requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Include details:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Screenshots or videos</li>
                    <li>• Console error messages</li>
                    <li>• Steps to reproduce</li>
                    <li>• Browser and OS version</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Useful Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Known Issues
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  System Status
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Release Notes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BugReports;
