import { useEffect } from "react"

export function Cards ({inp}) {
    return (
        <div className='flex justify-center mt-7 gap-5'>
        <div className='flex items-center justify-center w-96 h-40 bg-red-400 bg-opacity-80 backdrop-blur-lg rounded-xl'>
          <div>
            <div className="text-white text-center font-mono font-medium text-xl">
              Happy birthday {inp}
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-96 h-40  bg-green-400 bg-opacity-80 backdrop-blur-lg rounded-xl'>
            <div className="text-white text-center font-mono font-medium text-xl">
                Greetings {inp}
            </div>
        </div>
      </div>
    )
}