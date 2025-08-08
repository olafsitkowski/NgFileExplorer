import { createReducer, on } from '@ngrx/store';
import { User, UserRole } from '../../models/user.model';
import { setUser } from './user.actions';

export interface UserState {
  currentUser: User | null;
}

function getRandomUser(): User {
  const users: User[] = [
    { id: 1, username: 'admin', role: 'Admin' as UserRole },
    { id: 2, username: 'user1', role: 'User' as UserRole },
    { id: 3, username: 'user2', role: 'User' as UserRole },
  ];
  return users[Math.floor(Math.random() * users.length)];
}

export const initialUserState: UserState = {
  currentUser: getRandomUser(),
};

export const userReducer = createReducer(
  initialUserState,
  on(setUser, (state, { user }) => ({ ...state, currentUser: user }))
);
