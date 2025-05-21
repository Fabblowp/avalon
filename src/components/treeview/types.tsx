// src/treeview/types.ts
export interface TreeNodeData {
  id: string;
  name: string;
  children?: TreeNodeData[];
  // Puedes añadir más propiedades si las necesitas, ej: icon, type, etc.
}