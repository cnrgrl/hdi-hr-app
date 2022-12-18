import * as React from "react";
import {
  Box,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  TableCell,
  Table,
  Button,
  Container,
  Paper,
} from "@mui/material";
import {logout} from "../redux/authSlice";
import {useDispatch} from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                "& > th": {fontSize: 14, fontWeight: 600},
              }}
            >
              <TableCell>User_ID</TableCell>
              <TableCell>User_Fullname</TableCell>
              <TableCell align="right">User_Lastname</TableCell>
              <TableCell align="right">User_Firstname</TableCell>
              <TableCell align="right">Skill_1</TableCell>
              <TableCell align="right">Skill_2</TableCell>
              <TableCell align="right">Skill_3</TableCell>
              <TableCell align="right">Skill_4</TableCell>
              <TableCell align="right" colSpan={2}>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    color="success"
                    fullWidth
                    variant="contained"
                    onClick={handleLogOut}
                  >
                    sign out
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              hover
              sx={{"&:last-child td, &:last-child th": {border: 0}}}
            >
              <TableCell component="th" scope="row">
                id-1
              </TableCell>
              <TableCell align="right">Caner Ugurlu</TableCell>
              <TableCell align="right">Ugurlu</TableCell>
              <TableCell align="right">Caner</TableCell>
              <TableCell align="right">CSS</TableCell>
              <TableCell align="right">HTML</TableCell>
              <TableCell align="right">SQL</TableCell>
              <TableCell align="right">JS</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  onClick={() => {
                    console.log("edited");
                  }}
                >
                  edit
                </Button>
              </TableCell>

              <TableCell align="right">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    console.log("deleted");
                  }}
                >
                  delete
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{textAlign: "right"}} colSpan={10}>
                TOTAL
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
