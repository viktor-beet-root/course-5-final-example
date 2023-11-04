import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                lazy: () => import('./layout/Home.jsx'),
            },
            {
                path: '/moves',
                lazy: () => import('./layout/Moves.jsx'),
            },
            {
                path: '/moves/:id',
                lazy: () => import('./layout/Move.jsx'),
            },
            {
                path: '/tv',
                lazy: () => import('./layout/Tv.jsx'),
            },
            {
                path: '/search',
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
        <RouterProvider router={router} />
    </React.StrictMode>,
);
