import React from 'react';
import { GraduationCap, FileText, ExternalLink, Activity } from 'lucide-react';
import { rlCoursework } from '@/data/resumeData';
import RLSandbox from '@/components/RLSandbox';
import styles from './coursework.module.css';

export default function CourseworkPage() {
  return (
    <div className="container">
      {/* Header */}
      <div className={styles.header}>
        <h1 className={`${styles.title} gradient-text`}>{rlCoursework.name}</h1>
        <p className={styles.subtitle}>
          Spotlight on academic coursework, theoretical assessments, and algorithms implemented at {rlCoursework.institution}.
        </p>
      </div>

      {/* Reports Call to Action */}
      <div className={`${styles.ctaCard} glass-card`}>
        <div className={styles.ctaText}>
          <h3 className={styles.ctaHeading}>Detailed Research Reports</h3>
          <p className={styles.ctaDesc}>
            Access the complete research summaries, convergence plots, value maps, and Hyperparameter configurations hosted on Google Drive.
          </p>
        </div>
        <a 
          href={rlCoursework.driveUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="neon-btn"
        >
          <FileText size={16} />
          <span>Open Drive Reports</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Programming Assignments */}
      <div className={styles.grid}>
        {rlCoursework.details.map((assignment, idx) => (
          <div key={idx} className={`${styles.assignmentCard} glass-card`}>
            <h3 className={styles.assignmentTitle}>{assignment.title}</h3>
            <p className={styles.assignmentDesc}>{assignment.desc}</p>
            <ul className={styles.highlightsList}>
              {assignment.highlights.map((highlight, hidx) => (
                <li key={hidx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Live Interactive Sandbox */}
      <section className={styles.sandboxSection}>
        <h2 className={styles.sandboxTitle}>
          <Activity size={22} className="gradient-text-purple" style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
          Interactive policy simulation
        </h2>
        <p className={styles.sandboxSubtitle}>
          Compare Q-Learning (off-policy temporal difference learning) vs SARSA (on-policy temporal difference learning) inside a stochastic Grid World in real time.
        </p>
        <RLSandbox />
      </section>
    </div>
  );
}
