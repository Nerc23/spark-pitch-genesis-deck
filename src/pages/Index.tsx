
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Zap, TrendingUp, Target, Globe, Shield, Star, ArrowRight, DollarSign, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const slides = [
  { id: 'title', title: 'GigSparkLink', subtitle: 'Connecting Talent with Opportunity' },
  { id: 'problem', title: 'The Problem', subtitle: 'Challenges in the Freelance Market' },
  { id: 'solution', title: 'Our Solution', subtitle: 'GigSparkLink Platform' },
  { id: 'features', title: 'Key Features', subtitle: 'What Makes Us Different' },
  { id: 'market', title: 'Market Opportunity', subtitle: 'The Growing Gig Economy' },
  { id: 'business', title: 'Business Model', subtitle: 'Revenue Streams' },
  { id: 'roadmap', title: 'Roadmap', subtitle: 'Future Development' },
  { id: 'team', title: 'Our Team', subtitle: 'Built by Experts' },
  { id: 'financial', title: 'Financial Projections', subtitle: 'Growth Potential' },
  { id: 'cta', title: 'Join GigSparkLink', subtitle: 'Let\'s Build the Future Together' }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const renderSlideContent = () => {
    const slide = slides[currentSlide];
    
    switch (slide.id) {
      case 'title':
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GigSparkLink
              </h1>
              <p className="text-2xl text-gray-600">Connecting Talent with Opportunity</p>
            </div>
            <div className="text-lg text-gray-500 max-w-2xl mx-auto">
              The premier platform for freelancers and clients to discover, connect, and collaborate on projects that matter.
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">The Problem</h2>
              <p className="text-xl text-gray-600">Current freelance platforms have significant challenges</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-l-4 border-red-500">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold">High Fees</h3>
                  </div>
                  <p className="text-gray-600">Platforms charge up to 20% commission, eating into freelancer earnings</p>
                </CardContent>
              </Card>
              <Card className="p-6 border-l-4 border-orange-500">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Poor Matching</h3>
                  </div>
                  <p className="text-gray-600">Generic algorithms fail to match the right talent with the right projects</p>
                </CardContent>
              </Card>
              <Card className="p-6 border-l-4 border-yellow-500">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Trust Issues</h3>
                  </div>
                  <p className="text-gray-600">Lack of proper vetting leads to unreliable partnerships</p>
                </CardContent>
              </Card>
              <Card className="p-6 border-l-4 border-blue-500">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Limited Support</h3>
                  </div>
                  <p className="text-gray-600">Minimal guidance for project management and collaboration</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">Our Solution</h2>
              <p className="text-xl text-gray-600">GigSparkLink revolutionizes freelance collaboration</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Smart Matching Technology</h3>
                  <p className="text-gray-600 text-lg">
                    Our AI-powered platform connects freelancers and clients based on skills, project requirements, 
                    work style, and past success rates for optimal partnerships.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4">
                    <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold">Precise Matching</h4>
                    <p className="text-sm text-gray-600">Advanced algorithms ensure perfect project fits</p>
                  </div>
                  <div className="text-center p-4">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold">Verified Profiles</h4>
                    <p className="text-sm text-gray-600">Comprehensive vetting for trust and quality</p>
                  </div>
                  <div className="text-center p-4">
                    <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold">Fair Pricing</h4>
                    <p className="text-sm text-gray-600">Competitive rates with transparent fee structure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">Key Features</h2>
              <p className="text-xl text-gray-600">What makes GigSparkLink the best choice</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Smart Profiles</h3>
                  <p className="text-gray-600">Comprehensive profiles with skills, portfolio, and verified credentials</p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Project Matching</h3>
                  <p className="text-gray-600">AI-powered matching based on skills, availability, and preferences</p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Secure Payments</h3>
                  <p className="text-gray-600">Escrow system with milestone-based payments for security</p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Rating System</h3>
                  <p className="text-gray-600">Transparent reviews and ratings for quality assurance</p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Global Reach</h3>
                  <p className="text-gray-600">Connect with talent and opportunities worldwide</p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Real-time Chat</h3>
                  <p className="text-gray-600">Integrated communication tools for seamless collaboration</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">Market Opportunity</h2>
              <p className="text-xl text-gray-600">The gig economy is booming</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-0 space-y-4">
                  <div className="text-4xl font-bold text-blue-600">$400B+</div>
                  <h3 className="text-xl font-semibold">Global Gig Economy</h3>
                  <p className="text-gray-600">Expected to reach $400B+ by 2025</p>
                </CardContent>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-0 space-y-4">
                  <div className="text-4xl font-bold text-green-600">57M</div>
                  <h3 className="text-xl font-semibold">US Freelancers</h3>
                  <p className="text-gray-600">Growing by 15% annually</p>
                </CardContent>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-0 space-y-4">
                  <div className="text-4xl font-bold text-purple-600">50%</div>
                  <h3 className="text-xl font-semibold">Remote Workforce</h3>
                  <p className="text-gray-600">By 2027, half of all work will be remote</p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-6">Why Now?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Post-pandemic shift to remote work</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold">Digital transformation acceleration</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold">Skills-based hiring trend</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-6 h-6 text-yellow-600" />
                    <span className="font-semibold">Need for flexible talent solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">Business Model</h2>
              <p className="text-xl text-gray-600">Multiple revenue streams for sustainable growth</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-l-4 border-blue-500">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">Commission Fees</h3>
                  <div className="text-3xl font-bold">5-10%</div>
                  <p className="text-gray-600">Competitive commission rates on completed projects</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• 5% for verified freelancers</li>
                    <li>• 10% for new freelancers</li>
                    <li>• Volume discounts available</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 border-l-4 border-green-500">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">Premium Subscriptions</h3>
                  <div className="text-3xl font-bold">$29/mo</div>
                  <p className="text-gray-600">Enhanced features for power users</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Priority matching</li>
                    <li>• Advanced analytics</li>
                    <li>• Unlimited proposals</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 border-l-4 border-purple-500">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">Featured Listings</h3>
                  <div className="text-3xl font-bold">$49</div>
                  <p className="text-gray-600">Boost project visibility</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Priority placement</li>
                    <li>• Enhanced visibility</li>
                    <li>• Faster matching</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 border-l-4 border-orange-500">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">Enterprise Solutions</h3>
                  <div className="text-3xl font-bold">Custom</div>
                  <p className="text-gray-600">White-label solutions for enterprises</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Custom branding</li>
                    <li>• Dedicated support</li>
                    <li>• Integration APIs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'roadmap':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">Development Roadmap</h2>
              <p className="text-xl text-gray-600">Our journey to market leadership</p>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-green-700">Phase 1: MVP Launch</h3>
                      <p className="text-green-600">Q1 2024 - Core platform features</p>
                    </div>
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-700">Phase 2: AI Integration</h3>
                      <p className="text-blue-600">Q2 2024 - Smart matching algorithms</p>
                    </div>
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-purple-700">Phase 3: Mobile App</h3>
                      <p className="text-purple-600">Q3 2024 - iOS and Android applications</p>
                    </div>
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-orange-700">Phase 4: Global Expansion</h3>
                      <p className="text-orange-600">Q4 2024 - International markets</p>
                    </div>
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">Our Team</h2>
              <p className="text-xl text-gray-600">Built by industry experts</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardContent className="p-0 space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Tech Leadership</h3>
                    <p className="text-gray-600">Ex-Google, Meta engineers</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="p-0 space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Business Strategy</h3>
                    <p className="text-gray-600">Former startup founders</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="p-0 space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Product Design</h3>
                    <p className="text-gray-600">Award-winning UX designers</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Advisors & Investors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto" />
                  <h4 className="font-semibold">Industry Veterans</h4>
                  <p className="text-gray-600">Former executives from Upwork, Fiverr, and LinkedIn</p>
                </div>
                <div className="space-y-2">
                  <Award className="w-8 h-8 text-green-600 mx-auto" />
                  <h4 className="font-semibold">Strategic Partners</h4>
                  <p className="text-gray-600">Leading VCs and angel investors backing our vision</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'financial':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">Financial Projections</h2>
              <p className="text-xl text-gray-600">Strong growth potential</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-0 space-y-4">
                  <div className="text-sm text-blue-600 font-semibold">Year 1</div>
                  <div className="text-3xl font-bold text-blue-700">$500K</div>
                  <div className="text-gray-600">Revenue Target</div>
                  <div className="text-sm text-gray-500">10K active users</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-0 space-y-4">
                  <div className="text-sm text-green-600 font-semibold">Year 2</div>
                  <div className="text-3xl font-bold text-green-700">$2.5M</div>
                  <div className="text-gray-600">Revenue Target</div>
                  <div className="text-sm text-gray-500">50K active users</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-0 space-y-4">
                  <div className="text-sm text-purple-600 font-semibold">Year 3</div>
                  <div className="text-3xl font-bold text-purple-700">$10M</div>
                  <div className="text-gray-600">Revenue Target</div>
                  <div className="text-sm text-gray-500">200K active users</div>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-semibold">Key Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Customer Acquisition Cost</span>
                      <span className="font-semibold">$25</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lifetime Value</span>
                      <span className="font-semibold">$500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Churn Rate</span>
                      <span className="font-semibold">5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gross Margin</span>
                      <span className="font-semibold">85%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-semibold">Funding Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Seed Round</span>
                      <span className="font-semibold">$1M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Series A (Planned)</span>
                      <span className="font-semibold">$5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Use of Funds</span>
                      <span className="font-semibold">Development & Marketing</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Break-even</span>
                      <span className="font-semibold">Month 18</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'cta':
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Join GigSparkLink
              </h2>
              <p className="text-2xl text-gray-600">Let's build the future of freelancing together</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-gray-600">
                Whether you're a talented freelancer looking for your next opportunity or a client seeking the perfect match for your project, 
                GigSparkLink is here to spark those connections that matter.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                  <CardContent className="p-0 text-center space-y-4">
                    <Users className="w-12 h-12 text-blue-600 mx-auto" />
                    <h3 className="text-xl font-semibold">For Freelancers</h3>
                    <p className="text-gray-600">Find projects that match your skills and passion</p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Sign Up as Freelancer
                    </Button>
                  </CardContent>
                </Card>
                <Card className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
                  <CardContent className="p-0 text-center space-y-4">
                    <Target className="w-12 h-12 text-purple-600 mx-auto" />
                    <h3 className="text-xl font-semibold">For Clients</h3>
                    <p className="text-gray-600">Discover top talent for your next project</p>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Post Your Project
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="pt-6">
                <div className="flex items-center justify-center space-x-4 text-gray-500">
                  <Globe className="w-5 h-5" />
                  <span>Visit us at github.com/Nerc23/gig-spark-link</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Slide content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">GigSparkLink Pitch</span>
          </div>
          <div className="text-sm text-gray-500">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
          {renderSlideContent()}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            disabled={isAnimating}
            className="rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            disabled={isAnimating}
            className="rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-6 right-6 text-xs text-gray-400">
        Use ← → keys to navigate
      </div>
    </div>
  );
};

export default Index;
