import type { NextPage } from 'next'
import Head from 'next/head'
import CoinTableContainer from '../src/pageComponents/home/CoinTable/CoinTableContainer'
import HeroSection from '../src/pageComponents/home/HeroSection/HeroSection'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Crypto Tracker</title>
      </Head>
      <HeroSection />
      <CoinTableContainer heading="Crypto-Currency's Prices by Market Cap" visible/>
    </main>
  )
}

export default Home
