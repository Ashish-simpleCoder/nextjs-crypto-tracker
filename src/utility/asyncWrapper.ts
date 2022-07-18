const asyncWrapper = (fn: Function) => {
    return async (params: any) => {
        try{
            let res;
            if(Array.isArray(params)){
                res = await fn(...params)
            }
            else{
                res = await fn(params)
            }
            // console.log(res)
            return await res
        }catch(err){
            console.log(err)
        }
    }
}

export default asyncWrapper