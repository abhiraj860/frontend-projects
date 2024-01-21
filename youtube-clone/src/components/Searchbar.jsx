export function SearchBar() {
    return <div>
        <div className="relative flex">
            <input type="search" id="search" className="block w-[300px] md:w-[500px]  p-4 ps-10 text-sm text-gray-800  border-gray-300 rounded-full bg-gray-50 dark:bg-gray-100" placeholder="Search.." required />
            <div className="absolute top-5 right-5 flex  items-center ps-3 ">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"  fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>  
            </div>
        </div>
    </div>
}