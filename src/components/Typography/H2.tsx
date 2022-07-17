import { ReactNode } from "react";
import styled from "styled-components";

const H2 = ({children,mTop, center, mBottom}: {children: ReactNode, mTop?: string, center?: boolean, mBottom?: string})=>{

    const styles: Record<string, string | boolean> = {}
    mTop && (styles['marginTop'] = mTop)
    center && (styles['textAlign'] = 'center')
    mBottom &&(styles['marginBottom'] = mBottom)

    return(
        <StyledH2 style={styles}>{children}</StyledH2>
    )
}
export default H2

const StyledH2 = styled.h2<{center?: string, mBottom?: string}>`
    font-size:clamp(2rem,2.2rem,2.2vw);
    text-align:${({center})=>center && center};
    margin-bottom:${({mBottom})=>mBottom && mBottom};
`