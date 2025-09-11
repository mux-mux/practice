import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import './main.css';
import App from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Theme>
            <App />
        </Theme>
    </StrictMode>,
);
