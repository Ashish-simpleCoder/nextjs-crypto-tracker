import { memo, ReactNode, CSSProperties } from "react"
import styled from "styled-components"


const Table = ({id, styles, children}: {id?: string, styles?: CSSProperties, children: ReactNode})=>{
    return(
        <StyledTable id={id} style={styles}>
            {children}
        </StyledTable>
    )
}
export default memo(Table)

const StyledTable = styled.table`
    text-align:center;
    width:100%;
    background:var(--table-bg);
    color:var(--prm-clr);
    max-width:90rem;
    margin:auto;
    tbody,tr,td{
        border:1px solid var(--border);
        border-collapse:collapse;
    }
    td{
        padding:1rem;
        img{
            width:3rem;
            height:3rem;
            margin-inline-end:2rem;
        }
        font-size:clamp(1.4rem,1.6rem,1.6vw);
    }
`