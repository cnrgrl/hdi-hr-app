import {Outlet, Navigate} from "react-router-dom";
import {Container} from "@mui/material";
import {useIsLoggedIn} from "../config/hooks";

export default function AuthLayout() {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn === null) return <h1>Loading...</h1>;
  else if (isLoggedIn === false) return <Navigate replace to="/" />;

  return (
    <Container maxWidth="xs" sx={{pt: 4}}>
      Hi Caner, you logged in!
      <Outlet />
    </Container>
  );
}
