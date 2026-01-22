import { CheckCircle, Copy } from '@phosphor-icons/react';
import { APIEndpoint } from '../../data/api';

interface EndpointCardProps {
    endpoint: APIEndpoint;
    category: string;
    copiedEndpoint: string | null;
    onCopy: (text: string, endpoint: string) => void;
}

const EndpointCard = ({ endpoint, category, copiedEndpoint, onCopy }: EndpointCardProps) => (
    <div className="bg-transparent backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-green-500/20 transition-all duration-500 shadow-sm ring-1 ring-white/5">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                    endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                        'bg-purple-500/20 text-purple-400'
                    }`}>
                    {endpoint.method}
                </span>
                <code className="text-white font-mono text-sm">{endpoint.path}</code>
            </div>
            <button
                onClick={() => onCopy(endpoint.example, `${category}-${endpoint.path}`)}
                className="flex items-center space-x-2 px-3 py-1 rounded bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
            >
                {copiedEndpoint === `${category}-${endpoint.path}` ? (
                    <CheckCircle weight="light" className="h-4 w-4 text-green-400" />
                ) : (
                    <Copy weight="light" className="h-4 w-4 text-gray-400" />
                )}
                <span className="text-sm text-gray-400">Copy</span>
            </button>
        </div>

        <p className="text-gray-300 mb-4">{endpoint.description}</p>

        <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Parameters:</h4>
            <div className="space-y-2">
                {endpoint.parameters.map((param, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                            <code className="text-blue-400">{param.name}</code>
                            <span className="text-gray-500 text-xs">({param.type})</span>
                            {param.required && <span className="px-1 py-0.5 bg-red-500/20 text-red-400 text-xs rounded">required</span>}
                        </div>
                        <span className="text-gray-400 text-xs">{param.description}</span>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Example:</h4>
            <pre className="bg-black/30 rounded p-3 text-sm text-gray-300 overflow-x-auto">
                {endpoint.example}
            </pre>
        </div>
    </div>
);

export default EndpointCard;
