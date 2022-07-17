import { memo, useCallback, useEffect } from "react";
import { CoinList } from "../../../api/api";
import H2 from "../../../components/Typography/H2";
import { useCoinContext } from "../../../context/coinContext/coinContext";
import CoinTable from "./CoinTable";
// import Pagination from "./Pagination";


const CoinTableContainer = memo(({heading, visible}: {heading: string, visible: boolean})=>{
    const {currency, setTableCoins} = useCoinContext()

    const fetchCoinsDetails = useCallback(async(currency: string) =>{
        return (await fetch(CoinList(currency))).json()
    }, [])

    useEffect(()=>{
        visible && fetchCoinsDetails(currency).then(res=>{
            console.log(res, currency)
            setTableCoins(res)
        })
    },[setTableCoins,currency,visible])

    return(
        <section style={{padding:'3rem clamp(1rem,3rem,3vw)',textAlign:'center',height:'100%'}}>
            <H2 center mTop="1rem" mBottom='2rem'>{heading}</H2>
            <section style={{width:'100%',overflowX:'auto'}}>
                <CoinTable/>
            </section>
            {/* <Pagination/> */}
        </section>
    )
})
export default CoinTableContainer