import React from 'react';
import { Users, Target, Heart, Sparkles, ChevronDown, Globe, Trophy, Clock, Briefcase, GraduationCap, Building2, Rocket } from 'lucide-react';

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-indigo-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">Who We Are</h1>
            <p className="text-xl text-indigo-100 mb-8">
              We're a team of passionate individuals dedicated to creating exceptional experiences 
              through innovation and creativity. Since 2015, we've been pushing the boundaries
              of what's possible in digital transformation.
            </p>
            <button className="group flex items-center gap-2 text-white border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300">
              Learn More
              <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Years Experience', icon: Clock },
              { number: '200+', label: 'Projects Completed', icon: Briefcase },
              { number: '50+', label: 'Team Members', icon: Users },
              { number: '30+', label: 'Global Clients', icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and shape who we are as a company.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, title: 'Collaboration', desc: 'Working together to achieve extraordinary results' },
            { icon: Target, title: 'Excellence', desc: 'Striving for the highest standards in everything we do' },
            { icon: Heart, title: 'Passion', desc: 'Bringing enthusiasm and dedication to our work' },
            { icon: Sparkles, title: 'Innovation', desc: 'Pushing boundaries and embracing new ideas' }
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make our vision a reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Design',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Lead Developer',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition of our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Trophy,
              title: 'Industry Awards',
              items: ['Best Innovation 2024', 'Tech Excellence Award', 'Design of the Year']
            },
            {
              icon: GraduationCap,
              title: 'Certifications',
              items: ['ISO 27001 Certified', 'Google Cloud Partner', 'AWS Advanced Partner']
            },
            {
              icon: Building2,
              title: 'Global Presence',
              items: ['Offices in 5 Countries', '24/7 Support Coverage', 'Multi-lingual Team']
            }
          ].map((achievement, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <achievement.icon className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
              <ul className="space-y-3">
                {achievement.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-indigo-900 py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-indigo-100 text-lg leading-relaxed">
                To empower businesses through innovative digital solutions that drive growth, 
                efficiency, and success in an ever-evolving technological landscape.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-indigo-100 text-lg leading-relaxed">
                To be the global leader in digital transformation, setting new standards for 
                innovation, quality, and customer success in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Goals Section */}
      <div className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Looking Ahead</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our roadmap for the future and the goals we're working towards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Rocket,
              title: 'Expansion Plans',
              description: 'Opening new offices in emerging markets and expanding our global footprint to better serve our clients worldwide.',
              year: '2025'
            },
            {
              icon: Users,
              title: 'Team Growth',
              description: 'Growing our team by 150% while maintaining our culture of excellence and innovation.',
              year: '2025'
            },
            {
              icon: Globe,
              title: 'Sustainability Initiative',
              description: 'Implementing green technologies and sustainable practices across all our operations.',
              year: '2026'
            },
            {
              icon: Target,
              title: 'Innovation Hub',
              description: 'Launching our innovation hub to incubate new ideas and foster technological advancement.',
              year: '2026'
            }
          ].map((goal, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                <goal.icon className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-indigo-600 mb-2">{goal.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  };
  
  export default QuienesSomos;