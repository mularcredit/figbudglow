import {
    Users,
    CreditCard,
    Shield,
    ChartPie,
    Lightning,
    Handshake,
    CurrencyDollar,
    HardDrives,
    Lock
} from '@phosphor-icons/react';

export const jasiriContent = {
    hero: {
        title: "Jasiri Lending Software",
        subtitle: "Complete Lending Management Solution",
        description: "Transform complex lending workflows into streamlined, automated processes that drive profitability, reduce risk, and enhance customer satisfaction.",
        badge: "Enterprise Grade"
    },
    executiveSummary: {
        title: "Executive Summary",
        content: "Jasiri Lending Software is a comprehensive, enterprise-grade SaaS platform designed to revolutionize how financial institutions manage their lending operations. Built with cutting-edge technology and deep industry expertise, Jasiri transforms complex lending workflows into streamlined, automated processes that drive profitability, reduce risk, and enhance customer satisfaction."
    },
    painPoints: [
        {
            title: "Operational Inefficiency",
            points: ["Paper-based applications", "Manual data entry errors", "Disconnected systems", "Slow approval workflows"],
            impact: "Slow turnaround times and high operational costs."
        },
        {
            title: "Risk & Collections",
            points: ["Limited portfolio visibility", "Reactive collections", "Difficulty tracking NPLs", "Manual reconciliation"],
            impact: "High default rates and reduced profitability."
        },
        {
            title: "Compliance Complexity",
            points: ["Audit trail gaps", "Manual reporting", "Inconsistent records", "KYC challenges"],
            impact: "Regulatory penalties and audit failures."
        },
        {
            title: "Scalability Limitations",
            points: ["Legacy systems", "Manual scaling issues", "Geographic limitations", "High infrastructure costs"],
            impact: "Stunted growth and competitive disadvantage."
        }
    ],
    features: [
        {
            title: "Comprehensive CRM",
            icon: Users,
            description: "Transform how you manage customer relationships from lead to loyal borrower.",
            details: ["Lead Management & Conversion", "360-Degree Customer View", "Lifecycle Management", "Interaction Tracking"]
        },
        {
            title: "Intelligent Loan Origination",
            icon: CreditCard,
            description: "Streamline processing from application to disbursement with automated workflows.",
            details: ["Digital Applications", "Flexible Products", "Multi-level Approvals", "Automated Disbursement"]
        },
        {
            title: "Advanced Collections",
            icon: Handshake,
            description: "Maximize collections efficiency and minimize portfolio risk with intelligent tools.",
            details: ["Real-time Monitoring", "M-Pesa Integration", "Arrears Management", "Automated Reconciliation"]
        },
        {
            title: "Accounting & Finance",
            icon: CurrencyDollar,
            description: "Maintain complete financial control with integrated accounting and reporting.",
            details: ["Chart of Accounts", "Journal Entries", "Bank Reconciliation", "Financial Reporting"]
        },
        {
            title: "Analytics & BI",
            icon: ChartPie,
            description: "Make data-driven decisions with comprehensive analytics and reporting.",
            details: ["Executive Dashboards", "Performance Analytics", "Risk Reports", "Financial Analysis"]
        },
        {
            title: "Security & Access",
            icon: Shield,
            description: "Enterprise-grade security with granular access controls.",
            details: ["Role-Based Access", "Multi-Factor Authentication", "Audit Trails", "Data Encryption"]
        }
    ],
    stats: [
        { label: "Reduction in Processing Time", value: "70%" },
        { label: "Improvement in Collections", value: "45%" },
        { label: "Decrease in Ops Costs", value: "60%" },
        { label: "Reduction in NPL Ratios", value: "30%" }
    ],
    technical: [
        { title: "Modern Stack", icon: Lightning, desc: "React.js, Supabase, Cloud-native" },
        { title: "Reliability", icon: HardDrives, desc: "99.9% Uptime SLA, Automated Backups" },
        { title: "Security", icon: Lock, desc: "Bank-grade encryption, GDPR compliance" }
    ]
};
