import {Outlet, Navigate} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {User as UserIcon} from "feather-icons-react";
import {useIsLoggedIn} from "../config/hooks";
import {useState} from "react";

export default function Layout() {
  const isLoggedIn = useIsLoggedIn();
  const [anchorEl, setAnchorEl] = useState(null);

  if (isLoggedIn === null) return <h1>Loading...</h1>;
  else if (isLoggedIn === false) return <Navigate replace to="/sign-in" />;

  return (
    <>
      {" "}
      <AppBar sx={{position: "static", marginBottom: 6}}>
        <Toolbar>
          <Typography variant="h6" sx={{flexGrow: 1}}>
            Home
          </Typography>
          <IconButton
            color="inherit"
            size="large"
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
            }}
          >
            <UserIcon />
          </IconButton>

          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => {
              setAnchorEl(null);
            }}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
              }}
            >
              New Record
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
