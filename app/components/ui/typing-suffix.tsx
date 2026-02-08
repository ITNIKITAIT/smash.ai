'use client';

import { useState, useEffect } from 'react';

const TYPING_INTERVAL_MS = 150;
const CUTTING_INTERVAL_MS = 180;
const CURSOR_BLINK_MS = 800;
const HOLD_AFTER_TYPING_MS = 2000;
const PAUSE_AFTER_CUT_MS = 1500;

type Phase = 'idle' | 'typing' | 'hold' | 'cutting' | 'pause';

export interface TypingSuffixProps {
  /** Text to type and retype (e.g. ".AI") */
  suffix?: string;
  /** Delay before first typing starts (ms) */
  startAfterMs?: number;
  /** How long to show full text before cutting (ms) */
  holdMs?: number;
  /** Pause after cut before retyping (ms) */
  pauseMs?: number;
  className?: string;
  cursorClassName?: string;
}

export function TypingSuffix({
  suffix = '.AI',
  startAfterMs = 2000,
  holdMs = HOLD_AFTER_TYPING_MS,
  pauseMs = PAUSE_AFTER_CUT_MS,
  className = 'text-primary tabular-nums',
  cursorClassName = 'ml-0.5 h-[0.6em] w-[2px] bg-primary animate-pulse',
}: TypingSuffixProps) {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<Phase>('idle');

  useEffect(() => {
    const t = setTimeout(() => setPhase('typing'), startAfterMs);
    return () => clearTimeout(t);
  }, [startAfterMs]);

  useEffect(() => {
    if (phase === 'typing') {
      if (displayed.length >= suffix.length) {
        setPhase('hold');
        return;
      }
      const t = setTimeout(
        () => setDisplayed(suffix.slice(0, displayed.length + 1)),
        TYPING_INTERVAL_MS,
      );
      return () => clearTimeout(t);
    }
  }, [phase, displayed, suffix]);

  useEffect(() => {
    if (phase === 'hold') {
      const t = setTimeout(() => setPhase('cutting'), holdMs);
      return () => clearTimeout(t);
    }
  }, [phase, holdMs]);

  useEffect(() => {
    if (phase === 'cutting') {
      if (displayed.length === 0) {
        setPhase('pause');
        return;
      }
      const t = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        CUTTING_INTERVAL_MS,
      );
      return () => clearTimeout(t);
    }
  }, [phase, displayed]);

  useEffect(() => {
    if (phase === 'pause') {
      const t = setTimeout(() => setPhase('typing'), pauseMs);
      return () => clearTimeout(t);
    }
  }, [phase, pauseMs]);

  return (
    <span className="inline-flex items-baseline" aria-label={suffix}>
      <span className={className}>{displayed}</span>
      <span
        className={cursorClassName}
        style={{ animationDuration: `${CURSOR_BLINK_MS}ms` }}
        aria-hidden
      />
    </span>
  );
}
