import Link from 'next/link'
import { memo } from 'react'

const CarousalItem = memo(({ coin, select_symbol }: { coin: any; select_symbol: any }) => {
    const { id, name, symbol, image, price_change_percentage_24h, current_price } = coin
    let profit = price_change_percentage_24h >= 0

    return (
        <Link href={`/coin/${id}`}>
            <a
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textTransform: 'uppercase'
                }}
            >
                <img src={image} alt={name} style={{ height: 'clamp(6rem,8rem,10vw)', marginBottom: '1rem' }} />
                <span style={SpanStyle}>
                    {symbol} &nbsp;
                    <span style={{ color: profit ? 'var(--profit-clr)' : 'var(--lose-clr)' }}>
                        {/* {profit>0 && ' +'} */}
                        {price_change_percentage_24h?.toFixed(2)}%
                    </span>
                </span>

                <span style={{ fontSize: 'clamp(1.4rem,1.4rem,1.4vw)', marginTop: '1rem', color: 'var(--price-clr)' }}>
                    {select_symbol}
                    {current_price.toFixed(2)}
                </span>
            </a>
        </Link>
    )
})
export default CarousalItem

const ItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    textTransform: 'uppercase'
}
const SpanStyle = {
    color: 'var(--coin-name-clr)',
    fontSize: 'clamp(1.3rem,1.5rem,1.5vw)'
}
