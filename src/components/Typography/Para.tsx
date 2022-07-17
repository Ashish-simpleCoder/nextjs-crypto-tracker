import { CSSProperties, memo, ReactNode } from "react";
import styled from "styled-components";


const Para = memo(({text,mTop}: {text: string, mTop?: string})=>{
    const styles:CSSProperties = {}
    mTop && (styles.marginTop = mTop)
    const textSecure = String(text)

    return(
        <StyledPara style={styles} dangerouslySetInnerHTML={{__html:textSecure}} ></StyledPara>
    )
})
export default Para

const StyledPara = styled.p`
    font-size:clamp(1.6rem,1.8rem,1.8vw);
    color:var(--prm-clr);

    a{
        color:var(--secondary-clr);
    }
`