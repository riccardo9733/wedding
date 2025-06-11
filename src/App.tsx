import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/Home/Home';
import PartecipazionePage from './pages/Partecipazione/Partecipazione';
import ProgrammaPage from './pages/Programma/Programma';
import appTheme from './theme'; // Corrected import

const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1, py: 0 }}> {/* Adjusted padding if Footer has its own */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/programma" element={<ProgrammaPage />} />
              <Route path="/partecipazione" element={<PartecipazionePage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
