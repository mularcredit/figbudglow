import { useState } from 'react';
import {
  Lightning,
  Shield,
  Globe,
  ArrowRight
} from '@phosphor-icons/react';
import { apiEndpoints, sdks, authentication, webhooks } from '../data/api';
import APIHeader from '../components/api/APIHeader';
import APISidebar from '../components/api/APISidebar';
import EndpointCard from '../components/api/EndpointCard';
import ErrorCodeTable from '../components/api/ErrorCodeTable';

const APIDocumentation = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <APIHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <APISidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>

          <div className="lg:col-span-3 space-y-8">
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">API Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-transparent backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-green-500/20 transition-all duration-500 shadow-sm ring-1 ring-white/5">
                    <Lightning weight="light" className="h-8 w-8 text-green-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">RESTful API</h3>
                    <p className="text-gray-400">Clean, predictable REST endpoints with JSON responses</p>
                  </div>
                  <div className="bg-transparent backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-green-500/20 transition-all duration-500 shadow-sm ring-1 ring-white/5">
                    <Shield weight="light" className="h-8 w-8 text-blue-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
                    <p className="text-gray-400">Bank-level security with API keys and HTTPS encryption</p>
                  </div>
                  <div className="bg-transparent backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-green-500/20 transition-all duration-500 shadow-sm ring-1 ring-white/5">
                    <Globe weight="light" className="h-8 w-8 text-purple-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Global</h3>
                    <p className="text-gray-400">Multiple data centers with 99.9% uptime SLA</p>
                  </div>
                </div>

                <div className="bg-transparent backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-sm ring-1 ring-white/5">
                  <h3 className="text-xl font-semibold text-white mb-4">Base URL</h3>
                  <code className="bg-black/30 px-3 py-2 rounded text-green-400 font-mono text-sm">https://api.figbud.com/api/v1</code>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-4">Quick Start</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">1. Get your API key from the dashboard</p>
                    <p className="text-gray-300">2. Install the SDK for your preferred language</p>
                    <p className="text-gray-300">3. Start making API calls</p>
                  </div>
                </div>
              </div>
            )}

            {/* Authentication Section */}
            {activeSection === 'authentication' && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Authentication</h2>
                <div className="bg-transparent backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-sm ring-1 ring-white/5">
                  <p className="text-gray-300 mb-4">{authentication.description}</p>
                  <h4 className="text-lg font-semibold text-white mb-3">Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
                    {authentication.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                  <h4 className="text-lg font-semibold text-white mb-3">Example Header:</h4>
                  <pre className="bg-black/30 rounded p-3 text-sm text-gray-300">
                    {authentication.example}
                  </pre>
                </div>
              </div>
            )}

            {/* API Endpoints Sections */}
            {['lending', 'payments', 'hrm'].includes(activeSection) && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">
                  {activeSection} API
                </h2>
                <div className="space-y-6">
                  {apiEndpoints[activeSection].map((endpoint, index) => (
                    <EndpointCard
                      key={index}
                      endpoint={endpoint}
                      category={activeSection}
                      copiedEndpoint={copiedEndpoint}
                      onCopy={copyToClipboard}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* SDKs Section */}
            {activeSection === 'sdks' && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Software Development Kits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sdks.map((sdk, index) => (
                    <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-green-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-sm ring-1 ring-white/5">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <sdk.icon weight="light" className="h-6 w-6 text-green-400" />
                          <h3 className="text-lg font-semibold text-white">{sdk.name}</h3>
                        </div>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">v{sdk.version}</span>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-400 mb-2 font-bold uppercase tracking-wider text-[10px]">Installation:</h4>
                        <code className="bg-black/30 px-3 py-2 rounded text-green-400 font-mono text-sm block">
                          {sdk.installation}
                        </code>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-400 mb-2 font-bold uppercase tracking-wider text-[10px]">Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {sdk.features.map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded uppercase font-bold tracking-tight">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-2 font-bold uppercase tracking-wider text-[10px]">Example:</h4>
                        <pre className="bg-black/30 rounded p-3 text-sm text-gray-300 overflow-x-auto">
                          {sdk.code}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Webhooks Section */}
            {activeSection === 'webhooks' && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Webhooks</h2>
                <div className="space-y-6">
                  {webhooks.map((webhook, index) => (
                    <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-green-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-sm ring-1 ring-white/5">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">{webhook.event}</h3>
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">Event</span>
                      </div>
                      <p className="text-gray-300 mb-4">{webhook.description}</p>
                      <h4 className="text-sm font-medium text-gray-400 mb-2 font-bold uppercase tracking-wider text-[10px]">Payload:</h4>
                      <pre className="bg-black/30 rounded p-3 text-sm text-gray-300 overflow-x-auto">
                        {webhook.payload}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Error Codes Section */}
            {activeSection === 'errors' && <ErrorCodeTable />}
          </div>
        </div>
      </div>

      <footer className="bg-slate-800/50 border-t border-slate-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
              <p className="text-gray-400 mb-4">Check our documentation or contact support</p>
              <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
                <span>Contact Support</span>
                <ArrowRight weight="light" className="h-4 w-4" />
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">API Status</h3>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                <span className="font-bold uppercase tracking-wider text-xs">All Systems Operational</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">API Changelog</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Rate Limits</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Best Practices</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default APIDocumentation;