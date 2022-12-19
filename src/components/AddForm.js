import * as React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Form({ getNewData, handleClose }) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const addEmployee = async (data) => {
    if (data) {
      data["User_Fullname"] = data.User_Lastname + ", " + data.User_Firstname;
    }
    axios
      .post("http://localhost:8383/addemployee", data)
      .then(() => {
        console.log("running..");
        getNewData();
      })
      .catch(function (error) {
        console.log(error);
      });
    reset();
  };

  return (
    <form name="addForm" onSubmit={handleSubmit(addEmployee)}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Add a new record
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="First Name"
        {...register("User_Firstname", { required: true })}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Last Name"
        {...register("User_Lastname", { required: true })}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Skill_1"
        {...register("Skill_1")}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Skill_2"
        {...register("Skill_2")}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Skill_3"
        {...register("Skill_3")}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Skill_4"
        {...register("Skill_4")}
      />
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button type="submit" size="small" variant="outlined" sx={{ m: 2 }}>
          Done
        </Button>
        <Button type="reset" size="small" variant="contained" sx={{ m: 2 }} onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </form>
  );
}
