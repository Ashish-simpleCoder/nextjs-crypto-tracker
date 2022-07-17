import { memo, ReactNode} from "react"


const Body = ({children}: {children: ReactNode})=>{
    return(
        <tbody>
            {children}
        </tbody>
    )
}
export default memo(Body)