export interface FileItem {
  id: string;
  name: string;
  extension: string;
  owner: string;
  ownerId: number;
}

export interface TreeNode {
  id: string;
  name: string;
  isFile: boolean;
  extension?: string;
  size?: number;
  children?: TreeNode[];
  expanded?: boolean;
}
