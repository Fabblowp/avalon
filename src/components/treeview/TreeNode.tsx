// src/treeview/TreeNode.tsx
import React from 'react';
import { TreeNodeData } from './types';

interface TreeNodeProps {
  node: TreeNodeData;
  isNodeOpen: (nodeId: string) => boolean; // Función para saber si un nodo está abierto
  onToggleNode: (nodeId: string) => void; // Función para abrir/cerrar un nodo
  level: number;
  onNodeClick?: (node: TreeNodeData) => void;
}

export const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  isNodeOpen,
  onToggleNode,
  level,
  onNodeClick,
}) => {
  const hasChildren = node.children && node.children.length > 0;
  const currentlyOpen = isNodeOpen(node.id);

  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasChildren) {
      onToggleNode(node.id);
    }
  };

  const handleNameClick = () => {
    if (onNodeClick) {
      onNodeClick(node);
    }
    // Opcional: si quieres que al hacer clic en el nombre de una carpeta también se abra/cierre
    // if (hasChildren) {
    //   onToggleNode(node.id);
    // }
  };

  return (
    <div style={{ paddingLeft: `${level * 20}px` }} className="tree-node-container">
      <div className="tree-node-content">
        {hasChildren && (
          <span onClick={handleToggleClick} className="tree-node-toggle">
            {currentlyOpen ? '▼' : '►'}
          </span>
        )}
        {/* Para nodos hoja, un espaciador para mantener la alineación si tienes iconos */}
        {!hasChildren && <span className="tree-node-placeholder-icon">&nbsp;&nbsp;</span>}

        <span onClick={handleNameClick} className="tree-node-name">
          {/* Aquí podrías poner un icono según el tipo de nodo (carpeta/archivo) */}
          {hasChildren ? '📁' : '📄'} {node.name}
        </span>
      </div>

      {hasChildren && currentlyOpen && (
        <div className="tree-node-children">
          {node.children?.map((childNode) => (
            <TreeNode
              key={childNode.id}
              node={childNode}
              isNodeOpen={isNodeOpen}
              onToggleNode={onToggleNode}
              level={level + 1}
              onNodeClick={onNodeClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};