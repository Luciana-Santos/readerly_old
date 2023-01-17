import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import { GlobalStyles } from './GlobalStyled';
import { ThemeContext } from './store/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};
export default App;
