import React from 'react'
import ReactDOM from 'react-dom/client'
import './output.css'
import App from './home.jsx'
import DatabaseRoute from './database_route.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/pupcc-orgdb",
    element: <App />,
  },
  {
    path: "/pupcc-orgdb/database",
    element: <DatabaseRoute />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
