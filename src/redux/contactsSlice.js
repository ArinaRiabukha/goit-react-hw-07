import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';

const contactsSlice= createSlice({
    name: "contacts",
    loading: false,
    error: null,
    initialState: {
        items: [],
      },
      extraReducers: builder => {
        builder
          .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
          })
          .addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
          })
          .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload); 
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
          })
      },
    });

export const contactsReducer = contactsSlice.reducer;