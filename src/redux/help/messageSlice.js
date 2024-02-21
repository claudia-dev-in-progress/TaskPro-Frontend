import { createSlice } from '@reduxjs/toolkit';
import { sendMessageHelp } from './messageOperation';

const messageSlice = createSlice({
  name: ' message',
  initialState: {
    comment: '',
    email: '',
    status: '',
    error: null,
  },

  reducers: {
    setMessage: (state, action) => {
      state.comment = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendMessageHelp.pending, state => {
        state.status = 'loading';
        state.error = null;
      })

      .addCase(sendMessageHelp.fulfilled, state => {
        state.status = 'succeeded';
      })
      .addCase(sendMessageHelp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export const {setMessage, setEmail} = messageSlice.actions;
export const messagerReduce = messageSlice.reducer
