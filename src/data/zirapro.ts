import {
    Users,
    Briefcase,
    CurrencyDollar,
    ChartBar,
    DeviceMobile,
    ChatCircle,
    FileText,
    Lightning,
    Shield,
    Globe,
    Rocket,
    Target,
    TrendUp,
    Lock,
    HardDrives
} from '@phosphor-icons/react';

export const ziraProContent = {
    hero: {
        title: "ZiraPro ERP Platform",
        subtitle: "Complete Enterprise Resource Planning",
        description: "A next-generation ERP platform engineered to unify your organization's most critical functions. Eliminate the chaos of disconnected tools by bringing HR, Payroll, Finance, Lending, and Communication into a single, powerful ecosystem.",
        badge: "Enterprise Unified"
    },
    executiveSummary: {
        title: "Executive Summary",
        content: "ZiraPro is a next-generation Enterprise Resource Planning (ERP) platform engineered to unify your organization's most critical functions. Designed for agility and precision, ZiraPro eliminates the chaos of disconnected tools by bringing Human Resources, Payroll, Finance, Lending Operations, and Internal Communication into a single, powerful ecosystem. Whether you are a Microfinance Institution (MFI) scaling operations or a dynamic enterprise seeking operational excellence, ZiraPro provides the digital backbone to drive growth."
    },
    painPoints: [
        {
            title: "Data Silos & Fragmentation",
            points: ["Scattered business data across spreadsheets", "Incompatible software systems", "Truth decay and decision paralysis", "No single source of truth"],
            impact: "Critical business intelligence is lost, leading to poor decision-making and operational inefficiency."
        },
        {
            title: "Payroll Complexity & Errors",
            points: ["Manual payroll processing", "Costly calculation errors", "Compliance risks with tax authorities", "Time-consuming reconciliation"],
            impact: "Disgruntled employees, regulatory penalties, and wasted administrative hours."
        },
        {
            title: "Operational Blindspots",
            points: ["No real-time dashboards", "Lack of field operations visibility", "Poor asset utilization tracking", "Delayed performance insights"],
            impact: "Management discovers problems too late, missing opportunities to course-correct."
        },
        {
            title: "Communication Chaos",
            points: ["Critical info lost in WhatsApp", "Email chain confusion", "Delayed approvals", "Incident resolution bottlenecks"],
            impact: "Productivity loss and frustrated teams struggling to collaborate effectively."
        },
        {
            title: "Lending Bottlenecks",
            points: ["Manual loan origination", "Slow disbursement processes", "Inefficient collection workflows", "Poor customer experience"],
            impact: "Throttled growth and competitive disadvantage for MFIs."
        },
        {
            title: "Asset Shrinkage",
            points: ["No equipment tracking", "Lost or stolen assets", "Poor accountability", "Significant capital loss"],
            impact: "Thousands lost annually due to inability to track company property."
        }
    ],
    features: [
        {
            title: "Advanced HCM",
            icon: Users,
            description: "Complete human capital management from recruitment to retirement.",
            details: ["Smart Recruitment Dashboard", "Digital Employee Records", "Performance & Appraisal", "Disciplinary & Compliance"]
        },
        {
            title: "Employee Self-Service",
            icon: Briefcase,
            description: "Empower your workforce with a premium self-service portal.",
            details: ["Payslip & P9 Access", "Leave Applications", "Loan Statements", "Training Hub"]
        },
        {
            title: "Payroll Engine",
            icon: CurrencyDollar,
            description: "One-click payroll with automated statutory deductions and compliance.",
            details: ["Automated Calculations", "Staff Welfare & Lending", "Expense Management", "Statutory Reporting"]
        },
        {
            title: "Field Force Tools",
            icon: DeviceMobile,
            description: "Mobile-ready tools for field operations and microfinance workflows.",
            details: ["Loan Task Management", "MpesaZap Integration", "Asset QR Scanning", "Field Reporting"]
        },
        {
            title: "Financial Logic",
            icon: ChartBar,
            description: "Integrated finance and accounting with real-time insights.",
            details: ["General Ledger", "Budget Management", "Financial Reporting", "Audit Trails"]
        },
        {
            title: "Secure Communication",
            icon: ChatCircle,
            description: "Business-first messaging and notification platform.",
            details: ["Integrated Chat System", "SMS Center", "Team Collaboration", "Secure Channels"]
        },
        {
            title: "Asset Management",
            icon: FileText,
            description: "Track and manage company assets with QR code technology.",
            details: ["Asset Registry", "Assignment Tracking", "Return Management", "Depreciation Tracking"]
        },
        {
            title: "Analytics & BI",
            icon: TrendUp,
            description: "Real-time dashboards and business intelligence for informed decisions.",
            details: ["Executive Dashboards", "Performance Metrics", "Predictive Analytics", "Custom Reports"]
        },
        {
            title: "Security & Compliance",
            icon: Shield,
            description: "Enterprise-grade security with comprehensive audit capabilities.",
            details: ["Role-Based Access", "Data Encryption", "Compliance Tracking", "Audit Logs"]
        }
    ],
    stats: [
        { label: "Productivity Increase", value: "65%" },
        { label: "Payroll Error Reduction", value: "95%" },
        { label: "Admin Time Saved", value: "40hrs/mo" },
        { label: "Asset Loss Prevention", value: "85%" }
    ],
    benefits: [
        {
            title: "Unified Power",
            icon: Lightning,
            description: "HR, Payroll, Assets, and Operations in one secure login."
        },
        {
            title: "Intelligent Automation",
            icon: Rocket,
            description: "From statutory deductions to loan schedules, the system does the math."
        },
        {
            title: "Real-Time Visibility",
            icon: Target,
            description: "Live dashboards for recruitment, finance, and performance."
        },
        {
            title: "Field-Ready",
            icon: Globe,
            description: "Mobile-responsive design ensures field force productivity."
        }
    ],
    technical: [
        { title: "Modern Stack", icon: Lightning, desc: "React.js, Supabase, Cloud-native architecture" },
        { title: "Reliability", icon: HardDrives, desc: "99.9% Uptime SLA, Automated backups" },
        { title: "Security", icon: Lock, desc: "Bank-grade encryption, GDPR compliance" }
    ],
    modules: [
        {
            category: "Human Capital",
            items: ["Recruitment Pipeline", "Employee Database", "Performance Management", "Training & Development", "Disciplinary Tracking"]
        },
        {
            category: "Financial Operations",
            items: ["Payroll Processing", "Expense Management", "Staff Loans", "Salary Advances", "Statutory Compliance"]
        },
        {
            category: "Field Operations",
            items: ["Loan Origination", "Task Management", "Mobile Money Integration", "Asset Tracking", "Field Reporting"]
        },
        {
            category: "Communication",
            items: ["Team Chat", "SMS Notifications", "Document Sharing", "Approval Workflows", "Announcements"]
        }
    ]
};
