"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { projectList } from '@/data/resumeData';
import ProjectCard from '@/components/ProjectCard';
import styles from './projects.module.css';

type CategoryFilter = 'all' | 'ml-genai' | 'cv-iot' | 'analytics-ds';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { label: 'All Projects', value: 'all' as CategoryFilter },
    { label: 'ML & GenAI', value: 'ml-genai' as CategoryFilter },
    { label: 'CV & IoT', value: 'cv-iot' as CategoryFilter },
    { label: 'Analytics & Data Science', value: 'analytics-ds' as CategoryFilter }
  ];

  // Filtering Logic
  const filteredProjects = projectList.filter((project) => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      project.title.toLowerCase().includes(searchLower) ||
      project.summary.toLowerCase().includes(searchLower) ||
      project.tech.some(t => t.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container">
      {/* Header */}
      <div className={styles.header}>
        <h1 className={`${styles.title} gradient-text`}>Engineering Portfolio</h1>
        <p className={styles.subtitle}>
          Detailed look at my production-oriented pipelines, customized models, and analytical tools.
        </p>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        {/* Category Filters */}
        <div className={styles.filters}>
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              className={`${styles.filterBtn} ${activeFilter === tab.value ? styles.activeFilter : ''}`}
              onClick={() => setActiveFilter(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className={styles.searchBox}>
          <Search className={styles.searchIcon} size={16} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search by title or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.grid}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className={styles.emptyState}>
            <h3>No projects found</h3>
            <p>Try modifying your search criteria or changing filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
