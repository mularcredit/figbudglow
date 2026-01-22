
import {
  Users,
  Buildings,
  CreditCard,
  Calculator,
  Gear,
  Lightbulb,
  CheckCircle,
  ArrowRight
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import GlowBackground from '../components/GlowBackground';

const Services = () => {
  const services = [
    {
      id: 'hrm',
      icon: Users,
      title: 'HRM Systems',
      subtitle: 'Complete Human Resource Management',
      description: 'Comprehensive human resource management solutions with integrated payroll modules, employee management, and compliance tools.',
      features: [
        'Employee database management',
        'Automated payroll processing',
        'Leave and attendance tracking',
        'Performance management',
        'NSSF and NHIF integration',
        'Tax calculation and compliance',
        'Employee self-service portal',
        'Reporting and analytics'
      ],
      color: 'blue'
    },
    {
      id: 'crm',
      icon: Buildings,
      title: 'CRM Systems',
      subtitle: 'Customer Relationship Management',
      description: 'Streamline your sales process and manage customer relationships with our comprehensive CRM platform.',
      features: [
        'Lead and opportunity management',
        'Contact and account management',
        'Sales pipeline tracking',
        'Email and communication tools',
        'Customer support ticketing',
        'Sales reporting and forecasting',
        'Mobile CRM access',
        'Third-party integrations'
      ],
      color: 'green'
    },
    {
      id: 'lending',
      icon: CreditCard,
      title: 'Microfinance Lending Systems',
      subtitle: 'Financial Services Platform',
      description: 'Complete lending management system for microfinance institutions and financial service providers.',
      features: [
        'Loan origination and approval',
        'Credit scoring and assessment',
        'Repayment scheduling',
        'M-Pesa payment integration',
        'Risk management tools',
        'Compliance and reporting',
        'Mobile banking interface',
        'Customer communication'
      ],
      color: 'purple'
    },
    {
      id: 'accounting',
      icon: Calculator,
      title: 'Accounting Applications',
      subtitle: 'Financial Management Solutions',
      description: 'Professional accounting software for accurate financial management and regulatory compliance.',
      features: [
        'General ledger management',
        'Accounts payable/receivable',
        'Financial reporting',
        'Tax preparation and filing',
        'KRA integration for VAT returns',
        'Budget planning and tracking',
        'Multi-currency support',
        'Audit trail and compliance'
      ],
      color: 'orange'
    },
    {
      id: 'automation',
      icon: Gear,
      title: 'Automation Services',
      subtitle: 'Workflow Optimization',
      description: 'Streamline your business processes with workflow automation and seamless API integrations.',
      features: [
        'Process automation design',
        'Custom API development',
        'Webhook integrations',
        'Data synchronization',
        'Workflow optimization',
        'System integration',
        'Real-time notifications',
        'Performance monitoring'
      ],
      color: 'cyan'
    },
    {
      id: 'consulting',
      icon: Lightbulb,
      title: 'Consulting Services',
      subtitle: 'Digital Transformation Experts',
      description: 'Expert consulting for automation strategies and comprehensive digital transformation initiatives.',
      features: [
        'Digital transformation strategy',
        'Process analysis and optimization',
        'Technology roadmap planning',
        'System architecture design',
        'Change management support',
        'Training and knowledge transfer',
        'Performance optimization',
        'Ongoing strategic guidance'
      ],
      color: 'pink'
    }
  ];

  /* 
   * Mapping the 'ModernCard' look from the Home page's "Unified Enterprise Suite"
   * Colors are now specifically tailored to be on LIGHT backgrounds.
   */
  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-500',
      green: 'bg-green-50 text-green-500',
      purple: 'bg-purple-50 text-purple-500',
      orange: 'bg-orange-50 text-orange-500',
      cyan: 'bg-cyan-50 text-cyan-500',
      pink: 'bg-pink-50 text-pink-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="bg-rainbow-light min-h-screen">
      {/* Hero Section - Matching the light/clean aesthetic but keeping it distinct */}
      <section className="pt-32 pb-20 bg-rainbow-light border-b border-slate-100 relative overflow-hidden">
        <GlowBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-6">
            Figbud Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive enterprise software solutions designed to transform your
            business operations and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative z-10 overflow-hidden">
        <GlowBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Content Side */}
                <div className="flex-1">
                  <div className={`inline-flex p-4 rounded-2xl mb-8 ${getColorClasses(service.color)}`}>
                    <service.icon className="h-8 w-8" weight="light" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl font-medium text-slate-500 mb-6">{service.subtitle}</p>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/demo"
                    className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    Request Demo
                    <ArrowRight weight="light" className="ml-2 h-5 w-5" />
                  </Link>
                </div>

                {/* Card Side - Using the specific White UI style from Home */}
                <div className="flex-1 w-full">
                  <div className="bg-white/10 backdrop-blur-md p-12 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
                      <CheckCircle weight="light" className="h-6 w-6 text-green-500 mr-3" />
                      Key Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3 group/item">
                          <CheckCircle weight="fill" className="h-5 w-5 text-green-500/80 mt-0.5 group-hover/item:scale-110 transition-transform flex-shrink-0" />
                          <span className="text-slate-600 text-[15px] leading-relaxed group-hover/item:text-slate-900 transition-colors font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 text-white text-center rounded-t-[3rem] mt-12 mx-2 md:mx-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Let us help you choose the right solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-medium transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;