import { useEffect, useState } from "react";

export default function useDetectClose(elem, initialState){
    const [ isOpen, setIsOpen ] = useState(initialState);

    useEffect(() => {
        const onClick = (e) => {
            if (elem.current !== null && !elem.current.contains(e.target)){
                setIsOpen(!isOpen);
            }
        };

        if (isOpen){ window.addEventListener("click", onClick) };

        return () => { window.addEventListener("click", onClick) };

    }, [isOpen, elem]);
    return [isOpen, setIsOpen];
}