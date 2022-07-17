import { memo } from "react"
import styled from "styled-components"

const Head = memo(({headings}: {headings: string[]})=>{
    return(
        <StyledHead>
            <tr>
                { headings.map(h=><TableData key={h} name={h}></TableData>) }
            </tr>
        </StyledHead>
    )
})
export default Head

const StyledHead = styled.thead`
    color:var(--secondary-clr);
    font-weight: 600;
    background-color: var(--table-head-bg);

    td{
        font-size:clamp(1.6rem,1.6rem,1.8vw) !important;
    }
`

export const TableData = memo(
    ({ name, image, symbol, profit }: { name: string; image?: string; symbol?: string; profit?: string }) => {
        return (
            <td
                // style={image && { display: 'flex', alignItems: 'center' }}
                className={profit && (profit === 'true' ? 'profit' : 'lose')}
            >
                {image && <img src={image} alt='coin'></img>}
                {symbol && symbol + ' '}
                {name}
            </td>
        )
    }
)