import { MutableRefObject, useCallback, useEffect, useState } from "react"

const useInterSectionObserver = ({element}: {element: any}) => {
    const [isIntersecting, setIsIntersecting] = useState(false)

    const lazyLoader = useCallback((ele: HTMLElement) => {
        console.log(ele)
        const callback = (entries: Record<string, any>[]) => {
            entries.forEach(entry => {
                const element = entry.target;
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    io.unobserve(element);
                }
            });
        };
        const io = new IntersectionObserver(callback, {
            threshold: 0.2
        });

        io.observe(ele);
    }, []);

    useEffect(() => {
        let timerId: NodeJS.Timeout;
        if(element){
            timerId = setTimeout(() => lazyLoader(element), 0);
        }
        return () => clearTimeout(timerId);
    }, [element]);

    return isIntersecting
}
export default useInterSectionObserver