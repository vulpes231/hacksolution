import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  sendMsgLoading: false,
  sendMsgError: false,
  msgSent: false,
};

export const sendMsg = createAsyncThunk("msg/sendMsg", async (formData) => {
  const url = "https://getform.io/f/bxoogkma";
  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.statusText;
  } catch (error) {
    console.log(error);
    if (error.message) {
      const errMsg = error.response.message.data;
      throw new Error(errMsg);
    } else {
      throw error;
    }
  }
});

const msgSlice = createSlice({
  name: "msg",
  initialState,
  reducers: {
    resetSendMsg(state) {
      state.sendMsgLoading = false;
      state.sendMsgError = false;
      state.msgSent = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMsg.pending, (state) => {
        state.sendMsgLoading = true;
      })
      .addCase(sendMsg.fulfilled, (state) => {
        state.sendMsgLoading = false;
        state.sendMsgError = false;
        state.msgSent = true;
      })
      .addCase(sendMsg.rejected, (state, action) => {
        state.sendMsgLoading = false;
        state.sendMsgError = action.error.message;
        state.msgSent = true;
      });
  },
});

export const { resetSendMsg } = msgSlice.actions;
export default msgSlice.reducer;
