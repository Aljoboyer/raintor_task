"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Switch from 'react-switch';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <span>☀️</span>
      <Switch
        onChange={() => setTheme(isDark ? 'light' : 'dark')}
        checked={isDark}
        onColor="#4ade80"
        offColor="#ccc"
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <span>🌙</span>
    </div>
  );
}
