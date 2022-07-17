import { memo, useCallback, useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel"
import { TrendingCoins } from "../../../api/api"
import 'react-alice-carousel/lib/alice-carousel.css'
import CarousalItem from "./CarousalItem"
import { useCoinContext } from "../../../context/coinContext/coinContext"


const Carousal = memo(()=>{
   const {currency, symbol, trending_coins, setTrendingCoins} = useCoinContext()

   const fetchTrendingCoins = useCallback(async(selected_currency: string) => {
      let res = await fetch(TrendingCoins(selected_currency))
      return await res.json()
   }, [])

   useEffect(()=>{
      fetchTrendingCoins(currency).then(coins=>setTrendingCoins(coins))
   }, [currency, setTrendingCoins])


   return(
      <div style={{display:'flex',alignItems:'center',height:'60%',width:'100%'}}>
         <AliceCarousel
            items={itemsObj(trending_coins, symbol)}
            infinite
            autoPlayInterval={2000}
            animationDuration={2000}
            responsive={responsive}
            disableDotsControls
            disableButtonsControls
            // autoPlay = {true}
         />
      </div>
   )
})
export default Carousal

const responsive ={
   0:{items:2},
   700:{items:4},
   1200:{items:6}
}


const itemsObj = (trending_coins: any,select_symbol: any) => trending_coins?.map((coin: any)=><CarousalItem coin={coin} select_symbol={select_symbol}/>)


