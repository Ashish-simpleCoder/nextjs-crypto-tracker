const asyncWrapper = (fn: Function) => {
    return async (params: any) => {
        try{
            const res = await fn(params)
            // console.log(res)
            return await res
        }catch(err){
            console.log(err)
        }
    }
}

export default asyncWrapper