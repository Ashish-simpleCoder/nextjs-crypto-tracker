import { memo, useCallback, useEffect, useMemo } from "react"
import AliceCarousel from "react-alice-carousel"
import { TrendingCoins } from "../../../api/api"
import 'react-alice-carousel/lib/alice-carousel.css'
import CarousalItem from "./CarousalItem"
import { useCoinContext } from "../../../context/coinContext/coinContext"
import asyncWrapper from "../../../utility/asyncWrapper"


const Carousal = memo(()=>{
   const {currency, symbol, trending_coins, setTrendingCoins} = useCoinContext()

   const fetchTrendingCoins = useCallback(asyncWrapper(async(selected_currency: string) => {
      let res = await fetch(TrendingCoins(selected_currency))
      return await res.json()
   }), [])

   const responsive = useMemo(() => ({
      0:{items:2},
      700:{items:4},
      1200:{items:6}
   }), [])

   const itemsObj = useCallback((trending_coins: any,select_symbol: any) => {
      return trending_coins?.map((coin: any)=>{
         return <CarousalItem coin={coin} select_symbol={select_symbol}/>
      })
   }, [])


   useEffect(()=>{
      fetchTrendingCoins(currency).then(res => {
         if (res.error) {
            console.log(res.error)
         } else {
            setTrendingCoins(res)
         }
      })
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
            autoPlay = {true}
         />
      </div>
   )
})
export default Carousal
