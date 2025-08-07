import { FilesState } from '../store/files/files.reducer';
import { UserState } from '../store/user/user.reducer';

export interface AppState {
  files: FilesState;
  user: UserState;
}
