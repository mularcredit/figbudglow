import { CheckCircle } from '@phosphor-icons/react';

interface SuccessStateProps {
    onReset: () => void;
}

const SuccessState = ({ onReset }: SuccessStateProps) => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-green-500/25">
                <CheckCircle weight="light" className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
                Your demo request has been submitted successfully. Our team will contact you within 24 hours to confirm your appointment.
            </p>
            <button
                onClick={onReset}
                className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-600/25"
            >
                Submit Another Request
            </button>
        </div>
    </div>
);

export default SuccessState;
