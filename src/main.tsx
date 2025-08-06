import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initGA } from './utils/analytics'
import { AuthProvider } from './utils/firebaseAuth.tsx' // Use the Firebase AuthProvider
import { NotificationProvider } from '@/components/ui/NotificationContext'
import { mountStagewiseToolbar } from "./stagewise-toolbar"

// Initialize Google Analytics
initGA();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
          <NotificationProvider>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <App />
              </AuthProvider>
            </QueryClientProvider>
          </NotificationProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)

mountStagewiseToolbar();
