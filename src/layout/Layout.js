import {Outlet, Navigate} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  Avatar,
  Box,
  DialogActions,
  Button,
} from "@mui/material";
import {useIsLoggedIn, useCurrentUser} from "../config/hooks";
import {useState} from "react";
import {User as UserIcon} from "feather-icons-react";

export default function Layout() {
  const currentUser = useCurrentUser();

  const isLoggedIn = useIsLoggedIn();
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);

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
                setProfileDialogOpen(true);
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
              }}
            >
              Sign Out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      {/* Profil info dialog */}
      <Dialog
        open={profileDialogOpen}
        onClose={() => {
          setProfileDialogOpen(false);
        }}
      >
        <DialogTitle>Profile</DialogTitle>
        <DialogContent dividers>
          <Box display="flex" alignItems="center">
            <Avatar />
            <Box ml={3}>
              <Typography>{currentUser?.displayName}</Typography>
              <Typography>{currentUser?.email}</Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setProfileDialogOpen(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Outlet />
    </>
  );
}
