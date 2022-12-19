import * as React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
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
import {logOut} from "../redux/authSlice";
import {useDispatch} from "react-redux";

export default function Home() {
  const [employee, setEmployee] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line
  }, []);

  const getEmployees = async (data) => {
    axios
      .get("http://localhost:8383/employees", {crossdomain: true})
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((err) => console.log(err));
    // reset();
  };

  const handleLogOut = () => {
    dispatch(logOut());
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
                    New Record
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employee
              ? employee?.map((e) => (
                  <TableRow
                    hover
                    key={e.id}
                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                  >
                    <TableCell align="right">{e?.User_Fullname}</TableCell>
                    <TableCell align="right">{e?.User_Lastname}</TableCell>
                    <TableCell align="right">{e?.User_Firstname}</TableCell>
                    <TableCell align="right">{e?.Skill_1}</TableCell>
                    <TableCell align="right">{e?.Skill_2}</TableCell>
                    <TableCell align="right">{e?.Skill_3}</TableCell>
                    <TableCell align="right">{e?.Skill_4}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        onClick={() => {
                          console.log("edit");
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
                          console.log("delete");
                        }}
                      >
                        delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              : undefined}

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
