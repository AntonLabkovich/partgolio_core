import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ThemeController from './ThemeContreller/ThemeController.tsx'
import BackgroundTheme from './components/backgroundTheme/BackgroundTheme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeController />
    <BackgroundTheme/>
    <App />
  </StrictMode>,
)
