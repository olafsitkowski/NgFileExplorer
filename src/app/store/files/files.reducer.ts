import { createReducer, on } from '@ngrx/store';
import { Folder } from '../../models/folder.model';
import { addFile, deleteFile } from './files.actions';
import { initialMockStructure } from './files.mock';

export interface FilesState {
  structure: Folder[];
}

export const initialFilesState: FilesState = {
  structure: initialMockStructure,
};

export const filesReducer = createReducer(
  initialFilesState,

  on(addFile, (state, { folderId, file }) => {
    const addToFolder = (folders: Folder[]): Folder[] =>
      folders.map((folder) =>
        folder.id === folderId
          ? { ...folder, files: [...folder.files, file] }
          : { ...folder, subfolders: addToFolder(folder.subfolders) }
      );
    return { ...state, structure: addToFolder(state.structure) };
  }),

  on(deleteFile, (state, { fileId }) => {
    const removeFromFolder = (folders: Folder[]): Folder[] =>
      folders.map((folder) => ({
        ...folder,
        files: folder.files.filter((f) => f.id !== fileId),
        subfolders: removeFromFolder(folder.subfolders),
      }));
    return { ...state, structure: removeFromFolder(state.structure) };
  })
);
