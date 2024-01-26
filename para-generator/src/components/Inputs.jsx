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

    return <div>
        <input onChange={changeHandler} value={stateInp} type="number" placeholder="Enter number of words"/>
        <button onClick={clickHandler}>Generate</button>
    </div>
}