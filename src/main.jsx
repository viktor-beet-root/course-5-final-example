import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

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

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                lazy: () => import('./layout/Home.jsx'),
            },
            {
                path: 'moves',
                lazy: () => import('./layout/Moves.jsx'),
            },
            {
                path: 'moves/:id',
                lazy: () => import('./layout/Move.jsx'),
            },
            {
                path: 'tv',
                lazy: () => import('./layout/Tv.jsx'),
            },
            {
                path: 'search',
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
