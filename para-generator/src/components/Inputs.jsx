import { useSetRecoilState } from "recoil"
import { inputNum } from "../atoms/atoms";
import { useState } from "react";

export default function Inputs() {
    const [stateInp, setStateInput] = useState('');
    const setInputState = useSetRecoilState(inputNum);

    function changeHandler(e) {
        setStateInput((stateInp)=>e.target.value);
    }
    
    function clickHandler() {
        setInputState((value)=>stateInp);
        setStateInput('');
    }

    return <div className="mt-5 flex justify-center">
        <input className="w-2/5 border-2 border-slate-300 p-3" 
        onChange={changeHandler} value={stateInp} type="number" placeholder="Enter number of words"/>
        <button className="text-slate-100 bg-black p-4 rounded-xl ml-5" 
            onClick={clickHandler}>Generate</button>
    </div>
}