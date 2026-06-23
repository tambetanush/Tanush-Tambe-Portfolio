import React from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight, BookOpen } from 'lucide-react';
import { Github } from '@/components/BrandIcons';
import { Project } from '@/data/resumeData';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={`${styles.card} glass-card`}>
      <div className={styles.header}>
        <span className={styles.period}>{project.period}</span>
        <span className="badge badge-cyan">{project.category.replace('-', ' ')}</span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.summary}>{project.summary}</p>

      {/* Metrics Board */}
      {project.metrics && project.metrics.length > 0 && (
        <div className={styles.metricsGrid}>
          {project.metrics.map((metric) => (
            <div key={metric.label} className={styles.metricCard}>
              <div className={styles.metricVal}>{metric.value}</div>
              <div className={styles.metricLbl}>{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tech Tags */}
      <div className={styles.techList}>
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className={styles.techTag}>
            {t}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className={styles.techTag}>+{project.tech.length - 5} more</span>
        )}
      </div>

      <div className={styles.footer}>
        <div className={styles.links}>
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.iconLink}
              title="View GitHub Repository"
              aria-label={`View GitHub for ${project.title}`}
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.iconLink}
              title="View Live Demo"
              aria-label={`View Live Demo for ${project.title}`}
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.hfUrl && (
            <a 
              href={project.hfUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.iconLink}
              title="View HuggingFace Space"
              aria-label={`View HuggingFace Space for ${project.title}`}
            >
              <BookOpen size={16} />
            </a>
          )}
        </div>

        <Link href={`/projects/${project.id}`} className={styles.moreLink}>
          <span>View Details</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
