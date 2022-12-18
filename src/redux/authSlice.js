import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {auth} from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signOut,
} from "firebase/auth";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async ({name, email, password}, {rejectWithValue}) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateCurrentUser(auth, {displayName: name});
    } catch (e) {
      return rejectWithValue(e.code);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async ({email, password}, {rejectWithValue}) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      return rejectWithValue(e.code);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
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
