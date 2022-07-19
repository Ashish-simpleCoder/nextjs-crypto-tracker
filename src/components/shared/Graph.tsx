import { useCallback } from "react"
import { Line } from "react-chartjs-2"
import {registerables, Chart} from 'chart.js'


Chart.register(...registerables)


const Graph = ({data, days, currency}: {data: any[], days: number, currency: string})=>{
    const createGraphLabels = useCallback((data: any[], days: number) =>{
        return data.map(coin=>{
            let date = new Date(coin[0])
            let h = date.getHours()
            let m = date.getMinutes()
            let time = (h > 12) ? (`${h - 12}:${m} PM`) : (`${h}:${m} AM`)
            return days === 1 ? time : date.toLocaleDateString()
        })
    }, [])

    const createDataSets = useCallback((history_data: any, days: number, currency: string) =>{
        return [ {
            data: history_data.map((coin: any)=>coin[1]),
            label:`Price (Past ${days} in ${currency})`,
            borderColor:'hsl(140, 100%,35%)'
        } ]
    }, [])


    return(
        <Line
            data={{
                labels:createGraphLabels(data, days),
                datasets:createDataSets(data, days, currency)
            }}
            options={{elements:{point:{radius:1}}}}
        />
    )
}
export default Graph