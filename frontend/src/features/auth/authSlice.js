import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Register new user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  // console.log('user: ', user);
  try {
    return await authService.register(user)
  } catch (error) {
    const message = 
      (error.response && 
        error.response.data && 
        error.response.data.message) || 
        error.message || 
        error.toString()
        
    return thunkAPI.rejectWithValue(message)
  }
})

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  console.log('user: ', user);
})

export const authSlice = createSlice ({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
  }
})

export default authSlice.reducer