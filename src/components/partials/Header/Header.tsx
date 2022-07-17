import styled from "styled-components"
import CurrencyChanger from "./CurrencyChanger"
import LogoContainer from "./LogoContainer"
import ToggleTheme from "./ToggleTheme"

const Header = () => {
   return(
      <StyledHeader>
         <LogoContainer />
         <CurrencyChanger />
         <ToggleTheme />
      </StyledHeader>
   )
}
export default Header


const StyledHeader = styled.header`
   padding:1rem clamp(1rem,3rem,3vw);
   display:flex;
   justify-content:space-between;
   align-items:center;
   background:var(--header-bg);
   position:sticky;
   top:0;
   z-index:2;
`