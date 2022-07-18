import Image from "next/image";
import { memo } from "react";
import styled from "styled-components";
import H2 from "../../components/Typography/H2";
import Para from "../../components/Typography/Para";


const CoinSideBar = memo(({image,name, description}: {image:string, name: string, description: string})=>{
    return(
        <StyledSideBar>
            {image && <Image src={image} width='150px'  height='150px'/>}
            <H2 mTop='2rem'>{name}</H2>
            {description && <Para text={description} mTop='2rem'/>}
        </StyledSideBar>
    )
})
export default CoinSideBar

const StyledSideBar = styled.section`
    padding:3rem clamp(1rem,3rem,3vw);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:50rem;

    @media(min-width:700px){
        position:fixed;
        width:30rem;
        height:100%;
        border-right:1px solid;
        justify-content:unset;
    }
`