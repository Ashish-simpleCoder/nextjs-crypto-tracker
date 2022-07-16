import type { AppProps } from 'next/app'
import Footer from '../src/components/partials/Footer/Footer'
import Header from '../src/components/partials/Header/Header'
import { ThemeContextProvider } from '../src/context/theme/themeContext'
import '../src/styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeContextProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ThemeContextProvider>
    )
}

export default MyApp
