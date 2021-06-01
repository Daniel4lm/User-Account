import React, { useEffect, useState } from "react";

export default function useDisplaySize() {

    const [displaySize, setDisplaySize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640 ? true : false);

    useEffect(() => {

        function getSize() {
            setDisplaySize({
                width: window.innerWidth,
                height: window.innerHeight
            });

            (displaySize.width > 640) ? setIsDesktop(true) : setIsDesktop(false) ;            
        }

        window.addEventListener('resize', getSize);

        return () => {
            window.removeEventListener('resize', getSize);
        }
    }, [window.innerWidth])

    return { isDesktop, displaySize };
}