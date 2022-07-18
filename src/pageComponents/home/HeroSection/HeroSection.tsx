import {memo} from 'react'
import styled from 'styled-components'
import H2 from '../../../components/Typography/H2'
import Carousal from './Carousal'

const HeroSection = memo(()=>{
   return(
      <StyledHero>
         <img className='hero_img' src="./imgs/hero_bg.avif" alt="hero" />
         <HeroTitle>
            <H2>Crypto Tracker</H2>
            <p>Get all information about crypto currencies</p>
         </HeroTitle>
         <Carousal/>
      </StyledHero>
   )
})
export default HeroSection

const StyledHero = styled.section`
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:center;
   height:80%;
   width:100%;
   overflow:hidden;
   position:relative;
   background:none;

   >img{
      position:absolute;
      height:100%;
      width:100%;
      z-index:-1;
      filter:brightness(0.25);
   }
   @media (min-width:700px){
      max-height:60rem;
      height:100%;
      >img{
         height:100%;
         max-height:60rem
      }
   }
`

const HeroTitle = styled.div`
   height:40%;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   h2{
      font-size:clamp(5rem,6rem,6vw);
      /* font-weight:500; */
      color:var(--hero-title-clr);
      letter-spacing: 0.2rem;
   }
   p{
      font-size:clamp(1.6rem,1.8rem,1.8vw);
      color:var(--hero-caption-clr);
      margin-top:1rem;
   }
`
