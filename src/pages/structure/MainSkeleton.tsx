import SideBar from "./SideBar"
import TopNavBar from "./TopNavBar"


function MainSkeleton(){
    return(
        <>
            <TopNavBar />
            <div className="flex flex-grow overflow-hidden">
                <SideBar />

        <main className="flex-grow bg-gray-900 p-4 overflow-y-auto">
            <div className="bg-gray-800 rounded-md shadow-lg overflow-hidden">
                <div className="bg-gray-700 border-b border-gray-600 flex">
                    <div className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-600 active">
                        <span className="mr-2">index.html</span>
                        <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                    <div className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-600">
                        <span className="mr-2">styles.css</span>
                    </div>
                    <div className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-600">
                        <span className="mr-2">script.js</span>
                    </div>
                </div>
                <div className="p-4">
                    <pre className="text-sm text-green-400"><code>&lt;!DOCTYPE html&gt;</code></pre>
                    <pre className="text-sm text-blue-400"><code>&lt;html lang=&quot;es&quot;&gt;</code></pre>
                    <pre className="text-sm"><code>&lt;head&gt;</code></pre>
                    <pre className="text-sm ml-4 text-yellow-400"><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code></pre>
                    <pre className="text-sm ml-4 text-yellow-400"><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</code></pre>
                    <pre className="text-sm ml-4 text-blue-400"><code>&lt;title&gt;Mi Página de Aterrizaje&lt;/title&gt;</code></pre>
                    <pre className="text-sm"><code>&lt;/head&gt;</code></pre>
                    <pre className="text-sm text-blue-400"><code>&lt;body className=&quot;bg-gray-100 text-gray-800&quot;&gt;</code></pre>
                    <pre className="text-sm ml-4"><code>&lt;h1 className=&quot;text-2xl font-bold text-center&quot;&gt;¡Bienvenido!&lt;/h1&gt;</code></pre>
                    <pre className="text-sm ml-4"><code>&lt;p className=&quot;text-center&quot;&gt;Este es el contenido de tu increíble página de aterrizaje.&lt;/p&gt;</code></pre>
                    <pre className="text-sm text-blue-400"><code>&lt;/body&gt;</code></pre>
                    <pre className="text-sm text-blue-400"><code>&lt;/html&gt;</code></pre>
                </div>
            </div>
        </main>

        <aside className="bg-gray-800 w-56 flex-shrink-0 p-4 border-l border-gray-700 overflow-y-auto">
            <h2 className="text-sm font-semibold mb-2">Esquema</h2>
            <nav>
                <ul>
                    <li className="py-1 cursor-pointer hover:text-blue-400 text-sm">DOCTYPE html</li>
                    <li className="py-1 cursor-pointer hover:text-blue-400 text-sm">html</li>
                    <li className="py-1 pl-2 cursor-pointer hover:text-blue-400 text-sm">head</li>
                    <li className="py-1 pl-4 cursor-pointer hover:text-blue-400 text-sm">meta</li>
                    <li className="py-1 pl-4 cursor-pointer hover:text-blue-400 text-sm">title</li>
                    <li className="py-1 pl-2 cursor-pointer hover:text-blue-400 text-sm">body</li>
                    <li className="py-1 pl-4 cursor-pointer hover:text-blue-400 text-sm">h1</li>
                    <li className="py-1 pl-4 cursor-pointer hover:text-blue-400 text-sm">p</li>
                </ul>
            </nav>
        </aside>
    </div>

    <footer className="bg-gray-800 py-2 px-4 border-t border-gray-700 text-sm flex justify-between items-center z-10 sticky bottom-0">
        <div>
            <span className="statusbar-item">Ln 1, Col 1</span>
            <span className="statusbar-item">UTF-8</span>
            <span className="statusbar-item">Espacio: 2</span>
        </div>
        <div>
            <span className="statusbar-item"><svg className="w-4 h-4 inline-block mr-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> Go Live</span>
            <span className="statusbar-item"><svg className="w-4 h-4 inline-block mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg> Git: main</span>
            <span className="statusbar-item"><svg className="w-4 h-4 inline-block mr-1 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Problemas 0</span>
            <span className="statusbar-item"><svg className="w-4 h-4 inline-block mr-1 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Extensiones</span>
        </div>
    </footer>
        </>
    )
}

export default MainSkeleton