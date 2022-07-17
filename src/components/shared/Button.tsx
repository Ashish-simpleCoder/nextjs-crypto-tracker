import { memo, ReactNode } from 'react'
import styled from 'styled-components'

const Button = ({
    children,
    handleClick,
    disabled,
    cn,
    title
}: {
    children: ReactNode
    handleClick?: () => void
    disabled?: boolean
    cn?: string
    title?: string
}) => {
    return (
        <StyledButton onClick={handleClick} title={title} disabled={disabled} className={cn}>
            {children}
        </StyledButton>
    )
}
export default memo(Button)

const StyledButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.4rem;
`
