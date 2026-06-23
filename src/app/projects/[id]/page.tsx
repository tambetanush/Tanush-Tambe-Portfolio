import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, ArrowLeft, Cpu, Database, Server, Terminal, Play, FileText } from 'lucide-react';
import { Github } from '@/components/BrandIcons';
import { projectList } from '@/data/resumeData';
import { marked } from 'marked';
import styles from './projectDetail.module.css';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Coordinate mappings for system architecture node layouts
const projectNodeCoords: Record<string, Record<string, { x: number; y: number }>> = {
  greensense: {
    iot: { x: 80, y: 150 },
    backend: { x: 260, y: 150 },
    sim_cache: { x: 260, y: 290 },
    ml_rank: { x: 440, y: 70 },
    gemini: { x: 440, y: 290 },
    dashboard: { x: 620, y: 150 }
  },
  agrolm: {
    dataset: { x: 80, y: 70 },
    quant: { x: 80, y: 200 },
    lora: { x: 80, y: 330 },
    trainer: { x: 260, y: 200 },
    gemma: { x: 440, y: 200 },
    gradio: { x: 620, y: 200 }
  },
  careeratlas: {
    pdf: { x: 80, y: 150 },
    extractor: { x: 230, y: 150 },
    jina: { x: 380, y: 150 },
    pinecone: { x: 380, y: 290 },
    agent_orchestrator: { x: 530, y: 150 },
    ui: { x: 680, y: 150 }
  },
  herdpulse: {
    cam: { x: 80, y: 70 },
    yolo: { x: 230, y: 70 },
    resnet: { x: 380, y: 70 },
    telemetry: { x: 230, y: 240 },
    classifier: { x: 380, y: 240 },
    api: { x: 530, y: 155 }
  },
  aethervolt: {
    api: { x: 80, y: 180 },
    db: { x: 230, y: 180 },
    net: { x: 380, y: 60 },
    sent: { x: 380, y: 180 },
    ts: { x: 380, y: 300 },
    pdf: { x: 530, y: 180 }
  },
  engage2value: {
    raw: { x: 80, y: 180 },
    fe: { x: 230, y: 180 },
    clf: { x: 380, y: 70 },
    reg: { x: 380, y: 290 },
    blend: { x: 530, y: 180 },
    out: { x: 680, y: 180 }
  },
  inventory: {
    invoices: { x: 80, y: 150 },
    audit: { x: 200, y: 150 },
    abc: { x: 320, y: 150 },
    forecast: { x: 440, y: 150 },
    eoq: { x: 560, y: 150 },
    recs: { x: 680, y: 150 }
  }
};

export async function generateStaticParams() {
  return projectList.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: PageProps) {
  const { id } = await params;
  const project = projectList.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  // Parse Markdown description into HTML on the server
  const htmlContent = await marked.parse(project.description);

  // SVG dimensions & variables
  const coords = projectNodeCoords[project.id] || {};
  const svgWidth = 760;
  const svgHeight = 360;

  return (
    <div className={`${styles.container} container`}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <ArrowLeft size={14} />
        <Link href="/projects">Back to Projects</Link>
        <span>/</span>
        <span style={{ color: 'var(--text-secondary)' }}>{project.title}</span>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.period}>{project.period}</span>
          <span className="badge badge-cyan">{project.category.replace('-', ' ')}</span>
        </div>
        <h1 className={styles.title}>{project.title}</h1>
        
        {/* Call to Actions */}
        <div className={styles.ctas}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
              <Github size={16} />
              <span>View Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>
              <ExternalLink size={16} />
              <span>Visit Live App</span>
            </a>
          )}
          {project.hfUrl && (
            <a href={project.hfUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>
              <Play size={16} />
              <span>HuggingFace Demo</span>
            </a>
          )}
          {project.driveUrl && (
            <a href={project.driveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>
              <FileText size={16} />
              <span>Project Reports</span>
            </a>
          )}
        </div>
      </div>

      {/* Metrics Board */}
      <div className={styles.metricsGrid}>
        {project.metrics.map((metric) => (
          <div key={metric.label} className={`${styles.metricCard} glass-card`}>
            <div className={styles.metricVal}>{metric.value}</div>
            <div className={styles.metricLbl}>{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Layout Columns */}
      <div className={styles.layout}>
        {/* Left Column: Description */}
        <div className={`${styles.content} glass-card`} style={{ padding: '2.5rem' }}>
          <div 
            className={styles.richText}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>

        {/* Right Column: Diagram & Tech */}
        <div className={styles.sidebar}>
          {/* SVG Diagram Card */}
          <div className={`${styles.sidebarCard} glass-card`}>
            <h3 className={styles.sidebarTitle}>
              <Cpu size={16} className="gradient-text" />
              Pipeline Architecture
            </h3>
            <div className={styles.diagramContainer}>
              <svg 
                viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
                className={styles.svgDiagram}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Arrow markers for connection endpoints */}
                <defs>
                  <marker 
                    id="arrow" 
                    viewBox="0 0 10 10" 
                    refX="6" 
                    refY="5" 
                    markerWidth="6" 
                    markerHeight="6" 
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b" />
                  </marker>
                </defs>

                {/* Render Connection Links */}
                {project.architectureLinks.map((link, idx) => {
                  const from = coords[link.source];
                  const to = coords[link.target];
                  if (!from || !to) return null;

                  // Simple direct link calculation
                  const dx = to.x - from.x;
                  const dy = to.y - from.y;
                  const angle = Math.atan2(dy, dx);
                  const nodeRadiusX = 65; // half width of rectangular nodes
                  const nodeRadiusY = 22; // half height of rectangular nodes
                  
                  // Offset link starts/ends to clear node boundary boxes
                  let offsetFromX = from.x;
                  let offsetFromY = from.y;
                  let offsetToX = to.x;
                  let offsetToY = to.y;

                  if (Math.abs(dx) > Math.abs(dy)) {
                    // Left-right flow offsets
                    offsetFromX += Math.sign(dx) * nodeRadiusX;
                    offsetToX -= Math.sign(dx) * (nodeRadiusX + 5);
                  } else {
                    // Up-down flow offsets
                    offsetFromY += Math.sign(dy) * nodeRadiusY;
                    offsetToY -= Math.sign(dy) * (nodeRadiusY + 5);
                  }

                  // Center link midpoint for label rendering
                  const mx = (offsetFromX + offsetToX) / 2;
                  const my = (offsetFromY + offsetToY) / 2;

                  return (
                    <g key={idx}>
                      <line 
                        x1={offsetFromX} 
                        y1={offsetFromY} 
                        x2={offsetToX} 
                        y2={offsetToY} 
                        stroke="#334155" 
                        strokeWidth="2" 
                        markerEnd="url(#arrow)"
                      />
                      {link.label && (
                        <g>
                          <rect 
                            x={mx - 35} 
                            y={my - 8} 
                            width="70" 
                            height="16" 
                            rx="4" 
                            fill="#060913" 
                            stroke="rgba(255,255,255,0.05)"
                          />
                          <text 
                            x={mx} 
                            y={my + 3} 
                            fill="#64748b" 
                            fontSize="8" 
                            textAnchor="middle" 
                            fontWeight="500"
                          >
                            {link.label}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}

                {/* Render Nodes */}
                {project.architectureNodes.map((node) => {
                  const pt = coords[node.id];
                  if (!pt) return null;

                  const width = 130;
                  const height = 44;
                  const nx = pt.x - width/2;
                  const ny = pt.y - height/2;

                  // Define node border colors
                  let strokeColor = 'rgba(255,255,255,0.1)';
                  let fillColor = '#0f172a';
                  let iconColor = 'var(--text-secondary)';

                  if (node.type === 'input') {
                    strokeColor = 'rgba(59, 130, 246, 0.4)'; // Blue
                    iconColor = '#3b82f6';
                  } else if (node.type === 'process') {
                    strokeColor = 'rgba(168, 85, 247, 0.4)'; // Purple
                    iconColor = '#a855f7';
                  } else if (node.type === 'model') {
                    strokeColor = 'rgba(0, 242, 254, 0.5)'; // Cyan
                    iconColor = '#00f2fe';
                    fillColor = 'rgba(13, 20, 38, 0.8)';
                  } else if (node.type === 'database') {
                    strokeColor = 'rgba(234, 179, 8, 0.4)'; // Yellow
                    iconColor = '#eab308';
                  } else if (node.type === 'output') {
                    strokeColor = 'rgba(16, 185, 129, 0.4)'; // Green
                    iconColor = '#10b981';
                  }

                  return (
                    <g key={node.id} className={styles.svgNode}>
                      {/* Node box with subtle drop glow */}
                      <rect 
                        x={nx} 
                        y={ny} 
                        width={width} 
                        height={height} 
                        rx="8" 
                        fill={fillColor} 
                        stroke={strokeColor} 
                        strokeWidth="1.5" 
                      />
                      {/* Node Text */}
                      <text 
                        x={pt.x} 
                        y={pt.y + 4} 
                        fill="#ffffff" 
                        fontSize="9" 
                        fontWeight="600" 
                        textAnchor="middle"
                      >
                        {node.label}
                      </text>
                      {/* Small Type Label */}
                      <text 
                        x={nx + 6} 
                        y={ny + 10} 
                        fill={iconColor} 
                        fontSize="6" 
                        fontWeight="700" 
                        letterSpacing="0.05em"
                      >
                        {node.type.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Tech Stack Breakdown Card */}
          <div className={`${styles.sidebarCard} glass-card`}>
            <h3 className={styles.sidebarTitle}>
              <Database size={16} className="gradient-text" />
              Technologies Used
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((t) => (
                <span key={t} className="badge badge-blue">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
