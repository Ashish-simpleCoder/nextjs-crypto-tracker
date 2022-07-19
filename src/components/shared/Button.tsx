import { memo, ReactNode } from 'react'
import styled, { css } from 'styled-components'

const Button = ({
    children,
    handleClick,
    disabled,
    cn,
    title,
    mode
}: {
    children: ReactNode
    handleClick?: () => void
    disabled?: boolean
    cn?: string
    title?: string,
    mode?: string
}) => {
    return (
        <StyledButton onClick={handleClick} title={title} disabled={disabled} className={cn} mode={mode}>
            {children}
        </StyledButton>
    )
}
export default memo(Button)

const StyledButton = styled.button<{mode?: string}>`
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.4rem;
    border-radius: 0.25rem;

    ${(props) => {
        if(props.mode === 'r'){
            return css`
                padding: clamp(0.5rem, 1rem, 1vw) clamp(1rem, 2rem, 2vw);
                background-color: var(--secondary-clr);
                color: var(--clr);
            `
        }
    }}
`
