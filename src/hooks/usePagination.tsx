import { useRouter } from "next/router"
import { useCallback, useEffect, useMemo, useState } from "react"

const usePagination = ({total_pages}: {total_pages: number}) => {
    const limit = useMemo(() => 10, [])
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(limit)

    const router = useRouter()
    const page_id = router.query.hasOwnProperty('page')
    const [active_page_index, setActivePageIndex] = useState( page_id ? () => Number(router.query.page) : 0)


    let nums_arr = []
    for(let i=0; i<total_pages; i++){
        nums_arr.push(i+1)
    }


    const prevPage = useCallback(() => {
        setActivePageIndex(i => i > 0 ? i - 1 : i)
    }, [])

    const nextPage = useCallback(() => {
        setActivePageIndex(i => i < total_pages ?  i + 1 : i)
    }, [total_pages])

    // const pushToIdPage = useCallback((id) => {
    //     if(router.query.page){
    //         // router.push(`?page=${id + 1}`, {shallow: true})
    //     }
    // }, [router])

    const jumpToPage = useCallback((i:number) => {
        // pushToIdPage(i)
        setActivePageIndex(i)
        setStart((i * limit))
        setEnd((i + 1) * limit)
    }, [setStart, setEnd, limit])


    useEffect(() => {
        active_page_index != 0 && jumpToPage(active_page_index)
    }, [active_page_index, jumpToPage])


    return { active_page_index, setActivePageIndex, prevPage, nextPage, jumpToPage, start, end, nums_arr }
}

export default usePagination