import { useState } from 'react';
import { ArrowRight, Clock } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import GlowBackground from '../components/GlowBackground';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of HRM: Integrating AI and Automation in Kenyan Businesses',
      excerpt: 'Discover how artificial intelligence and automation are transforming human resource management in Kenya, from automated payroll to predictive analytics.',
      author: 'Figbud Global Team',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'HRM',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'M-Pesa Integration: Revolutionizing Business Payments in East Africa',
      excerpt: 'Learn how M-Pesa API integration is changing the landscape of business transactions and customer payments across East Africa.',
      author: 'Figbud Global Team',
      date: '2025-01-12',
      readTime: '7 min read',
      category: 'Integrations',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Digital Transformation Strategies for SMEs in Kenya',
      excerpt: 'A comprehensive guide to digital transformation for small and medium enterprises, including practical steps and technology recommendations.',
      author: 'Figbud Global Team',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Digital Transformation',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'CRM Best Practices for Growing Businesses',
      excerpt: 'Essential CRM strategies and best practices to help your growing business manage customer relationships more effectively.',
      author: 'Figbud Global Team',
      date: '2025-01-08',
      readTime: '4 min read',
      category: 'CRM',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Microfinance Technology: Serving the Unbanked Population',
      excerpt: 'Exploring how technology is making financial services accessible to underserved communities through innovative microfinance solutions.',
      author: 'Figbud Global Team',
      date: '2025-01-05',
      readTime: '8 min read',
      category: 'Microfinance',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Compliance Automation: Simplifying KRA and NSSF Reporting',
      excerpt: 'How automation is simplifying tax and social security compliance for businesses in Kenya, reducing errors and saving time.',
      author: 'Figbud Global Team',
      date: '2025-01-03',
      readTime: '5 min read',
      category: 'Compliance',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'HRM', 'CRM', 'Integrations', 'Digital Transformation', 'Microfinance', 'Compliance'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <GlowBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends in enterprise software, automation,
            and digital transformation in Kenya and beyond.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-slate-800 relative overflow-hidden">
        <GlowBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <GlowBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group relative flex flex-col bg-transparent backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-green-500/30 hover:-translate-y-1 transition-all duration-500 ring-1 ring-white/5"
              >
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Badge */}
                  <div className="absolute top-8 right-8 bg-green-500/90 text-white text-[10px] font-bold px-4 py-2 rounded-xl uppercase backdrop-blur-xl shadow-xl border border-white/20">
                    {post.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-10 flex flex-col">
                  {/* Sub-header */}
                  <div className="flex justify-between items-center mb-8 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse" />
                      {post.author}
                    </div>
                    <div className="text-slate-600">
                      EST. 2025
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-6 leading-[1.2] group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-[15px] leading-relaxed mb-10 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center text-xs font-bold text-yellow-500/80 uppercase">
                      <Clock weight="light" className="mr-3 h-5 w-5" />
                      {post.readTime}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center text-xs font-bold text-blue-400 uppercase transition-all hover:text-blue-300"
                    >
                      Explore <ArrowRight weight="light" className="ml-3 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-green-900/20 relative overflow-hidden">
        <GlowBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Subscribe to our newsletter for the latest insights on enterprise software,
            automation trends, and industry updates.
          </p>

          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-l-lg focus:outline-none focus:border-green-400"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Join 500+ business leaders who trust our insights
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Expert Guidance?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our team of experts is ready to help you implement the strategies and
            technologies discussed in our blog posts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/contact"
              className="border-2 border-slate-600 text-gray-300 hover:bg-slate-700 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;