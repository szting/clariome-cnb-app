'use client';

import { Calendar, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock data - will be replaced with real data later
const mockWeeklyData = {
  weekOf: 'December 16-22, 2024',
  totalTasks: 24,
  completedTasks: 18,
  focusAreas: ['Product Development', 'Team Management', 'Client Relations'],
  highlights: [
    { id: 1, title: 'Launched new feature', category: 'Product', date: 'Dec 18' },
    { id: 2, title: 'Team retrospective meeting', category: 'Team', date: 'Dec 19' },
    { id: 3, title: 'Client presentation success', category: 'Client', date: 'Dec 20' },
    { id: 4, title: 'Code review completed', category: 'Development', date: 'Dec 21' },
    { id: 5, title: 'Sprint planning session', category: 'Planning', date: 'Dec 22' },
  ],
  metrics: {
    productivity: 85,
    collaboration: 92,
    wellbeing: 78,
  },
};

export default function WeeklyPage() {
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="glass-strong rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">
                Weekly Review
              </h1>
              <p className="text-teal-700 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {mockWeeklyData.weekOf}
              </p>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg">
              Export Report
            </Button>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle2 className="w-8 h-8 text-teal-600" />
              <Badge className="bg-teal-100 text-teal-800 border-teal-200">
                {Math.round((mockWeeklyData.completedTasks / mockWeeklyData.totalTasks) * 100)}%
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-teal-900 mb-1">
              {mockWeeklyData.completedTasks}/{mockWeeklyData.totalTasks}
            </h3>
            <p className="text-teal-700 text-sm">Tasks Completed</p>
          </div>

          <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-teal-600" />
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                +12%
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-teal-900 mb-1">
              {mockWeeklyData.metrics.productivity}%
            </h3>
            <p className="text-teal-700 text-sm">Productivity Score</p>
          </div>

          <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-teal-600" />
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                On Track
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-teal-900 mb-1">
              {mockWeeklyData.focusAreas.length}
            </h3>
            <p className="text-teal-700 text-sm">Focus Areas</p>
          </div>
        </div>

        {/* Focus Areas */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <CardTitle className="text-teal-900">Focus Areas</CardTitle>
            <CardDescription className="text-teal-700">
              Key areas of attention this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {mockWeeklyData.focusAreas.map((area, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm bg-white/20 border-white/30 text-teal-800"
                >
                  {area}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Highlights */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <CardTitle className="text-teal-900">Weekly Highlights</CardTitle>
            <CardDescription className="text-teal-700">
              Notable achievements and milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockWeeklyData.highlights.map((highlight) => (
                <div
                  key={highlight.id}
                  className="glass rounded-lg p-4 hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-teal-900 mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-teal-700">{highlight.category}</p>
                    </div>
                    <Badge variant="secondary" className="bg-teal-100 text-teal-800 border-teal-200">
                      {highlight.date}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="glass-card border-white/30">
            <CardHeader>
              <CardTitle className="text-teal-900 text-lg">Productivity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-teal-900">
                    {mockWeeklyData.metrics.productivity}%
                  </span>
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="w-full bg-white/30 rounded-full h-2">
                  <div
                    className="bg-teal-600 h-2 rounded-full transition-all"
                    style={{ width: `${mockWeeklyData.metrics.productivity}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/30">
            <CardHeader>
              <CardTitle className="text-teal-900 text-lg">Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-teal-900">
                    {mockWeeklyData.metrics.collaboration}%
                  </span>
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="w-full bg-white/30 rounded-full h-2">
                  <div
                    className="bg-teal-600 h-2 rounded-full transition-all"
                    style={{ width: `${mockWeeklyData.metrics.collaboration}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/30">
            <CardHeader>
              <CardTitle className="text-teal-900 text-lg">Well-being</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-teal-900">
                    {mockWeeklyData.metrics.wellbeing}%
                  </span>
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="w-full bg-white/30 rounded-full h-2">
                  <div
                    className="bg-teal-600 h-2 rounded-full transition-all"
                    style={{ width: `${mockWeeklyData.metrics.wellbeing}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
