import IconLogoAvalon from "../../components/icons/IconLogoAvalon"

function TopNavBar(){
    return(
        <>
            <nav className="bg-gray-800 py-2 px-0 flex items-center justify-between shadow-md z-10">
                <div className="flex items-center">
                    <IconLogoAvalon height="42" color="#c97016" className="mx-2"/>
                    <span className="text-sm">AVALON</span>
                    <ul>
                        <li className="inline-block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 rounded-md">Projects</li>
                        <li className="inline-block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 rounded-md">Wiki</li>
                        <li className="inline-block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 rounded-md">About</li>
                        <li className="inline-block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 rounded-md">Search</li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <ul>
                        <li className="inline-block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 rounded-md">User</li>
                        <li className="inline-block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 rounded-md">Mode</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}



export default TopNavBar