import React from 'react'
import ReactDOM from 'react-dom/client'
import MyGlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Home from './pages/home'
import Header1 from './components/header'
import "./lib/i18n"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>

      <MyGlobalStyles />
      <Header1 />
      <Home />

    </ThemeProvider>

    
  </React.StrictMode>,
)
