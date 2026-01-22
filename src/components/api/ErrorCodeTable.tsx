import { errorCodes } from '../../data/api';

const ErrorCodeTable = () => (
    <div>
        <h2 className="text-3xl font-bold text-white mb-6">Error Codes</h2>
        <div className="bg-transparent backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-sm ring-1 ring-white/5">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-white/5 border-b border-white/10">
                        <th className="px-6 py-4 text-sm font-semibold text-white uppercase tracking-wider">HTTP Status</th>
                        <th className="px-6 py-4 text-sm font-semibold text-white uppercase tracking-wider">Meaning</th>
                        <th className="px-6 py-4 text-sm font-semibold text-white uppercase tracking-wider">Description</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {errorCodes.map((error, index) => (
                        <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                            <td className="px-6 py-4">
                                <code className="text-red-400 font-mono font-bold">{error.code}</code>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-white font-medium">{error.message}</span>
                            </td>
                            <td className="px-6 py-4 text-gray-400">{error.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default ErrorCodeTable;
