import { createSelector } from '@ngrx/store';
import { FilesState } from './files.reducer';
import { AppState } from '../../models/app-state.model';

export const selectFilesState = (state: AppState) => state.files;

export const selectStructure = createSelector(
  selectFilesState,
  (state: FilesState) => state.structure
);
