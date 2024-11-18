import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import themes from './styles/themes'
/*import { New } from './pages/New'
import { Details } from './pages/Details'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'*/
import { Menu } from './pages/Menu'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={themes}>    
      <GlobalStyles />
      <Menu />
    </ThemeProvider>
  </StrictMode>
)
