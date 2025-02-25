import React from 'react';
import CTASection from '../../components/common/CTASection';
import {
  Code2,
  Smartphone,
  Globe2,
  BarChart3,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  MonitorSmartphone,
  CloudCog,
  Database,
  Bot,
  BrainCircuit,
  Network,
  LineChart,
  Users2,
  Blocks,
  Lightbulb,
  MessagesSquare,
  Clock,
  Award
} from 'lucide-react';


const Servicios = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6">
              Transform Your Business with Our Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We deliver cutting-edge solutions that drive innovation, enhance efficiency, 
              and accelerate growth. Our comprehensive suite of services is designed to 
              meet the evolving needs of modern businesses.
            </p>
            <button className="group bg-white text-blue-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors duration-300">
              Explore Our Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Core Services Grid */}
      <div className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs, delivered with 
            expertise and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: 'Custom Software Development',
              description: 'Tailored solutions built with cutting-edge technology to meet your unique business requirements.'
            },
            {
              icon: Smartphone,
              title: 'Mobile App Development',
              description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
            },
            {
              icon: Globe2,
              title: 'Web Development',
              description: 'Responsive and scalable web applications using modern frameworks and best practices.'
            },
            {
              icon: BarChart3,
              title: 'Data Analytics',
              description: 'Transform your data into actionable insights with advanced analytics and visualization.'
            },
            {
              icon: Shield,
              title: 'Cybersecurity',
              description: 'Protect your digital assets with our comprehensive security solutions and best practices.'
            },
            {
              icon: CloudCog,
              title: 'Cloud Services',
              description: 'Scale your infrastructure efficiently with our cloud-native solutions and expertise.'
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className=" py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Lightbulb,
              step: '01',
              title: 'Discovery',
              description: 'Understanding your needs and objectives through detailed consultation.'
            },
            {
              icon: Blocks,
              step: '02',
              title: 'Planning',
              description: 'Creating a comprehensive roadmap and technical architecture.'
            },
            {
              icon: Zap,
              step: '03',
              title: 'Development',
              description: 'Agile development with regular updates and iterations.'
            },
            {
              icon: Award,
              step: '04',
              title: 'Delivery',
              description: 'Thorough testing and seamless deployment to production.'
            }
          ].map((process, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-bold text-blue-100 mb-6">{process.step}</div>
                <process.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Partner with us for unmatched expertise and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Fast Delivery',
                description: 'Quick turnaround times without compromising on quality.'
              },
              {
                icon: Users2,
                title: 'Expert Team',
                description: 'Highly skilled professionals with diverse expertise.'
              },
              {
                icon: LineChart,
                title: 'Scalable Solutions',
                description: 'Future-proof solutions that grow with your business.'
              },
              {
                icon: MessagesSquare,
                title: 'Clear Communication',
                description: 'Regular updates and transparent project management.'
              },
              {
                icon: Bot,
                title: 'Innovation Focus',
                description: 'Cutting-edge technologies and modern approaches.'
              },
              {
                icon: Shield,
                title: 'Security First',
                description: 'Built-in security and compliance measures.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
                <benefit.icon className="w-8 h-8 text-blue-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
  };
  
  export default Servicios;