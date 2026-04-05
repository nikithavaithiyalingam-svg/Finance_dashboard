import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role } from '../types';

const loadRole = (): Role => {
  const stored = localStorage.getItem('role');
  return (stored as Role) || 'viewer';
};

const saveRole = (role: Role) => {
  localStorage.setItem('role', role);
};

const roleSlice = createSlice({
  name: 'role',
  initialState: loadRole(),
  reducers: {
    setRole: (_state, action: PayloadAction<Role>) => {
      saveRole(action.payload);
      return action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;