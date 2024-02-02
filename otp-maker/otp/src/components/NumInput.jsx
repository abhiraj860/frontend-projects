import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"
import { Button } from "./Button"

export function NumInput() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const [disab1, setDisab1] = useState(false);
    const [disab2, setDisab2] = useState(false);
    const [disab3, setDisab3] = useState(false);
    const [disab4, setDisab4] = useState(false);
    useEffect(()=>{
        inputRef1.current.focus();
    }, []);
    function ch1(e) {
        if(e.target.value.length === 1) {
            inputRef2.current.focus();
        } 
        return;
    }
    function ch2(e) {
        if(e.target.value.length === 1) {
            inputRef3.current.focus();
        } 
        if(e.target.value.length === 0) inputRef1.current.focus();
        return;
    }
    function ch3(e) {
        console.log(e.target.value);
        if(e.target.value.length === 1) {
            inputRef4.current.focus();
        }
        if(e.target.value.length === 0) inputRef2.current.focus();
        return;
    }
    function ch4(e) {
        if(e.target.value.length === 0) inputRef3.current.focus();
        return;
    }
    
    return (
        <div>
            <div className="flex gap-3">
                {/* {console.log(disab1)} */}
                <input ref={inputRef1} disabled={disab1} onChange={ch1} type="text" maxLength={"1"} pattern="[0-9]+" className="text-white bg-black p-4 border-2 rounded-lg text-xl h-12 w-12 font-medium  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                <input ref={inputRef2} disabled={disab2} onChange={ch2} type="text" maxLength={"1"} className="text-white bg-black p-4 border-2 rounded-lg text-xl h-12 w-12 font-medium  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                <input ref={inputRef3} disabled={disab3} onChange={ch3} type="text" maxLength={"1"} className="text-white bg-black p-4 border-2 rounded-lg text-xl h-12 w-12 font-medium  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                <input ref={inputRef4} disabled={disab4} onChange={ch4} type="text" maxLength={"1"} className="text-white bg-black p-4 border-2 rounded-lg text-xl h-12 w-12 font-medium  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
            </div>
            <div className="flex justify-center mt-8">
                <Button text={"Login"}/>
            </div>
        </div>
        
    )
}