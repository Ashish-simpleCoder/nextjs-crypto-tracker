import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useCallback, useEffect } from "react"
import { SingleCoin } from "../../src/api/api"
import { useCoinContext } from "../../src/context/coinContext/coinContext"
import CoinSideBar from "../../src/pageComponents/coinDetails/CoinSideBar"
import asyncWrapper from "../../src/utility/asyncWrapper"

const CoinGraph = dynamic(() => import("../../src/pageComponents/coinDetails/CoinGraph"), {ssr: false})


const CoinDetails = () => {
    const router = useRouter()
    const {coinId} = router.query
    const {setCoin, details: coin_details} = useCoinContext()

    const fetchCoinDetails = useCallback(asyncWrapper(async (id: string) => {
        let res = await fetch(SingleCoin(id))
        return await res.json()
    }), [])

    useEffect(() => {
        if(!coinId) return
        fetchCoinDetails(coinId).then(res => {
            if (res.error) {
                console.log(res.error)
            } else {
                setCoin((v: any) => ({...v, details: res}))
            }
        })
    }, [coinId])


    return(
        <main>
            {
                coin_details && <CoinSideBar image={coin_details?.image?.large} name={coin_details?.name} description={coin_details?.description?.en?.split(". ")[0]}/>
            }
            { coin_details &&  <CoinGraph id={coinId} visible/> }

        </main>
    )
}
export default CoinDetails