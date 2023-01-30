import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const getContacts = createAsyncThunk('contacts/getContacts', async (_, thunkAPI) => {
   try {
      const response = await axios.get('/contacts');
      return response.data
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   };
});


export const addContact = createAsyncThunk('contacts/addContact', async (credentials, thunkAPI) => {
   try {
      const response = await axios.post('/contacts', credentials);
      if (response.data) {
         Notify.success('Контакт додано!');
         return response.data
      }
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   };
});


export const deleteContact = createAsyncThunk('contacts/logout', async (id, thunkAPI) => {
   try {
      const response = await axios.delete(`/contacts/${id}`);
      Notify.failure('Контакт видалено!');
      return response.data
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   };
});