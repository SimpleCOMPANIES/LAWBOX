import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/Button';
import Logo from './components/Logo';

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

const SERVICE_DATA = {
  'fractional-coo': {
    title: 'Fractional COO',
    subtitle: 'Operational leadership for plaintiff firms that need scale without adding full-time executives',
    description: [
      "LawBOX's Fractional COO service is built for personal injury firms that are growing quickly but running into process breakdowns. We step in to create structure across intake, case flow, staffing, vendor management, and performance accountability so your team can move more cases with less friction.",
      "We focus on the operational engine that drives PI outcomes: lead response speed, signed-retainer conversion, handoffs from intake to pre-lit, treatment and records tracking, demand readiness, and settlement workflow discipline.",
    ],
    includes: [
      'Intake-to-settlement workflow design',
      'SOPs for intake, case management, records, demands, and follow-up',
      'Team structure, ownership, and accountability scorecards',
      'Vendor coordination (records, liens, demand support, etc.)',
      'KPI dashboards for conversion, cycle time, and throughput',
      'Capacity planning for case managers and support teams',
    ],
    why: [
      'Reduce bottlenecks in pre-lit',
      'Improve handoff quality across departments',
      'Increase case throughput without operational chaos',
      'Build a repeatable operating model for growth',
    ],
  },

  'fractional-cfo': {
    title: 'Fractional CFO & Financial Operations',
    subtitle: 'Financial visibility and discipline for contingency-fee law firms',
    description: [
      "PI firms can generate strong revenue but still operate with weak financial visibility. LawBOX's Fractional CFO service gives firm owners a clear view of cash flow, margins, risk exposure, and growth efficiency across marketing, payroll, case costs, and settlements.",
      "This is not just bookkeeping. It is executive-level financial oversight plus the operating discipline needed to support scaling.",
    ],
    includes: [
      'Monthly financial review and executive reporting',
      'Cash flow forecasting (short- and long-range)',
      'Budgeting and spend controls',
      'Marketing ROI and cost-per-signed-case analysis',
      'Case cost tracking and visibility by matter/source',
      'Compensation planning and financial modeling',
      'Vendor spend review and cost optimization',
    ],
    why: [
      'See where cash is really going',
      'Grow without overextending',
      'Improve profitability per case',
      'Make better decisions on hiring, marketing, and funding',
    ],
  },

  'bookkeeping': {
    title: 'Bookkeeping, Trust Accounting & IOLTA Support',
    subtitle: 'Law-firm-specific bookkeeping built for plaintiff practices',
    description: [
      "LawBOX provides bookkeeping support designed for PI firms, including client cost tracking, settlement-related accounting support, trust workflows, and monthly reconciliations. This is built around how plaintiff firms actually operate—not generic small-business bookkeeping.",
    ],
    sections: [
      {
        type: 'includes-group',
        label: 'What this includes',
        items: [
          'Monthly bookkeeping and transaction categorization',
          'Bank and credit card reconciliations',
          'Client cost ledger tracking and support',
          'Settlement disbursement accounting support',
          'Monthly financial statements for management review',
          'Cleanup and catch-up bookkeeping projects',
          'Coordination with your CPA / tax team',
        ],
      },
      {
        type: 'includes-group',
        label: 'Trust accounting & IOLTA support',
        items: [
          'Trust account reconciliation support',
          'Client-level trust balance tracking support',
          'IOLTA cleanup and legacy issue correction support',
          'Reconciliation of IOLTA balances to client records',
          'Trust workflow process controls to reduce errors',
          'Settlement-to-trust-to-disbursement process alignment',
        ],
      },
    ],
    why: [
      'Cleaner books and fewer surprises',
      'Better visibility into client costs and trust balances',
      'More reliable monthly reporting',
      'Less owner time spent fixing accounting issues',
      'Stronger operational discipline around settlements and disbursements',
    ],
  },

  'hr-payroll': {
    title: 'HR & Payroll Support',
    subtitle: 'People operations and payroll administration for growing PI teams',
    description: [
      "As PI firms scale, payroll and HR admin consume leadership time. LawBOX provides hands-on HR and payroll support so attorneys and operators can focus on case production and firm growth instead of back-office tasks.",
    ],
    includes: [
      'Payroll administration support',
      'New hire onboarding and employee setup',
      'Employee changes (pay, withholding, status updates)',
      'PTO and core HR process tracking',
      'Handbook and policy coordination support',
      'HR documentation organization',
      'Offboarding process support',
    ],
    why: [
      'Reduce payroll and admin errors',
      'Improve consistency across the team',
      'Create a more professional employee experience',
      'Free up leadership from repetitive HR admin work',
    ],
  },

  'fractional-cio': {
    title: 'Fractional CIO',
    subtitle: 'Technology leadership for case operations, integrations, and systems reliability',
    description: [
      "Most PI firms own software but lack a systems strategy. LawBOX's Fractional CIO service helps firms select, optimize, and govern the right technology stack so the firm runs faster and leadership gets better visibility.",
      "The goal is practical: reduce duplicate work, improve data quality, tighten handoffs, and make your core systems work together.",
    ],
    includes: [
      'Technology stack assessment and roadmap',
      'Case management system optimization',
      'Intake + CRM + case workflow alignment',
      'Vendor evaluation and implementation planning',
      'Integration planning across systems and teams',
      'Reporting architecture and dashboard planning',
      'System governance and ownership support',
    ],
    why: [
      'Eliminate tech sprawl',
      'Improve adoption of core systems',
      'Create a scalable operating stack',
      'Make reporting more reliable',
    ],
  },

  'fractional-cmo': {
    title: 'Fractional CMO',
    subtitle: 'Growth strategy and marketing oversight built for PI economics',
    description: [
      "LawBOX's Fractional CMO service helps PI firms treat marketing as a managed investment function. We help leadership understand which channels drive signed cases, which campaigns generate quality files, and where spend should be reallocated.",
      "This service is built for firms spending real dollars on growth and needing executive oversight across agencies, intake conversion, performance tracking, and brand positioning.",
    ],
    includes: [
      'Growth strategy and channel planning',
      'Marketing budget allocation and forecasting',
      'Agency oversight and performance accountability',
      'Lead-to-retainer conversion analysis',
      'Creative/message testing guidance',
      'Referral channel strategy and tracking',
      'KPI dashboards for lead quality, CAC, and ROI',
    ],
    why: [
      'Improve cost per signed case',
      'Increase conversion from lead to retainer',
      'Hold agencies accountable with real metrics',
      'Align marketing spend with operational capacity',
    ],
  },

  'fractional-caio': {
    title: 'Fractional Chief AI Officer',
    subtitle: 'AI strategy and workflow automation for plaintiff firms',
    description: [
      "LawBOX's Fractional Chief AI Officer helps PI firms implement AI where it creates measurable operational value. The focus is not hype. The focus is workflow improvement, output quality, and controlled adoption.",
      "We identify high-impact use cases across intake, pre-lit, records handling, case summaries, demand prep support, communications, and reporting—then help deploy, govern, and train around them.",
    ],
    includes: [
      'AI readiness assessment by department',
      'AI workflow roadmap (intake, pre-lit, admin, finance)',
      'Tool selection and implementation guidance',
      'Prompt/workflow design for repeatable use cases',
      'AI governance policies and access controls',
      'QA and human-review protocols',
      'Team training and adoption support',
    ],
    why: [
      'Automate repetitive admin work',
      'Increase team output without overhiring',
      'Improve speed and consistency in pre-lit workflows',
      'Implement AI with controls and accountability',
    ],
  },

  'policy-limits': {
    title: 'Policy Limits',
    customSections: [
      {
        type: 'header-para',
        heading: 'The Problem',
        body: "If you do not know what the policy is worth, you do not know what your case is worth. Insurance carriers disclose primary policy limits and stop there. Umbrella policies, excess layers, additional insured coverage, employer policies, and related sources stay quiet, and you are expected to assume those layers do not exist. Attorneys settle at stated limits when the real ceiling is often two or three times higher, and every dollar of unknown coverage is a dollar that never lands in the client's pocket. Worse, when an adjuster intentionally withholds coverage information, you never know enough to call it what it is or pursue the bad faith leverage that comes with it.",
      },
      {
        type: 'header-para',
        heading: 'What We Deliver',
        body: 'A structured pre-suit insurance investigation that traces every available coverage source before the demand letter goes out. The investigation reviews primary policies, excess layers, umbrella policies, additional insured endorsements, scheduled vehicles, and employer-level coverage. Results are documented, reportable, and delivered fast enough to inform your treatment plan, your UIM strategy, and your demand timing.',
      },
      {
        type: 'numbered-benefits',
        heading: 'The Benefits',
        items: [
          { title: 'Know the real ceiling.', body: 'Demand and settle at the full available coverage, not at the number the carrier offered to admit. Every case gets valued against a confirmed exposure number rather than a hopeful guess. Over a year of files, the difference is hundreds of thousands of dollars in client recovery that would otherwise have been left on the table.' },
          { title: 'Demand with weight.', body: 'A demand letter backed by verified coverage data carries far more authority on an adjuster\'s desk than a demand built on assumption. Adjusters move faster, offer earlier, and negotiate at higher numbers when they know your firm has already done the work to identify every available source.' },
          { title: 'Catch nondisclosure.', body: 'When a carrier or adjuster has concealed additional coverage, the discovery is a bad faith claim in your hand rather than a regret in your file. The same investigation that identifies the coverage builds the documentary record you would need to pursue the carrier in extra-contractual litigation.' },
          { title: 'Better case selection.', body: 'Sign cases on real exposure. Decline cases on real exposure. Stop tying up firm resources on matters where actual coverage will never justify the operational lift, and stop turning away cases that look small on paper but sit on top of large excess or umbrella layers.' },
          { title: 'Strategy from day one.', body: 'Treatment plans, UIM elections, demand timing, lien identification, and resolution strategy all get decided with information instead of guesses. Cases move faster because every downstream decision has a confirmed coverage number behind it.' },
        ],
      },
      { type: 'tagline', text: "Don't demand blind." },
    ],
  },

  'lien-resolution': {
    title: 'Lien Resolution',
    subtitle: 'Audit, negotiation, appeals, and final release of every medical lien.',
    customSections: [
      {
        type: 'header-para',
        heading: 'The Problem',
        body: "Lien resolution is where good cases go to die slow. Medicare conditional payment letters take months to come back. Medicaid rules change at the state line. ERISA plans demand full reimbursement and rarely budge without specialist arguments. Hospital liens turn on statutes most paralegals have never read. Lienholders inflate reimbursement claims because they know the average firm does not have the time or the training to audit them. Meanwhile your client is calling weekly asking where the money is, your trust account is stuck holding the settlement, and your fee is delayed every week the file sits open. Cases that should close in thirty days close in ninety, and the client experience you built over the life of the matter gets cracked in the last leg.",
      },
      {
        type: 'header-para',
        heading: 'What We Deliver',
        body: 'End-to-end lien handling across every category of medical lien, subrogation claim, and reimbursement obligation. Specialists audit and review each submitted lien, request and analyze supporting documentation, verify claim validity and payment accuracy, negotiate reductions and waivers, manage appeals and dispute correspondence where appropriate, and obtain final lien releases and proof of satisfaction. Status updates are delivered throughout the process so your firm always knows where each lien stands without chasing it down.',
        type: 'numbered-benefits',
        heading: 'The Benefits',
        items: [
          { title: "More money in the client's pocket.", body: 'Specialist negotiation extracts reductions, waivers, and settlements that a generalist team would never get. Multiplied across a high-volume caseload, the additional client recovery becomes material, and it builds the referral economics that drive the firm\'s next year of growth.' },
          { title: 'Every lien type, one partner.', body: 'Medicare Parts A, B, C, and D. Medicaid in all 50 states. ERISA, non-ERISA, and FEHBA private plans. VA, CHAMPVA, and Tricare. Hospital liens. Outstanding provider bills. Short-term disability liens. Subrogation. Mass tort resolution programs. One partner, one workflow, one portal — instead of five different specialists for five different categories.' },
          { title: 'Inflated claims caught.', body: 'Every submitted lien gets audited against supporting documentation before a dollar gets paid. Unrelated treatment is removed, duplicate charges are challenged, and the final reimbursement reflects what is actually owed under the contract or the statute — not the opening demand from the lienholder.' },
          { title: 'Appeals handled by specialists.', body: 'When a lienholder will not move, the fight is run by people trained for it. Appeals and dispute correspondence are managed without burning attorney or paralegal hours, and without leaving leverage on the table because no one had time to push back.' },
          { title: 'Real closure.', body: 'Final releases and proof of satisfaction are obtained on every lien. The case actually closes, the trust account releases, and the file is audit-ready if anyone ever comes back asking who got paid what. No more open files waiting on paperwork from a lienholder that disappeared after the negotiation.' },
        ],
      },
      { type: 'tagline', text: 'Audit. Reduce. Resolve. Release.' },
    ],
  },

  'settlement-disbursement': {
    title: 'Settlement Disbursement',
    subtitle: 'Digital disbursement and trust money management for injury law firms',
    customSections: [
      {
        type: 'header-para',
        heading: 'The Problem',
        body: "Settlement day should be the day your client refers two friends to your firm. For most firms it is the day your client starts wondering if you forgot about them. Paper checks get cut to the client, the lienholders, the medical providers, the referral attorney, and the firm — each one a manual reconciliation, a trust accounting risk, and a chance for the wrong amount to land in the wrong account. Admin staff burn hours per case clearing the back office. IOLTA reconciliation becomes a monthly fire drill. Clients wait two or three weeks for money they already won. The goodwill your firm built over twelve months gets spent in the last forty-eight hours, and the referral pipeline that depends on the close-of-case moment quietly dries up.",
      },
      {
        type: 'header-para',
        heading: 'What We Deliver',
        body: 'Digital disbursement and trust money management designed specifically for personal injury firms. The moment a settlement is finalized, a single workflow triggers — automatic splits to client, lienholders, medical providers, referral counsel, and the firm — routed straight from your trust or operating account with a full audit trail. Paper checks disappear, manual reconciliation collapses, and trust accounting compliance is built into every transaction.',
      },
      {
        type: 'numbered-benefits',
        heading: 'The Benefits',
        items: [
          { title: 'Faster client payouts.', body: 'Settlement day actually feels like settlement day. The client receives their net recovery the moment the disbursement workflow runs, not three weeks later when the bookkeeper finishes cutting checks. Happy clients turn into referrals, and the referrals that come from the close of one case become the intakes that fund the next.' },
          { title: 'No more paper checks.', body: 'Digital disbursements go directly to the client, the lienholders, the medical providers, and referral counsel. No lost mail, no stop-payment fees, no follow-up calls about checks that never arrived. The administrative cost of physically moving money disappears.' },
          { title: 'Trust compliance baked in.', body: 'Every transaction is tracked, every disbursement is audit-ready, and every IOLTA reconciliation is cleaner. The compliance burden that hangs over every PI firm\'s back office becomes something the system handles in the background rather than something the firm has to manage every month.' },
          { title: 'One workflow for every split.', body: 'Client portion, medical liens, attorney fee, referral counsel, provider bills — distributed in one workflow, not five separate reconciliation cycles. The math is right, the recipients are right, and the records are clean.' },
          { title: 'Hours back at case close.', body: 'Admin time per settlement collapses dramatically. Multiply that across every settled case in a year and the back-office burden disappears, freeing your staff to handle volume that previously felt impossible at the firm\'s current headcount.' },
        ],
      },
      { type: 'tagline', text: 'Win the case. Then win the close.' },
    ],
  },

  'tax-strategy': {
    title: 'Tax Strategy & Settlement Tax Planning Coordination',
    subtitle: 'Proactive tax planning for PI firm owners and smarter settlement tax coordination for client outcomes',
    description: [
      "LawBOX's tax strategy service covers two layers in a PI firm:",
    ],
    customSections: [
      {
        type: 'subsection',
        heading: 'A) Firm / Owner Tax Strategy',
        description: "This is proactive planning for the law firm and ownership group—built around uneven contingency cash flow and distribution timing.",
        includesLabel: 'What this includes',
        includes: [
          'Owner-level tax planning coordination',
          'Estimated tax planning support',
          'Compensation and distribution planning coordination',
          'Year-end planning support',
          'Entity/tax-structure coordination with CPA and legal counsel',
          'Tax-calendar discipline and documentation readiness',
        ],
        whyLabel: 'Why PI firms use it',
        why: [
          'Avoid tax surprises',
          'Improve owner cash planning',
          'Align distributions with tax obligations',
          'Build a more disciplined finance cadence',
        ],
      },
      {
        type: 'subsection',
        heading: 'B) Settlement Tax Planning Coordination (Client-Facing Support Infrastructure)',
        description: "This is not legal or tax advice to the plaintiff. It is a coordination layer that helps the firm identify when specialized settlement tax planning should be introduced.",
        includesLabel: 'What LawBOX can provide (coordination role)',
        includes: [
          'Intake flagging for potentially taxable settlement categories',
          'Workflow triggers for referral to plaintiff settlement tax specialists',
          'Settlement memo/checklist process for tax-planning review timing',
          'Coordination between firm, CPA, and settlement tax planner',
          'Internal SOPs for documenting settlement category inputs',
          'Disbursement workflow alignment with approved tax-planning structures',
        ],
        whyLabel: 'Why PI firms use it',
        why: [
          'Protects client outcomes in taxable cases',
          'Reduces avoidable tax-related mistakes in settlement handling',
          'Improves professionalism and client advisory experience',
          'Creates a repeatable process for involving the right specialists early',
        ],
      },
      {
        type: 'positioningNote',
        content: "LawBOX does not replace the plaintiff's tax advisor or legal tax counsel. LawBOX provides the operational and financial coordination infrastructure and works with the firm's CPA and specialized settlement tax professionals.",
      },
    ],
  },
};

function NavBar({ onNavigate, onNavigateContact }) {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cSuiteOpen, setCSuiteOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => onNavigate('home')} className="focus:outline-none">
            <Logo variant="inverse" size="small" className="h-10 md:h-11 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className="text-sm font-semibold transition-colors"
              style={{ color: 'rgba(255, 255, 255, 0.85)', background: 'none', border: 'none', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.target.style.color = '#C9A961')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.85)')}
            >
              Home
            </button>

            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="text-sm font-semibold transition-colors flex items-center gap-1"
                style={{ color: servicesDropdownOpen ? '#C9A961' : 'rgba(255, 255, 255, 0.85)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2" style={{ width: '820px', maxWidth: 'calc(100vw - 2rem)' }}>
                  <div className="rounded-lg shadow-2xl" style={{ backgroundColor: '#0A1628', border: '1px solid rgba(201, 169, 97, 0.2)' }}>
                    <div className="grid grid-cols-3 gap-6 p-8">
                      <div>
                        <h3 className="text-sm font-bold mb-4 pb-2 border-b" style={{ color: '#C9A961', borderColor: 'rgba(201, 169, 97, 0.3)' }}>Additional Support Services</h3>
                        <ul className="space-y-3">
                          <li>
                            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(201, 169, 97, 0.85)' }}>C-Suite</div>
                            <ul className="mt-2 ml-3 space-y-1.5">
                              {C_SUITE_SERVICES.map(({ label, id }) => (
                                <li key={id}>
                                  <button
                                    onClick={() => { onNavigate(id); setServicesDropdownOpen(false); }}
                                    className="text-xs block py-0.5 transition-colors text-left w-full"
                                    style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }}
                                    onMouseEnter={(e) => (e.target.style.color = '#C9A961')}
                                    onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}
                                  >
                                    {label}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </li>
                          {ADDITIONAL_SUPPORT_SERVICES.map(({ label, id }) => (
                            <li key={id}>
                              <button
                                onClick={() => { onNavigate(id); setServicesDropdownOpen(false); }}
                                className="text-xs block py-1 transition-colors text-left w-full"
                                style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }}
                                onMouseEnter={(e) => (e.target.style.color = '#C9A961')}
                                onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}
                              >
                                {label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold mb-4 pb-2 border-b" style={{ color: '#C9A961', borderColor: 'rgba(201, 169, 97, 0.3)' }}>Litigation Finance</h3>
                        <ul className="space-y-2">
                          {['Growth Marketing Loans', 'Pre-Settlement Advance', 'Case Cost Advance', 'Medical Funding'].map((item) => (
                            <li key={item}>
                              <button className="text-xs block py-1 transition-colors text-left w-full" style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }} onMouseEnter={(e) => (e.target.style.color = '#C9A961')} onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}>
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold mb-4 pb-2 border-b" style={{ color: '#C9A961', borderColor: 'rgba(201, 169, 97, 0.3)' }}>Advisory + PE</h3>
                        <ul className="space-y-2">
                          {['Mergers & Acquisitions', 'MSOAAS', 'AI Hub & Innovation Advisory'].map((item) => (
                            <li key={item}>
                              <button className="text-xs block py-1 transition-colors text-left w-full" style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }} onMouseEnter={(e) => (e.target.style.color = '#C9A961')} onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}>
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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

          <Button
            className="hidden md:block text-white text-sm font-bold shadow-lg px-5 py-2.5"
            style={{ backgroundColor: '#C9A961' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#B8941F')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C9A961')}
            onClick={onNavigateContact}
          >
            Schedule a Call
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden max-h-[70vh] overflow-y-auto" style={{ backgroundColor: '#0A1628' }}>
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-sm font-semibold" style={{ color: 'rgba(255, 255, 255, 0.85)', background: 'none', border: 'none', cursor: 'pointer' }}>
              Home
            </button>
            <div className="py-2 text-sm font-semibold" style={{ color: '#C9A961' }}>Additional Support Services</div>
            <div className="ml-4 space-y-2">
              <div>
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
                  <div className="ml-3 mt-1 space-y-1">
                    {C_SUITE_SERVICES.map(({ label, id }) => (
                      <button
                        key={id}
                        onClick={() => { onNavigate(id); setMobileMenuOpen(false); }}
                        className="block w-full text-left py-1 text-xs"
                        style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {ADDITIONAL_SUPPORT_SERVICES.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => { onNavigate(id); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-1 text-xs"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {label}
                </button>
              ))}
            </div>
            <Button className="w-full text-white text-sm font-bold mt-2" style={{ backgroundColor: '#C9A961' }} onClick={() => { onNavigateContact(); setMobileMenuOpen(false); }}>
              Schedule a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function IncludesList({ items }) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 items-start">
          <span className="mt-1 flex-shrink-0 w-px h-4 block" style={{ backgroundColor: '#C9A961' }}></span>
          <span className="text-base leading-relaxed" style={{ color: '#334155' }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function WhyList({ items }) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 items-start">
          <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C9A961' }}></span>
          <span className="text-base leading-relaxed" style={{ color: '#334155' }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServicePage({ serviceId, onNavigate, onNavigateContact }) {
  const service = SERVICE_DATA[serviceId];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Service not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero / Nav */}
      <section className="relative pb-20 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #0A1628, #1A2740, #0A1628)' }}>
        <NavBar onNavigate={onNavigate} onNavigateContact={onNavigateContact} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-sm mb-10 transition-colors"
            style={{ color: 'rgba(255,255,255,0.55)', background: 'none', border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A961')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>

          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal mb-6 leading-tight"
            style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}
          >
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light max-w-3xl" style={{ color: 'rgba(255,255,255,0.80)' }}>
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Description */}
          {service.description && (
            <div className="mb-16 space-y-5">
              {service.description.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed" style={{ color: '#334155' }}>
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Standard includes + why */}
          {service.includes && (
            <>
              <div className="mb-16">
                <div className="pb-4 mb-2 border-b" style={{ borderColor: 'rgba(201, 169, 97, 0.3)' }}>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold" style={{ color: '#0A1628' }}>
                    What this includes
                  </h2>
                </div>
                <IncludesList items={service.includes} />
              </div>

              <div className="mb-16">
                <div className="pb-4 mb-2 border-b" style={{ borderColor: 'rgba(201, 169, 97, 0.3)' }}>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold" style={{ color: '#0A1628' }}>
                    Why PI firms use it
                  </h2>
                </div>
                <WhyList items={service.why} />
              </div>
            </>
          )}

          {/* Multi-group includes (Bookkeeping) */}
          {service.sections && service.sections.map((section, i) => (
            <div key={i} className="mb-16">
              <div className="pb-4 mb-2 border-b" style={{ borderColor: 'rgba(201, 169, 97, 0.3)' }}>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold" style={{ color: '#0A1628' }}>
                  {section.label}
                </h2>
              </div>
              <IncludesList items={section.items} />
              {section.note && (
                <p className="mt-6 text-sm leading-relaxed italic pl-4 border-l-2" style={{ color: '#64748B', borderColor: 'rgba(201, 169, 97, 0.4)' }}>
                  {section.note}
                </p>
              )}
            </div>
          ))}

          {/* Why for sections-based services (Bookkeeping) */}
          {service.sections && service.why && (
            <div className="mb-16">
              <div className="pb-4 mb-2 border-b" style={{ borderColor: 'rgba(201, 169, 97, 0.3)' }}>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold" style={{ color: '#0A1628' }}>
                  Why PI firms use it
                </h2>
              </div>
              <WhyList items={service.why} />
            </div>
          )}

          {/* Custom sections (Tax Strategy + Policy Limits / Lien Resolution / Settlement) */}
          {service.customSections && service.customSections.map((section, i) => {
            if (section.type === 'header-para') {
              return (
                <div key={i} className="mb-12">
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#C9A961' }}>{section.heading}</p>
                  <p className="text-lg leading-relaxed" style={{ color: '#334155' }}>{section.body}</p>
                </div>
              );
            }

            if (section.type === 'numbered-benefits') {
              return (
                <div key={i} className="mb-12">
                  <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#C9A961' }}>{section.heading}</p>
                  <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(201,169,97,0.2)', borderTop: '1px solid rgba(201,169,97,0.2)', borderBottom: '1px solid rgba(201,169,97,0.2)' }}>
                    {section.items.map((item, j) => (
                      <div key={j} className="flex gap-5 py-6">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-bold text-sm rounded" style={{ backgroundColor: '#0A1628', color: '#C9A961' }}>{j + 1}</div>
                        <div>
                          <span className="font-bold" style={{ color: '#0A1628' }}>{item.title}</span>{' '}
                          <span className="text-base leading-relaxed" style={{ color: '#334155' }}>{item.body}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            if (section.type === 'tagline') {
              return (
                <div key={i} className="mt-8 pt-8 border-t" style={{ borderColor: 'rgba(201,169,97,0.3)' }}>
                  <p className="font-serif text-xl font-semibold italic" style={{ color: '#C9A961' }}>{section.text}</p>
                </div>
              );
            }

            if (section.type === 'positioningNote') {
              return (
                <div key={i} className="mt-16 p-8 rounded-lg" style={{ backgroundColor: '#0A1628' }}>
                  <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A961' }}>
                    Important positioning note
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>
                    {section.content}
                  </p>
                </div>
              );
            }

            return (
              <div key={i} className="mb-16">
                <div className="pb-4 mb-6 border-b" style={{ borderColor: 'rgba(201, 169, 97, 0.3)' }}>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold" style={{ color: '#0A1628' }}>
                    {section.heading}
                  </h2>
                </div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#334155' }}>
                  {section.description}
                </p>
                {section.note && (
                  <p className="mb-8 text-sm leading-relaxed italic pl-4 border-l-2" style={{ color: '#64748B', borderColor: 'rgba(201, 169, 97, 0.4)', whiteSpace: 'pre-line' }}>
                    {section.note}
                  </p>
                )}
                {section.includes && (
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-1" style={{ color: '#0A1628' }}>{section.includesLabel}</h3>
                    <IncludesList items={section.includes} />
                  </div>
                )}
                {section.why && (
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: '#0A1628' }}>{section.whyLabel}</h3>
                    <WhyList items={section.why} />
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #0A1628, #1A2740, #0A1628)' }}></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-white" style={{ letterSpacing: '-0.02em' }}>
            Ready to get started?
          </h2>
          <p className="text-lg mb-10 font-light" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Schedule a consultation and we'll walk you through how this service fits your firm's current stage of growth.
          </p>
          <Button
            className="text-white text-lg px-8 py-4 font-semibold shadow-xl"
            style={{ backgroundColor: '#C9A961' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#B8941F')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C9A961')}
            onClick={onNavigateContact}
          >
            Schedule a Call
          </Button>
          <p className="mt-6 text-sm" style={{ color: 'rgba(201, 169, 97, 0.7)' }}>Free consultation · No commitment</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#0A1628' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <button onClick={() => onNavigate('home')} className="focus:outline-none">
              <Logo variant="inverse" size="small" className="h-8 w-auto" />
            </button>
            <p className="text-sm" style={{ color: '#64748B' }}>© 2026 LawBOX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

