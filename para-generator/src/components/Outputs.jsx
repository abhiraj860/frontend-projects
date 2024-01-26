import { useRecoilValue } from "recoil"
import { paragraph } from "../atoms/selectors";

export default function Outputs() {
    const para = useRecoilValue(paragraph);
    return <div className="flex justify-center">
        <div className="border-2 border-slate-300 w-6/12 h-[400px] rounded-lg mt-6 p-3 overflow-auto">
            {para}
        </div>
    </div> 
    
}