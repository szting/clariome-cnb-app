'use client';

import { Star, MessageSquare, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

// Mock data - will be replaced with real data later
const mockReviewData = {
  period: 'Week of December 16-22, 2024',
  wins: [
    'Successfully launched the new dashboard feature',
    'Improved team collaboration with daily standups',
    'Resolved 15 customer support tickets',
  ],
  challenges: [
    'Time management during peak hours',
    'Communication gaps with remote team members',
  ],
  learnings: [
    'Importance of setting clear priorities',
    'Value of asynchronous communication',
    'Benefits of regular code reviews',
  ],
  goalsNextWeek: [
    { id: 1, goal: 'Complete API integration', priority: 'High' },
    { id: 2, goal: 'Conduct team training session', priority: 'Medium' },
    { id: 3, goal: 'Update documentation', priority: 'Low' },
  ],
};

export default function ReviewPage() {
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="glass-strong rounded-2xl p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">
            Weekly Reflection
          </h1>
          <p className="text-teal-700">{mockReviewData.period}</p>
        </div>

        {/* Wins Section */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Star className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <CardTitle className="text-teal-900">Wins & Achievements</CardTitle>
                <CardDescription className="text-teal-700">
                  Celebrate your successes this week
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockReviewData.wins.map((win, index) => (
              <div
                key={index}
                className="glass rounded-lg p-4 flex items-start gap-3 hover:bg-white/20 transition-colors"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-teal-900">{win}</p>
              </div>
            ))}
            <Textarea
              placeholder="Add more wins..."
              className="glass border-white/30 text-teal-900 placeholder:text-teal-600 mt-4"
              rows={3}
            />
          </CardContent>
        </Card>

        {/* Challenges Section */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <CardTitle className="text-teal-900">Challenges & Obstacles</CardTitle>
                <CardDescription className="text-teal-700">
                  What got in the way this week?
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockReviewData.challenges.map((challenge, index) => (
              <div
                key={index}
                className="glass rounded-lg p-4 flex items-start gap-3 hover:bg-white/20 transition-colors"
              >
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-teal-900">{challenge}</p>
              </div>
            ))}
            <Textarea
              placeholder="Add challenges you faced..."
              className="glass border-white/30 text-teal-900 placeholder:text-teal-600 mt-4"
              rows={3}
            />
          </CardContent>
        </Card>

        {/* Learnings Section */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-teal-900">Key Learnings</CardTitle>
                <CardDescription className="text-teal-700">
                  Insights and takeaways from this week
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockReviewData.learnings.map((learning, index) => (
              <div
                key={index}
                className="glass rounded-lg p-4 flex items-start gap-3 hover:bg-white/20 transition-colors"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-teal-900">{learning}</p>
              </div>
            ))}
            <Textarea
              placeholder="What did you learn this week..."
              className="glass border-white/30 text-teal-900 placeholder:text-teal-600 mt-4"
              rows={3}
            />
          </CardContent>
        </Card>

        {/* Goals for Next Week */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <CardTitle className="text-teal-900">Goals for Next Week</CardTitle>
                <CardDescription className="text-teal-700">
                  Set your intentions and priorities
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockReviewData.goalsNextWeek.map((item) => (
              <div
                key={item.id}
                className="glass rounded-lg p-4 flex items-center justify-between hover:bg-white/20 transition-colors"
              >
                <p className="text-teal-900 font-medium">{item.goal}</p>
                <Badge
                  variant="outline"
                  className={`
                    ${item.priority === 'High' ? 'bg-red-100 text-red-800 border-red-200' : ''}
                    ${item.priority === 'Medium' ? 'bg-amber-100 text-amber-800 border-amber-200' : ''}
                    ${item.priority === 'Low' ? 'bg-blue-100 text-blue-800 border-blue-200' : ''}
                  `}
                >
                  {item.priority}
                </Badge>
              </div>
            ))}
            <Textarea
              placeholder="Add goals for next week..."
              className="glass border-white/30 text-teal-900 placeholder:text-teal-600 mt-4"
              rows={3}
            />
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end">
          <Button variant="outline" className="glass border-white/30 text-teal-900 hover:bg-white/20">
            Save Draft
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg">
            Complete Review
          </Button>
        </div>
      </div>
    </div>
  );
}
