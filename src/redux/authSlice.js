import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {auth} from "../config/firebase";
import {createUserWithEmailAndPassword, updateCurrentUser} from "firebase/auth";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async ({name, email, password}) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateCurrentUser(auth, {displayName: name});
    } catch (e) {
      return console.error(e.code);
    }
  }
);

export const login = createAsyncThunk(
  "auth/register",
  async ({email, password}) => {
    alert("hi");
  }
);

export const extr = createAsyncThunk("auth/register", async () => {
  alert("hi");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {changeName, changeEmail, changePassword} = authSlice.actions;

export default authSlice.reducer;
