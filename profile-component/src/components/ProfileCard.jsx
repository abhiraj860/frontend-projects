

export function ProfileCard() {
    return <div className='w-96 h-[420px] bg-white rounded-2xl'>
        <div className="h-44 bg-teal-400 rounded-t-2xl">
        </div>
        <div>
            <div className="flex justify-center -mt-16">
                <div className=" w-24 h-24 bg-slate-200 rounded-full">
                    <img src="../../public/vite.svg" className="w-16 h-16 mt-4 ml-4"/>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-8">
                <div className="flex justify-center">
                    <span className="text-slate-700 text-xl font-bold">Rita Correia <span className="text-slate-500 font-medium">32</span></span>  <br></br>
                </div>
                <div className="basis-11/12 mt-2  flex justify-center">
                    <span className="text-xl text-slate-500 font-medium">India</span>
                </div>
            </div>
        </div>
        <div className="flex flex-row mt-6 border-t-2 border-slate-300 text-center pt-4">
            <div className="basis-1/3"><span className="text-slate-700 text-xl font-bold">80K</span><br></br><span className="text-slate-500 font-medium text-sm">Followers</span></div>
            <div className="basis-1/3"><span className="text-slate-700 text-xl font-bold">803K</span><br></br><span className="text-slate-500 font-medium text-sm">Likes</span></div>
            <div className="basis-1/3"><span className="text-slate-700 text-xl font-bold">1.4K</span><br></br><span className="text-slate-500 font-medium text-sm">Photos</span></div>
        </div>
    </div>
}