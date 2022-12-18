import {Box, Button, Link, TextField, Typography} from "@mui/material";

export default function SignIn() {
  const handleEmailChange = (e) => {};

  const handlePasswordChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{textAlign: "center"}}>
        Sign in
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Email Address"
        required
        autoComplete="email"
        autoFocus
        value={"email"}
        onChange={handleEmailChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        required
        type="password"
        value={"password"}
        onChange={handlePasswordChange}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={"isLoading"}
        fullWidth
        sx={{mt: 2}}
      >
        Sign in
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
        }}
      >
        Forgot Password?
        <span>Forgot Password?</span>
        <span>Don't have an account? Sign up</span>
      </Box>
    </form>
  );
}
