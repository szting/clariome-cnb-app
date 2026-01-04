'use client';

import { Calendar, Clock, Tag, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock data - will be replaced with real data later
const mockTimelineData = [
  {
    id: 1,
    date: '2024-12-22',
    time: '14:30',
    title: 'Sprint Planning Session',
    description: 'Planned upcoming sprint with the development team',
    category: 'Meeting',
    tags: ['Planning', 'Team'],
  },
  {
    id: 2,
    date: '2024-12-21',
    time: '10:00',
    title: 'Code Review Completed',
    description: 'Reviewed and approved 5 pull requests',
    category: 'Development',
    tags: ['Code', 'Review'],
  },
  {
    id: 3,
    date: '2024-12-20',
    time: '16:45',
    title: 'Client Presentation',
    description: 'Successfully presented Q4 results to stakeholders',
    category: 'Client',
    tags: ['Presentation', 'Success'],
  },
  {
    id: 4,
    date: '2024-12-19',
    time: '11:30',
    title: 'Team Retrospective',
    description: 'Discussed improvements and action items',
    category: 'Team',
    tags: ['Retrospective', 'Improvement'],
  },
  {
    id: 5,
    date: '2024-12-18',
    time: '09:15',
    title: 'Feature Launch',
    description: 'Deployed new dashboard feature to production',
    category: 'Product',
    tags: ['Launch', 'Feature'],
  },
  {
    id: 6,
    date: '2024-12-17',
    time: '13:00',
    title: 'Design Review',
    description: 'Reviewed UI/UX designs for mobile app',
    category: 'Design',
    tags: ['Design', 'Mobile'],
  },
  {
    id: 7,
    date: '2024-12-16',
    time: '15:20',
    title: 'Customer Support',
    description: 'Resolved 8 customer tickets',
    category: 'Support',
    tags: ['Customer', 'Support'],
  },
];

const categoryColors: Record<string, string> = {
  Meeting: 'bg-purple-100 text-purple-800 border-purple-200',
  Development: 'bg-blue-100 text-blue-800 border-blue-200',
  Client: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  Team: 'bg-amber-100 text-amber-800 border-amber-200',
  Product: 'bg-teal-100 text-teal-800 border-teal-200',
  Design: 'bg-pink-100 text-pink-800 border-pink-200',
  Support: 'bg-orange-100 text-orange-800 border-orange-200',
};

export default function TimelinePage() {
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="glass-strong rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">
                Activity Timeline
              </h1>
              <p className="text-teal-700 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 16-22, 2024
              </p>
            </div>
            <Button variant="outline" className="glass border-white/30 text-teal-900 hover:bg-white/20">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-teal-900">7</p>
            <p className="text-sm text-teal-700">Total Events</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-teal-900">5</p>
            <p className="text-sm text-teal-700">Categories</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-teal-900">12</p>
            <p className="text-sm text-teal-700">Tags</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-teal-900">100%</p>
            <p className="text-sm text-teal-700">Completion</p>
          </div>
        </div>

        {/* Timeline */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <CardTitle className="text-teal-900">Recent Activity</CardTitle>
            <CardDescription className="text-teal-700">
              Your activity log for the past week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTimelineData.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline connector */}
                  {index !== mockTimelineData.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-teal-300/50" />
                  )}
                  
                  <div className="glass rounded-xl p-5 hover:bg-white/20 transition-all hover:scale-[1.02]">
                    <div className="flex gap-4">
                      {/* Timeline dot */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center border-2 border-teal-500">
                          <Clock className="w-5 h-5 text-teal-700" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="font-semibold text-teal-900 text-lg mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-teal-700 mb-2">
                              {item.description}
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className={categoryColors[item.category] || 'bg-gray-100 text-gray-800'}
                          >
                            {item.category}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="flex items-center gap-2 text-sm text-teal-700">
                            <Calendar className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-teal-700">
                            <Clock className="w-4 h-4" />
                            {item.time}
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Tag className="w-4 h-4 text-teal-700" />
                            {item.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="secondary"
                                className="bg-white/30 text-teal-800 border-white/40 text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Load More */}
        <div className="flex justify-center">
          <Button variant="outline" className="glass border-white/30 text-teal-900 hover:bg-white/20">
            Load More Activities
          </Button>
        </div>
      </div>
    </div>
  );
}
