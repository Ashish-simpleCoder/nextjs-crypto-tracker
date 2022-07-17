import type { NextPage } from 'next'
import CoinTableContainer from '../src/pageComponents/home/CoinTable/CoinTableContainer'
import HeroSection from '../src/pageComponents/home/HeroSection/HeroSection'

const Home: NextPage = () => {
  return (
    <main>
      <HeroSection />
      <CoinTableContainer heading="Crypto-Currency's Prices by Market Cap" visible/>
    </main>
  )
}

export default Home
