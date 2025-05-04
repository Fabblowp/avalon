import TopNavBar from "./TopNavBar"


function MainSkeleton(){
    return(
        <>
            <TopNavBar />

            <div className="flex mt-16">
                <aside className="w-1/8 h-screen p-4">
                    <h2 className="text-lg font-bold mb-4">Proyecto 1</h2>
                    <ul>
                        <li><a href="#" className="block py-2 hover:bg-gray-700">Opción 1</a></li>
                        <li><a href="#" className="block py-2 hover:bg-gray-700">Opción 2</a></li>
                        <li><a href="#" className="block py-2 hover:bg-gray-700">Opción 3</a></li>
                    </ul>
                    <h2 className="text-lg font-bold mb-4">Proyecto 2</h2>
                    <ul>
                        <li><a href="#" className="block py-2 hover:bg-gray-700">Opción 1</a></li>
                        <li><a href="#" className="block py-2 hover:bg-gray-700">Opción 2</a></li>
                        <li><a href="#" className="block py-2 hover:bg-gray-700">Opción 3</a></li>
                    </ul>
                </aside>

                <main className="w-3/4 p-6">
                    <h2 className="text-2xl font-bold mb-4">Bienvenido a la Landing Page</h2>
                    <p className="text-gray-700">
                        Aquí puedes agregar contenido relevante sobre tu sitio web.
                    </p>
                </main>
            </div>
        </>
    )
}

export default MainSkeleton