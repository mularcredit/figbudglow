import {
    BookOpen,
    Key,
    Lightning,
    Globe,
    Database,
    Code,
    HardDrives,
    Shield
} from '@phosphor-icons/react';

interface APISidebarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const APISidebar = ({ activeSection, setActiveSection }: APISidebarProps) => {
    const sections = [
        { id: 'overview', label: 'Overview', icon: BookOpen },
        { id: 'authentication', label: 'Authentication', icon: Key },
        { id: 'lending', label: 'Lending API', icon: Lightning },
        { id: 'payments', label: 'Payments API', icon: Globe },
        { id: 'hrm', label: 'HRM API', icon: Database },
        { id: 'sdks', label: 'SDKs', icon: Code },
        { id: 'webhooks', label: 'Webhooks', icon: HardDrives },
        { id: 'errors', label: 'Error Codes', icon: Shield }
    ];

    return (
        <div className="lg:sticky lg:top-20 lg:h-screen lg:overflow-y-auto">
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">API Documentation</h3>
                    <nav className="space-y-2">
                        {sections.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left transition-all ${activeSection === item.id
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                    : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                                    }`}
                            >
                                <item.icon className="h-4 w-4" weight="light" />
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default APISidebar;
