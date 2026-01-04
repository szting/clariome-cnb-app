'use client';

import Link from 'next/link';
import { Calendar, FileText, Clock, Settings, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  const pages = [
    {
      title: 'Weekly Review',
      description: 'View your weekly performance metrics and highlights',
      icon: Calendar,
      href: '/weekly',
      color: 'bg-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Reflection',
      description: 'Document wins, challenges, and learnings',
      icon: FileText,
      href: '/review',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Timeline',
      description: 'Browse your activity history and events',
      icon: Clock,
      href: '/timeline',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Settings',
      description: 'Manage your account and preferences',
      icon: Settings,
      href: '/settings',
      color: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-teal-900 mb-4">
            Welcome to Clariome
          </h1>
          <p className="text-lg md:text-xl text-teal-700 max-w-2xl mx-auto">
            Your personal workspace for weekly reviews, reflections, and activity tracking
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <Link key={page.href} href={page.href}>
                <Card className="glass-card border-white/30 hover:scale-105 transition-all cursor-pointer h-full group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-3 ${page.color} rounded-xl`}>
                        <Icon className={`w-8 h-8 ${page.iconColor}`} />
                      </div>
                      <CardTitle className="text-teal-900 text-2xl">
                        {page.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-teal-700 text-base">
                      {page.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-teal-900 hover:bg-white/20 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="glass-card rounded-2xl p-6 md:p-8 border-white/30">
          <h2 className="text-2xl font-bold text-teal-900 mb-6">Quick Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center glass rounded-xl p-4">
              <p className="text-3xl font-bold text-teal-900 mb-1">18</p>
              <p className="text-sm text-teal-700">Tasks Completed</p>
            </div>
            <div className="text-center glass rounded-xl p-4">
              <p className="text-3xl font-bold text-teal-900 mb-1">85%</p>
              <p className="text-sm text-teal-700">Productivity</p>
            </div>
            <div className="text-center glass rounded-xl p-4">
              <p className="text-3xl font-bold text-teal-900 mb-1">7</p>
              <p className="text-sm text-teal-700">Activities</p>
            </div>
            <div className="text-center glass rounded-xl p-4">
              <p className="text-3xl font-bold text-teal-900 mb-1">3</p>
              <p className="text-sm text-teal-700">Focus Areas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
