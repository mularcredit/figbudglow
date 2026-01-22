import { Link } from 'react-router-dom';
import GlowBackground from './GlowBackground';
import { LinkedinLogo, TwitterLogo, GithubLogo } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-white/5 pt-32 pb-16 overflow-hidden">
      <GlowBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-8 transition-transform hover:scale-105">
              <img src="/figbud-logo.svg" alt="Figbud" className="h-6 w-auto opacity-80" />
            </Link>
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-10 max-w-sm">
              Engineering the financial infrastructure for the African digital economy. Leading the way in HCM, Fintech, and Asset Telemetry.
            </p>
            <div className="flex gap-4">
              {[
                { icon: LinkedinLogo, href: "#" },
                { icon: TwitterLogo, href: "#" },
                { icon: GithubLogo, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/30 transition-all group">
                  <social.icon weight="fill" className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-500 tracking-[0.4em] uppercase mb-10">Product Suite</h4>
            <ul className="space-y-4">
              <li><Link to="/services#hrm" className="text-slate-400 hover:text-green-400 font-light text-[13px] transition-colors tracking-widest">Zira HR</Link></li>
              <li><Link to="/services#lending" className="text-slate-400 hover:text-green-400 font-light text-[13px] transition-colors tracking-widest">Jasiri Lending</Link></li>
              <li><Link to="/services#tracker" className="text-slate-400 hover:text-green-400 font-light text-[13px] transition-colors tracking-widest">Strideli</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-500 tracking-[0.4em] uppercase mb-10">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-white font-light text-[13px] transition-colors tracking-widest">About</Link></li>
              <li><Link to="/integrations" className="text-slate-400 hover:text-white font-light text-[13px] transition-colors tracking-widest">Ecosystem</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-white font-light text-[13px] transition-colors tracking-widest">Privacy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-white font-light text-[13px] transition-colors tracking-widest">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-500 tracking-[0.4em] uppercase mb-10">Contact</h4>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Location</span>
                <span className="text-slate-400 font-light text-[12px] leading-relaxed tracking-wide">
                  St. George's House, Parliament Road<br />
                  1st Floor, Room 104
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Inquiries</span>
                <a href="mailto:automations@figbudglobal.online" className="text-slate-400 hover:text-green-400 font-light text-[12px] transition-colors tracking-wide">
                  automations@figbudglobal.online
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Direct Line</span>
                <span className="text-slate-400 font-light text-[12px] tracking-wide">0700594586</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-slate-600 text-[10px] font-medium tracking-[0.4em] uppercase">
              © 2025 Figbud Global Infrastructure.
            </p>
            <p className="text-slate-700 text-[9px] font-light tracking-[0.2em] uppercase">
              Operational excellence at institutional scale.
            </p>
          </div>
          <div className="flex gap-10 text-slate-600 text-[10px] font-medium tracking-[0.2em] uppercase">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;