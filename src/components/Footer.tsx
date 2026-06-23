import React from 'react';
import Link from 'next/link';
import { Mail, Cpu } from 'lucide-react';
import { Github, Linkedin } from '@/components/BrandIcons';
import styles from './Footer.module.css';
import { personalInfo } from '@/data/resumeData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.brandColumn}>
          <div className={styles.logo}>
            <Cpu className={styles.logoIcon} size={20} />
            <span className={styles.logoText}>Tanush Tambe</span>
          </div>
          <p className={styles.desc}>
            Dual-degree AI & Machine Learning Engineer specializing in building, fine-tuning, and optimizing production-grade intelligent systems.
          </p>
        </div>

        <div>
          <h4 className={styles.colTitle}>Navigation</h4>
          <ul className={styles.linksList}>
            <li className={styles.linkItem}><Link href="/">Home</Link></li>
            <li className={styles.linkItem}><Link href="/projects">Projects</Link></li>
            <li className={styles.linkItem}><Link href="/coursework">Coursework</Link></li>
            <li className={styles.linkItem}><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.colTitle}>Connect</h4>
          <div className={styles.socialLinks}>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon}
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className={styles.socialIcon}
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        <p>Optimized for Vercel Serverless & Static Delivery</p>
      </div>
    </footer>
  );
}
