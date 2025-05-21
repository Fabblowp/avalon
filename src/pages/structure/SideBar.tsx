import { TreeView } from "../../components/treeview/TreeView";
import { TreeNodeData } from "../../components/treeview/types"
import { sampleTreeData } from "../../components/treeview/data";

function SideBar() {
    const handleNodeClick = (node: TreeNodeData) => {
        console.log('Nodo clickeado:', node);
        // Aquí puedes, por ejemplo, cargar contenido basado en el nodo seleccionado
    };
    return(
        <>
            <TreeView data={sampleTreeData} onNodeClick={handleNodeClick} />
        </>
    )
}

export default SideBar