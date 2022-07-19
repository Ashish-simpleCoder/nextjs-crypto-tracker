import { createContext, memo, ReactNode, useContext, useEffect, useState } from 'react'
import { ICoinContenxt } from './coinContextInterface'

const CoinContext = createContext<ICoinContenxt>({} as ICoinContenxt)

export const CryptoContextProvider = memo(({ children }: { children: ReactNode }) => {
    const [coin, setCoin] = useState({
        currency: 'INR',
        symbol: '₹',
        details: {
            id: '',
        image: {
            large: ''
        },
        name: '',
        description: {
            en: ''
        }
        },
        history: {
            days: 15,
            data: []
        }
    })
    const [trending_coins, setTrendingCoins] = useState([])
    const [TABLE_COINS, setTableCoins] = useState([])


    useEffect(() => setCoin(v => ({ ...v, symbol: v.currency === 'INR' ? '₹' : '$' })), [coin.currency, setCoin])

    return (
        <CoinContext.Provider
            value={{
                ...coin,
                setCoin,
                TABLE_COINS,
                setTableCoins,
                trending_coins,
                setTrendingCoins
            }}
        >
            {children}
        </CoinContext.Provider>
    )
})
export const useCoinContext = () => useContext(CoinContext)
