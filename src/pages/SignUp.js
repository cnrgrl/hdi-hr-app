import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
  changeName,
  changeEmail,
  changePassword,
  register,
} from "../redux/authSlice";

export default function SignUp() {
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(changeName(e.currentTarget.value));
  };

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({name, email, password}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{textAlign: "center"}}>
        Sign up
      </Typography>
      {error && (
        <Typography variant="h5" sx={{textAlign: "center"}}>
          error
        </Typography>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        required
        autoComplete="name"
        autoFocus
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email Address"
        required
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        required
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={isLoading}
        fullWidth
        sx={{mt: 2}}
      >
        {isLoading ? "Loadding..." : "Sign up"}
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mt: 4,
        }}
      >
        Already have an account? Sign in
      </Box>
    </form>
  );
}
