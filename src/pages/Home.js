import * as React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import Form from "../components/AddForm";
import UpdateForm from "../components/UpdateForm";
import {
  Box,
  Dialog,
  DialogContent,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  TableCell,
  Table,
  Button,
  Container,
  Paper,
  DialogActions,
  DialogContentText,
} from "@mui/material";

export default function Home() {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [personData, setPersonData] = useState({});
  const [updateFormOpen, setUpdateFormOpen] = useState(false);

  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line
  }, []);

  const AddForm = () => (
    <Dialog open={addFormOpen} onClose={() => setAddFormOpen(false)}>
      <DialogContent sx={{paddingTop: 5}}>
        <Form
          getNewData={() => {
            setAddFormOpen(false);
            getEmployees();
          }}
          handleClose={() => setAddFormOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );

  const EditPersonForm = () => {
    return (
      <Dialog
        open={updateFormOpen}
        onClose={() => {
          setUpdateFormOpen(false);
        }}
      >
        <DialogContent sx={{paddingTop: 5}}>
          <UpdateForm
            personData={personData}
            getNewData={() => {
              setUpdateFormOpen(false);
              getEmployees();
              console.log("Method  Update running..");
            }}
            handleClose={() => setUpdateFormOpen(false)}
          />
        </DialogContent>
      </Dialog>
    );
  };

  const getEmployees = async (data) => {
    axios
      .get("http://localhost:8383/employees", {crossdomain: true})
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((err) => console.log(err));
    // reset();
  };

  const deleteEmployee = async (id) => {
    console.log(id);
    axios
      .post("http://localhost:8383/deleteemployee/" + id)
      .then(() => console.log({status: "Delete successful"}))
      .catch((err) => console.log(err));
    getEmployees();
  };

  const DeleteDialog = () => (
    <Dialog open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
      <DialogContent sx={{paddingTop: 5}}>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure to delete the record?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={() => deleteEmployee(personData.id)}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDeleteModalOpen(false)}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Container>
      {addFormOpen && <AddForm open={addFormOpen} />}
      {updateFormOpen && <EditPersonForm open={addFormOpen} />}
      {deleteModalOpen && <DeleteDialog open={deleteModalOpen} />}
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
                    onClick={() => setAddFormOpen(true)}
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
                          setPersonData(e);
                          setUpdateFormOpen(true);
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
                          setPersonData(e);
                          setDeleteModalOpen(true);
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
