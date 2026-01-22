import {
    MapPin,
    Drop,
    Gauge,
    ShieldCheck,
    Lock,
    TrendUp,
    HardDrives,
    Lightning,
    Link
} from '@phosphor-icons/react';

export const strideliContent = {
    hero: {
        title: "Strideli Asset Telemetry",
        subtitle: "High-Fidelity Fleet Intelligence",
        description: "Industrial-grade telemetry engineered to protect your most valuable mobile assets. Prevent fuel siphoning, monitor driver behavior in real-time, and ensure absolute operational visibility.",
        badge: "Mission Critical"
    },
    executiveSummary: {
        title: "Strategic Intelligence",
        content: "Strideli is a high-fidelity asset telemetry platform designed for enterprises requiring absolute control over their mobile infrastructure. By bridging the gap between physical assets and digital intelligence, Strideli provides real-time forensics into fuel consumption, driver behavior, and asset security, transforming fleet management into a strategic advantage."
    },
    painPoints: [
        {
            title: "Fuel Siphoning & Theft",
            points: ["Unexplained fuel drops", "Tampering with fuel sensors", "Manual fuel log manipulation", "Unauthorized fuel auxiliary usage"],
            impact: "Direct capital loss and increased operational overhead."
        },
        {
            title: "Asset Misuse",
            points: ["Unauthorized vehicle usage", "Off-route deviations", "Aggressive driving patterns", "Excessive engine idling"],
            impact: "Rapid asset depreciation and high maintenance costs."
        },
        {
            title: "Recovery Challenges",
            points: ["Delayed theft notifications", "Signal jamming vulnerabilities", "Lack of remote immobilization", "Inaccurate location data"],
            impact: "Permanent loss of high-value capital equipment."
        },
        {
            title: "Inefficient Logistics",
            points: ["Poor route optimization", "Lack of real-time ETA data", "Communication gaps with drivers", "Manual dispatch errors"],
            impact: "Reduced customer satisfaction and wasted logistics hours."
        }
    ],
    features: [
        {
            title: "Precision GPS Tracking",
            icon: MapPin,
            description: "High-frequency location updates with sub-meter accuracy.",
            details: ["Real-time Live Tracking", "Historical Route Playback", "Geo-fencing Alerts", "POI Management"]
        },
        {
            title: "Digital Fuel Monitoring",
            icon: Drop,
            description: "Capacitive fuel sensors with 99% accuracy to eliminate theft.",
            details: ["Refill & Drain Alerts", "Fuel Consumption Reports", "Siphon Detection", "Auxiliary Fuel Tracking"]
        },
        {
            title: "Driver Behavior Labs",
            icon: Gauge,
            description: "Quantify driver performance with advanced inertial sensors.",
            details: ["Harsh Braking & Accel", "Cornering Analytics", "Idling Forensics", "Driver Scorecards"]
        },
        {
            title: "Remote Immobilization",
            icon: Lock,
            description: "Strategic engine cut-off for ultimate asset security.",
            details: ["Secure Engine Kill", "Door Lock Control", "Anti-jamming Protocols", "Panic Button Alerts"]
        },
        {
            title: "Maintenance IQ",
            icon: ShieldCheck,
            description: "Automated fleet maintenance based on real engine usage.",
            details: ["Service Alerts", "Odometer Tracking", "Tire Health Monitoring", "Diagnostic Trouble Codes"]
        },
        {
            title: "Industrial Analytics",
            icon: TrendUp,
            description: "Executive dashboards for fleet efficiency and cost reduction.",
            details: ["Cost per Kilometer", "Asset Utilization", "Fleet Health Overview", "Automated Reporting"]
        }
    ],
    stats: [
        { label: "Fuel Cost Savings", value: "35%" },
        { label: "Asset Life Extension", value: "45%" },
        { label: "Theft Recovery Rate", value: "99%" },
        { label: "Idle Time Reduction", value: "60%" }
    ],
    technical: [
        { title: "Resilient Hardware", icon: HardDrives, desc: "IP67 rated sensors, Internal backup battery" },
        { title: "Edge Processing", icon: Lightning, desc: "On-device event processing, Low latency comms" },
        { title: "Universal API", icon: Link, desc: "Standardized telemetry streams for ERP sync" }
    ]
};
