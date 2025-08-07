import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import { AppState } from '../../models/app-state.model';

export const selectUserState = (state: AppState) => state.user;

export const selectCurrentUser = createSelector(
  selectUserState,
  (state: UserState) => state.currentUser
);
