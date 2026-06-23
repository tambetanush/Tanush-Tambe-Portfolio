"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { skillMatrix } from '@/data/resumeData';
import styles from './SkillsGrid.module.css';

type SkillCategories = keyof typeof skillMatrix;

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Object.keys(skillMatrix)];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredMatrix = Object.entries(skillMatrix).reduce((acc, [category, skills]) => {
    // If a specific category is active, verify matches
    if (activeCategory !== 'All' && category !== activeCategory) {
      return acc;
    }

    // Filter skills based on search query
    const matchingSkills = skills.filter(skill => 
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSkills.length > 0 || searchQuery === '') {
      acc[category as SkillCategories] = skills;
    }

    return acc;
  }, {} as Record<SkillCategories, string[]>);

  return (
    <div className={styles.skillsSection}>
      <div className={styles.controls}>
        {/* Category Tabs */}
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tabButton} ${activeCategory === cat ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All' ? 'All Skills' : cat}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className={styles.searchBox}>
          <Search className={styles.searchIcon} size={16} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search skills (e.g. PyTorch, LoRA)..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className={styles.grid}>
        {Object.entries(filteredMatrix).map(([category, skills]) => {
          return (
            <div key={category} className={`${styles.categoryCard} glass-card`}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.skillsList}>
                {skills.map((skill) => {
                  const isMatch = searchQuery !== '' && skill.toLowerCase().includes(searchQuery.toLowerCase());
                  return (
                    <span 
                      key={skill} 
                      className={`${styles.skillItem} ${isMatch ? styles.highlightedSkill : ''}`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
