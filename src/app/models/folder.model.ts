import { FileItem } from './file.model';

export interface Folder {
  id: string;
  name: string;
  owner: string;
  ownerId: number;
  files: FileItem[];
  subfolders: Folder[];
}
