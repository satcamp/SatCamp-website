/* eslint-disable
  @typescript-eslint/no-unsafe-assignment,
  @typescript-eslint/no-unsafe-member-access,
  @typescript-eslint/no-unsafe-call
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import WebFont from 'webfontloader'
import App from './App.tsx'
import SatCamp2025 from './pages/SatCamp2025.tsx'
import SatCamp2024 from './pages/SatCamp2024.tsx'
import SatCamp2023 from './pages/SatCamp2023.tsx'
import './index.css'

WebFont.load({
  google: {
    families: ['Sulphur Point:300;400;700', 'sans-serif'],
  },
});

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/2025", element: <SatCamp2025 /> },
  { path: "/2024", element: <SatCamp2024 /> },
  { path: "/2023", element: <SatCamp2023 /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
