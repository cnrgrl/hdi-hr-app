import {Box, Button, TextField, Typography} from "@mui/material";

export default function SignUp() {
  const handleNameChange = (e) => {};

  const handleEmailChange = (e) => {};

  const handlePasswordChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{textAlign: "center"}}>
        Sign up
      </Typography>

      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        required
        autoComplete="name"
        autoFocus
        value={"name"}
        onChange={handleNameChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email Address"
        required
        autoComplete="email"
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
        Sign up
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mt: 4,
        }}
      >
        <span>Already have an account? Sign in</span>
      </Box>
    </form>
  );
}
