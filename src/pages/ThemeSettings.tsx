
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Moon, Sun, Monitor, Palette, Eye } from 'lucide-react';

const ThemeSettings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState([14]);
  const [accentColor, setAccentColor] = useState('blue');

  const themes = [
    { id: 'light', name: 'Light', icon: Sun, preview: 'bg-white border-gray-200' },
    { id: 'dark', name: 'Dark', icon: Moon, preview: 'bg-gray-900 border-gray-700' },
    { id: 'system', name: 'System', icon: Monitor, preview: 'bg-gradient-to-r from-white to-gray-900' }
  ];

  const accentColors = [
    { id: 'blue', name: 'Blue', color: 'bg-blue-500' },
    { id: 'green', name: 'Green', color: 'bg-green-500' },
    { id: 'purple', name: 'Purple', color: 'bg-purple-500' },
    { id: 'red', name: 'Red', color: 'bg-red-500' },
    { id: 'orange', name: 'Orange', color: 'bg-orange-500' },
    { id: 'pink', name: 'Pink', color: 'bg-pink-500' }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Theme Settings</h1>
            <p className="text-muted-foreground">
              Customize the appearance of your dashboard
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Appearance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Theme</Label>
                  <div className="grid grid-cols-3 gap-3 mt-2">
                    {themes.map((theme) => (
                      <div
                        key={theme.id}
                        className="cursor-pointer group"
                        onClick={() => {}}
                      >
                        <div className={`p-4 rounded-lg border-2 border-gray-200 group-hover:border-blue-500 ${theme.preview}`}>
                          <theme.icon className="w-6 h-6 mx-auto mb-2" />
                        </div>
                        <p className="text-sm text-center mt-1">{theme.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Accent Color</Label>
                  <div className="grid grid-cols-6 gap-2 mt-2">
                    {accentColors.map((color) => (
                      <button
                        key={color.id}
                        className={`w-8 h-8 rounded-full ${color.color} ${
                          accentColor === color.id ? 'ring-2 ring-gray-400 ring-offset-2' : ''
                        }`}
                        onClick={() => setAccentColor(color.id)}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">High Contrast</Label>
                    <p className="text-sm text-gray-500">Increase contrast for better readability</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Reduced Motion</Label>
                    <p className="text-sm text-gray-500">Minimize animations and transitions</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Display
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Font Size</Label>
                  <div className="mt-2 space-y-2">
                    <Slider
                      value={fontSize}
                      onValueChange={setFontSize}
                      max={20}
                      min={10}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Small</span>
                      <span>Medium</span>
                      <span>Large</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Chart Style</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select chart style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="candlestick">Candlestick</SelectItem>
                      <SelectItem value="line">Line</SelectItem>
                      <SelectItem value="bar">Bar</SelectItem>
                      <SelectItem value="area">Area</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Sidebar Position</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Left</SelectItem>
                      <SelectItem value="right">Right</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Dashboard Preview</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    accentColor === 'blue' ? 'bg-blue-100 text-blue-800' :
                    accentColor === 'green' ? 'bg-green-100 text-green-800' :
                    accentColor === 'purple' ? 'bg-purple-100 text-purple-800' :
                    accentColor === 'red' ? 'bg-red-100 text-red-800' :
                    accentColor === 'orange' ? 'bg-orange-100 text-orange-800' :
                    'bg-pink-100 text-pink-800'
                  }`}>
                    Active
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 border rounded-lg">
                    <p className="text-sm text-gray-500">Total Balance</p>
                    <p className="text-xl font-bold">$12,345</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="text-sm text-gray-500">Today's P&L</p>
                    <p className="text-xl font-bold text-green-600">+$234</p>
                  </div>
                </div>

                <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Chart Preview</p>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className={
                    accentColor === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                    accentColor === 'green' ? 'bg-green-500 hover:bg-green-600' :
                    accentColor === 'purple' ? 'bg-purple-500 hover:bg-purple-600' :
                    accentColor === 'red' ? 'bg-red-500 hover:bg-red-600' :
                    accentColor === 'orange' ? 'bg-orange-500 hover:bg-orange-600' :
                    'bg-pink-500 hover:bg-pink-600'
                  }>
                    Primary Button
                  </Button>
                  <Button size="sm" variant="outline">
                    Secondary Button
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline">Reset to Default</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </Layout>
  );
};

export default ThemeSettings;
