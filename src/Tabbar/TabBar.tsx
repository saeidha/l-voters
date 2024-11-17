import React from 'react';
import {WalletComponents} from './WalletComponents'
import { Button } from '@mui/material';
import './TabBar.css'
const TabBar: React.FC = () => {
    return (
      <header className="header">
        <nav className="nav">
        <ul className="nav_link">
            <Button variant='contained' color='warning'> New proposal</Button>
          </ul>
          <WalletComponents />
        </nav>
      </header>
    );
};

export default TabBar;