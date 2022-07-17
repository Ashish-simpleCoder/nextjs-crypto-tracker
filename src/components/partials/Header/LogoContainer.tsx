import { useRouter } from 'next/router'
import { useCallback } from 'react'
import styled from 'styled-components'

const LogoContainer = () => {
    const router = useRouter()
    const goToHome = useCallback(() => router.push('/'), [router])

    return (
        <StyledLogoContainer onClick={goToHome}>
            <span>
                <img
                    src='./imgs/cryptocurrencies.png'
                    alt='crypto'
                    title='<div>Icons made by <a href="https://www.flaticon.com/authors/dighital" title="Dighital">Dighital</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>'
                />
            </span>
            <h1>Crypto Tracker</h1>
        </StyledLogoContainer>
    )
}
export default LogoContainer

const StyledLogoContainer = styled.section`
    display: flex;
    align-items: center;
    flex: 1;
    cursor: pointer;
    span {
        margin-inline-end: 1rem;
    }
    h1 {
        color: var(--prm-clr);
        font-size: clamp(1.8rem, 2rem, 2vw);
        font-weight: 400;
    }
`
