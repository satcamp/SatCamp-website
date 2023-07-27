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
import './index.css'

WebFont.load({
  google: {
    families: ['Sulphur Point:300;400;700', 'sans-serif'],
  },
});

const router = createBrowserRouter([
  { path: "/", element: <App />, },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
