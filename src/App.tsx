import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParallaxComponent from './Parallax/ParallaxParallaxComponent';
import MintApp from './MintApp/MintApp'; // Import the LaunchApp component
import { StyledEngineProvider } from '@mui/material/styles';
import MarketPlace from './MarketPlace/MarketPlace';


const App: React.FC = () => {

  return (
    <Router>
            <div>
            <StyledEngineProvider injectFirst>
                <Routes>
                    <Route path="/" element={<ParallaxComponent />} />
                    <Route path="/mint" element={<MintApp />} />
                    <Route path="/marketPlace" element={<MarketPlace />} />
                </Routes>
                </StyledEngineProvider>
            </div>
        </Router>
  );
};

export default App;