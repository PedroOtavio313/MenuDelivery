import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import themes from './styles/themes'
/*import { Details } from './pages/Details'
import { Login } from './pages/Login'
import { Menu } from './pages/Menu'
import { SignUp } from './pages/SignUp'*/
import { CartProvider } from './contexts/CartContext'
import { New } from './pages/New'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={themes}>    
      <GlobalStyles />
      <CartProvider>
        <New />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
)
