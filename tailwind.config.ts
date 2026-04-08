import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--bg-base)',
        surface: 'var(--bg-surface)',
        elevated: 'var(--bg-elevated)',
        border: 'var(--border)',
        'text-muted': 'var(--text-muted)',
        'text-primary': 'var(--text-primary)',
        teal: 'var(--teal)',
        'teal-light': 'var(--teal-light)',
        'teal-wash': 'var(--teal-wash)',
        purple: 'var(--purple)',
        'purple-light': 'var(--purple-light)',
        'purple-wash': 'var(--purple-wash)',
        amber: 'var(--amber)',
        'amber-wash': 'var(--amber-wash)',
        red: 'var(--red)',
        'red-wash': 'var(--red-wash)',
      },
      fontFamily: {
        body: ['"IBM Plex Sans"', 'sans-serif'],
        display: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1080px',
      },
      borderRadius: {
        pill: '4px',
        inline: '6px',
      },
    },
  },
  plugins: [],
}

export default config
