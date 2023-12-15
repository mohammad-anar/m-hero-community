import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './routers/Routers.jsx'
import { createTheme } from '@mui/material'
import { purple } from '@mui/material/colors'
import { ThemeProvider } from '@emotion/react'

const theme = createTheme({
  palette:{
    primary:{
      main: purple[500],
      light: purple[400],
      dark: purple[600]
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <RouterProvider router={Routers}/>
    </ThemeProvider>
  </React.StrictMode>,
)
