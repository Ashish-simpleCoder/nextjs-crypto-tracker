import { createContext, memo, ReactNode, useContext, useEffect, useState } from 'react'

const CoinContext = createContext({} as any)

export const CryptoContextProvider = memo(({ children }: { children: ReactNode }) => {
    const [coin, setCoin] = useState({
        currency: 'INR',
        symbol: '₹',
        details: {},
        history: {
            days: 1,
            data: []
        }
    })
    const [trending_coins, setTrendingCoins] = useState([])
    const [TABLE_COINS, setTableCoins] = useState([])
    const [page, setPage] = useState({
        start: 0,
        end: 9,
        active_page: 1
    })

    useEffect(() => setCoin(v => ({ ...v, symbol: v.currency === 'INR' ? '₹' : '$' })), [coin.currency, setCoin])

    return (
        <CoinContext.Provider
            value={{
                ...coin,
                setCoin,
                TABLE_COINS,
                setTableCoins,
                ...page,
                setPage,
                trending_coins,
                setTrendingCoins
            }}
        >
            {children}
        </CoinContext.Provider>
    )
})
export const useCoinContext = () => useContext(CoinContext)