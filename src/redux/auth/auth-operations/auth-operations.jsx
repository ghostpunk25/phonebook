import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

const token = {
   set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   },
   unset() {
      axios.defaults.headers.common.Authorization = '';
   },
};


const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
   try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.data.token)
      return response.data
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   };
});


const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
   try {
      const response = await axios.post('/users/login', credentials);
      token.set(response.data.token)
      return response.data
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   };
});


const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
   try {
      const response = await axios.post('/users/logout');
      token.unset()
      return response.data
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   };
});

const refreshCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
   const state = thunkAPI.getState();
   const persistedToken = state.auth.token;

   if (persistedToken === null) {
      return thunkAPI.rejectWithValue('');
   };

   token.set(persistedToken);
   try {
      const response = await axios.get('/users/current');
      return response.data
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   };
});

const authOperations = {
   register,
   logIn,
   logOut,
   refreshCurrentUser,
};

export default authOperations;