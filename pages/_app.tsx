import type { AppProps } from 'next/app'
import Footer from '../src/components/partials/Footer/Footer'
import Header from '../src/components/partials/Header/Header'
import { CryptoContextProvider } from '../src/context/coinContext/coinContext'
import { ThemeContextProvider } from '../src/context/theme/themeContext'
import '../src/styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeContextProvider>
            <CryptoContextProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </CryptoContextProvider>
        </ThemeContextProvider>
    )
}

export default MyApp
