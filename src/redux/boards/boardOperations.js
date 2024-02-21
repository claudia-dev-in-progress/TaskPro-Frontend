import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
  delete axios.defaults.headers.common["Authorization"];
}

export const getBoards = createAsyncThunk(
  "boards/getBoards",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/board");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  "boards/addBoards",
  async (board, thunkAPI) => {
    const { title, icon, background } = board;
    try {
      const response = await axios.post("/board", { title, icon, background });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getActiveBoard = createAsyncThunk(
  "boards/getActiveBoard",
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.get(`/board/${boardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  "boards/getBoardById",
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.get(`/board/${boardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  "boards/updateBoard",
  async ({ boardId, title, background }, thunkAPI) => {
    try {
      const response = await axios.put(`/board/${boardId}`, {
        title,
        background,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "boards/deleteBoard",
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/board/${boardId}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  "column/addColumn",
  async ({ boardId, data }, thunkAPI) => {
    try {
      const res = await axios.post(`/column/${boardId}`, data);
      console.log("Add Column Response:", res);

      const columnId = res.data.columnId;

      console.log("ColumnId:", columnId);
      thunkAPI.dispatch(getBoardById(res.data.board));
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateColumn = createAsyncThunk(
  "column/updateColumn",
  async ({ boardId, id, data }, thunkAPI) => {
    try {
      const res = await axios.put(`/column/${boardId}`, data);
      thunkAPI.dispatch(getBoardById(res.data.board));
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getColumnsByBoardId = createAsyncThunk(
  "columns/getColumnsByBoardId",
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.get(`/columns?boardId=${boardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  "column/deleteColumn",
  async ({ boardId, columnId }, thunkAPI) => {
    try {
      const res = await axios.delete(`/column/${boardId}`, {
        data: { columnId },
      });
      thunkAPI.dispatch(getBoardById(res.data.data.board));
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCard = createAsyncThunk(
  "cards/addCard",
  async ({ boardId, owner, ...cardData }, thunkAPI) => {
    try {
      const response = await axios.post(`/card/${boardId}`, {
        owner,
        ...cardData,
      });

      thunkAPI.dispatch(getBoardById(boardId));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateCard = createAsyncThunk(
  "cards/updateCard",
  async ({ boardId, columnId, cardId, data }, thunkAPI) => {
    try {
      const res = await axios.put(
        `/card/${boardId}/${columnId}/${cardId}`,
        data
      );
      thunkAPI.dispatch(getBoardById(res.data.board));
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async ({ boardId, columnId, cardId }, thunkAPI) => {
    try {
      const res = await axios.delete(`/card/${boardId}/${columnId}/${cardId}`);
      thunkAPI.dispatch(getBoardById(res.data.board));
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
