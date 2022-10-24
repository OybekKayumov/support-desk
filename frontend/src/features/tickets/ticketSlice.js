import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import ticketService from './ticketService';

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Create new ticket
export const createTicket = createAsyncThunk('tickets/create', async (ticketData, thunkAPI) => {
  // console.log('user: ', user);
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await ticketService.createTicket(ticketData, token)
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

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {

  }
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer
