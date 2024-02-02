import { TopHeading } from "../components/TopHeading"
import { Input } from "../components/Input"
import {Button} from "../components/Button"
import { Link } from "react-router-dom"

export function Mobile() {
    return (
        <div className="flex justify-center">
            <div className="mt-10 border-2 h-96 w-96 rounded-xl">
                <div className="flex justify-center pt-16">
                    <TopHeading />
                </div>
                <div className="flex justify-center mt-8">
                    <Input />
                </div>
                <div className="flex justify-center mt-8">
                    <Link to={'./Otp'}>
                        <Button text={"Send OTP"}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}