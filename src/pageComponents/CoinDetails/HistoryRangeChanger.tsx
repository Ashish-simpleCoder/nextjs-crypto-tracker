import { useCallback } from "react"
import styled from "styled-components"
import Button from "../../components/shared/Button"
import { useCoinContext } from "../../context/coinContext/coinContext"


const HistoryRangeChanger = () => {
    const {setCoin} = useCoinContext()
    const handleHistoryChange = useCallback((value: number) => {
        console.log(value)
        setCoin((v: any) => ({...v, history: {...v.history, days: value}}))
    }, [])

    return(
        <StyledHistoryRangeChanger>
            <Button handleClick={() => handleHistoryChange(15)} mode='r'>15 dyas</Button>
            <Button handleClick={() => handleHistoryChange(30)} mode='r'>30 dyas</Button>
            <Button handleClick={() => handleHistoryChange(180)} mode='r'>6 months</Button>
            <Button handleClick={() => handleHistoryChange(365)} mode='r'>1 year</Button>
        </StyledHistoryRangeChanger>
    )
}
export default HistoryRangeChanger

const StyledHistoryRangeChanger = styled.div`
    display: flex;
    gap: 1rem;
    margin-block-start: 2rem;
    justify-content: center;
`