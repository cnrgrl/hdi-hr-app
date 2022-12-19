import * as React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function UpdateForm({ getNewData, personData, handleClose }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
  } = useForm();

  const updateEmployee = async (data) => {
    console.log('update req..')
    if (data) {
      data["User_Fullname"] = data.User_Lastname + ", " + data.User_Firstname;
    }
    axios
      .post("http://localhost:8383/updateemployee/" + data.id, data)
      .then((res) => {
        getNewData();
      })
      .catch(function (error) {
        console.log(error);
      });
    reset();
  };


  return (
    <form name="updateForm" onSubmit={handleSubmit(updateEmployee)}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Update the record
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Last Name"
        defaultValue={personData?.User_Firstname}
        {...register("User_Firstname", { required: true })}
      />
      <TextField
        fullWidth
        margin="normal"
        label="First Name"
        defaultValue={personData?.User_Lastname}
        {...register("User_Lastname", { required: true })}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Skill_1"
        defaultValue={personData?.Skill_1}
        {...register("Skill_1")}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Skill_2"
        defaultValue={personData?.Skill_2}
        {...register("Skill_2")}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Skill_3"
        defaultValue={personData?.Skill_3}
        {...register("Skill_3")}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Skill_4"
        defaultValue={personData?.Skill_4}
        {...register("Skill_4")}
      />
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button type="submit" size="small" variant="outlined" sx={{ m: 2 }} onClick={() => {
          setValue('id', personData?.id)
        }}>
          EDIT
        </Button>
        <Button type="reset" size="small" variant="contained" sx={{ m: 2 }} onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </form>
  );
}
