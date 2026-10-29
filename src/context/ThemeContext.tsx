import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for stored theme
    if (typeof window !== 'undefined') {
      let storedTheme: string | null = null;
      try { storedTheme = localStorage.getItem('theme'); } catch { /* Storage can be unavailable in private contexts. */ }
      // Check for system preference
      if (storedTheme !== 'dark' && storedTheme !== 'light') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
      }
      return storedTheme;
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#15110f' : '#f7f2e8');
    try { localStorage.setItem('theme', theme); } catch { /* The theme still works for this visit. */ }
  }, [theme]);

  const toggleTheme = () => {
    const changeTheme = () => setTheme(current => current === 'dark' ? 'light' : 'dark');
    const transitionDocument = document as Document & { startViewTransition?: (callback: () => void) => void };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !transitionDocument.startViewTransition) changeTheme();
    else transitionDocument.startViewTransition(changeTheme);
  };

  const value = {
    theme,
    toggleTheme,
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// This context hook intentionally shares its module with the provider.
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
