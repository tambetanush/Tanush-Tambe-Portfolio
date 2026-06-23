"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Github, Linkedin } from '@/components/BrandIcons';
import { personalInfo } from '@/data/resumeData';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className={styles.header}>
        <h1 className={`${styles.title} gradient-text`}>Get In Touch</h1>
        <p className={styles.subtitle}>
          Have a project in mind, an opportunity, or just want to chat about Machine Learning and AI? Drop a message!
        </p>
      </div>

      <div className={styles.layout}>
        {/* Left Column: Info */}
        <div className={`${styles.infoCard} glass-card`}>
          <h2 className={styles.infoTitle}>Contact Details</h2>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><Mail size={18} /></div>
              <div className={styles.infoContent}>
                <span className={styles.infoLbl}>Email</span>
                <span className={styles.infoVal}>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><Phone size={18} /></div>
              <div className={styles.infoContent}>
                <span className={styles.infoLbl}>Phone</span>
                <span className={styles.infoVal}>{personalInfo.phone}</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><MapPin size={18} /></div>
              <div className={styles.infoContent}>
                <span className={styles.infoLbl}>Location</span>
                <span className={styles.infoVal}>{personalInfo.location}</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><Linkedin size={18} /></div>
              <div className={styles.infoContent}>
                <span className={styles.infoLbl}>LinkedIn</span>
                <span className={styles.infoVal}>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/tanush-tambe
                  </a>
                </span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><Github size={18} /></div>
              <div className={styles.infoContent}>
                <span className={styles.infoLbl}>GitHub</span>
                <span className={styles.infoVal}>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    github.com/tambetanush
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className={`${styles.formCard} glass-card`}>
          <h2 className={styles.infoTitle} style={{ marginBottom: '1.5rem' }}>Send Message</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className={styles.input}
                value={formData.subject}
                onChange={handleChange}
                placeholder="Inquiry about..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                className={`${styles.input} styles.textarea`}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello Tanush, I would like to discuss..."
                rows={5}
              />
            </div>

            {submitSuccess && (
              <div className={styles.successMsg}>
                Message sent successfully! I will get back to you soon.
              </div>
            )}

            <button 
              type="submit" 
              className="neon-btn" 
              style={{ justifyContent: 'center', width: '100%' }}
              disabled={isSubmitting}
            >
              <Send size={16} />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
