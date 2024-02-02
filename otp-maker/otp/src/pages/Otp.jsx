import { TopHeading } from "../components/TopHeading"
import { NumInput } from "../components/NumInput"

export function Otp() {
    return (
        <div className="flex justify-center">
            <div className="mt-10 border-2 h-96 w-96 rounded-xl">
                <div className="flex justify-center pt-16">
                    <TopHeading />
                </div>
                <div className="flex justify-center mt-8">
                    <NumInput />
                </div>
                
            </div>
        </div>
    )
}