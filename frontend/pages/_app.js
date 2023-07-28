import Footer from '@/components/Footer'
import Header from '@/components/Header/Header.jsx'
import ContextProvider from '@/context'
import '@/styles/globals.css'
import theme from '@/theme/theme'
import { ThemeProvider } from '@mui/material'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <Header>
          </Header>
          <Toaster />
          <Component {...pageProps} />
        </ContextProvider>
        <Footer />
      </ThemeProvider>
    </>
  )
}
