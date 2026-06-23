"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, StepForward, Sliders, BarChart4, BookOpen } from 'lucide-react';
import styles from './RLSandbox.module.css';

// Grid Configuration
const GRID_SIZE = 6;
const START = { r: 0, c: 0 };
const GOAL = { r: 5, c: 5 };

const WALLS = [
  { r: 2, c: 2 },
  { r: 2, c: 3 },
  { r: 3, c: 3 }
];

const PITS = [
  { r: 4, c: 2 },
  { r: 4, c: 4 }
];

// Helper to check cell type
const isWall = (r: number, c: number) => WALLS.some(w => w.r === r && w.c === c);
const isPit = (r: number, c: number) => PITS.some(p => p.r === r && p.c === c);
const isGoal = (r: number, c: number) => r === GOAL.r && c === GOAL.c;

export default function RLSandbox() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // RL Parameters State
  const [algorithm, setAlgorithm] = useState<'qlearning' | 'sarsa'>('qlearning');
  const [epsilon, setEpsilon] = useState<number>(0.2); // Exploration rate
  const [alpha, setAlpha] = useState<number>(0.1); // Learning rate
  const [gamma] = useState<number>(0.9); // Discount factor
  const [stochasticity, setStochasticity] = useState<number>(0.2); // Slipping probability
  const [speed, setSpeed] = useState<number>(300); // Step delay in ms

  // Agent & Episode State
  const [agentPos, setAgentPos] = useState<{ r: number; c: number }>(START);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [episode, setEpisode] = useState<number>(0);
  const [steps, setSteps] = useState<number>(0);
  const [totalReward, setTotalReward] = useState<number>(0);
  const [rewardsHistory, setRewardsHistory] = useState<number[]>([]);
  const [successCount, setSuccessCount] = useState<number>(0);
  const [pitCount, setPitCount] = useState<number>(0);

  // Q-Table Ref to keep it persistent across renders without resetting
  // Q[row][col][action] -> actions: 0=UP, 1=RIGHT, 2=DOWN, 3=LEFT
  const qTableRef = useRef<number[][][]>(
    Array(GRID_SIZE).fill(null).map(() => 
      Array(GRID_SIZE).fill(null).map(() => Array(4).fill(0.0))
    )
  );

  // Current action for SARSA
  const currentActionRef = useRef<number>(0);

  // Initialize/Reset Table
  const resetQTable = () => {
    qTableRef.current = Array(GRID_SIZE).fill(null).map(() => 
      Array(GRID_SIZE).fill(null).map(() => Array(4).fill(0.0))
    );
    setEpisode(0);
    setRewardsHistory([]);
    setSuccessCount(0);
    setPitCount(0);
    resetAgent();
  };

  const resetAgent = () => {
    setAgentPos(START);
    setSteps(0);
    setTotalReward(0);
    
    // Choose initial action for SARSA
    currentActionRef.current = selectAction(START.r, START.c);
  };

  // Epsilon-Greedy action selection
  const selectAction = (r: number, c: number): number => {
    if (Math.random() < epsilon) {
      return Math.floor(Math.random() * 4); // Random exploration
    }
    // Greedy action selection
    const qValues = qTableRef.current[r][c];
    let maxVal = -Infinity;
    let bestActions: number[] = [];
    
    for (let a = 0; a < 4; a++) {
      if (qValues[a] > maxVal) {
        maxVal = qValues[a];
        bestActions = [a];
      } else if (qValues[a] === maxVal) {
        bestActions.push(a);
      }
    }
    // Tie breaking
    return bestActions[Math.floor(Math.random() * bestActions.length)];
  };

  // Environment transition step
  const getNextState = (r: number, c: number, action: number): { nr: number; nc: number; reward: number; isTerminal: boolean } => {
    // Apply stochasticity (slipping to adjacent cells)
    let actualAction = action;
    if (Math.random() < stochasticity) {
      // Slip to a different action
      const slips = [0, 1, 2, 3].filter(a => a !== action);
      actualAction = slips[Math.floor(Math.random() * slips.length)];
    }

    let nr = r;
    let nc = c;

    // 0=UP, 1=RIGHT, 2=DOWN, 3=LEFT
    if (actualAction === 0) nr -= 1;
    else if (actualAction === 1) nc += 1;
    else if (actualAction === 2) nr += 1;
    else if (actualAction === 3) nc -= 1;

    // Boundary constraints & Walls check
    if (nr < 0 || nr >= GRID_SIZE || nc < 0 || nc >= GRID_SIZE || isWall(nr, nc)) {
      // Hit wall/boundary, stay in place
      return { nr: r, nc: c, reward: -1, isTerminal: false };
    }

    if (isGoal(nr, nc)) {
      return { nr, nc, reward: 15, isTerminal: true };
    }

    if (isPit(nr, nc)) {
      return { nr, nc, reward: -15, isTerminal: true };
    }

    return { nr, nc, reward: -1, isTerminal: false };
  };

  // Perform single step of RL
  const runSingleStep = () => {
    const { r, c } = agentPos;
    const qTable = qTableRef.current;

    if (algorithm === 'qlearning') {
      const action = selectAction(r, c);
      const { nr, nc, reward, isTerminal } = getNextState(r, c, action);

      // Q-Learning update: Q(s,a) = Q(s,a) + alpha * (reward + gamma * max_a' Q(s', a') - Q(s,a))
      const nextMaxQ = isTerminal ? 0 : Math.max(...qTable[nr][nc]);
      const currentQ = qTable[r][c][action];
      qTable[r][c][action] = currentQ + alpha * (reward + gamma * nextMaxQ - currentQ);

      setAgentPos({ r: nr, c: nc });
      setSteps(prev => prev + 1);
      setTotalReward(prev => prev + reward);

      if (isTerminal) {
        // Record episode metrics
        setEpisode(prev => prev + 1);
        setRewardsHistory(prev => [...prev.slice(-49), totalReward + reward]);
        if (isGoal(nr, nc)) setSuccessCount(prev => prev + 1);
        if (isPit(nr, nc)) setPitCount(prev => prev + 1);
        resetAgent();
      }
    } else {
      // SARSA
      const action = currentActionRef.current;
      const { nr, nc, reward, isTerminal } = getNextState(r, c, action);

      // Choose next action a' using epsilon-greedy at s'
      const nextAction = selectAction(nr, nc);

      // SARSA update: Q(s,a) = Q(s,a) + alpha * (reward + gamma * Q(s', a') - Q(s,a))
      const nextQ = isTerminal ? 0 : qTable[nr][nc][nextAction];
      const currentQ = qTable[r][c][action];
      qTable[r][c][action] = currentQ + alpha * (reward + gamma * nextQ - currentQ);

      setAgentPos({ r: nr, c: nc });
      currentActionRef.current = nextAction;
      setSteps(prev => prev + 1);
      setTotalReward(prev => prev + reward);

      if (isTerminal) {
        setEpisode(prev => prev + 1);
        setRewardsHistory(prev => [...prev.slice(-49), totalReward + reward]);
        if (isGoal(nr, nc)) setSuccessCount(prev => prev + 1);
        if (isPit(nr, nc)) setPitCount(prev => prev + 1);
        resetAgent();
      }
    }
  };

  // Simulation loop trigger
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      runSingleStep();
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, agentPos, speed, algorithm, epsilon, alpha, stochasticity]);

  // Drawing Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cellSize = canvas.width / GRID_SIZE;
    const qTable = qTableRef.current;

    // Draw grid cells and values
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        const x = c * cellSize;
        const y = r * cellSize;

        // Base cell styling
        if (isWall(r, c)) {
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(x, y, cellSize, cellSize);
          ctx.strokeStyle = 'rgba(255,255,255,0.05)';
          ctx.strokeRect(x, y, cellSize, cellSize);
          
          // Draw wall pattern
          ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
          ctx.font = '24px sans-serif';
          ctx.fillText('█', x + cellSize/3, y + cellSize/1.5);
          continue;
        }

        if (isGoal(r, c)) {
          ctx.fillStyle = 'rgba(0, 242, 254, 0.15)';
          ctx.fillRect(x, y, cellSize, cellSize);
          ctx.strokeStyle = '#00f2fe';
          ctx.lineWidth = 2;
          ctx.strokeRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
          
          ctx.fillStyle = '#00f2fe';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText('GOAL (+15)', x + cellSize/6, y + cellSize/1.8);
          continue;
        }

        if (isPit(r, c)) {
          ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
          ctx.fillRect(x, y, cellSize, cellSize);
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 2;
          ctx.strokeRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
          
          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText('PIT (-15)', x + cellSize/5, y + cellSize/1.8);
          continue;
        }

        // Draw normal grid
        ctx.fillStyle = '#0a0e1b';
        ctx.fillRect(x, y, cellSize, cellSize);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, cellSize, cellSize);

        // Render Q-values as mini triangles inside each state
        const qVals = qTable[r][c];
        const center = { x: x + cellSize/2, y: y + cellSize/2 };
        
        // Colors mapping: Red (Negative) -> Blue/Cyan (Positive)
        const getQColor = (val: number) => {
          if (val === 0) return 'rgba(255,255,255,0.05)';
          if (val > 0) {
            const alpha = Math.min(0.6, val / 15);
            return `rgba(0, 242, 254, ${alpha})`;
          } else {
            const alpha = Math.min(0.6, Math.abs(val) / 15);
            return `rgba(239, 68, 68, ${alpha})`;
          }
        };

        // Draw 4 triangles (0=UP, 1=RIGHT, 2=DOWN, 3=LEFT)
        // UP
        ctx.fillStyle = getQColor(qVals[0]);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + cellSize, y);
        ctx.lineTo(center.x, center.y);
        ctx.closePath();
        ctx.fill();

        // RIGHT
        ctx.fillStyle = getQColor(qVals[1]);
        ctx.beginPath();
        ctx.moveTo(x + cellSize, y);
        ctx.lineTo(x + cellSize, y + cellSize);
        ctx.lineTo(center.x, center.y);
        ctx.closePath();
        ctx.fill();

        // DOWN
        ctx.fillStyle = getQColor(qVals[2]);
        ctx.beginPath();
        ctx.moveTo(x, y + cellSize);
        ctx.lineTo(x + cellSize, y + cellSize);
        ctx.lineTo(center.x, center.y);
        ctx.closePath();
        ctx.fill();

        // LEFT
        ctx.fillStyle = getQColor(qVals[3]);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + cellSize);
        ctx.lineTo(center.x, center.y);
        ctx.closePath();
        ctx.fill();

        // Draw optimal arrow policy indicator
        let maxIdx = 0;
        let maxVal = qVals[0];
        let hasLearned = false;
        
        for(let i=0; i<4; i++){
          if(qVals[i] !== 0) hasLearned = true;
          if(qVals[i] > maxVal) {
            maxVal = qVals[i];
            maxIdx = i;
          }
        }

        if (hasLearned) {
          ctx.fillStyle = '#ffffff';
          ctx.font = '10px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          let arrow = '↑';
          if (maxIdx === 1) arrow = '→';
          else if (maxIdx === 2) arrow = '↓';
          else if (maxIdx === 3) arrow = '←';
          ctx.fillText(arrow, center.x, center.y);
        }

        // Draw Start label
        if (r === START.r && c === START.c) {
          ctx.fillStyle = 'rgba(255,255,255,0.7)';
          ctx.font = 'bold 10px sans-serif';
          ctx.fillText('START', x + cellSize/2, y + cellSize/5);
        }
      }
    }

    // Draw Agent
    const ax = agentPos.c * cellSize + cellSize / 2;
    const ay = agentPos.r * cellSize + cellSize / 2;
    ctx.beginPath();
    ctx.arc(ax, ay, cellSize / 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#00f2fe';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#00f2fe';
    ctx.fill();
    ctx.shadowBlur = 0; // reset shadow

    // Outline agent border
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

  }, [agentPos, qTableRef.current]);

  const totalRuns = successCount + pitCount || 1;
  const successRate = ((successCount / totalRuns) * 100).toFixed(0);

  return (
    <div className={`${styles.sandboxContainer} glass-card`}>
      <div className={styles.boardPanel}>
        <div className={styles.canvasWrapper}>
          <canvas 
            ref={canvasRef} 
            width={380} 
            height={380} 
            className={styles.canvas}
          />
        </div>

        <div className={styles.explanationText}>
          <strong>Visual Policy Heatmap:</strong> Glowing cyan sections show positive action values, while red represents negative returns. White arrows indicate the agent&apos;s learned optimal direction. Note how Q-Learning prefers the tight, risky gap at (4,3), while SARSA learns to navigate a safer, wider path around the left edge under slip conditions.
        </div>
      </div>

      <div className={styles.controlsPanel}>
        {/* Alg selection */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            <Sliders size={16} className={styles.logoIcon} />
            RL Algorithm
          </h3>
          <div className={styles.paramGroup}>
            <label className={styles.paramLabel}>Select Method</label>
            <select 
              className={styles.select}
              value={algorithm}
              onChange={(e) => {
                setAlgorithm(e.target.value as 'qlearning' | 'sarsa');
                resetAgent();
              }}
            >
              <option value="qlearning">Q-Learning (Off-Policy)</option>
              <option value="sarsa">SARSA (On-Policy)</option>
            </select>
          </div>
        </div>

        {/* Hyperparameters */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            <BookOpen size={16} className={styles.logoIcon} />
            Parameters
          </h3>
          
          <div className={styles.paramGroup}>
            <label className={styles.paramLabel}>
              <span>Exploration Rate (&epsilon;)</span>
              <span className={styles.paramValue}>{epsilon.toFixed(2)}</span>
            </label>
            <input 
              type="range" min="0.0" max="0.5" step="0.05" 
              className={styles.slider}
              value={epsilon}
              onChange={(e) => setEpsilon(parseFloat(e.target.value))}
            />
          </div>

          <div className={styles.paramGroup}>
            <label className={styles.paramLabel}>
              <span>Slip Probability (Wind/Noise)</span>
              <span className={styles.paramValue}>{(stochasticity * 100).toFixed(0)}%</span>
            </label>
            <input 
              type="range" min="0.0" max="0.5" step="0.05" 
              className={styles.slider}
              value={stochasticity}
              onChange={(e) => setStochasticity(parseFloat(e.target.value))}
            />
          </div>

          <div className={styles.paramGroup}>
            <label className={styles.paramLabel}>
              <span>Speed (Step Interval)</span>
              <span className={styles.paramValue}>{speed}ms</span>
            </label>
            <input 
              type="range" min="50" max="1000" step="50" 
              className={styles.slider}
              value={speed}
              onChange={(e) => setSpeed(parseInt(e.target.value))}
            />
          </div>
        </div>

        {/* Action controls */}
        <div className={styles.card}>
          <div className={styles.btnGroup}>
            <button 
              className={`${styles.actionBtn} ${isPlaying ? '' : styles.primaryBtn}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              {isPlaying ? 'Pause' : 'Train Auto'}
            </button>
            <button 
              className={styles.actionBtn}
              onClick={runSingleStep}
              disabled={isPlaying}
            >
              <StepForward size={14} />
              Step Once
            </button>
          </div>

          <div className={styles.btnGroupFull}>
            <button className={styles.actionBtn} onClick={resetAgent}>
              <RotateCcw size={14} />
              Reset Agent
            </button>
            <button className={styles.actionBtn} onClick={resetQTable}>
              <RotateCcw size={14} />
              Reset Q-Table & History
            </button>
          </div>
        </div>

        {/* Stats card */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            <BarChart4 size={16} className={styles.logoIcon} />
            Live Metrics
          </h3>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statVal}>{episode}</div>
              <div className={styles.statLbl}>Episodes</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statVal}>{steps}</div>
              <div className={styles.statLbl}>Steps</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statVal}>{totalReward}</div>
              <div className={styles.statLbl}>Curr. Reward</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statVal}>{successRate}%</div>
              <div className={styles.statLbl}>Goal Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
