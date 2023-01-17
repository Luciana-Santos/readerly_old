import { createContext, useState } from 'react';
import DarkTheme from '../themes/dark';
import LightTheme from '../themes/light';

interface ChildrenProps {
  children: React.ReactNode;
}

export interface ThemeContextProps {
  toggleTheme: () => void;
  theme: ThemeProps;
}

export interface ThemeProps {
  name: string;
  colors: {
    accent: string;
    white: string;
    gradientPrimary: string;
    textBackground: string;
    textColor: string;
    highlights: string;
    backgroundColor: string;
  };
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

const ThemeProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState(() => {
    const themeSaved = localStorage.getItem('@readerly:theme');

    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return DarkTheme;
    }
  });

  const toggleTheme = () => {
    if (theme.name === 'dark') {
      setTheme(LightTheme);
      localStorage.setItem('@readerly:theme', JSON.stringify(LightTheme));
    } else {
      setTheme(DarkTheme);
      localStorage.setItem('@readerly:theme', JSON.stringify(DarkTheme));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
