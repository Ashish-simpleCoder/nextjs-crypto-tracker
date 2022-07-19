const If = ({children, condition}: {children: any, condition: any}) => {
    if(typeof children === 'object'){
        return <>{children}</>
    }
    else if(Array.isArray(children) && !!condition){
        return <>{children[0]}</>
    }
    return <>{children[1]}</>
}
export default If