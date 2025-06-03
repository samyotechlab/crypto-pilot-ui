
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { QrCode, Shield, Smartphone, Key } from 'lucide-react';

const TwoFactorAuth = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Two-Factor Authentication</h1>
            <p className="text-muted-foreground">
              Secure your account with an additional layer of protection
            </p>
          </div>
          <Badge variant={isTwoFactorEnabled ? "default" : "secondary"} className="px-3 py-1">
            <Shield className="w-3 h-3 mr-1" />
            {isTwoFactorEnabled ? "Enabled" : "Disabled"}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Authenticator App
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable 2FA</p>
                  <p className="text-sm text-gray-500">Use an authenticator app for verification</p>
                </div>
                <Switch 
                  checked={isTwoFactorEnabled}
                  onCheckedChange={setIsTwoFactorEnabled}
                />
              </div>

              {!isTwoFactorEnabled && (
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg text-center">
                    <QrCode className="w-32 h-32 mx-auto mb-4 text-gray-400" />
                    <p className="text-sm text-gray-500">
                      QR code will appear here when you enable 2FA
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Manual entry key</Label>
                    <Input 
                      value="JBSWY3DPEHPK3PXP" 
                      readOnly
                      className="font-mono text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Verification code</Label>
                    <Input placeholder="Enter 6-digit code" />
                  </div>

                  <Button className="w-full">
                    Verify and Enable 2FA
                  </Button>
                </div>
              )}

              {isTwoFactorEnabled && (
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">2FA is enabled</p>
                    <p className="text-green-600 text-sm">Your account is protected with two-factor authentication</p>
                  </div>
                  
                  <Button variant="destructive" className="w-full">
                    Disable 2FA
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Key className="w-5 h-5 mr-2" />
                  Backup Codes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Save these backup codes in a safe place. You can use them to access your account if you lose your authenticator device.
                </p>
                
                <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                  {[
                    '8f7a-2b91',
                    '3c4d-9e6f',
                    '1a2b-7c8d',
                    '5e6f-0g1h',
                    '9i2j-3k4l',
                    '6m7n-8o9p'
                  ].map((code, index) => (
                    <div key={index} className="p-2 bg-gray-100 rounded text-center">
                      {code}
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    Download
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Regenerate
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Apps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Google Authenticator</p>
                    <p className="text-sm text-gray-500">Free • iOS & Android</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Authy</p>
                    <p className="text-sm text-gray-500">Free • Multi-device</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">1Password</p>
                    <p className="text-sm text-gray-500">Premium • Full-featured</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TwoFactorAuth;
