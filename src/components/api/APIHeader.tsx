import { Code, MagnifyingGlass, Key } from '@phosphor-icons/react';

interface APIHeaderProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const APIHeader = ({ searchTerm, setSearchTerm }: APIHeaderProps) => (
    <header className="bg-slate-800/50 border-b border-slate-700 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-3">
                    <Code weight="light" className="h-8 w-8 text-green-400" />
                    <div>
                        <h1 className="text-xl font-bold text-white">API Documentation</h1>
                        <p className="text-sm text-gray-400">Version 2.1.0</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <MagnifyingGlass weight="light" className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search endpoints..."
                            className="pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white transition-colors">
                        <Key weight="light" className="h-4 w-4" />
                        <span>Get API Key</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
);

export default APIHeader;
