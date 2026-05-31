/* Human-Crafted Legal Tech Brand
 * - Playfair Display for headlines (sophistication)
 * - Deep Navy (#0F172A) + Burnt Orange (#EA580C)
 * - Asymmetric layouts, real photography, human touches
 * - Professional firm credibility
 */

import React, { useEffect, useRef, useState } from 'react';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import Logo from './components/Logo';

// Custom hook for scroll animations
const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

// Icons as simple components
const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CheckCircle2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const C_SUITE_SERVICES = [
  { label: 'Chief Operating Officer', id: 'fractional-coo' },
  { label: 'Chief Financial Officer', id: 'fractional-cfo' },
  { label: 'Chief Information Officer', id: 'fractional-cio' },
  { label: 'Chief Marketing Officer', id: 'fractional-cmo' },
  { label: 'Chief AI Officer', id: 'fractional-caio' },
];

const ADDITIONAL_SUPPORT_SERVICES = [
  { label: 'Bookkeeping & IOLTA', id: 'bookkeeping' },
  { label: 'HR & Payroll', id: 'hr-payroll' },
  { label: 'Tax Strategy', id: 'tax-strategy' },
];

export default function Home({ onNavigateContact, onNavigate }) {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cSuiteOpen, setCSuiteOpen] = useState(false);
  const [desktopCSuiteOpen, setDesktopCSuiteOpen] = useState(false);
  const heroRef = useRef(null);
  const [socialProofRef, socialProofVisible] = useScrollReveal();
  const [differentiatorRef, differentiatorVisible] = useScrollReveal();
  const [valuePropRef, valuePropVisible] = useScrollReveal();
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [timelineRef, timelineVisible] = useScrollReveal();
  const [frameworkRef, frameworkVisible] = useScrollReveal();
  const [integrationRef, integrationVisible] = useScrollReveal();
  const [teamRef, teamVisible] = useScrollReveal();
  const [trustRef, trustVisible] = useScrollReveal();

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .opacity-0 {
          opacity: 0;
        }
        
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .stats-bar-bg { background-color: #9E9E9E; }
        @media (max-width: 767px) {
          .stats-bar-bg { background-color: #000000; }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          animation: marquee 22s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-item {
          padding: 0 1.25rem;
        }
        .marquee-logo {
          height: 44px;
          width: auto;
          max-width: 130px;
          object-fit: contain;
          display: block;
        }
        @media (min-width: 768px) {
          .marquee-item { padding: 0 3rem; }
          .marquee-logo { height: 70px; max-width: 200px; }
        }

      `}</style>
      {/* Hero Section - Nav + Hero share one background container */}
      <section className="relative md:min-h-screen flex flex-col overflow-hidden" style={{ background: '#F5F5F5' }}>

        {/* Desktop: full-bleed background image */}
        <img
          src="/images/hero-office.jpg.png"
          alt=""
          fetchpriority="high"
          className="hidden md:block absolute inset-0 z-0 w-full h-full object-cover object-[center_30%]"
        />

{/* Bottom fade — desktop only */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 z-10 pointer-events-none" style={{ height: '140px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.68))' }} />

        {/* Navigation - inside hero for seamless background */}
        <nav className="absolute md:relative top-0 left-0 w-full z-50">
          <div className="w-full px-4">
            <div className="flex items-center justify-between h-16 md:h-20">

              {/* Left: About first, Services last */}
              <div className="hidden md:flex items-center gap-8 ml-32">
                <a href="#team" className="text-base font-bold transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}>About</a>
                {/* Services Dropdown — 4 columns */}
                <div className="relative group">
                  <button className="text-base font-bold transition-colors flex items-center gap-1" style={{ color: '#FFFFFF', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 hidden group-hover:block" style={{ paddingTop: '8px', width: '860px', maxWidth: 'calc(100vw - 2rem)' }}>
                      <div className="rounded-lg shadow-2xl" style={{ backgroundColor: '#0A1628', border: '1px solid rgba(201, 169, 97, 0.2)' }}>
                        <div className="grid grid-cols-4 gap-5 p-8">
                          {/* Pre-Litigation Services */}
                          <div>
                            <h3 className="text-xs font-bold mb-4 pb-2 border-b uppercase tracking-wider" style={{ color: '#C9A961', borderColor: 'rgba(201, 169, 97, 0.3)' }}>Pre-Litigation Services</h3>
                            <ul className="space-y-2">
                              <li><button style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer" }} className="text-xs block py-1 transition-colors text-left w-full" onMouseEnter={(e) => e.target.style.color = "#C9A961"} onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.7)"} onClick={() => { document.getElementById("lawfirm-in-a-box")?.scrollIntoView({ behavior: "smooth" }); setServicesDropdownOpen(false); }}>End to End</button></li>
                              <li><button style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer" }} className="text-xs block py-1 transition-colors text-left w-full" onMouseEnter={(e) => e.target.style.color = "#C9A961"} onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.7)"} onClick={() => { onNavigate("policy-limits"); setServicesDropdownOpen(false); }}>Policy Limits</button></li>
                              <li><button style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer" }} className="text-xs block py-1 transition-colors text-left w-full" onMouseEnter={(e) => e.target.style.color = "#C9A961"} onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.7)"} onClick={() => { onNavigate("lien-resolution"); setServicesDropdownOpen(false); }}>Lien Resolution</button></li>
                              <li><button style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer" }} className="text-xs block py-1 transition-colors text-left w-full" onMouseEnter={(e) => e.target.style.color = "#C9A961"} onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.7)"} onClick={() => { onNavigate("settlement-disbursement"); setServicesDropdownOpen(false); }}>Settlement Disbursements</button></li>
                            </ul>
                          </div>
                          {/* Additional Support Services */}
                          <div>
                            <h3 className="text-xs font-bold mb-4 pb-2 border-b uppercase tracking-wider" style={{ color: '#C9A961', borderColor: 'rgba(201, 169, 97, 0.3)' }}>Additional Support Services</h3>
                            <ul className="space-y-3">
                              <li>
                                <button
                                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider w-full text-left"
                                  style={{ color: 'rgba(201, 169, 97, 0.85)', background: 'none', border: 'none', cursor: 'pointer' }}
                                  onClick={() => setDesktopCSuiteOpen(o => !o)}
                                >
                                  C-Suite
                                  <svg className="w-3 h-3 transition-transform" style={{ transform: desktopCSuiteOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>
                                {desktopCSuiteOpen && (
                                  <ul className="mt-2 ml-3 space-y-1.5">
                                    {C_SUITE_SERVICES.map(({ label, id }) => (
                                      <li key={id}>
                                        <button onClick={() => { onNavigate(id); setServicesDropdownOpen(false); setDesktopCSuiteOpen(false); }} className="text-xs block py-0.5 transition-colors text-left w-full" style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }} onMouseEnter={(e) => (e.target.style.color = '#C9A961')} onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}>{label}</button>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                              {ADDITIONAL_SUPPORT_SERVICES.map(({ label, id }) => (
                                <li key={id}>
                                  <button onClick={() => { onNavigate(id); setServicesDropdownOpen(false); }} className="text-xs block py-1 transition-colors text-left w-full" style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }} onMouseEnter={(e) => (e.target.style.color = '#C9A961')} onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}>{label}</button>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Litigation Finance */}
                          <div>
                            <h3 className="text-xs font-bold mb-4 pb-2 border-b uppercase tracking-wider" style={{ color: '#C9A961', borderColor: 'rgba(201, 169, 97, 0.3)' }}>Litigation Finance</h3>
                            <ul className="space-y-2">
                              {['Growth Marketing Loans', 'Pre-Settlement Advance', 'Case Cost Advance', 'Medical Funding'].map((label) => (
                                <li key={label}><a href="#support-services" className="text-xs block py-1 transition-colors" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'} onClick={() => setServicesDropdownOpen(false)}>{label}</a></li>
                              ))}
                            </ul>
                          </div>
                          {/* Advisory + PE */}
                          <div>
                            <h3 className="text-xs font-bold mb-4 pb-2 border-b uppercase tracking-wider" style={{ color: '#C9A961', borderColor: 'rgba(201, 169, 97, 0.3)' }}>Advisory + PE</h3>
                            <ul className="space-y-2">
                              {['Mergers & Acquisitions', 'MSOAAS', 'AI Hub & Innovation Advisory'].map((label) => (
                                <li key={label}><a href="#support-services" className="text-xs block py-1 transition-colors" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'} onClick={() => setServicesDropdownOpen(false)}>{label}</a></li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <a href="#how-it-works" className="text-base font-bold transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}>How We Work</a>
                <a href="#lawfirm-in-a-box" className="text-base font-bold transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}>LawFirm In A Box</a>
                <button
                  className="text-base font-bold transition-colors"
                  style={{ color: '#FFFFFF', background: 'none', border: 'none', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.target.style.color = '#C9A961'}
                  onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
                  onClick={() => onNavigate('metrics')}
                >
                  Metrics
                </button>


              </div>

              {/* Mobile menu button */}
              <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Right: placeholder to keep nav balanced */}
              <div className="hidden md:block w-24" />
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden max-h-[70vh] overflow-y-auto animate-slide-down" style={{ backgroundColor: '#0A1628' }}>
              <div className="px-4 pt-2 pb-4 space-y-4">
                <a href="#team" className="block py-2 text-base font-bold" style={{ color: '#FFFFFF' }} onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#how-it-works" className="block py-2 text-base font-bold" style={{ color: '#FFFFFF' }} onClick={() => setMobileMenuOpen(false)}>How We Work</a>
                <a href="#lawfirm-in-a-box" className="block py-2 text-base font-bold" style={{ color: '#FFFFFF' }} onClick={() => setMobileMenuOpen(false)}>LawFirm In A Box</a>
                <button
                  className="block py-2 text-base font-bold w-full text-left"
                  style={{ color: '#FFFFFF', background: 'none', border: 'none', cursor: 'pointer' }}
                  onClick={() => { onNavigate('metrics'); setMobileMenuOpen(false); }}
                >
                  Metrics
                </button>
                
                {/* Services */}
                <div>
                  <div className="py-2 text-sm font-semibold" style={{ color: '#C9A961' }}>Services</div>
                  <div className="ml-4 mt-2 space-y-3">
                    <div>
                      <h4 className="text-xs font-bold mb-1 uppercase tracking-wider" style={{ color: 'rgba(201, 169, 97, 0.7)' }}>Pre-Litigation Services</h4>
                      <ul className="space-y-1">
                        <li><button style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer" }} className="block py-0.5 text-xs text-left w-full" onClick={() => { document.getElementById("lawfirm-in-a-box")?.scrollIntoView({ behavior: "smooth" }); setMobileMenuOpen(false); }}>End to End</button></li>
                        <li><button style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer" }} className="block py-0.5 text-xs text-left w-full" onClick={() => { onNavigate("policy-limits"); setMobileMenuOpen(false); }}>Policy Limits</button></li>
                        <li><button style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer" }} className="block py-0.5 text-xs text-left w-full" onClick={() => { onNavigate("lien-resolution"); setMobileMenuOpen(false); }}>Lien Resolution</button></li>
                        <li><button style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer" }} className="block py-0.5 text-xs text-left w-full" onClick={() => { onNavigate("settlement-disbursement"); setMobileMenuOpen(false); }}>Settlement Disbursements</button></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold mb-1 uppercase tracking-wider" style={{ color: 'rgba(201, 169, 97, 0.7)' }}>Additional Support Services</h4>
                      <ul className="space-y-2">
                        <li>
                          <button
                            className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider w-full text-left"
                            style={{ color: 'rgba(201, 169, 97, 0.85)', background: 'none', border: 'none', cursor: 'pointer' }}
                            onClick={() => setCSuiteOpen(o => !o)}
                          >
                            C-Suite
                            <svg className="w-3 h-3 transition-transform" style={{ transform: cSuiteOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {cSuiteOpen && (
                            <ul className="ml-3 mt-1 space-y-1">
                              {C_SUITE_SERVICES.map(({ label, id }) => (
                                <li key={id}><button onClick={() => { onNavigate(id); setMobileMenuOpen(false); }} className="block py-0.5 text-xs text-left w-full" style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }}>{label}</button></li>
                              ))}
                            </ul>
                          )}
                        </li>
                        {ADDITIONAL_SUPPORT_SERVICES.map(({ label, id }) => (
                          <li key={id}><button onClick={() => { onNavigate(id); setMobileMenuOpen(false); }} className="block py-0.5 text-xs text-left w-full" style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }}>{label}</button></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold mb-1 uppercase tracking-wider" style={{ color: 'rgba(201, 169, 97, 0.7)' }}>Litigation Finance</h4>
                      <ul className="space-y-1">
                        {['Growth Marketing Loans', 'Pre-Settlement Advance', 'Case Cost Advance', 'Medical Funding'].map((label) => (
                          <li key={label}><a href="#support-services" className="block py-0.5 text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onClick={() => setMobileMenuOpen(false)}>{label}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold mb-1 uppercase tracking-wider" style={{ color: 'rgba(201, 169, 97, 0.7)' }}>Advisory + PE</h4>
                      <ul className="space-y-1">
                        {['Mergers & Acquisitions', 'MSOAAS', 'AI Hub & Innovation Advisory'].map((label) => (
                          <li key={label}><a href="#support-services" className="block py-0.5 text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onClick={() => setMobileMenuOpen(false)}>{label}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          )}
        </nav>
        
        {/* Mobile: image only */}
        <div className="hidden">
          <img src="/images/hero-office.jpg.png" alt="" className="w-full block" fetchpriority="high" style={{ width: '100%', height: 'auto' }} />
        </div>

        {/* Mobile: PIAAS + MSOAAS white bar */}
        <div className="hidden">
          <div className="flex flex-col items-center">
            <span className="font-serif font-bold" style={{ color: '#000000', fontSize: '1.6rem', letterSpacing: '-0.01em' }}>
              PIAAS<sup style={{ fontSize: '0.4em', verticalAlign: 'super' }}>™</sup>
            </span>
            <p className="uppercase tracking-widest" style={{ color: '#000000', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em' }}>PI as a Service</p>
          </div>
          <span style={{ color: '#C9A961', fontWeight: 900, fontSize: '1.6rem' }}>+</span>
          <div className="flex flex-col items-center">
            <span className="font-serif font-bold" style={{ color: '#000000', fontSize: '1.6rem', letterSpacing: '-0.01em' }}>
              MSOAAS<sup style={{ fontSize: '0.4em', verticalAlign: 'super' }}>™</sup>
            </span>
            <p className="uppercase tracking-widest" style={{ color: '#000000', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em' }}>MSO as a Service</p>
          </div>
        </div>

        {/* Mobile hero */}
        <div ref={heroRef} className="relative md:hidden z-10 overflow-hidden" style={{ height: 'calc(100svh - 38px)', minHeight: '0', backgroundColor: '#F5F5F5' }}>
          <img
            src="/images/mobile.png"
            alt=""
            className="w-full h-full block"
            fetchpriority="high"
            style={{ objectFit: 'cover', objectPosition: '20% 20%' }}
          />
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{ height: '120px', background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.6))' }}
          />
        </div>

        {/* Desktop: hero content */}
        <div className="relative z-10 flex-1 hidden md:flex items-end justify-start pl-[23rem] pb-64">
          <div>
            <div className="flex flex-col mb-8 ml-8">
              <div className="flex flex-col items-start">
                <h1 className="font-serif leading-none" style={{ fontWeight: 700, color: '#000000', fontSize: 'clamp(1.2rem, 2.625vw, 2.25rem)', letterSpacing: '-0.02em' }}>
                  PIAAS<sup style={{ fontSize: '0.35em', verticalAlign: 'super' }}>™</sup>
                </h1>
                <p className="uppercase tracking-widest" style={{ color: '#000000', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em' }}>PI as a Service</p>
              </div>
              <span className="font-serif ml-24" style={{ color: '#C9A961', fontSize: 'clamp(1.05rem, 2.25vw, 1.875rem)', fontWeight: 900, lineHeight: 1 }}>+</span>
              <div className="flex flex-col items-start">
                <h1 className="font-serif leading-none" style={{ fontWeight: 700, color: '#000000', fontSize: 'clamp(1.2rem, 2.625vw, 2.25rem)', letterSpacing: '-0.02em' }}>
                  MSOAAS<sup style={{ fontSize: '0.35em', verticalAlign: 'super' }}>™</sup>
                </h1>
                <p className="uppercase tracking-widest" style={{ color: '#000000', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em' }}>MSO as a Service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logo above stats bar — desktop only */}
        <div className="hidden md:block absolute right-6 z-30" style={{ bottom: 'calc(2.5rem + 50px)' }}>
          <Logo variant="default" size="small" className="h-11 w-auto" />
        </div>

        {/* Stats bar — sits inside blur at bottom of hero */}
        <div className="stats-bar-bg hidden md:block md:absolute md:bottom-0 md:left-0 md:right-0 z-20">
          <div className="w-full px-4 md:px-5">
            <div className="py-2 flex flex-col md:flex-row md:items-center md:ml-10 gap-1 md:gap-6">
              <p className="md:hidden font-serif font-bold text-center" style={{ color: '#FFFFFF', fontSize: 'clamp(0.75rem, 1.5vw, 1.4rem)' }}>
                AI Powered Pre-Lit Platform From Intake To Outcomes
              </p>
              <p className="hidden md:block font-serif font-bold whitespace-nowrap" style={{ color: '#000000', fontSize: 'clamp(0.75rem, 1.5vw, 1.4rem)' }}>
                AI Powered End to End Pre-Lit Platform From Intake To Demand &amp; Outcomes
              </p>
              <div className="hidden md:block" style={{ width: '1px', alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.4)' }} />
              <p className="hidden md:block font-serif font-bold whitespace-nowrap" style={{ color: '#000000', fontSize: 'clamp(0.75rem, 1.5vw, 1.4rem)' }}>
                Scale Your Practice &nbsp;&nbsp;&middot;&nbsp;&nbsp; Reduce Overhead &nbsp;&nbsp;&middot;&nbsp;&nbsp; Reduce Time On Desk(TOD)
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Scale your practice bar */}
        <div className="hidden z-20 py-2 px-4 flex justify-center" style={{ backgroundColor: '#FFFFFF' }}>
          <p className="font-serif font-bold text-center" style={{ color: '#000000', fontSize: 'clamp(0.75rem, 1.5vw, 1.4rem)' }}>
            Reduce Overhead &nbsp;·&nbsp; Scale Your Practice &nbsp;·&nbsp; Reduce Time On Desk
          </p>
        </div>

        <div className="md:hidden z-20 flex items-center justify-center px-2" style={{ backgroundColor: '#9E9E9E', height: '44px' }}>
          <p className="font-serif font-bold text-center whitespace-nowrap" style={{ color: '#000000', fontSize: '0.55rem', lineHeight: 1.2 }}>
            AI Powered Pre-Lit Platform &nbsp;&middot;&nbsp; Scale Your Practice &nbsp;&middot;&nbsp; Reduce Overhead &nbsp;&middot;&nbsp; Reduce Time On Desk
          </p>
        </div>
      </section>

      {/* Human Centric + AI Section */}
      <section className="py-20 md:py-32 text-center px-6 md:px-8" style={{ background: 'linear-gradient(to bottom, #FAFAF8, #FFFFFF)' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-serif font-bold mb-8 leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', color: '#0A1628' }}>
            Agents + Humans + AI<br />=<br />
            <span className="inline-flex flex-wrap justify-center gap-x-3 gap-y-4 mt-2">
              <span style={{ border: '2px solid #0A1628', padding: '0.2rem 0.8rem' }}>More Cases</span>
              <span style={{ border: '2px solid #0A1628', padding: '0.2rem 0.8rem' }}><span style={{ color: '#C9A961' }}>Less</span> Overhead</span>
              <span style={{ border: '2px solid #0A1628', padding: '0.2rem 0.8rem' }}><span style={{ color: '#C9A961' }}>Less</span> Time On Desk</span>
              <span style={{ border: '2px solid #0A1628', padding: '0.2rem 0.8rem' }}><span style={{ color: '#C9A961' }}>Less</span> Staff</span>
              <span style={{ border: '2px solid #0A1628', padding: '0.2rem 0.8rem' }}>Superior Client Comm</span>
            </span>
          </h2>
          <p className="text-base md:text-xl leading-relaxed mx-auto mt-16" style={{ color: '#64748B', maxWidth: '680px' }}>
            LawBOX™ is the nation's Gold Standard for AI powered end to end pre-litigation. Effortlessly remove friction from Intake to Settlement, handle more cases with less overhead.
          </p>
          <button
            onClick={onNavigateContact}
            className="font-bold px-8 py-3 rounded-md transition-all mt-8"
            style={{ backgroundColor: '#C9A961', color: '#FFFFFF', fontSize: '1rem', border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B8941F'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9A961'; }}
          >
            Schedule a Call
          </button>
        </div>
      </section>

      {/* Trusted By / Logo Ticker */}
      <section className="py-10 overflow-hidden" style={{ backgroundColor: '#F5F5F5', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <p className="text-center font-bold mb-6" style={{ color: '#9E9E9E' }}>
          <span className="text-xs uppercase tracking-widest">Trusted By Leading Law Firms</span>
          <span className="font-normal" style={{ fontSize: '0.65rem', letterSpacing: '0', textTransform: 'none' }}> (LawBOX and Fort Morgan)</span>
        </p>
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <div className="marquee-track">
            {[
              { src: '/images/Philipslogo.webp', alt: 'Phillips Law Group' },
              { src: '/images/EastonandEastonlogo.png', alt: 'Easton & Easton' },
              { src: '/images/californialegalcounsellogo.jpg', alt: 'California Legal Counsel' },
              { src: '/images/SFloogo.png', alt: 'SF Law' },
              { src: '/images/calhounlogo.jpg', alt: 'Calhoun' },
              { src: '/images/bougardlogo.jpg', alt: 'Bougard' },
              { src: '/images/yankologo.png', alt: 'Yanko' },
              { src: '/images/puschlogo.png', alt: 'Pusch', scale: 1.8 },
              { src: '/images/zavalalogo.jpg', alt: 'Zavala' },
              { src: '/images/Philipslogo.webp', alt: 'Phillips Law Group' },
              { src: '/images/EastonandEastonlogo.png', alt: 'Easton & Easton' },
              { src: '/images/californialegalcounsellogo.jpg', alt: 'California Legal Counsel' },
              { src: '/images/SFloogo.png', alt: 'SF Law' },
              { src: '/images/calhounlogo.jpg', alt: 'Calhoun' },
              { src: '/images/bougardlogo.jpg', alt: 'Bougard' },
              { src: '/images/yankologo.png', alt: 'Yanko' },
              { src: '/images/puschlogo.png', alt: 'Pusch', scale: 1.8 },
              { src: '/images/zavalalogo.jpg', alt: 'Zavala' },
            ].map((logo, i) => (
              <div key={i} className="marquee-item flex items-center justify-center flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="marquee-logo" style={{ height: logo.scale ? `${44 * logo.scale}px` : undefined }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LawFirm In A Box Section */}
      <section className="pt-6 pb-16 overflow-hidden relative" style={{ backgroundColor: '#FFFFFF' }} id="lawfirm-in-a-box">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bottom-left subtitle */}
          <div className="absolute bottom-0 left-6">
            <p className="text-xl font-bold" style={{ color: '#000000' }}>Law Firm In A Box™</p>
          </div>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3" style={{ color: '#000000' }}>Hyperscale Your Firm with AI</h2>
            <p className="font-semibold mt-4" style={{ color: '#C9A961', fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)' }}>From Growth Funding To Settlement Disbursements</p>
          </div>

          {/* Flow Diagram */}
          <div className="pb-4 md:-ml-40">
            <div className="flex flex-col md:flex-row md:items-center gap-2">

              {/* helper: small box */}
              {/* Marketing Growth Capital */}
              <div className="flex flex-col items-center justify-center text-center border-2 rounded-xl p-3 w-full md:flex-1 min-w-0" style={{ borderColor: '#C9A961', backgroundColor: 'transparent', minHeight: '120px' }}>
                <svg className="w-8 h-8 mb-2 flex-shrink-0" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-bold text-sm leading-tight mb-1" style={{ color: '#000000' }}>Marketing Growth Capital Fund</p>
                <p className="text-xs font-bold" style={{ color: '#B8860B' }}>Growth Funding</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 hidden md:block" fill="#C9A961" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                <svg className="w-5 h-5 md:hidden" fill="#C9A961" viewBox="0 0 24 24"><path d="M11 13.025l-2.828-2.847-2.828 2.847L1 13.025 12 24l11-10.975-4.344-.847-2.828-2.847L13 13.025h-2z" /><path d="M11 0h2v13h-2z"/></svg>
              </div>

              {/* Lead Gen */}
              <div className="flex flex-col items-center justify-center text-center border-2 rounded-xl p-3 w-full md:flex-1 min-w-0" style={{ borderColor: '#C9A961', backgroundColor: 'transparent', minHeight: '120px' }}>
                <svg className="w-8 h-8 mb-2 flex-shrink-0" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <p className="font-bold text-sm leading-tight mb-1" style={{ color: '#000000' }}>Vetted Marketing Partners</p>
                <p className="text-xs font-bold" style={{ color: '#B8860B' }}>Marketing Partners</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 hidden md:block" fill="#C9A961" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                <svg className="w-5 h-5 md:hidden" fill="#C9A961" viewBox="0 0 24 24"><path d="M11 13.025l-2.828-2.847-2.828 2.847L1 13.025 12 24l11-10.975-4.344-.847-2.828-2.847L13 13.025h-2z" /><path d="M11 0h2v13h-2z"/></svg>
              </div>

              {/* Signed Retainer */}
              <div className="flex flex-col items-center justify-center text-center border-2 rounded-xl p-3 w-full md:flex-1 min-w-0" style={{ borderColor: '#C9A961', backgroundColor: 'transparent', minHeight: '120px' }}>
                <svg className="w-8 h-8 mb-2 flex-shrink-0" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="font-bold text-sm leading-tight mb-1" style={{ color: '#000000' }}>Signed Retainer</p>
                <p className="text-xs font-bold" style={{ color: '#B8860B' }}>Client Onboarding</p>
                <p className="text-xs font-bold" style={{ color: '#B8860B' }}>Intake Complete</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 hidden md:block" fill="#C9A961" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                <svg className="w-5 h-5 md:hidden" fill="#C9A961" viewBox="0 0 24 24"><path d="M11 13.025l-2.828-2.847-2.828 2.847L1 13.025 12 24l11-10.975-4.344-.847-2.828-2.847L13 13.025h-2z" /><path d="M11 0h2v13h-2z"/></svg>
              </div>

              {/* Policy Limits */}
              <div className="flex flex-col items-center justify-center text-center border-2 rounded-xl p-3 w-full md:flex-1 min-w-0" style={{ borderColor: '#C9A961', backgroundColor: 'transparent', minHeight: '120px', cursor: 'pointer' }} onClick={() => onNavigate("policy-limits")}>
                <svg className="w-8 h-8 mb-2 flex-shrink-0" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="font-bold text-sm leading-tight mb-1" style={{ color: '#000000' }}>Policy Limits</p>
                <p className="text-xs font-bold" style={{ color: '#B8860B' }}>Know coverage before you file maximum value</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 hidden md:block" fill="#C9A961" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                <svg className="w-5 h-5 md:hidden" fill="#C9A961" viewBox="0 0 24 24"><path d="M11 13.025l-2.828-2.847-2.828 2.847L1 13.025 12 24l11-10.975-4.344-.847-2.828-2.847L13 13.025h-2z" /><path d="M11 0h2v13h-2z"/></svg>
              </div>

              {/* LawBOX - Center Hero Box */}
              <div className="border-2 rounded-xl p-4 w-full md:flex-[3] min-w-0" style={{ borderColor: '#C9A961', backgroundColor: 'rgba(201, 169, 97, 0.1)', minHeight: '180px' }}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="font-bold text-lg" style={{ color: '#000000' }}>LawBOX™</h3>
                </div>
                <p className="text-center font-bold text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A961' }}>Full Service Operations</p>
                <div style={{ height: '1px', backgroundColor: 'rgba(201,169,97,0.3)', marginBottom: '12px' }} />
                <div className="flex flex-col gap-2">
                  {[
                    'Demand Drafting',
                    'Client Communictaion',
                    'Records & Bills Retrieval',
                    'Claims Setup & Investigation',
                    'Care Coordination & Treatment',
                    'Demand Drafting & Preparation',
                    'Carrier Settlement Negotiation',
                  ].map((item) => (
                    <div key={item} className="text-center">
                      <span style={{ fontSize: '0.8rem', color: '#000000' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 hidden md:block" fill="#C9A961" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                <svg className="w-5 h-5 md:hidden" fill="#C9A961" viewBox="0 0 24 24"><path d="M11 13.025l-2.828-2.847-2.828 2.847L1 13.025 12 24l11-10.975-4.344-.847-2.828-2.847L13 13.025h-2z" /><path d="M11 0h2v13h-2z"/></svg>
              </div>

              {/* Demand Ready */}
              <div className="flex flex-col items-center justify-center text-center border-2 rounded-xl p-3 w-full md:flex-1 min-w-0" style={{ borderColor: '#C9A961', backgroundColor: 'transparent', minHeight: '120px' }}>
                <svg className="w-8 h-8 mb-2 flex-shrink-0" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-bold text-sm leading-tight mb-1" style={{ color: '#000000' }}>Demand Ready</p>
                <p className="text-xs font-bold" style={{ color: '#B8860B' }}>Follow your firm's template</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 hidden md:block" fill="#C9A961" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                <svg className="w-5 h-5 md:hidden" fill="#C9A961" viewBox="0 0 24 24"><path d="M11 13.025l-2.828-2.847-2.828 2.847L1 13.025 12 24l11-10.975-4.344-.847-2.828-2.847L13 13.025h-2z" /><path d="M11 0h2v13h-2z"/></svg>
              </div>

              {/* Lien Resolution */}
              <div className="flex flex-col items-center justify-center text-center border-2 rounded-xl p-3 w-full md:flex-1 min-w-0" style={{ borderColor: '#C9A961', backgroundColor: 'transparent', minHeight: '120px', cursor: 'pointer' }} onClick={() => onNavigate("lien-resolution")}>
                <svg className="w-8 h-8 mb-2 flex-shrink-0" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3M9 4h6a1 1 0 011 1v0a1 1 0 01-1 1H9a1 1 0 01-1-1v0a1 1 0 011-1z" />
                </svg>
                <p className="font-bold text-sm leading-tight mb-1" style={{ color: '#000000' }}>Lien Resolution</p>
                <p className="text-xs font-bold" style={{ color: '#B8860B' }}>Reduce Liens maximize client recovery</p>

              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 hidden md:block" fill="#C9A961" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                <svg className="w-5 h-5 md:hidden" fill="#C9A961" viewBox="0 0 24 24"><path d="M11 13.025l-2.828-2.847-2.828 2.847L1 13.025 12 24l11-10.975-4.344-.847-2.828-2.847L13 13.025h-2z" /><path d="M11 0h2v13h-2z"/></svg>
              </div>

              {/* Settlement Disbursements */}
              <div className="flex flex-col items-center justify-center text-center border-2 rounded-xl p-3 w-full md:flex-1 min-w-0" style={{ borderColor: '#C9A961', backgroundColor: 'transparent', minHeight: '120px', cursor: 'pointer' }} onClick={() => onNavigate("settlement-disbursement")}>
                <svg className="w-8 h-8 mb-2 flex-shrink-0" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-bold text-sm leading-tight mb-1" style={{ color: '#000000' }}>Settlement Disbursements</p>
                <p className="text-xs font-bold" style={{ color: '#B8860B' }}>Disburse settlements digitally and instantly</p>
              </div>

            </div>
          </div>

          {/* Bottom text */}
          <div className="md:absolute md:bottom-2 md:right-6 flex flex-col gap-1 mt-6 md:mt-0 items-end">
            <div className="flex items-center gap-2">
              <p className="font-medium px-3 py-1 text-center" style={{ color: '#FF0000', fontSize: 'clamp(0.85rem, 2vw, 1.5rem)', letterSpacing: '0.01em', border: '2px solid #C9A961' }}>Reduce Overhead</p>
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="#16a34a" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium px-3 py-1 text-center" style={{ color: '#FF0000', fontSize: 'clamp(0.85rem, 2vw, 1.5rem)', letterSpacing: '0.01em', border: '2px solid #C9A961' }}>Reduce Time On Desk</p>
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="#16a34a" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>

        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-20 px-6 md:px-8" style={{ backgroundColor: '#0F1E35' }}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#C9A961' }}>Pre-Litigation Operating Layer</p>
          <h2 className="font-serif font-bold text-white mb-12" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>Additional Benefits</h2>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-12 md:mb-16" style={{ border: '1px solid rgba(201,169,97,0.3)', borderRadius: '4px', overflow: 'hidden' }}>
            {[
              { value: '500', label: 'Cases / CM Target' },
              { value: 'Same-Day', label: 'Case Setup' },
              { value: '1 MSA', label: 'One Accountable Partner' },
              { value: '100%', label: 'Inside Your CMS' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-start px-4 md:px-6 py-4 md:py-5" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRight: (i % 2 === 0) ? '1px solid rgba(201,169,97,0.2)' : 'none' }}>
                <span className="font-serif font-bold mb-1" style={{ color: '#C9A961', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>{stat.value}</span>
                <span className="uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.6rem', fontWeight: 700 }}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Numbered Benefits */}
          <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            {[
              {
                n: '1',
                title: 'Keep more cases in-house — with capital to scale.',
                body: 'Stop referring out or declining smaller matters. Keep 100% of the fee instead of splitting with a referral attorney. Growth funding can pair with LawBOX™ operating capacity so signed retainers turn into scalable, serviced matters.',
                color: '#C9A961',
              },
              {
                n: '2',
                title: 'Preserve more legal fees (where permitted).',
                body: "Many firms elect to apply LawBOX™ service costs as case costs at disbursement, at the attorney's discretion. Availability depends on your state's rules and fee-agreement language. LawBOX™ can coordinate an opinion letter from qualified counsel to confirm what is permissible in your jurisdiction.",
                color: '#0F1E35',
              },
              {
                n: '3',
                title: 'One agreement. One accountable partner.',
                body: 'One MSA and SOW covers intake support, treatment monitoring, records and bills retrieval, demand drafting, and pre-lit operations. Replaces the cost and management burden of multiple out-of-office VAs. One line of escalation when something needs attention.',
                color: '#C9A961',
              },
              {
                n: '4',
                title: 'No new tools to learn.',
                body: "LawBOX™ works inside your firm's existing CMS, email, and matter workflow. Zero setup friction. Zero staff retraining. Your team keeps working the way they already work.",
                color: '#0F1E35',
              },
              {
                n: '5',
                title: 'Speed from day one.',
                body: "Same-day case setup, daily follow-up, and faster demand readiness. Matters don't sit idle. Leverage is built before negotiation, not after.",
                color: '#C9A961',
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-6 py-8">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center font-bold text-base" style={{ backgroundColor: item.color === '#C9A961' ? '#C9A961' : '#1E2F45', color: item.color === '#C9A961' ? '#0F1E35' : '#FFFFFF', borderRadius: '4px' }}>
                  {item.n}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white mb-2" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {false && <>
      {/* Services Section */}
      <section ref={servicesRef} className={`py-24 ${servicesVisible ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ backgroundColor: '#FFFFFF' }} id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#C9A961' }}>Pre-Litigation Services</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#0A1628' }}>Everything handled,<br />intake to demand</h2>
            </div>
            <p className="text-base font-light max-w-sm" style={{ color: '#64748B' }}>AI-powered teams & case managers working around the clock for your firm</p>
          </div>

          {/* Numbered service rows */}
          <div className="space-y-0">
            {[
              {
                num: '01',
                title: 'Intake',
                tag: 'Captures Every Opportunity',
                body: 'AI monitors every intake call 24/7, identifies lost leads in real time, and alerts you to rescue them before they sign with another firm. Multilingual specialists qualify all leads.',
                highlight: false,
              },
              {
                num: '02',
                title: 'Document Collection & Claims Setup',
                tag: 'Fully Handled End-to-End',
                body: 'Police reports, medical retrievals, insurance claims setup, and facts of loss — all collected and organized seamlessly so nothing falls through the cracks.',
                highlight: false,
              },
              {
                num: '03',
                title: 'Journey Of Care',
                tag: 'Higher Settlements Through Completion',
                body: 'Weekly check-ins keep clients treating until maximum medical improvement. Finished treatment means stronger cases and higher settlements.',
                highlight: true,
                metrics: [
                  { stat: '90%', label: 'Faster Record Retrieval' },
                  { stat: 'Auto', label: 'Provider Identification' },
                  { stat: '100%', label: 'Complete Bill & Note Package' },
                ],
              },
              {
                num: '04',
                title: 'Medical Chronologies',
                tag: 'Save 50+ Hours Per Case',
                body: 'Hundreds of pages transformed into organized, searchable timelines with source citations — delivered in hours, not weeks. Process records 8× faster than manual review.',
                highlight: false,
              },
              {
                num: '05',
                title: 'Demand Letters',
                tag: 'Sounds Like Your Firm, Not a Robot',
                body: 'Demands built to your exact specifications with adjuster psychology baked in. Delivered in 48 hours with unlimited revisions until it\'s perfect.',
                highlight: false,
              },
            ].map(({ num, title, tag, body, highlight, metrics }, i) => (
              <div
                key={num}
                className="group relative transition-all duration-300"
                style={{
                  borderTop: '1px solid #E5E7EB',
                  backgroundColor: highlight ? '#0A1628' : 'transparent',
                  padding: highlight ? '0' : '0',
                }}
              >
                <div
                  className="grid md:grid-cols-[80px_1fr_1.6fr] gap-6 md:gap-10 items-start py-10 px-0 md:px-2 cursor-default"
                  style={{ paddingLeft: highlight ? '0' : undefined }}
                  onMouseEnter={(e) => {
                    if (!highlight) e.currentTarget.parentElement.style.backgroundColor = '#FAFAF8';
                  }}
                  onMouseLeave={(e) => {
                    if (!highlight) e.currentTarget.parentElement.style.backgroundColor = 'transparent';
                  }}
                >
                  {/* Number */}
                  <div className="font-serif text-4xl font-bold select-none" style={{ color: highlight ? 'rgba(201,169,97,0.3)' : '#C0C9D4', lineHeight: 1 }}>
                    {num}
                  </div>

                  {/* Title + tag */}
                  <div className="pt-1">
                    <h3 className="font-bold text-xl mb-2 leading-snug" style={{ color: highlight ? '#FFFFFF' : '#0A1628' }}>{title}</h3>
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#C9A961' }}>{tag}</span>
                  </div>

                  {/* Body + optional metrics */}
                  <div className="pt-1">
                    <p className="text-sm leading-relaxed mb-0" style={{ color: highlight ? 'rgba(255,255,255,0.8)' : '#374151' }}>{body}</p>
                    {metrics && (
                      <div className="grid grid-cols-3 gap-4 mt-8">
                        {metrics.map(({ stat, label }) => (
                          <div key={label}>
                            <div className="text-2xl font-bold mb-1" style={{ color: '#C9A961' }}>{stat}</div>
                            <div className="text-xs font-medium leading-snug" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Gold left accent on hover (non-highlight rows) */}
                {!highlight && (
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#C9A961' }} />
                )}
              </div>
            ))}
            {/* Bottom border */}
            <div style={{ borderTop: '1px solid #E5E7EB' }} />
          </div>
        </div>
      </section>

      {/* From Lead to Settlement Section */}
      <section ref={timelineRef} className={`py-24 ${timelineVisible ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#C9A961' }}>The Process</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0A1628' }}>
              From Lead to Settlement. <span style={{ color: '#C9A961' }}>Effortlessly.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-6 gap-4 relative">
                {/* Connecting Line */}
                <div className="absolute top-16 left-0 right-0 h-0.5" style={{ backgroundColor: '#E5E7EB' }}></div>
                
                {/* Step 1: LEADS */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#E5E7EB' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#64748B' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#0A1628' }}>1</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>LEADS</h3>
                </div>

                {/* Step 2: INTAKE */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#E5E7EB' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#64748B' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#0A1628' }}>2</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>INTAKE</h3>
                </div>

                {/* Step 3: SIGNED RETAINER */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#E5E7EB' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#64748B' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#0A1628' }}>3</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>SIGNED RETAINER</h3>
                </div>

                {/* Step 4: PRE LITIGATION */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#C9A961' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#C9A961' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#C9A961' }}>4</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>PRE LITIGATION</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>Medical records, Police reports, Chronology, Liability, Damages</p>
                </div>

                {/* Step 5: DEMAND LETTER */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#C9A961' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#C9A961' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#C9A961' }}>5</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>DEMAND LETTER</h3>
                </div>

                {/* Step 6: LIEN RESOLUTION */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#C9A961' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#C9A961' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#C9A961' }}>6</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>LIEN RESOLUTION</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>Medicare/Medicaid negotiation, Hospital liens, Settlement distribution</p>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Timeline */}
            <div className="lg:hidden space-y-8">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-navy-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-navy-700 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">LEADS</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-navy-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-navy-700 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">INTAKE</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-navy-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-navy-700 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">SIGNED RETAINER</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-burnt-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-burnt-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-burnt-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">PRE LITIGATION</h3>
                  <p className="text-sm text-slate-600">Medical records, Police reports, Chronology, Liability, Damages</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-burnt-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-burnt-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-burnt-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">DEMAND LETTER</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-burnt-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-burnt-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-burnt-600 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">LIEN RESOLUTION</h3>
                  <p className="text-sm text-slate-600">Medicare/Medicaid negotiation, Hospital liens, Settlement distribution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Framework Section */}
      <section ref={frameworkRef} className={`py-24 ${frameworkVisible ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FAFAF8)' }} id="support-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#C9A961' }}>Additional Support Services</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold max-w-xl" style={{ color: '#0A1628' }}>
              Everything your firm needs to scale
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Additional Support Services */}
            <div className="bg-white rounded-lg p-8 border" style={{ borderColor: '#E5E7EB' }}>
              <h3 className="text-xl font-bold mb-6 pb-3" style={{ color: '#0A1628', borderBottom: '2px solid #C9A961' }}>Additional Support Services</h3>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#C9A961' }}>C-Suite</p>
                <ul className="space-y-3">
                  {C_SUITE_SERVICES.map(({ label, id }) => (
                    <li key={id}>
                      <button
                        onClick={() => onNavigate(id)}
                        className="leading-relaxed text-left w-full transition-colors"
                        style={{ color: '#2B3544', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A961')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#2B3544')}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="space-y-3">
                {[
                  { label: 'Bookkeeping & IOLTA', id: 'bookkeeping' },
                  { label: 'Payroll & HR', id: 'hr-payroll' },
                  { label: 'Tax Strategy', id: 'tax-strategy' },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => onNavigate(id)}
                      className="leading-relaxed text-left w-full transition-colors"
                      style={{ color: '#2B3544', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A961')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#2B3544')}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Litigation Finance */}
            <div className="bg-white rounded-lg p-8 border" style={{ borderColor: '#E5E7EB' }}>
              <h3 className="text-xl font-bold mb-6 pb-3" style={{ color: '#0A1628', borderBottom: '2px solid #C9A961' }}>Litigation Finance</h3>
              <ul className="space-y-3" style={{ color: '#2B3544' }}>
                <li className="leading-relaxed">Growth Marketing Loans</li>
                <li className="leading-relaxed">Pre-Settlement Advance</li>
                <li className="leading-relaxed">Case Cost Advance</li>
                <li className="leading-relaxed">Medical Funding</li>
              </ul>
            </div>

            {/* Advisory + PE */}
            <div className="bg-white rounded-lg p-8 border" style={{ borderColor: '#E5E7EB' }}>
              <h3 className="text-xl font-bold mb-6 pb-3" style={{ color: '#0A1628', borderBottom: '2px solid #C9A961' }}>Advisory + PE</h3>
              <ul className="space-y-3" style={{ color: '#2B3544' }}>
                <li className="leading-relaxed">Mergers & Acquisitions</li>
                <li className="leading-relaxed">MSOAAS</li>
                <li className="leading-relaxed">AI Hub & Innovation Advisory</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      </>}

      {/* World-class statement — full bleed */}
      <div style={{ backgroundColor: '#FFFFFF', overflow: 'hidden', position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="w-12 h-px mb-8" style={{ backgroundColor: '#C9A961' }} />
              <h2 className="font-serif font-bold leading-tight" style={{ color: '#000000', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                World-class infrastructure.<br />
                <span style={{ color: '#C9A961' }}>Fractional cost.</span>
              </h2>
            </div>
            <div className="md:max-w-sm">
              <p className="text-base leading-relaxed mb-6" style={{ color: '#2B3544' }}>
                Everything a top PI firm needs to operate at scale — without the executive salaries, office overhead, or hiring risk.
              </p>
              <button
                onClick={() => {}}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 28px', fontSize: '0.75rem', fontWeight: '700',
                  letterSpacing: '0.08em', border: '1px solid #C9A961',
                  backgroundColor: 'transparent', color: '#C9A961', cursor: 'pointer', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C9A961'; e.currentTarget.style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#C9A961'; }}
              >
                VIEW ALL SERVICES <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <section ref={integrationRef} className={`py-24 ${integrationVisible ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ backgroundColor: '#0F1E35' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#C9A961' }}>Integrations</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#FFFFFF' }}>
                Works inside the tools<br />your firm already uses
              </h2>
            </div>
            <p className="text-base leading-relaxed md:max-w-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Our case managers are trained on each platform — working directly inside your CMS, following your workflows, with every update flowing in real-time.
            </p>
          </div>

          {/* Logo strip — clean bordered cells, no shadow boxes */}
          <div className="grid grid-cols-3 md:grid-cols-6" style={{ border: '1px solid rgba(201,169,97,0.3)' }}>
            {[
              { src: '/images/filevine.png', alt: 'Filevine' },
              { src: '/images/smokeball.png', alt: 'Smokeball' },
              { src: '/images/litify.png', alt: 'Litify' },
              { src: '/images/casepeer.png', alt: 'CASEpeer' },
              { src: '/images/mycase.png', alt: 'MyCase' },
              { src: '/images/clio.png', alt: 'Clio' },
            ].map(({ src, alt }, i) => (
              <div
                key={alt}
                className="flex items-center justify-center py-10 px-6 transition-all duration-200"
                style={{
                  borderRight: i < 5 ? '1px solid rgba(201,169,97,0.2)' : 'none',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <img src={src} alt={alt} className="max-h-10 max-w-full object-contain transition-all" style={{ opacity: 0.7, filter: 'brightness(0) invert(1)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={teamRef} className={`py-16 ${teamVisible ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ background: 'linear-gradient(to bottom, #FAFAF8, #FFFFFF)' }} id="team">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1628' }}>Built by PI veterans who've managed <span style={{ color: '#C9A961' }}>thousands of cases</span></h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#64748B' }}>
              LawBOX™'s team brings decades of operational experience from the nation's top personal injury firms, having helped recover millions in settlements. We combine this deep expertise with advanced AI to deliver results you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* AI powered humans section */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: '#F8F7F2' }}>
        <div className="max-w-3xl mx-auto">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10" style={{ backgroundColor: '#C9A961' }}>
            <span className="w-2 h-2 rounded-full bg-white flex-shrink-0"></span>
            <span className="text-white text-sm font-semibold">Trusted by top personal injury firms nationwide</span>
          </div>

          {/* How It Works tag */}
          <div className="mb-6">
            <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-widest text-white" style={{ backgroundColor: '#C9A961' }}>How It Works</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif font-bold leading-tight mb-6" style={{ color: '#0A1628', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            AI powered humans in the loop operations team handles your{' '}
            <span style={{ color: '#C9A961' }}>cases from intake to demand</span>
          </h2>

          {/* Subtext */}
          <p className="text-base md:text-lg leading-relaxed mb-8 mx-auto" style={{ color: '#64748B', maxWidth: '560px' }}>
            From the moment a lead comes in to final settlement, LawBOX™ manages every case for one flat fee. No more hiring, training, or managing case staff.
          </p>

          {/* CTA Button */}
          <button
            onClick={onNavigateContact}
            className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-md transition-all mb-16"
            style={{ backgroundColor: '#C9A961', color: '#FFFFFF', fontSize: '1rem', border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B8941F'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9A961'; }}
          >
            Schedule a Call <ArrowRight className="w-4 h-4" />
          </button>

          {/* Testimonial */}
          <div>
            <div className="text-6xl font-serif mb-4" style={{ color: 'rgba(201,169,97,0.3)', lineHeight: 1 }}>"</div>
            <p className="font-serif italic text-xl md:text-2xl leading-relaxed mb-6" style={{ color: '#0A1628' }}>
              LawBOX™ reduced our case prep time by 60% while increasing our settlement values. It's like having a dedicated ops team without the overhead.
            </p>
            <p className="text-sm font-bold" style={{ color: '#C9A961' }}>— Sarah Chen, Managing Partner, Chen &amp; Associates</p>
          </div>
        </div>
      </section>


      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80" alt="Modern office" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 22, 40, 0.95)' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Ready to scale <span style={{ color: '#C9A961' }}>without limits?</span>
          </h2>
          <p className="text-xl mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: '#FAFAF8' }}>
            Top PI firms are growing faster by eliminating pre litigation bottlenecks. Focus on winning cases while we handle everything from intake to demand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-white text-lg px-8 py-4 font-semibold shadow-xl" style={{ backgroundColor: '#C9A961', boxShadow: '0 20px 50px rgba(201, 169, 97, 0.25)' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#B8941F'} onMouseLeave={(e) => e.target.style.backgroundColor = '#C9A961'} onClick={onNavigateContact}>
              Schedule a Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <p className="mt-8 text-sm" style={{ color: '#C9A961' }}>Free consultation • No commitment • See results in 30 days</p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ backgroundColor: '#0A1628' }}></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ backgroundColor: '#C9A961' }}></div>
      </section>

      {/* Footer - Matching Finch's structure */}
      <footer className="py-16" style={{ backgroundColor: '#0A1628' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, -apple-system, sans-serif', letterSpacing: '-0.01em' }}>LawBOX™</div>
              <p className="text-sm mb-6" style={{ color: '#FAFAF8' }}>
                Scale your firm. Not your overhead.
              </p>
              <div className="flex gap-4">
                <a href="#team" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#2B3544' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#C9A961'} onMouseLeave={(e) => e.target.style.backgroundColor = '#2B3544'}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#team" className="w-10 h-10 bg-slate-800 hover:bg-burnt-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-3 text-sm" style={{ color: '#64748B' }}>
                <li><button style={{ color: "#64748B", background: "none", border: "none", cursor: "pointer", padding: 0 }} onMouseEnter={(e) => e.target.style.color = "#C9A961"} onMouseLeave={(e) => e.target.style.color = "#64748B"} onClick={() => document.getElementById("lawfirm-in-a-box")?.scrollIntoView({ behavior: "smooth" })}>End to End</button></li>
                <li><button style={{ color: "#64748B", background: "none", border: "none", cursor: "pointer", padding: 0 }} onMouseEnter={(e) => e.target.style.color = "#C9A961"} onMouseLeave={(e) => e.target.style.color = "#64748B"} onClick={() => onNavigate("policy-limits")}>Policy Limits</button></li>
                <li><button style={{ color: "#64748B", background: "none", border: "none", cursor: "pointer", padding: 0 }} onMouseEnter={(e) => e.target.style.color = "#C9A961"} onMouseLeave={(e) => e.target.style.color = "#64748B"} onClick={() => onNavigate("lien-resolution")}>Lien Resolution</button></li>
                <li><button style={{ color: "#64748B", background: "none", border: "none", cursor: "pointer", padding: 0 }} onMouseEnter={(e) => e.target.style.color = "#C9A961"} onMouseLeave={(e) => e.target.style.color = "#64748B"} onClick={() => onNavigate("settlement-disbursement")}>Settlement Disbursements</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#team" className="hover:text-burnt-500 transition-colors">About</a></li>
                <li><a href="#team" className="hover:text-burnt-500 transition-colors">Careers</a></li>
                <li><a href="#how-it-works" className="hover:text-burnt-500 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-burnt-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#services" className="hover:text-burnt-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: '#2B3544' }}>
            <div className="text-sm" style={{ color: '#64748B' }}>
              © 2026 LawBOX™. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm" style={{ color: '#64748B' }}>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C9A961' }}></span>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}


