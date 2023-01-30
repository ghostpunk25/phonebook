import { createSlice } from '@reduxjs/toolkit'
import { getContacts, addContact, deleteContact } from 'redux/contactsApi/contacts-operations/contacts-operations'

const initialState = {
   contacts: null,
   isLoading: false,
   error: null,
};

const handlePending = state => {
   state.isLoading = true;
};

const handleRejected = (state, action) => {
   state.isLoading = false;
   state.error = action.payload;
};

export const contactsSlice = createSlice({
   name: 'contacts',
   initialState,
   extraReducers: {
      [getContacts.pending]: handlePending,
      [getContacts.rejected]: handleRejected,
      [getContacts.fulfilled](state, action) {
         state.contacts = action.payload;
         state.isLoading = false;
      },
      [addContact.pending]: handlePending,
      [addContact.rejected]: handleRejected,
      [addContact.fulfilled](state, action) {
         state.contacts.push(action.payload);
         state.isLoading = false;
      },
      [deleteContact.pending]: handlePending,
      [deleteContact.rejected]: handleRejected,
      [deleteContact.fulfilled](state, action) {
         const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
         state.contacts.splice(index, 1);
         state.isLoading = false;
      },
   },
})

export const contactsReducer = contactsSlice.reducer