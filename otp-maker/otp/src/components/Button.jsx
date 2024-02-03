export function Button({text, clickHandler}) {
    return (
        <div>
            <button onClick={clickHandler} className="border-2 w-32 h-12 rounded-xl text-white font-medium text-lg">{text} </button>
        </div>
    )
}