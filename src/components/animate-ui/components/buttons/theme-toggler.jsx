'use client';
import * as React from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';

import { ThemeToggler as ThemeTogglerPrimitive } from '@/components/animate-ui/primitives/effects/theme-toggler';
import { buttonVariants } from '@/components/animate-ui/components/buttons/icon';
import { cn } from '@/lib/utils';

// Helper to determine the Icon
const getIcon = (effective, resolved, modes) => {
  const theme = modes.includes('system') ? effective : resolved;
  return theme === 'system' ? (
    <Monitor className="h-8 w-8" />
  ) : theme === 'dark' ? (
    <Moon className="h-4 w-4" />
  ) : (
    <Sun className="h-4 w-4" />
  );
};

// New Helper to determine the Text Label
const getLabel = (effective, resolved, modes) => {
  const theme = modes.includes('system') ? effective : resolved;
  if (theme === 'system') return 'System Mode';
  if (theme === 'dark') return 'Dark Mode';
  return 'Light Mode';
};

const getNextTheme = (effective, modes) => {
  const i = modes.indexOf(effective);
  if (i === -1) return modes[0];
  return modes[(i + 1) % modes.length];
};

function ThemeTogglerButton({
  variant = 'default',
  size = 'default',
  modes = ['light', 'dark', 'system'],
  direction = 'ltr',
  onImmediateChange,
  onClick,
  className,
  ...props
}) {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <ThemeTogglerPrimitive
      theme={theme}
      resolvedTheme={resolvedTheme}
      setTheme={setTheme}
      direction={direction}
      onImmediateChange={onImmediateChange}
    >
      {({ effective, resolved, toggleTheme }) => (
        <button
          data-slot="theme-toggler-button"
          // Added 'w-auto' to allow width to grow, and 'px-4' for better spacing
          className={cn(
            buttonVariants({ variant, size, className }),
            'w-auto flex items-center justify-center gap-2'
          )}
          onClick={(e) => {
            onClick?.(e);
            toggleTheme(getNextTheme(effective, modes));
          }}
          {...props}
        >
          {/* Render the Icon */}
          {getIcon(effective, resolved, modes)}
          
          {/* Render the Text */}
          <span>
            {getLabel(effective, resolved, modes)}
          </span>
        </button>
      )}
    </ThemeTogglerPrimitive>
  );
}

export { ThemeTogglerButton };