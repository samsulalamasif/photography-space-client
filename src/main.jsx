import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Providers/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router}></RouterProvider>
          </div>
        </QueryClientProvider>
        <ToastContainer />
      </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>,
)
