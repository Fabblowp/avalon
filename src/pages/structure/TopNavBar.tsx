import { useEffect, useState } from "react";
import IconSun from "../../components/icons/IconSun"
function TopNavBar(){
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return(
        <>
            <nav className="fixed top-0 w-full p-4 shadow-md dark:bg-gray-700 bg-white">
                <div className="max-w-7xl mx-auto flex justify-between">
                    <h1 className="text-xl font-bold">Avalon</h1>
                    <ul className="flex gap-6">
                        <li><a href="#" className="hover:text-gray-200">Inicio</a></li>
                        <li><a href="#" className="hover:text-gray-200">Tasks</a></li>
                        <li><a href="#" className="hover:text-gray-200">Docs</a></li>
                    </ul>
                    <ul className="flex gap-6">
                        <li><a href="#" className="hover:text-gray-200">Usuario</a></li>
                        <li><a href="#" className="hover:text-gray-200" onClick={toggleDarkMode}><IconSun /></a></li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}



export default TopNavBar