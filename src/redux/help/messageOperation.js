import { createAsyncThunk } from '@reduxjs/toolkit';

import { sendMessage } from '../../api/api';

export const sendMessageHelp = createAsyncThunk(
  'help',
  async ({ email, comment }) => {
    try {
      const response = await sendMessage.create({ email, comment });
      return response.data;
    } catch (error) {
       throw error
    }
  }
);

 
