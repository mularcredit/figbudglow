import {
    Users,
    Buildings,
    CreditCard,
    Calculator,
    Wallet,
    Brain,
    TerminalWindow,
    Lightning,
    Shield,
    ChartPie,
    HardDrives,
    ShareNetwork,
    DeviceMobile,
    Globe,
} from '@phosphor-icons/react';

export const services = [
    {
        icon: CreditCard,
        title: 'Microfinance and lending infrastructure',
        description: 'Complete Loan Origination Systems designed for the modern credit market. From onboarding compliant with KYC to automated credit appraisals and M-Pesa B2C disbursements, we minimize NPLs through predictive monitoring of delinquency.',
        features: ['Automated credit scoring engines', 'M-Pesa B2C and C2B integration', 'Tiered collateral management', 'Real time delinquency tracking', 'Portfolio at Risk analytics'],
        color: 'text-green-400',
        bgColor: 'bg-green-50',
        variant: 'dark',
        featured: true
    },
    {
        icon: Users,
        title: 'Unified HCM and compliant payroll',
        description: 'Eliminate manual payroll friction and statutory exposure. Our HCM platform automates PAYE, NSSF, NHIF, and Affordable Housing Levy extractions with precision, ensuring full compliance with Kenyan labor laws and KRA regulations.',
        features: ['Biometric attendance integration', 'Automated KRA iTax P10 reports', 'Self service employee portals', 'Complete lifecycle tracking', 'Dynamic leave management'],
        color: 'text-blue-400',
        bgColor: 'bg-blue-50',
        variant: 'light',
        featured: true
    },
    {
        icon: Buildings,
        title: 'Enterprise CRM and pipeline intelligence',
        description: 'Transform lead acquisition into predictable revenue. Our CRM architecture provides complete customer visibility, automated lead scoring, and institutional memory to ensure no sales opportunity is ever lost.',
        features: ['Automated lead scoring models', 'Sales pipeline velocity metrics', 'Multi channel support ticketing', 'Customer lifetime value tracking', 'Cross sell opportunity alerts'],
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-50',
        variant: 'dark'
    },
    {
        icon: Calculator,
        title: 'Corporate financial management',
        description: 'Move beyond basic bookkeeping. Gain high fidelity visibility into your cash flow with real time General Ledger tracking, automated bank reconciliations, and financial reporting for complex corporate structures.',
        features: ['Unified General Ledger', 'Automated tax computation', 'Multi entity consolidation', 'Real time cash flow forensics', 'Smart AP and AR automation'],
        color: 'text-orange-400',
        bgColor: 'bg-orange-50',
        variant: 'light'
    },
    {
        icon: Wallet,
        title: 'Payment gateway and open banking',
        description: 'Engineered for high volume transactions. Connect your core systems directly to M-Pesa, Pesalink, and global card networks through our secure API bridge. We support real time settlement and automated reconciliation.',
        features: ['M-Pesa STK Push and B2C APIs', 'Pesalink 2.0 bank to bank', 'PCI DSS compliant card processing', 'Webhooks for real time settlement', 'Anti fraud transaction monitoring'],
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-50',
        variant: 'dark'
    },
    {
        icon: Brain,
        title: 'Data driven business intelligence',
        description: 'Harness the power of machine learning to predict market shifts. From predictive churn analysis to automated credit limit increases, we embed intelligence into your operational workflow for superior decision making.',
        features: ['Predictive delinquency modeling', 'Automated document OCR', 'Fraud pattern recognition', 'Operational anomaly detection', 'Advanced business forecasting'],
        color: 'text-purple-400',
        bgColor: 'bg-purple-50',
        variant: 'light'
    }
];

export const allServices = [
    ...services,
    {
        icon: TerminalWindow,
        title: 'Operational workflow automation',
        description: 'Remove the bottleneck of repetitive tasks. We design and deploy custom workflow automation that bridges the gap between fragmented legacy systems and modern cloud architectures.',
        features: ['Cross platform API bridges', 'Legacy system modernization', 'Custom event driven triggers', 'Robotic Process Automation', 'Microservice architecture design'],
        color: 'text-pink-400',
        bgColor: 'bg-pink-50',
        variant: 'light'
    },
    {
        icon: Lightning,
        title: 'Strategic digital consulting',
        description: 'Expert led digital transformation. We do not just deploy software; we optimize your business processes to ensure your technology stack drives measurable ROI and long term scalability.',
        features: ['Process architecture review', 'Security and compliance audits', 'Cloud migration strategy', 'Enterprise change management', 'Ongoing technical SLA support'],
        color: 'text-indigo-400',
        bgColor: 'bg-indigo-50',
        variant: 'dark'
    },
    {
        icon: DeviceMobile,
        title: 'Bulk SMS and USSD gateway',
        description: 'Industrial grade communications bridge. Deploy high volume transactional SMS and interactive USSD menus for deep market penetration reaching customers on any device, anywhere.',
        features: ['Alpha numeric sender IDs', 'Interactive USSD sessions', 'Automated OTP delivery', 'Low latency delivery routes', 'Real time delivery forensics'],
        color: 'text-orange-400',
        bgColor: 'bg-orange-50',
        variant: 'light'
    }
];

export const keyFeatures = [
    {
        icon: Shield,
        title: 'Institutional security',
        description: 'Military grade encryption and SOC2 ready data residency protocols for high stakes enterprise data.'
    },
    {
        icon: Lightning,
        title: 'Rapid deployment',
        description: 'Modular architecture allows for core systems to be live and processing transactions within 72 hours.'
    },
    {
        icon: ChartPie,
        title: 'Decision intelligence',
        description: 'Real time executive dashboards that interpret complex data points into actionable growth strategies.'
    },
    {
        icon: HardDrives,
        title: 'Sovereign infrastructure',
        description: 'High availability server clusters designed to scale from thousands to millions of concurrent transactions.'
    }
];

export const activeOpportunities = [
    {
        title: "Zira HR",
        excerpt: "Enterprise grade Human Capital Management with deep focus on Kenyan statutory compliance. Automate payroll, eliminate ghost workers, and manage the full employee lifecycle with biometric precision.",
        time: "Active",
        image: "/products/zira.png",
        badge: "Statutory Ready",
        link: "/products/zirapro"
    },
    {
        title: "Jasiri lending software",
        excerpt: "The definitive full cycle lending operating system. Engineered for microfinance institutions requiring automated credit scoring, disbursements, and aggressive delinquency management.",
        time: "Active",
        image: "/products/jasiri.png",
        badge: "NPL Reduction",
        link: "/products/jasiri-lending"
    },
    {
        title: "Strideli",
        excerpt: "High fidelity asset telemetry and fleet intelligence. Prevent fuel siphoning, monitor driver behavior in real time, and protect your high value assets with remote engine immobilization.",
        time: "Active",
        image: "/stride.png",
        badge: "Fuel Monitoring",
        link: "/products/strideli"
    }
];

export const paymentSystemsDetails = [
    {
        name: 'Pesalink 2.0',
        features: ['Real time 24/7 transfers', 'Direct bank core integration', 'Bulk disbursement APIs', 'Liquidity management'],
        description: 'High velocity bank to bank settlement infrastructure across the entire Kenyan banking network.',
        logo: '/pesalink-logo.png'
    },
    {
        name: 'M-Pesa B2C and C2B',
        features: ['STK Push integrations', 'Automated B2C payroll', 'Real time settlement webhooks', 'Optimized callback handling'],
        description: 'The industrial strength mobile money bridge for enterprise collections and automated disbursements.',
        logo: '/mpesa-logo.png'
    },
    {
        name: 'Open Banking Bridge',
        features: ['PSD2 compliant APIs', 'Multi bank data aggregation', 'Credit behavior analysis', 'Fraud prevention layer'],
        description: 'Unified financial data access to drive personalized credit products and real time risk assessment.',
        logo: null
    },
    {
        name: 'Omni Channel Payments',
        features: ['Cross border FX settlement', 'Visa and Mastercard processing', 'KYC and AML verification', 'Fraud velocity monitoring'],
        description: 'Global payment architecture supporting multi currency transactions with local settlement capabilities.',
        logo: null
    }
];

export const integrations = [
    { name: 'Pesalink', type: 'Instant Settlement', status: 'Live', icon: ShareNetwork, logo: '/pesalink-logo.png' },
    { name: 'M-Pesa', type: 'Mobile Finance', status: 'Live', icon: DeviceMobile, logo: '/mpesa-logo.png' },
    { name: 'Visa and Mastercard', type: 'Global Card', status: 'Live', icon: CreditCard, logo: null },
    { name: 'KRA iTax P10', type: 'Compliance', status: 'Live', icon: Shield, logo: '/kra-logo.png' },
    { name: 'Core Banking', type: 'Infrastructure', status: 'Live', icon: Buildings, logo: null },
    { name: 'Cloud Clusters', type: 'Data Residency', status: 'Live', icon: Globe, logo: null }
];
