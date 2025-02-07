import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  BarChart, 
  DollarSign, 
  Users, 
  Star,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  Home,
  TrendingUp,
  Wrench,
  Shield,
  CheckCircle,
  Camera,
  MessageCircle,
  Paintbrush
} from 'lucide-react';

const VacationRentalPage = () => {
  const [email, setEmail] = useState('');
  const [unitType, setUnitType] = useState('studio');

  const performanceData = {
    studio: {
      avgRevenue: 45000,
      occupancy: 85,
      roi: 12
    },
    oneBedroom: {
      avgRevenue: 65000,
      occupancy: 88,
      roi: 15
    },
    twoBedroom: {
      avgRevenue: 85000,
      occupancy: 90,
      roi: 18
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Ilikai Condo Into a 
              <span className="text-blue-300"> Premier Vacation Rental</span>
            </h1>
            <p className="text-xl mb-8">
              Join Hawaii's most trusted vacation rental management company with over $50M in revenue generated since 2009
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
              Calculate Your Rental Potential
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Revenue Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Estimate Your Rental Income Potential
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <label className="block font-medium">Select Unit Type</label>
                    <select 
                      className="w-full p-3 border rounded"
                      value={unitType}
                      onChange={(e) => setUnitType(e.target.value)}
                    >
                      <option value="studio">Studio</option>
                      <option value="oneBedroom">One Bedroom</option>
                      <option value="twoBedroom">Two Bedroom</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="p-4 text-center">
                        <DollarSign className="mx-auto mb-2" />
                        <div className="text-2xl font-bold">
                          ${performanceData[unitType].avgRevenue.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">Avg. Annual Revenue</div>
                      </Card>
                      <Card className="p-4 text-center">
                        <Users className="mx-auto mb-2" />
                        <div className="text-2xl font-bold">
                          {performanceData[unitType].occupancy}%
                        </div>
                        <div className="text-sm text-gray-600">Occupancy Rate</div>
                      </Card>
                      <Card className="p-4 text-center">
                        <TrendingUp className="mx-auto mb-2" />
                        <div className="text-2xl font-bold">
                          {performanceData[unitType].roi}%
                        </div>
                        <div className="text-sm text-gray-600">Avg. ROI</div>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Comprehensive Management Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From day-to-day operations to long-term asset management, we handle every aspect of your vacation rental with professional care.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Home className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle>Property Care</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>• Weekly inspections</li>
                  <li>• 24/7 maintenance</li>
                  <li>• Deep cleaning service</li>
                  <li>• Inventory management</li>
                  <li>• Regular updates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <BarChart className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle>Revenue Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>• Dynamic pricing</li>
                  <li>• Market analysis</li>
                  <li>• Booking optimization</li>
                  <li>• Revenue forecasting</li>
                  <li>• Performance reports</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle>Guest Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>• 24/7 guest support</li>
                  <li>• Multilingual service</li>
                  <li>• Concierge assistance</li>
                  <li>• Review management</li>
                  <li>• Welcome packages</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Owner Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Exclusive Owner Benefits
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            As an Ilikai owner, you'll enjoy special privileges and support designed to make property ownership effortless.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6">
              <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Flexible Personal Use</h3>
              <p className="text-sm text-gray-600">Stay in your unit with advance notice</p>
            </Card>

            <Card className="text-center p-6">
              <Shield className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Tax Assistance</h3>
              <p className="text-sm text-gray-600">GET/TAT filing support included</p>
            </Card>

            <Card className="text-center p-6">
              <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Owner Portal</h3>
              <p className="text-sm text-gray-600">24/7 access to reports and booking data</p>
            </Card>

            <Card className="text-center p-6">
              <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Dedicated Support</h3>
              <p className="text-sm text-gray-600">Direct line to your account manager</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Maximize Your Rental Income?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <div className="text-xl font-bold mb-2">Call Us</div>
                  <div className="text-2xl font-bold text-blue-500">808-944-6377</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <div className="text-xl font-bold mb-2">Schedule a Consultation</div>
                  <form onSubmit={handleEmailSubmit}>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="mb-4"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Book Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">What are your management fees?</h3>
                <p className="text-gray-600">We offer competitive rates based on your unit type and services needed. Contact us for a detailed breakdown of our fee structure and included services.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">How often can I use my unit?</h3>
                <p className="text-gray-600">Owners can stay in their units with advance notice. We work with you to block dates while maximizing rental potential during peak seasons.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Do you handle tax filings?</h3>
                <p className="text-gray-600">Yes, we manage all GET/TAT tax filings for your rental income, making tax compliance effortless for owners.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VacationRentalPage;