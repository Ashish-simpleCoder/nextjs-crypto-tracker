import { CSSProperties, memo, useMemo} from "react"
import Table from "../../../components/shared/Table/Table"
import Body from "../../../components/shared/Table/Table.body"
import Head from "../../../components/shared/Table/Table.head"
import { useCoinContext } from "../../../context/coinContext/coinContext"
import CoinRow from "./CoinRow"


const CoinTable = memo(()=>{
    const {TABLE_COINS, start, end} = useCoinContext()

    const TABLE_HEADINGS = useMemo(() => (['Coin','Price','24h Change','Market Cap']), [])
    const styles:CSSProperties = useMemo(() => ({borderCollapse:'collapse',minWidth:'60rem'}), [])

    return (
        <Table  id={'coin_table'} styles={styles}>
            <Head headings={TABLE_HEADINGS} />
            <Body>
                {
                    TABLE_COINS.slice(start, end + 1).map((coin: any) => {
                        return <CoinRow coin={coin} />
                    })
                }
            </Body>
        </Table>
    )
})
export default CoinTable