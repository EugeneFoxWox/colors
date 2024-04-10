import { useState } from 'react';
 
const useGenerateRandomColor = () => {
    const [fcolor, setColor] = useState("")
    const generateColor = () => {
        setColor(Math.random().toString(16).substr(-6));
    };
    return { fcolor, generateColor };
 
};
export default useGenerateRandomColor;