import { useEffect, useState } from "react";

export default function useDisplaySize() {

    const [displaySize, setDisplaySize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [isMobile, setIsMobile] = useState(window.innerWidth > 500 ? false : true);

    useEffect(() => {

        function getSize() {
            setDisplaySize({
                width: window.innerWidth,
                height: window.innerHeight
            });

            (displaySize.width > 500) ? setIsMobile(false) : setIsMobile(true) ;            
        }

        window.addEventListener('resize', getSize);

        return () => {
            window.removeEventListener('resize', getSize);
        }
    }, [window.innerWidth])

    return { isMobile, displaySize };
}