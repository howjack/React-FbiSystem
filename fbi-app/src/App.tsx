import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SuspectDetail from './pages/SuspectDetail';
import SuspectRegister from './pages/SuspectRegister';
import SuspectList from './pages/SuspectsList';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes"
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme])

  return (

    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navbar setTheme={setTheme} theme={theme} />
        <Routes>
          <Route path='/' element={<SuspectList />} />
          <Route path='/details/:id' element={<SuspectDetail />} />
          <Route path='/register' element={<SuspectRegister />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
