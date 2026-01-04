'use client';

import { User, Bell, Lock, Palette, Globe, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

export default function SettingsPage() {
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="glass-strong rounded-2xl p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">
            Settings
          </h1>
          <p className="text-teal-700">Manage your account and preferences</p>
        </div>

        {/* Profile Settings */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-100 rounded-lg">
                <User className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <CardTitle className="text-teal-900">Profile Information</CardTitle>
                <CardDescription className="text-teal-700">
                  Update your personal details
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-teal-900">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  className="glass border-white/30 text-teal-900 placeholder:text-teal-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-teal-900">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="glass border-white/30 text-teal-900 placeholder:text-teal-600"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-teal-900">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                className="glass border-white/30 text-teal-900 placeholder:text-teal-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-teal-900">Bio</Label>
              <Input
                id="bio"
                placeholder="Tell us about yourself"
                className="glass border-white/30 text-teal-900 placeholder:text-teal-600"
              />
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-teal-900">Notifications</CardTitle>
                <CardDescription className="text-teal-700">
                  Manage how you receive notifications
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between glass rounded-lg p-4">
              <div className="space-y-0.5">
                <Label htmlFor="emailNotif" className="text-teal-900 font-medium">
                  Email Notifications
                </Label>
                <p className="text-sm text-teal-700">
                  Receive updates via email
                </p>
              </div>
              <Switch id="emailNotif" />
            </div>
            <div className="flex items-center justify-between glass rounded-lg p-4">
              <div className="space-y-0.5">
                <Label htmlFor="weeklyDigest" className="text-teal-900 font-medium">
                  Weekly Digest
                </Label>
                <p className="text-sm text-teal-700">
                  Get a summary every week
                </p>
              </div>
              <Switch id="weeklyDigest" defaultChecked />
            </div>
            <div className="flex items-center justify-between glass rounded-lg p-4">
              <div className="space-y-0.5">
                <Label htmlFor="reminders" className="text-teal-900 font-medium">
                  Task Reminders
                </Label>
                <p className="text-sm text-teal-700">
                  Get reminded about upcoming tasks
                </p>
              </div>
              <Switch id="reminders" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <CardTitle className="text-teal-900">Security</CardTitle>
                <CardDescription className="text-teal-700">
                  Manage your password and security settings
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword" className="text-teal-900">
                Current Password
              </Label>
              <Input
                id="currentPassword"
                type="password"
                className="glass border-white/30 text-teal-900"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword" className="text-teal-900">
                New Password
              </Label>
              <Input
                id="newPassword"
                type="password"
                className="glass border-white/30 text-teal-900"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-teal-900">
                Confirm New Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                className="glass border-white/30 text-teal-900"
              />
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-teal-900">Preferences</CardTitle>
                <CardDescription className="text-teal-700">
                  Customize your experience
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between glass rounded-lg p-4">
              <div className="space-y-0.5">
                <Label htmlFor="darkMode" className="text-teal-900 font-medium">
                  Dark Mode
                </Label>
                <p className="text-sm text-teal-700">
                  Switch to dark theme
                </p>
              </div>
              <Switch id="darkMode" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language" className="text-teal-900">Language</Label>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-teal-600" />
                <Input
                  id="language"
                  value="English (US)"
                  className="glass border-white/30 text-teal-900"
                  readOnly
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-teal-900">Timezone</Label>
              <Input
                id="timezone"
                value="UTC-5 (Eastern Time)"
                className="glass border-white/30 text-teal-900"
                readOnly
              />
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="glass-card border-red-300/50">
          <CardHeader>
            <CardTitle className="text-red-900">Danger Zone</CardTitle>
            <CardDescription className="text-red-700">
              Irreversible actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Separator className="bg-red-200/50" />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-red-900">Delete Account</p>
                <p className="text-sm text-red-700">
                  Permanently delete your account and all data
                </p>
              </div>
              <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
