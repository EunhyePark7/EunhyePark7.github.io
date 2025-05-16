import useGlobalStore from '@/stores';
import { useEffect } from 'react';

const ThemeProvider = ({ children }) => {
  const theme = useGlobalStore(state => state.theme);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme.toLowerCase());
    }
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
