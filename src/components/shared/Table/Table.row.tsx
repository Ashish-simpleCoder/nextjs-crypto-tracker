import { memo, ReactNode } from "react"
import styled from "styled-components"

const TableRow = ({children}: {children: ReactNode})=>{

    return(
        <StyledRow>
            {children}
        </StyledRow>
    )
}
export default memo(TableRow)

const StyledRow = styled.tr`
    td{
        font-weight: 500
    }
`