import {Provider} from "react-redux";
import Router from "./config/router";
import {store} from "./redux";
import {CssBaseline} from "@mui/material";

export default function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  );
}
