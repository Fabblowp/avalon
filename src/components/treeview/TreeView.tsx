// src/treeview/TreeView.tsx
import { useState, useCallback } from 'react';
import { TreeNodeData } from './types';
import { TreeNode } from './TreeNode';
// import './TreeView.css'; // Crearemos este archivo para los estilos

interface TreeViewProps {
  data: TreeNodeData[];
  onNodeClick?: (node: TreeNodeData) => void; // Para manejar clics en los nodos
  // Puedes añadir props para abrir nodos por defecto, etc.
  // initiallyOpenNodes?: string[];
}

export const TreeView: React.FC<TreeViewProps> = ({ data, onNodeClick }) => {
  const [openNodes, setOpenNodes] = useState<Set<string>>(new Set());
  // Si quieres nodos abiertos por defecto:
  // const [openNodes, setOpenNodes] = useState<Set<string>>(new Set(initiallyOpenNodes || []));


  const handleToggleNode = useCallback((nodeId: string) => {
    setOpenNodes((prevOpenNodes) => {
      const newOpenNodes = new Set(prevOpenNodes);
      if (newOpenNodes.has(nodeId)) {
        newOpenNodes.delete(nodeId);
      } else {
        newOpenNodes.add(nodeId);
      }
      return newOpenNodes;
    });
  }, []);

  const isNodeOpen = useCallback((nodeId: string) => {
    return openNodes.has(nodeId);
  }, [openNodes]);

  return (
    <div className="treeview">
      {data.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          isNodeOpen={isNodeOpen}
          onToggleNode={handleToggleNode}
          level={0}
          onNodeClick={onNodeClick}
        />
      ))}
    </div>
  );
};