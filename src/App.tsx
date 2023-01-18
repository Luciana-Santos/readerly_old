import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import { GlobalStyles } from './GlobalStyled';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Statistics from './pages/Statistics/Statistics';
import { ThemeContext } from './store/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
