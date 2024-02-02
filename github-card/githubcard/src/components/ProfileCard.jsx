

export function ProfileCard(props) {
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
                    <span className="text-slate-700 text-xl font-bold">{props.name != "" ? props.name : "Unknown"} <span className="text-slate-500 font-medium">{props.bday}</span></span>  <br></br>
                </div>
                <div className="basis-11/12 mt-2  flex justify-center">
                    <span className="text-xl text-slate-500 font-medium">{props.location!="" ? props.location : "Location"}</span>
                </div>
            </div>
        </div>
        <div className="flex flex-row mt-6 border-t-2 border-slate-300 text-center pt-4">
            <div className="basis-1/3"><span className="text-slate-700 text-xl font-bold">{props.follow}</span><br></br><span className="text-slate-500 font-medium text-sm">Followers</span></div>
            <div className="basis-1/3"><span className="text-slate-700 text-xl font-bold">{props.like}</span><br></br><span className="text-slate-500 font-medium text-sm">Likes</span></div>
            <div className="basis-1/3"><span className="text-slate-700 text-xl font-bold">{props.post}</span><br></br><span className="text-slate-500 font-medium text-sm">Photos</span></div>
        </div>
    </div>
}