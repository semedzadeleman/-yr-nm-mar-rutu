import React from 'react';
import type { IllustratedItemKey, PatternToken, QuestionVisualSpec, ShapeKind } from '../types';

export const IllustratedItemSvg: React.FC<{ item: IllustratedItemKey; className?: string }> = ({
  item,
  className = 'w-14 h-14',
}) => {
  switch (item) {
    case 'apple':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M32 18 C32 10 38 7 42 7" fill="none" stroke="#6D4C41" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M33 15 C40 10 49 12 48 18 C43 21 36 19 33 15Z" fill="#34D399" stroke="#059669" strokeWidth="2" />
          <path
            d="M32 20 C22 16 12 24 13 38 C14 50 23 56 30 55 C31.5 54.8 32.5 54.8 34 55 C41 56 50 50 51 38 C52 24 42 16 32 20Z"
            fill="#FB7185"
            stroke="#E11D48"
            strokeWidth="2.5"
          />
          <ellipse cx="22" cy="30" rx="3.5" ry="6" transform="rotate(-20 22 30)" fill="#FFE4E6" opacity="0.7" />
        </svg>
      );
    case 'pear':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M32 14 V8" stroke="#6D4C41" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M33 12 C40 8 47 11 45 16 C40 18 35 16 33 12Z" fill="#34D399" stroke="#059669" strokeWidth="2" />
          <path
            d="M32 15 C24 15 23 26 19 34 C14 43 18 55 32 55 C46 55 50 43 45 34 C41 26 40 15 32 15Z"
            fill="#FDE047"
            stroke="#CA8A04"
            strokeWidth="2.5"
          />
          <ellipse cx="24" cy="40" rx="3" ry="6" transform="rotate(-15 24 40)" fill="#FEF9C3" opacity="0.8" />
        </svg>
      );
    case 'strawberry':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path
            d="M17 24 C17 17 47 17 47 24 C47 38 38 54 32 55 C26 54 17 38 17 24Z"
            fill="#F43F5E"
            stroke="#BE123C"
            strokeWidth="2.5"
          />
          <path d="M22 20 L32 14 L42 20 L37 23 L32 19 L27 23Z" fill="#34D399" stroke="#059669" strokeWidth="2" />
          <circle cx="26" cy="30" r="1.6" fill="#FEF08A" />
          <circle cx="36" cy="29" r="1.6" fill="#FEF08A" />
          <circle cx="31" cy="36" r="1.6" fill="#FEF08A" />
          <circle cx="27" cy="42" r="1.6" fill="#FEF08A" />
          <circle cx="36" cy="41" r="1.6" fill="#FEF08A" />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path
            d="M32 8 L39.2 22.8 L55.5 25.1 L43.7 36.6 L46.5 52.8 L32 45.1 L17.5 52.8 L20.3 36.6 L8.5 25.1 L24.8 22.8 Z"
            fill="#FACC15"
            stroke="#D97706"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="27" cy="30" r="2" fill="#78350F" />
          <circle cx="37" cy="30" r="2" fill="#78350F" />
          <path d="M29 35 Q32 38 35 35" fill="none" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'leaf':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path
            d="M14 50 C14 26 30 12 52 12 C52 34 38 50 14 50Z"
            fill="#34D399"
            stroke="#059669"
            strokeWidth="2.5"
          />
          <path d="M12 52 L44 20" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M26 38 L25 27 M34 30 L34 21 M31 33 L42 33" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'butterfly':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <ellipse cx="21" cy="24" rx="12" ry="10" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="2.2" />
          <ellipse cx="43" cy="24" rx="12" ry="10" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="2.2" />
          <ellipse cx="22" cy="40" rx="9" ry="8" fill="#93C5FD" stroke="#2563EB" strokeWidth="2.2" />
          <ellipse cx="42" cy="40" rx="9" ry="8" fill="#93C5FD" stroke="#2563EB" strokeWidth="2.2" />
          <rect x="29.5" y="18" width="5" height="28" rx="2.5" fill="#4C1D95" />
          <path d="M31 18 Q26 10 22 11 M33 18 Q38 10 42 11" fill="none" stroke="#4C1D95" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'flower':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M32 34 V56" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="32" cy="17" r="7.5" fill="#F9A8D4" stroke="#DB2777" strokeWidth="2" />
          <circle cx="43" cy="25" r="7.5" fill="#F9A8D4" stroke="#DB2777" strokeWidth="2" />
          <circle cx="39" cy="37" r="7.5" fill="#F9A8D4" stroke="#DB2777" strokeWidth="2" />
          <circle cx="25" cy="37" r="7.5" fill="#F9A8D4" stroke="#DB2777" strokeWidth="2" />
          <circle cx="21" cy="25" r="7.5" fill="#F9A8D4" stroke="#DB2777" strokeWidth="2" />
          <circle cx="32" cy="28" r="8" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
        </svg>
      );
    case 'sun':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <circle cx="32" cy="32" r="14" fill="#FDE047" stroke="#D97706" strokeWidth="2.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="32"
              y1="8"
              x2="32"
              y2="13"
              stroke="#F59E0B"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${deg} 32 32)`}
            />
          ))}
          <circle cx="27" cy="30" r="1.8" fill="#92400E" />
          <circle cx="37" cy="30" r="1.8" fill="#92400E" />
          <path d="M28 35 Q32 39 36 35" fill="none" stroke="#92400E" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'moon':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path
            d="M39 12 C25 13 15 24 16 37 C17 48 27 55 39 53 C29 49 26 39 27 30 C28 21 33 15 39 12Z"
            fill="#FDE047"
            stroke="#D97706"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="44" cy="22" r="2.2" fill="#FACC15" />
          <circle cx="49" cy="34" r="1.6" fill="#FACC15" />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M10 17 C20 14 28 16 32 20 C36 16 44 14 54 17 V49 C44 46 36 48 32 51 C28 48 20 46 10 49 Z" fill="#EDE9FE" stroke="#6D28D9" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="32" y1="20" x2="32" y2="51" stroke="#6D28D9" strokeWidth="2.5" />
          <line x1="16" y1="26" x2="26" y2="25" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="16" y1="33" x2="26" y2="32" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="38" y1="25" x2="48" y2="26" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="38" y1="32" x2="48" y2="33" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'cat':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M16 26 L18 11 L28 20 H36 L46 11 L48 26 C51 31 51 44 44 49 C38 53 26 53 20 49 C13 44 13 31 16 26Z" fill="#FED7AA" stroke="#EA580C" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="25" cy="33" r="2.3" fill="#431407" />
          <circle cx="39" cy="33" r="2.3" fill="#431407" />
          <polygon points="32,37 29,40 35,40" fill="#FB7185" />
          <path d="M27 43 Q32 46 37 43" fill="none" stroke="#431407" strokeWidth="2" strokeLinecap="round" />
          <line x1="11" y1="36" x2="20" y2="37" stroke="#9A3412" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="44" y1="37" x2="53" y2="36" stroke="#9A3412" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'rabbit':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <ellipse cx="24" cy="18" rx="4.5" ry="12" fill="#F3E8FF" stroke="#7C3AED" strokeWidth="2.2" />
          <ellipse cx="40" cy="18" rx="4.5" ry="12" fill="#F3E8FF" stroke="#7C3AED" strokeWidth="2.2" />
          <ellipse cx="32" cy="40" rx="16" ry="14" fill="#FAF5FF" stroke="#7C3AED" strokeWidth="2.5" />
          <circle cx="26" cy="37" r="2.2" fill="#3B0764" />
          <circle cx="38" cy="37" r="2.2" fill="#3B0764" />
          <circle cx="32" cy="42" r="2.2" fill="#FB7185" />
          <path d="M28 46 Q32 49 36 46" fill="none" stroke="#3B0764" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'fish':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M18 32 C22 20 38 17 50 28 C53 31 53 33 50 36 C38 47 22 44 18 32Z" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="2.5" />
          <polygon points="18,32 8,22 11,32 8,42" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="42" cy="29" r="2.3" fill="#1E3A8A" />
          <path d="M32 24 Q28 32 32 40" fill="none" stroke="#DBEAFE" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'tree':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect x="28" y="38" width="8" height="18" rx="2" fill="#92400E" />
          <circle cx="32" cy="24" r="15" fill="#4ADE80" stroke="#059669" strokeWidth="2.5" />
          <circle cx="21" cy="31" r="10" fill="#34D399" stroke="#059669" strokeWidth="2.2" />
          <circle cx="43" cy="31" r="10" fill="#34D399" stroke="#059669" strokeWidth="2.2" />
          <circle cx="28" cy="21" r="2.5" fill="#FB7185" />
          <circle cx="38" cy="28" r="2.5" fill="#FB7185" />
        </svg>
      );
    case 'house':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <polygon points="10,30 32,12 54,30" fill="#A78BFA" stroke="#5B21B6" strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="16" y="30" width="32" height="24" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5" />
          <rect x="27" y="39" width="10" height="15" rx="1.5" fill="#F59E0B" stroke="#92400E" strokeWidth="2" />
          <rect x="20" y="35" width="6" height="6" rx="1" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.5" />
        </svg>
      );
    case 'car':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M14 34 L20 22 H44 L50 34 H54 V45 H10 V34 Z" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="22" y="25" width="20" height="8" rx="1.5" fill="#E0F2FE" />
          <circle cx="20" cy="46" r="5.5" fill="#334155" stroke="#0F172A" strokeWidth="2" />
          <circle cx="44" cy="46" r="5.5" fill="#334155" stroke="#0F172A" strokeWidth="2" />
        </svg>
      );
    case 'ball':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <circle cx="32" cy="32" r="20" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
          <path d="M16 20 Q32 32 16 44" fill="none" stroke="#7C3AED" strokeWidth="3" />
          <path d="M48 20 Q32 32 48 44" fill="none" stroke="#0284C7" strokeWidth="3" />
        </svg>
      );
    case 'bird':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <ellipse cx="30" cy="35" rx="15" ry="12" fill="#7DD3FC" stroke="#0284C7" strokeWidth="2.5" />
          <circle cx="42" cy="24" r="9" fill="#7DD3FC" stroke="#0284C7" strokeWidth="2.5" />
          <polygon points="50,23 58,26 50,28" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
          <circle cx="44" cy="22" r="2" fill="#0F172A" />
          <path d="M22 33 Q28 24 35 33" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2" />
          <path d="M15 35 L8 30 L11 39 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
        </svg>
      );
    case 'pencil':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <g transform="rotate(-35 32 32)">
            <rect x="26" y="12" width="12" height="34" rx="2" fill="#FBBF24" stroke="#B45309" strokeWidth="2.2" />
            <rect x="26" y="10" width="12" height="7" rx="2" fill="#FDA4AF" stroke="#E11D48" strokeWidth="2" />
            <polygon points="26,46 38,46 32,57" fill="#FDE68A" stroke="#B45309" strokeWidth="2" />
            <polygon points="30,53 34,53 32,57" fill="#1E293B" />
          </g>
        </svg>
      );
    case 'umbrella':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M10 32 C10 18 20 12 32 12 C44 12 54 18 54 32 Z" fill="#A78BFA" stroke="#6D28D9" strokeWidth="2.5" />
          <path d="M32 12 V48 C32 52 26 52 26 48" fill="none" stroke="#4C1D95" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'clock':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <circle cx="32" cy="32" r="20" fill="#FFFFFF" stroke="#0284C7" strokeWidth="3" />
          <circle cx="32" cy="32" r="2.5" fill="#0F172A" />
          <line x1="32" y1="32" x2="32" y2="19" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="32" x2="42" y2="36" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'cloud':
    case 'rain':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path
            d="M18 38 H46 C51 38 54 34 54 30 C54 25 50 22 46 22 C44 15 37 12 31 14 C26 15 23 19 22 23 C17 23 12 27 12 31 C12 35 15 38 18 38Z"
            fill="#BAE6FD"
            stroke="#0284C7"
            strokeWidth="2.5"
          />
          {item === 'rain' && (
            <>
              <line x1="22" y1="44" x2="19" y2="52" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="32" y1="44" x2="29" y2="52" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="42" y1="44" x2="39" y2="52" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
            </>
          )}
        </svg>
      );
    case 'boat':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <polygon points="32,12 32,36 48,36" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="30,18 30,36 18,36" fill="#C4B5FD" stroke="#6D28D9" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 40 H52 L46 50 H18 Z" fill="#FB923C" stroke="#C2410C" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M8 54 Q16 50 24 54 T40 54 T56 54" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'key':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <circle cx="22" cy="32" r="10" fill="#FDE047" stroke="#B45309" strokeWidth="2.5" />
          <circle cx="22" cy="32" r="3.5" fill="#FFFBEB" />
          <path d="M32 32 H54 M44 32 V40 M51 32 V40" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
    case 'lock':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M22 28 V21 C22 14 42 14 42 21 V28" fill="none" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
          <rect x="16" y="28" width="32" height="24" rx="5" fill="#FBBF24" stroke="#B45309" strokeWidth="2.5" />
          <circle cx="32" cy="39" r="3" fill="#78350F" />
        </svg>
      );
    case 'bee':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <ellipse cx="26" cy="22" rx="7" ry="9" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
          <ellipse cx="38" cy="22" rx="7" ry="9" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
          <ellipse cx="32" cy="37" rx="14" ry="11" fill="#FACC15" stroke="#854D0E" strokeWidth="2.5" />
          <line x1="26" y1="27" x2="26" y2="47" stroke="#451A03" strokeWidth="3.5" />
          <line x1="35" y1="26" x2="35" y2="48" stroke="#451A03" strokeWidth="3.5" />
          <circle cx="41" cy="35" r="2" fill="#451A03" />
        </svg>
      );
    case 'honey':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect x="20" y="14" width="24" height="6" rx="2" fill="#92400E" />
          <path d="M18 20 H46 C50 28 50 44 44 52 H20 C14 44 14 28 18 20Z" fill="#FBBF24" stroke="#B45309" strokeWidth="2.5" />
        </svg>
      );
    case 'carrot':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M38 16 C42 10 49 12 46 19 M34 15 C34 8 40 7 41 14" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
          <path d="M26 20 C34 15 44 25 39 33 L18 52 C15 54 12 51 14 48 Z" fill="#FB923C" stroke="#C2410C" strokeWidth="2.5" />
        </svg>
      );
    case 'bag':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path d="M24 18 V14 C24 10 40 10 40 14 V18" fill="none" stroke="#5B21B6" strokeWidth="3" />
          <rect x="16" y="18" width="32" height="34" rx="6" fill="#A78BFA" stroke="#5B21B6" strokeWidth="2.5" />
          <rect x="22" y="34" width="20" height="12" rx="3" fill="#DDD6FE" stroke="#6D28D9" strokeWidth="2" />
        </svg>
      );
  }
};

const COLOR_MAP: Record<NonNullable<PatternToken['color']>, { fill: string; stroke: string; bg: string; text: string }> = {
  purple: { fill: '#C4B5FD', stroke: '#6D28D9', bg: 'bg-violet-100 border-violet-300', text: 'text-violet-900' },
  blue: { fill: '#93C5FD', stroke: '#0284C7', bg: 'bg-sky-100 border-sky-300', text: 'text-sky-900' },
  yellow: { fill: '#FDE047', stroke: '#CA8A04', bg: 'bg-amber-100 border-amber-300', text: 'text-amber-900' },
  green: { fill: '#6EE7B7', stroke: '#059669', bg: 'bg-emerald-100 border-emerald-300', text: 'text-emerald-900' },
  coral: { fill: '#FDA4AF', stroke: '#E11D48', bg: 'bg-rose-100 border-rose-300', text: 'text-rose-900' },
};

const ShapeSvg: React.FC<{ shape: ShapeKind; color?: PatternToken['color']; className?: string }> = ({
  shape,
  color = 'purple',
  className = 'w-11 h-11',
}) => {
  const palette = COLOR_MAP[color];
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {shape === 'circle' && <circle cx="24" cy="24" r="17" fill={palette.fill} stroke={palette.stroke} strokeWidth="2.5" />}
      {shape === 'square' && <rect x="8" y="8" width="32" height="32" rx="5" fill={palette.fill} stroke={palette.stroke} strokeWidth="2.5" />}
      {shape === 'triangle' && (
        <polygon points="24,7 41,39 7,39" fill={palette.fill} stroke={palette.stroke} strokeWidth="2.5" strokeLinejoin="round" />
      )}
      {shape === 'diamond' && (
        <polygon points="24,6 42,24 24,42 6,24" fill={palette.fill} stroke={palette.stroke} strokeWidth="2.5" strokeLinejoin="round" />
      )}
      {shape === 'star' && (
        <path
          d="M24 6 L29.5 17.5 L42 19.3 L33 28 L35.1 40.5 L24 34.6 L12.9 40.5 L15 28 L6 19.3 L18.5 17.5 Z"
          fill={palette.fill}
          stroke={palette.stroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      )}
      {shape === 'heart' && (
        <path
          d="M24 41 C12 32 7 24 7 17 C7 11.5 11.5 8 16.5 8 C20 8 22.8 10 24 12.5 C25.2 10 28 8 31.5 8 C36.5 8 41 11.5 41 17 C41 24 36 32 24 41Z"
          fill={palette.fill}
          stroke={palette.stroke}
          strokeWidth="2.5"
        />
      )}
    </svg>
  );
};

export const QuestionVisual: React.FC<{ visual: QuestionVisualSpec }> = ({ visual }) => {
  switch (visual.type) {
    case 'count-items': {
      const items = Array.from({ length: visual.count });
      return (
        <div className="rounded-2xl bg-[#F6F4FF] border border-[#E5DFF7] p-5 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-md">
            {items.map((_, idx) => (
              <div
                key={idx}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-[#EAE5F7] flex items-center justify-center shadow-xs"
              >
                <IllustratedItemSvg item={visual.item} className="w-9 h-9 sm:w-11 sm:h-11" />
              </div>
            ))}
          </div>
          {visual.caption && <p className="text-xs font-medium text-slate-600">{visual.caption}</p>}
        </div>
      );
    }

    case 'compare-groups': {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch">
          <div className="rounded-2xl bg-[#EDF7FF] border border-sky-200 p-4 flex flex-col items-center justify-center gap-2">
            <span className="text-xs font-semibold text-sky-900">{visual.left.title}</span>
            {visual.left.item && visual.left.count ? (
              <div className="flex flex-wrap justify-center gap-1.5">
                {Array.from({ length: visual.left.count }).map((_, i) => (
                  <IllustratedItemSvg key={i} item={visual.left.item!} className="w-8 h-8" />
                ))}
              </div>
            ) : (
              <span className="font-display text-3xl font-bold text-sky-950 tabular-nums">
                {visual.left.numberLabel}
              </span>
            )}
          </div>

          <div className="flex items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border-2 border-dashed border-amber-300 flex items-center justify-center font-display text-2xl font-bold text-amber-800">
              ?
            </div>
          </div>

          <div className="rounded-2xl bg-[#F3EEFF] border border-violet-200 p-4 flex flex-col items-center justify-center gap-2">
            <span className="text-xs font-semibold text-violet-900">{visual.right.title}</span>
            {visual.right.item && visual.right.count ? (
              <div className="flex flex-wrap justify-center gap-1.5">
                {Array.from({ length: visual.right.count }).map((_, i) => (
                  <IllustratedItemSvg key={i} item={visual.right.item!} className="w-8 h-8" />
                ))}
              </div>
            ) : (
              <span className="font-display text-3xl font-bold text-violet-950 tabular-nums">
                {visual.right.numberLabel}
              </span>
            )}
          </div>
        </div>
      );
    }

    case 'math-operation': {
      return (
        <div className="rounded-2xl bg-[#EDF7FF] border border-sky-200 p-5 flex flex-col items-center gap-4">
          {visual.item && visual.leftCount !== undefined && visual.rightCount !== undefined && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex flex-wrap gap-1.5 bg-white px-3 py-2 rounded-xl border border-sky-100">
                {Array.from({ length: visual.leftCount }).map((_, i) => (
                  <IllustratedItemSvg key={i} item={visual.item!} className="w-8 h-8" />
                ))}
              </div>
              <span className="font-display text-2xl font-bold text-sky-900">{visual.operator}</span>
              <div className="flex flex-wrap gap-1.5 bg-white px-3 py-2 rounded-xl border border-sky-100">
                {Array.from({ length: visual.rightCount }).map((_, i) => (
                  <IllustratedItemSvg key={i} item={visual.item!} className="w-8 h-8" />
                ))}
              </div>
            </div>
          )}
          <div className="px-6 py-3 rounded-xl bg-white border border-sky-200 font-display text-2xl sm:text-3xl font-bold text-[#1E1B3A] tabular-nums">
            {visual.expressionText}
          </div>
        </div>
      );
    }

    case 'number-pick': {
      return (
        <div className="rounded-2xl bg-[#FFFBEB] border border-amber-200 p-5 flex flex-col items-center gap-3">
          {visual.item && visual.visualCount && (
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: visual.visualCount }).map((_, i) => (
                <div key={i} className="w-11 h-11 rounded-xl bg-white border border-amber-200 flex items-center justify-center">
                  <IllustratedItemSvg item={visual.item!} className="w-8 h-8" />
                </div>
              ))}
            </div>
          )}
          {visual.fraction && (
            <div className="w-20 h-20 rounded-full border-4 border-amber-400 bg-white overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-amber-300/70 border-r-2 border-amber-500" />
              <span className="relative z-10 font-display font-bold text-amber-950 text-lg">50%</span>
            </div>
          )}
          <span className="text-sm font-semibold text-amber-900">{visual.promptBadge}</span>
        </div>
      );
    }

    case 'picture-card': {
      return (
        <div className="rounded-2xl bg-[#F3EEFF] border border-violet-200 p-5 flex flex-col items-center justify-center gap-3">
          <div className="w-24 h-24 rounded-2xl bg-white border border-violet-200 flex items-center justify-center shadow-xs">
            <IllustratedItemSvg item={visual.item} className="w-16 h-16" />
          </div>
          {visual.highlightLetter && (
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center font-display text-xl font-bold text-amber-900">
                {visual.highlightLetter}
              </span>
              <span className="text-sm font-medium text-slate-600">İlk hərf / səs</span>
            </div>
          )}
          {visual.subtitle && (
            <p className="text-base font-display font-bold text-violet-950">{visual.subtitle}</p>
          )}
        </div>
      );
    }

    case 'syllables': {
      return (
        <div className="rounded-2xl bg-[#ECFDF5] border border-emerald-200 p-5 flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-white border border-emerald-200 flex items-center justify-center">
            <IllustratedItemSvg item={visual.item} className="w-14 h-14" />
          </div>
          {visual.mode === 'join' ? (
            <div className="flex flex-wrap items-center justify-center gap-2">
              {visual.parts.map((part, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-4 py-2 rounded-xl bg-white border border-emerald-300 font-display text-lg font-bold text-emerald-950">
                    {part}
                  </span>
                  {idx < visual.parts.length - 1 && (
                    <span className="font-display text-xl font-bold text-emerald-700">+</span>
                  )}
                </React.Fragment>
              ))}
              <span className="font-display text-xl font-bold text-emerald-700">=</span>
              <span className="px-4 py-2 rounded-xl bg-amber-100 border-2 border-dashed border-amber-400 font-display text-lg font-bold text-amber-900">
                ?
              </span>
            </div>
          ) : (
            <p className="text-sm font-medium text-emerald-900">
              Sözü düzgün hecalara bölünmüş variantını seç
            </p>
          )}
        </div>
      );
    }

    case 'sentence-scene': {
      return (
        <div className="rounded-2xl bg-[#F3EEFF] border border-violet-200 p-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-white border border-violet-200 flex items-center justify-center">
              <IllustratedItemSvg item={visual.item} className="w-14 h-14" />
            </div>
            {visual.secondaryItem && (
              <div className="w-16 h-16 rounded-2xl bg-white border border-violet-200 flex items-center justify-center">
                <IllustratedItemSvg item={visual.secondaryItem} className="w-11 h-11" />
              </div>
            )}
          </div>
          <p className="text-base sm:text-lg font-medium text-[#1E1B3A] leading-relaxed text-center sm:text-left">
            {visual.sentenceParts[0]}{' '}
            <span className="inline-block min-w-[72px] px-3 py-0.5 mx-1 rounded-lg bg-amber-100 border-b-2 border-amber-500 font-display font-bold text-amber-900 text-center">
              ____
            </span>{' '}
            {visual.sentenceParts[1]}
          </p>
        </div>
      );
    }

    case 'odd-one-out': {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {visual.items.map((entry) => (
            <div
              key={entry.id}
              className="rounded-2xl bg-[#FFFBEB] border border-amber-200 p-4 flex flex-col items-center justify-center gap-2"
            >
              <div className="w-16 h-16 rounded-xl bg-white border border-amber-100 flex items-center justify-center">
                {entry.item ? (
                  <IllustratedItemSvg item={entry.item} className="w-12 h-12" />
                ) : entry.shape ? (
                  <ShapeSvg shape={entry.shape} color={entry.color} className="w-11 h-11" />
                ) : null}
              </div>
              <span className="text-xs font-semibold text-slate-700 text-center">{entry.label}</span>
            </div>
          ))}
        </div>
      );
    }

    case 'sequence': {
      return (
        <div className="rounded-2xl bg-[#FFFBEB] border border-amber-200 p-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {visual.tokens.map((token, idx) => (
            <div
              key={idx}
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border flex items-center justify-center ${
                token.kind === 'text' && token.color
                  ? `${COLOR_MAP[token.color].bg} ${COLOR_MAP[token.color].text}`
                  : 'bg-white border-amber-200'
              }`}
            >
              {token.kind === 'item' && token.item && <IllustratedItemSvg item={token.item} className="w-11 h-11" />}
              {token.kind === 'shape' && token.shape && (
                <ShapeSvg shape={token.shape} color={token.color} className="w-10 h-10" />
              )}
              {token.kind === 'text' && (
                <span className="font-display text-2xl font-bold tabular-nums">{token.label}</span>
              )}
            </div>
          ))}
          <span className="font-display text-xl font-bold text-amber-700">→</span>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-violet-100 border-2 border-dashed border-violet-400 flex items-center justify-center font-display text-2xl font-bold text-violet-800">
            ?
          </div>
        </div>
      );
    }

    case 'match-pair': {
      return (
        <div className="rounded-2xl bg-[#EDF7FF] border border-sky-200 p-5 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-4">
            <div className="px-4 py-3 rounded-2xl bg-white border border-sky-200 flex flex-col items-center gap-1.5">
              <IllustratedItemSvg item={visual.sourceItem} className="w-14 h-14" />
              <span className="text-sm font-bold text-sky-950">{visual.sourceLabel}</span>
            </div>
            <span className="font-display text-2xl font-bold text-sky-700">↔</span>
            <div className="w-24 h-24 rounded-2xl bg-amber-50 border-2 border-dashed border-amber-400 flex flex-col items-center justify-center gap-1">
              <span className="font-display text-3xl font-bold text-amber-800">?</span>
              <span className="text-xs font-medium text-amber-900">Uyğun cüt</span>
            </div>
          </div>
          <p className="text-sm font-medium text-sky-900 text-center">{visual.relationHint}</p>
        </div>
      );
    }
  }
};
