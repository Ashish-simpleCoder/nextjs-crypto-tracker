import { memo, ReactNode } from "react"

const TableRow = ({children}: {children: ReactNode})=>{

    return(
        <tr>
            {children}
        </tr>
    )
}
export default memo(TableRow)