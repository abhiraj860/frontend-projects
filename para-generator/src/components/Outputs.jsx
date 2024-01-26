import { useRecoilValue } from "recoil"
import { inputNum } from "../atoms/atoms";

export default function Outputs() {
    const inputVal = useRecoilValue(inputNum);
    return <div>
        {inputVal}
    </div>
}