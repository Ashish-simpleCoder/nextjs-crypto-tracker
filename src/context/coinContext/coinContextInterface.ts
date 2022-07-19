import { Dispatch, SetStateAction } from "react";

export interface ICoinContenxt {
    setCoin: Dispatch<SetStateAction<{
        currency: string;
        symbol: string;
        details: {};
        history: {
            days: number;
            data: never[];
        };
    }>>
    TABLE_COINS: never[]
    setTableCoins: Dispatch<SetStateAction<never[]>>
    trending_coins: never[]
    setTrendingCoins: Dispatch<SetStateAction<never[]>>
    currency: string
    symbol: string
    details: {}
    history: {
        days: number
        data: never[]
    }

}