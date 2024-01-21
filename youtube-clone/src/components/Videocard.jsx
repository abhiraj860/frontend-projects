export function VideoCard(props) {
    return <div className="p-3 cursor-pointer">
        <img className="rounded-xl" src={props.image} />
        <div className="grid grid-cols-12 pt-5 pl-4">
            <div className="w-16 h-16">
                <img className="rounded-full" src={props.thumbnail} />
            </div>
            <div className="col-span-11 pl-16">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11 text-gray-700 text-base">
                    {props.author}
                </div>
                <div className="col-span-11 text-gray-700 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>
            
                        
        </div>
    </div>
}