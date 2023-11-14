import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { baseUrl } from './config/config.js';

const theme = createTheme({
    palette: {
        main: {
            main: '#E3D026',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',
        },
    },
});

const router = createBrowserRouter([
    {
        path: baseUrl,
        element: <App />,
        children: [
            {
                path: baseUrl,
                lazy: () => import('./layout/Home.jsx'),
            },
            {
                path: baseUrl + 'moves',
                lazy: () => import('./layout/Moves.jsx'),
            },
            {
                path: baseUrl + 'moves/:id',
                lazy: () => import('./layout/Move.jsx'),
            },
            {
                path: baseUrl + 'tv',
                lazy: () => import('./layout/Tv.jsx'),
            },
            {
                path: baseUrl + 'search',
                lazy: () => import('./layout/Search.jsx'),
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>,
);
