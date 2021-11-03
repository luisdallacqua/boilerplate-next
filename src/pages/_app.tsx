import { ThemeProvider } from '@material-ui/styles'
import { AppProps } from 'next/dist/shared/lib/router/router'
import theme from '../styles/theme'

export default function _app({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
