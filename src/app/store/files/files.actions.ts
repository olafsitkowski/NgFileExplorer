import { createAction, props } from '@ngrx/store';
import { FileItem } from '../../models/file.model';

export const addFile = createAction(
  '[Files] Add File',
  props<{ folderId: string; file: FileItem }>()
);

export const deleteFile = createAction(
  '[Files] Delete File',
  props<{ fileId: string }>()
);
