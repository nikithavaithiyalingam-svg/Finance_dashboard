import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  modalOpen: boolean;
  editingId: string | null;
  currentPage: number;
}

const initialState: UiState = {
  modalOpen: false,
  editingId: null,
  currentPage: 1,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.editingId = null;
    },
    setEditingId: (state, action: PayloadAction<string | null>) => {
      state.editingId = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { openModal, closeModal, setEditingId, setPage } = uiSlice.actions;
export default uiSlice.reducer;