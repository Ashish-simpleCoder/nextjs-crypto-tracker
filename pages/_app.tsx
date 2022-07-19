import type { AppProps } from 'next/app'
import Header from '../src/components/partials/Header/Header'
import { CryptoContextProvider } from '../src/context/coinContext/coinContext'
import { ThemeContextProvider } from '../src/context/theme/themeContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeContextProvider>
            <CryptoContextProvider>
                <Header />
                <Component {...pageProps} />
            </CryptoContextProvider>
        </ThemeContextProvider>
    )
}

export default MyApp
