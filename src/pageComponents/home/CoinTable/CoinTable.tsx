import { CSSProperties, memo, useMemo} from "react"
import Table from "../../../components/shared/Table/Table"
import TableBody from "../../../components/shared/Table/Table.body"
import TableHead from "../../../components/shared/Table/Table.head"
import { useCoinContext } from "../../../context/coinContext/coinContext"
import CoinRow from "./CoinRow"


const CoinTable = memo(({start, end}: {start:number, end: number})=>{
    const {TABLE_COINS} = useCoinContext()

    const TABLE_HEADINGS = useMemo(() => (['Coin','Price','24h Change','Market Cap']), [])
    const styles:CSSProperties = useMemo(() => ({borderCollapse:'collapse',minWidth:'60rem'}), [])

    return (
        <Table  id={'coin_table'} styles={styles}>
            <TableHead headings={TABLE_HEADINGS} />
            <TableBody>
                {
                    TABLE_COINS.slice(start, end + 1).map((coin: any) => {
                        return <CoinRow coin={coin} key={coin.id}/>
                    })
                }
            </TableBody>
        </Table>
    )
})
export default CoinTable