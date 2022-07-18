import React, { ReactNode, useRef } from 'react';
import useInterSectionObserver from '../hooks/useInterSectionObserver';

const LazyLoadWrapper = ({children}: {children: ReactNode}) => {
    const ref = useRef(null)

    const isIntersecting = useInterSectionObserver({ element: ref.current });



    return (
        <div ref={ref}>

        </div>

    );
};
export default LazyLoadWrapper;
