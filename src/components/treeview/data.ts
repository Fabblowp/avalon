// src/treeview/data.ts
import { TreeNodeData } from './types';

export const sampleTreeData: TreeNodeData[] = [
  {
    id: 'root1',
    name: 'Directorio Principal 1',
    children: [
      {
        id: 'child1.1',
        name: 'Archivo A.txt',
      },
      {
        id: 'child1.2',
        name: 'Subdirectorio 1.2',
        children: [
          {
            id: 'subchild1.2.1',
            name: 'Documento X.doc',
          },
          {
            id: 'subchild1.2.2',
            name: 'Foto Y.png',
          },
        ],
      },
    ],
  },
  {
    id: 'root2',
    name: 'Directorio Principal 2',
    children: [
      {
        id: 'child2.1',
        name: 'Presentación Z.ppt',
      },
    ],
  },
  {
    id: 'root3',
    name: 'Archivo Suelto B.md',
  },
];