import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"
import { Button } from "./Button"

const otp = "1234"

export function NumInput() {
    const [inp, setInp] = useState(new Array("","","",""));
    const [indx, setIndx] = useState(0);
    const [take, setTake] = useState(false);
    const items = useRef(new Array(4));

    let ind = useRef(0);
    useEffect(()=>{
        window.addEventListener("keydown", function(e) {
            if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight", "Tab"].indexOf(e.code) > -1) {
                e.preventDefault();
            }
        }, false);
        if(ind.current < otp.length && ind.current >= 0) {
            items.current[ind.current].focus();
        }  
    }, [ind.current, take]);

    function chHandler(e) {
        const arr = [...inp];
        arr[indx] = e.target.value;
        setInp(arr);
        console.log(items.current[ind.current].value);
        if(indx < otp.length - 1 && e.target.value > 0) setIndx((v) => v + 1);
        if (ind.current < otp.length - 1 && e.target.value > 0) ind.current = ind.current + 1;
    }

    function clickHandler() {
        if(inp.join('') === otp) {
            alert('Correct OTP');
        } else {
            alert('Wrong OTP');
        }
        setTake((t)=>!t);
    }

    function backChange(e) {
        if(e.code === 'Backspace' && ind.current > 0 && items.current[ind.current].value.length === 0) {
            ind.current = ind.current - 1;
            setIndx(v=>v - 1);
        }
    }

    
    return (
        <div>
            <div className="flex gap-3">
            {inp.map((val, id)=><input onKeyDown={backChange}  ref={(ele)=>{items.current[id] = ele}} key={id} value={val} onChange={chHandler} disabled={(indx===id)?false:true} type="text" maxLength={"1"} className="text-white bg-black p-4 border-2 rounded-lg text-xl h-12 w-12 font-medium  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
            )}
            </div>
            <div className="flex justify-center mt-8">
                <Button text={"Login"} clickHandler={clickHandler}/>
            </div>
        </div>
        
    )
}