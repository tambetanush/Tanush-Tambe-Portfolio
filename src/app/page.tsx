import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    Brain,
    Sparkles,
    Eye,
    Server,
    Database,
    Cpu,
    Cloud,
    GraduationCap,
    Award,
    ShieldCheck,
    ExternalLink,
    Terminal,
} from "lucide-react";
import {
    personalInfo,
    educationList,
    certificationList,
    achievementList,
} from "@/data/resumeData";
import HeroVisual from "@/components/HeroVisual";
import styles from "./page.module.css";

export default function Home() {
    const pillars = [
        {
            title: "Applied Machine Learning",
            desc: "Creating production ML models. Expert in gradient boosted tree ranking/regression (CatBoost, LightGBM, XGBoost) and time-series forecasting.",
            icon: <Brain size={24} />,
        },
        {
            title: "Generative AI & LLMs",
            desc: "Building context-aware applications. Fine-tuning models via QLoRA, designing PEFT adapters, structuring Pydantic outputs, and orchestrating multi-agent networks.",
            icon: <Sparkles size={24} />,
        },
        {
            title: "Computer Vision & IoT",
            desc: "Fusing hardware with visual deep learning. YOLOv8 oriented bounding box segmentation, ResNet embedding extraction, and ESP32 sensory pipelines.",
            icon: <Eye size={24} />,
        },
        {
            title: "MLOps & Cloud Platforms",
            desc: "Deploying scalable APIs and analytics workflows. Specializing in AWS Cloud (SageMaker, S3, EC2), FastAPI, Redis queues, and Docker containerization.",
            icon: <Server size={24} />,
        },
    ];

    return (
        <div className="container">
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroTag}>
                        <Terminal size={14} />
                        <span>Available for ML & Generative AI Roles</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Building Intelligent Systems From{" "}
                        <span className="gradient-text">
                            Concept to Production
                        </span>
                    </h1>
                    <p className={styles.heroSub}>
                        Hi, I&apos;m <strong>{personalInfo.name}</strong>. I
                        design, deploy, and evaluate production-grade machine
                        learning pipelines, custom fine-tuned LLMs, and
                        high-performance algorithms.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/projects" className="neon-btn">
                            <span>Explore Projects</span>
                            <ArrowRight size={16} />
                        </Link>
                        <Link href="/contact" className="outline-btn">
                            <span>Get in Touch</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.heroVisualWrapper}>
                    <HeroVisual />
                </div>
            </section>

            {/* Focus Areas Section */}
            <section className="section">
                <h2 className="section-title">
                    Technical <span className="gradient-text">Pillars</span>
                </h2>
                <p className="section-subtitle">
                    Core domains where I apply structured data, deep learning,
                    and advanced AI methodologies to solve commercial and
                    research problems.
                </p>
                <div className={styles.pillarsGrid}>
                    {pillars.map((p, idx) => (
                        <div
                            key={idx}
                            className={`${styles.pillarCard} glass-card`}>
                            <div className={styles.pillarIcon}>{p.icon}</div>
                            <h3 className={styles.pillarTitle}>{p.title}</h3>
                            <p className={styles.pillarDesc}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Timeline */}
            <section className="section">
                <h2 className="section-title">
                    Academic <span className="gradient-text">Foundation</span>
                </h2>
                <p className="section-subtitle">
                    Dual-degree academic track coupling rigorous theoretical
                    computer engineering with specialized data science
                    education.
                </p>
                <div className={styles.timeline}>
                    {educationList.map((edu, idx) => (
                        <div key={idx} className={styles.timelineItem}>
                            <div className={styles.timelineDot} />
                            <div
                                className={`${styles.timelineContent} glass-card`}>
                                <div className={styles.timelineHeader}>
                                    <h3 className={styles.timelineInstitution}>
                                        {edu.institution}
                                    </h3>
                                    <span className={styles.timelinePeriod}>
                                        {edu.period}
                                    </span>
                                </div>
                                <p className={styles.timelineDegree}>
                                    {edu.degree}
                                </p>
                                <div className={styles.timelineGrade}>
                                    {edu.gradeLabel}: {edu.grade}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* AWS Certifications */}
            <section className="section">
                <h2 className="section-title">
                    AWS <span className="gradient-text">Certifications</span>
                </h2>
                <p className="section-subtitle">
                    Professional credentials validating cloud-native data
                    pipelines, ML engineering architecture, and security
                    fundamentals.
                </p>
                <div className={styles.certsGrid}>
                    {certificationList.map((cert, idx) => {
                        const getIcon = (name: string) => {
                            if (name === "Brain") return <Brain size={24} />;
                            if (name === "Database")
                                return <Database size={24} />;
                            if (name === "Cpu") return <Cpu size={24} />;
                            return <Cloud size={24} />;
                        };
                        return (
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={idx}
                                className={`${styles.certCard} glass-card`}>
                                <div className={styles.certIconWrapper}>
                                    {getIcon(cert.iconName)}
                                </div>
                                <div className={styles.certInfo}>
                                    <h3 className={styles.certName}>
                                        {cert.name}
                                    </h3>
                                    <p className={styles.certAuth}>
                                        {cert.authority}
                                    </p>
                                </div>
                                <div className={styles.certLink}>
                                    <ExternalLink size={16} />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </section>

            {/* Coursework Highlight Block */}
            <section className="section">
                <div
                    className="glass-card"
                    style={{
                        padding: "2.5rem",
                        display: "flex",
                        gap: "2rem",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}>
                    <div style={{ flex: "2 1 400px" }}>
                        <span
                            className="badge badge-purple"
                            style={{ marginBottom: "1rem" }}>
                            Coursework Spotlight
                        </span>
                        <h3
                            style={{
                                fontSize: "1.75rem",
                                marginBottom: "1rem",
                                color: "var(--text-header)",
                            }}>
                            Reinforcement Learning
                        </h3>
                        <p
                            style={{
                                color: "var(--text-secondary)",
                                lineHeight: "1.6",
                                marginBottom: "1.5rem",
                            }}>
                            Explore deep reinforcement learning implementations
                            including multi-armed bandits, tabular temporal
                            difference methods (SARSA vs Q-Learning), policy
                            gradient networks, and Option frameworks. Includes
                            an interactive live Grid World simulation.
                        </p>
                        <Link href="/coursework" className="neon-btn">
                            <span>View RL Submissions & Sandbox</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div
                        style={{
                            flex: "1 1 200px",
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <GraduationCap
                            size={120}
                            className="gradient-text-purple"
                            style={{ opacity: 0.8 }}
                        />
                    </div>
                </div>
            </section>

            {/* Achievements List */}
            <section className="section">
                <h2 className="section-title">
                    Honors & <span className="gradient-text">Achievements</span>
                </h2>
                <p className="section-subtitle">
                    National academic standings, competitive ranks, and grades
                    reflecting execution and theoretical mastery.
                </p>
                <div className={styles.achGrid}>
                    {achievementList.map((ach, idx) => (
                        <div
                            key={idx}
                            className={`${styles.achCard} glass-card`}>
                            <h3 className={styles.achTitle}>
                                <span>{ach.title}</span>
                                <Award
                                    size={18}
                                    className="gradient-text-purple"
                                />
                            </h3>
                            <p className={styles.achDesc}>{ach.detail}</p>
                            {ach.driveUrl && (
                                <a
                                    href={ach.driveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.achLink}>
                                    <span>Verify Credential</span>
                                    <ExternalLink size={12} />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
