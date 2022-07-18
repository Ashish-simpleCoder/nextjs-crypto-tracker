import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { Suspense, useCallback, useEffect } from "react"
import { SingleCoin } from "../../src/api/api"
import { useCoinContext } from "../../src/context/coinContext/coinContext"
import asyncWrapper from "../../src/utility/asyncWrapper"
import If from "../../src/utilityComponents/If"

// @ts-ignore
const CoinGraph = dynamic(() => import("../../src/pageComponents/coinDetails/CoinGraph" /* webpackChunkName: 'CoinGraph'*/), {ssr: false})
// @ts-ignore
const CoinSideBar = dynamic(() => import("../../src/pageComponents/coinDetails/CoinSideBar" /* webpackChunkName: 'CoinSideBar'*/), {suspense: true})


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
            <If condition={coin_details.id}>
                <>
                    <Suspense fallback={<></>}>
                        <CoinSideBar image={coin_details?.image?.large} name={coin_details?.name} description={coin_details?.description?.en?.split(". ")[0]}/>
                    </Suspense>
                    <Suspense fallback={<></>}>
                        <CoinGraph id={coinId} visible/>
                    </Suspense>
                </>
            </If>
        </main>
    )
}
export default CoinDetails