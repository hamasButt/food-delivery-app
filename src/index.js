import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from "./store/state-provider";
import reducer, { initialState } from "./store/reducer";
import { ThemeProvider } from '@mui/styles';
import { theme } from './theme';
ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

