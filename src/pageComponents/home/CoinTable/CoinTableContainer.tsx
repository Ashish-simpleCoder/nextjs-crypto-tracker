import { memo, useCallback, useEffect, useRef } from "react";
import { CoinList } from "../../../api/api";
import Pagination from "../../../components/shared/Pagination/Pagination";
import H2 from "../../../components/Typography/H2";
import { useCoinContext } from "../../../context/coinContext/coinContext";
import useInterSectionObserver from "../../../hooks/useInterSectionObserver";
import usePagination from "../../../hooks/usePagination";
import CoinTable from "./CoinTable";


const CoinTableContainer = memo(({heading, visible}: {heading: string, visible: boolean})=>{
    const {currency, setTableCoins, TABLE_COINS} = useCoinContext()
    const {start, end, active_page_index, jumpToPage, nextPage, prevPage, nums_arr } = usePagination({total_pages: Math.ceil(TABLE_COINS.length / 10)})
    const TableRef = useRef(null)
    const isTableInterSecting = useInterSectionObserver({element: TableRef.current})


    const fetchCoinsDetails = useCallback(async(currency: string) =>{
        return (await fetch(CoinList(currency))).json()
    }, [])

    useEffect(()=>{
        fetchCoinsDetails(currency).then(res=>{
            setTableCoins(res)
        })
    },[setTableCoins,currency,visible])

    return(
        <section style={{padding:'3rem clamp(1rem,3rem,3vw)',textAlign:'center',height:'100%'}} >
            <H2 center mTop="1rem" mBottom='2rem'>{heading}</H2>

            <section style={{width:'100%',overflowX:'auto'}} ref={TableRef} className={`${isTableInterSecting ? 'animate': 'hide'}`}>
                <CoinTable start={start} end={end}/>
            </section>

            <Pagination active_page_index={active_page_index} jumpToPage={jumpToPage} nextPage={nextPage} prevPage={prevPage} nums_arr={nums_arr}/>
        </section>
    )
})
export default CoinTableContainer