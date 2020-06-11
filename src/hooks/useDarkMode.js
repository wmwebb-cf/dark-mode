import { useLocalStorage } from "./useLocalStorage";
import React, { useEffect } from "react";

export const useDarkMode = (key) => {
    const [darker, setDarker] = useLocalStorage('darker');

    useEffect(() => {
        const body = document.querySelector('body');
        if(darker === true){
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [darker]
    )
    return [darker, setDarker];
}
