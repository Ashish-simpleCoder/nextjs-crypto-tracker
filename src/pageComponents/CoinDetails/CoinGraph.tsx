import { memo, useCallback, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { HistoricalChart } from "../../api/api";
import Graph from "../../components/shared/Graph";
import H2 from "../../components/Typography/H2";
import { useCoinContext } from "../../context/coinContext/coinContext";
import asyncWrapper from "../../utility/asyncWrapper";
import HistoryRangeChanger from "./HistoryRangeChanger";


const CoinGraph = ({id, visible}: {id?: string | string[], visible?: boolean})=>{
    const {history, currency, setCoin} = useCoinContext()

    const fetchCoinHistory = useCallback(asyncWrapper(async (id: string, days: number, currency: string) => {
        let res = await fetch(HistoricalChart(id, days, currency))
        return await res.json()
    }), [])

    useEffect(()=>{
        if(!id || !currency || !history.days) return
        fetchCoinHistory([id, history.days, currency]).then(res => {
            if (res.error) {
               console.log(res.error)
            } else {
                const {prices} = res
                setCoin((v: any)=>({...v,history:{...v.history,data:prices}}))
            }
         })

    },[currency,id,setCoin,visible,history.days])

    return(
        <StyledGraphContainer id='coin_graph'>
            <H2 center mBottom="2rem">{`Coin history upto ${history.days} days`}</H2>
            <Graph data={history.data} days={history.days} currency={currency}/>
            <HistoryRangeChanger />
        </StyledGraphContainer>
    )
}
export default CoinGraph

const StyledGraphContainer = styled.section`
    position:relative;
    width:100%;
    padding:3rem clamp(1rem,3rem,3vw);


    @media(min-width:700px){
        width:calc(100% - 30rem);
        left:30rem;
        top:unset;
    }
`