import { useSetRecoilState } from "recoil"
import { inputNum } from "../atoms/atoms";

export default function Inputs() {
    
    const setInputState = useSetRecoilState(inputNum);

    function changeHandler(e) {
        setInputState((value)=>e.target.value);
    }

    return <div>
        <input onChange={changeHandler} type="number" placeholder="Enter number of words"/>
        <button>Generate</button>
    </div>
}