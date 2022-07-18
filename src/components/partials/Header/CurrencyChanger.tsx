import styled from "styled-components"
import { useCoinContext } from "../../../context/coinContext/coinContext"

const CurrencyChanger = () => {
    const {currency, setCoin} = useCoinContext()

   return(
      <SelectStyled
         title='change currency'
         value={currency}
         onChange={(e)=>setCoin((v: any)=>({...v,currency:e.target.value}))}
      >
         <Option value='INR'/>
         <Option value='USD'/>
      </SelectStyled>
   )
}
export default CurrencyChanger

const Option = ({value}:{ value: string})=> <option value={value}>{value}</option>


const SelectStyled = styled.select`
   color:var(--secondary-clr);
   width:10rem;
   height:3rem;
   font-weight:600;
   border:1px solid;
   border-radius:0.3rem;
   cursor:pointer;
   background:inherit;
   margin-inline-end:2rem;
   margin-inline-start: auto;
`