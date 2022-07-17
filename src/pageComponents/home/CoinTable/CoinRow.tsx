import { memo } from "react"
import { TableData } from "../../../components/shared/Table/Table.head"
import TableRow from "../../../components/shared/Table/Table.row"
import { useCoinContext } from "../../../context/coinContext/coinContext"


const CoinRow = ({coin}: {coin: any})=>{
    const {symbol} = useCoinContext()

    let {name, image, current_price, price_change_percentage_24h:price_change, market_cap} = coin
    price_change = (price_change > 0) ? "+"+price_change : price_change
    let profit = price_change > 0 ? "true" : 'false'
    market_cap = market_cap.toString().slice(0, 6)

    return(
        <TableRow>
           <TableData name={name} image={image}/>
           <TableData name={current_price} symbol={symbol}/>
           <TableData name={price_change} profit={profit}/>
           <TableData name={market_cap} symbol={symbol}/>
        </TableRow>
    )
}
export default memo(CoinRow)