import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

//base func for fetching contacts from first load and pagination
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async ({ page }, thunkAPI) => {
    try {
      const response = await axios.get(`/users?page=${page}&count=6`);
      //   console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//fetch after form submit
export const fetchNewContacts = createAsyncThunk(
  'contacts/fetchNew',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/users?page=1&count=6`);
      //   console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//fetch token on first page load
export const fetchToken = createAsyncThunk(
  'token/fetchToken',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/token`);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//fetch all avilable positions on first page load
export const fetchPositions = createAsyncThunk(
  'positions/fetchPositions',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/positions`);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//posting our new user
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ formData, token }, thunkAPI) => {
    try {
      const response = await axios.post('/users', formData, {
        headers: {
          Token: token,
          'Content-Type': 'multipart/form-data',
        },
      });
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
