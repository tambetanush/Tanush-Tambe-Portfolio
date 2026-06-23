"use client";

import React, { useState, useEffect } from 'react';

// Define static node coordinates outside the component to prevent recalculation and hydration issues
const layers = [
  // Input layer (3 nodes)
  [
    { id: 'in-1', x: 50, y: 100, label: 'NPK Sensors' },
    { id: 'in-2', x: 50, y: 200, label: 'IoT Vitals' },
    { id: 'in-3', x: 50, y: 300, label: 'Clickstream' }
  ],
  // Hidden layer 1 (4 nodes)
  [
    { id: 'h1-1', x: 170, y: 65, label: 'Feature Eng.' },
    { id: 'h1-2', x: 170, y: 155, label: 'ResNet CNN' },
    { id: 'h1-3', x: 170, y: 245, label: 'Q-Table' },
    { id: 'h1-4', x: 170, y: 335, label: 'Embeddings' }
  ],
  // Hidden layer 2 (3 nodes)
  [
    { id: 'h2-1', x: 290, y: 100, label: 'Ensemble' },
    { id: 'h2-2', x: 290, y: 200, label: 'Policy Grad.' },
    { id: 'h2-3', x: 290, y: 300, label: 'RRF Fusion' }
  ],
  // Output layer (2 nodes)
  [
    { id: 'out-1', x: 390, y: 150, label: 'Inference' },
    { id: 'out-2', x: 390, y: 250, label: 'Explanation' }
  ]
];

// Generate connection links between layers deterministically to prevent hydration mismatch
const links: { from: { id: string; x: number; y: number }; to: { id: string; x: number; y: number }; delay: string }[] = [];
let seed = 12345;
const pseudoRandom = () => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

for (let i = 0; i < layers.length - 1; i++) {
  const currLayer = layers[i];
  const nextLayer = layers[i + 1];
  currLayer.forEach((fromNode) => {
    nextLayer.forEach((toNode) => {
      // Use the seed-based pseudo-random generator to ensure exact matching delay strings on server and client
      const delayValue = (pseudoRandom() * 3).toFixed(1);
      links.push({ from: fromNode, to: toNode, delay: `${delayValue}s` });
    });
  });
}

export default function HeroVisual() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([
    "[System] Initializing model inference...",
    "[System] Checking AWS SageMaker endpoints...",
    "[MLOps] Active registry models ready. Latency: ~4.5ms"
  ]);

  // Set up live scrolling logs (only runs on client post-mount, safe from SSR mismatches)
  useEffect(() => {
    const mockLogs = [
      '[GreenSense] Received NPK array: N=42, P=12, K=33, pH=6.5',
      '[GreenSense] predicted crop class: "rice" (conf=0.986)',
      '[AgroLM] embedding match found: "bacterial leaf blight"',
      '[AgroLM] adapter fine-tuning active: compiling recommendation...',
      '[CareerAtlas] parsed PDF payload. vectorizing experiences...',
      '[CareerAtlas] matching score: 0.892 vs Data Scientist role',
      '[HerdPulse] YOLOv8-OBB: Segmented Cow_#42. Pose: standing',
      '[HerdPulse] ESP32: temp=38.6°C, heart_rate=72 bpm',
      '[AetherVolt] downloaded transcript. Whispers audio embedding active...',
      '[AetherVolt] transcript analysis sentiment index: 0.812 (Positive)',
      '[Engage2Value] User clickstream sequence: [Home, Projects, Contact]',
      '[Engage2Value] CLV projection model complete: score=$425.00',
      '[RLSandbox] Q-learning simulator: state (0,0) -> policy arrow updated',
      '[RLSandbox] Epoch success count: 142/150 | rewards: +12.00',
      '[MLOps] SageMaker endpoint running v2.5.1 | health OK',
      '[MLOps] Docker container active: Redis queue check passed'
    ];

    const interval = setInterval(() => {
      setLogs(prev => {
        const nextLog = mockLogs[Math.floor(Math.random() * mockLogs.length)];
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const entry = `[${timestamp}] ${nextLog}`;
        return [...prev.slice(-2), entry]; // Keep last 3 items
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '520px', margin: '0 auto' }}>
      <svg 
        viewBox="0 0 440 360" 
        style={{ width: '100%', height: 'auto', overflow: 'visible' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glowing Filters */}
          <filter id="neon-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="neon-glow-purple" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* SVG Keyframes Animations */}
          <style>{`
            .network-line {
              stroke: var(--border-color);
              stroke-width: 1;
              opacity: 0.15;
              transition: stroke 0.3s, opacity 0.3s, stroke-width 0.3s;
            }
            .flow-packet {
              fill: none;
              stroke-linecap: round;
              stroke-dasharray: 8 60;
              stroke-dashoffset: 68;
              animation: flow 4s linear infinite;
              opacity: 0.7;
            }
            .node-circle {
              transition: r 0.2s, fill 0.2s, stroke 0.2s, stroke-width 0.2s;
              cursor: pointer;
            }
            .node-label {
              font-family: var(--font-sans);
              font-size: 11px;
              font-weight: 600;
              fill: var(--text-secondary);
              opacity: 0.7;
              transition: opacity 0.2s, fill 0.2s, font-size 0.2s;
              text-anchor: middle;
            }
            @keyframes flow {
              to {
                stroke-dashoffset: -68;
              }
            }
            .glow-pulse-cyan {
              animation: pulse-c 3s ease-in-out infinite;
            }
            .glow-pulse-purple {
              animation: pulse-p 3s ease-in-out infinite;
            }
            @keyframes pulse-c {
              0%, 100% { stroke: rgba(0, 242, 254, 0.2); }
              50% { stroke: rgba(0, 242, 254, 0.7); }
            }
            @keyframes pulse-p {
              0%, 100% { stroke: rgba(138, 43, 226, 0.2); }
              50% { stroke: rgba(138, 43, 226, 0.7); }
            }
          `}</style>
        </defs>

        {/* Render Connection Lines */}
        {links.map((link, idx) => {
          const isHighlighted = hoveredNodeId && (link.from.id === hoveredNodeId || link.to.id === hoveredNodeId);
          return (
            <line
              key={`l-${idx}`}
              x1={link.from.x}
              y1={link.from.y}
              x2={link.to.x}
              y2={link.to.y}
              className="network-line"
              style={{
                stroke: isHighlighted ? 'var(--clr-cyan)' : 'var(--border-color)',
                opacity: isHighlighted ? 0.7 : 0.15,
                strokeWidth: isHighlighted ? 1.8 : 1
              }}
            />
          );
        })}

        {/* Render Laser Data Packets */}
        {links.map((link, idx) => {
          const isCyan = idx % 2 === 0;
          const isHighlighted = hoveredNodeId && (link.from.id === hoveredNodeId || link.to.id === hoveredNodeId);
          return (
            <line
              key={`p-${idx}`}
              x1={link.from.x}
              y1={link.from.y}
              x2={link.to.x}
              y2={link.to.y}
              className="flow-packet"
              stroke={isCyan ? 'var(--clr-cyan)' : 'var(--clr-purple)'}
              strokeWidth={isHighlighted ? '2' : isCyan ? '1.5' : '1.2'}
              filter={isCyan ? 'url(#neon-glow-cyan)' : 'url(#neon-glow-purple)'}
              style={{ 
                animationDelay: link.delay,
                opacity: hoveredNodeId ? (isHighlighted ? 1 : 0.2) : 0.7
              }}
            />
          );
        })}

        {/* Render Nodes */}
        {layers.flatMap((layer, lIdx) => 
          layer.map((node) => {
            const isOutput = lIdx === layers.length - 1;
            const isInput = lIdx === 0;
            const strokeColor = isOutput ? 'var(--clr-cyan)' : isInput ? 'var(--clr-purple)' : 'var(--border-color)';
            const fillColor = isOutput ? 'var(--bg-primary)' : isInput ? 'var(--clr-purple)' : 'var(--bg-tertiary)';
            const isHovered = hoveredNodeId === node.id;
            const glowFilter = isOutput || isHovered ? 'url(#neon-glow-cyan)' : 'none';

            return (
              <g 
                key={node.id} 
                className="node-group"
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? "8" : "6"}
                  className="node-circle"
                  fill={fillColor}
                  stroke={isHovered ? 'var(--clr-cyan)' : strokeColor}
                  strokeWidth={isHovered ? "2.5" : "1.5"}
                  filter={glowFilter}
                />
                <text
                  x={node.x}
                  y={node.y - 14}
                  className="node-label"
                  style={{
                    opacity: isHovered ? 1 : 0.7,
                    fill: isHovered ? 'var(--text-header)' : 'var(--text-secondary)',
                    fontSize: isHovered ? '12px' : '11px'
                  }}
                >
                  {node.label}
                </text>
              </g>
            );
          })
        )}
      </svg>

      {/* Typewriter Scrolling Inference Console Log Widget */}
      <div 
        style={{
          marginTop: '1.25rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius-sm)',
          boxShadow: 'var(--shadow-sm)',
          overflow: 'hidden',
          fontFamily: 'Consolas, Monaco, monospace',
          fontSize: '11px',
          textAlign: 'left',
          backdropFilter: 'blur(8px)'
        }}
      >
        {/* Terminal Header */}
        <div 
          style={{
            background: 'var(--bg-secondary)',
            padding: '0.4rem 0.75rem',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
          </div>
          <span style={{ color: 'var(--text-muted)', fontSize: '10px', fontWeight: 600 }}>inference_engine.log</span>
        </div>
        
        {/* Terminal Logs Content */}
        <div style={{ padding: '0.6rem 0.75rem', minHeight: '68px', display: 'flex', flexDirection: 'column', gap: '3px', color: 'var(--text-secondary)' }}>
          {logs.map((log, index) => {
            let logColor = 'var(--text-secondary)';
            if (log.includes('[GreenSense]')) logColor = 'var(--clr-cyan)';
            else if (log.includes('[AgroLM]')) logColor = 'var(--clr-purple)';
            else if (log.includes('[HerdPulse]')) logColor = 'var(--clr-pink)';
            else if (log.includes('[System]') || log.includes('[MLOps]')) logColor = 'var(--text-header)';
            
            return (
              <div 
                key={index} 
                style={{ 
                  color: logColor, 
                  whiteSpace: 'nowrap', 
                  textOverflow: 'ellipsis', 
                  overflow: 'hidden', 
                  lineHeight: '1.45',
                  opacity: index === logs.length - 1 ? 1 : 0.55,
                  transition: 'opacity 0.3s ease'
                }}
              >
                {log}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
