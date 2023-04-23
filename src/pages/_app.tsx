import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material';
import dark from './themes/dark'
import type { AppProps } from 'next/app'

const theme = dark;

export default function App({ Component, pageProps }: AppProps) {
  return (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Component {...pageProps} />
	</ThemeProvider>
  )
}
