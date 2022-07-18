import { useCallback } from "react"
import styled from "styled-components"
import Button from "../../components/shared/Button"
import { useCoinContext } from "../../context/coinContext/coinContext"


const HistoryRangeChanger = () => {
    const {setCoin, history} = useCoinContext()
    const handleHistoryChange = useCallback((value: number) => {
        console.log(value)
        setCoin((v: any) => ({...v, history: {...v.history, days: value}}))
    }, [])

    const isActive = useCallback((days: number) => {
        return history.days === days ? 'active' : ''
    }, [history.days])

    return(
        <StyledHistoryRangeChanger>
            <Button handleClick={() => handleHistoryChange(15)} mode='r' cn={isActive(15)}>15 dyas</Button>
            <Button handleClick={() => handleHistoryChange(30)} mode='r' cn={isActive(30)}>30 dyas</Button>
            <Button handleClick={() => handleHistoryChange(180)} mode='r' cn={isActive(180)}>6 months</Button>
            <Button handleClick={() => handleHistoryChange(365)} mode='r' cn={isActive(365)}>1 year</Button>
        </StyledHistoryRangeChanger>
    )
}
export default HistoryRangeChanger

const StyledHistoryRangeChanger = styled.div`
    display: flex;
    gap: 1rem;
    margin-block-start: 2rem;
    justify-content: center;

    .active{
        background-color: var(--active-bg);
    }
`