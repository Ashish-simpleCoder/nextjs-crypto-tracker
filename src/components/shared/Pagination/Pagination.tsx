import styled from 'styled-components'
import Button from '../Button'

const Pagination = ({
    nums_arr,
    nextPage,
    prevPage,
    active_page_index,
    jumpToPage
}: {
    nums_arr: number[]
    nextPage: () => void
    prevPage: () => void
    active_page_index: number
    jumpToPage: (i: number) => void
}) => {

    return (
        <StyledPagination style={{ marginBottom: '3rem', marginTop: '2rem' }}>
            <Button handleClick={prevPage} disabled={active_page_index === 0} title={`go to previous page`}>
                prev
            </Button>

            {nums_arr.map(i => {
                return (
                    <Button
                        key={i}
                        cn={`pagination ${active_page_index === i - 1 ? 'active_page' : ''}`}
                        handleClick={() => jumpToPage(i - 1)}
                        title={`page ${i}`}
                    >
                        {i}
                    </Button>
                )
            })}

            <Button handleClick={nextPage} disabled={active_page_index === nums_arr?.length - 1}title={`go to next page`}>
                next
            </Button>
        </StyledPagination>
    )
}
export default Pagination

const StyledPagination = styled.div`
    button {
        margin-inline: 1rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.3rem;
        font-weight: 600;
        /* font-size: 1.4rem; */
    }

    button.active_page {
        color: rgb(232, 232, 232);
        font-weight: 600;
        background-color: rgb(0, 160, 136);
    }
`
