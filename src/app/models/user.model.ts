export const userTypeEnum = {
  ADMIN: 'Admin',
  USER: 'User',
};
export type UserRole = 'Admin' | 'User';

export interface User {
  id: number;
  role: UserRole;
  username: string;
}
