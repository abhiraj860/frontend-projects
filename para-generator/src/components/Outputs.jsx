import { useRecoilValue } from "recoil"
import { paragraph } from "../atoms/selectors";

export default function Outputs() {
    const para = useRecoilValue(paragraph);
    return <div>
        {para}
    </div>
}