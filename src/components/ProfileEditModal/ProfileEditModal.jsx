import React from "react";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import css from "./ProfileEditModal.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
//import { useDispatch } from 'react-redux';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
//import refresh from 'redux/auth/authOperations';

export default function ProfileEditModal() {
  const userAvatar = useSelector(selectUser);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "rgba(190, 219, 176, 1)",
              color: "rgba(22, 22, 22, 1)",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              color: "rgba(255, 255, 255, 0.3)",
            },
            color: "rgba(255, 255, 255, 0.3)",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "rgba(255, 255, 255, 0.3)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            color: "#fff",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: "400",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box
          sx={{
            mt: 1,
            background: "rgba(21, 21, 21, 1)",
            borderRadius: "8px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 18,
                color: "#fff",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
              gutterBottom
            >
              Edit Profile
            </Typography>
          </Box>
          <Avatar
            variant="rounded"
            src={userAvatar.avatarUrl}
            alt={userAvatar.name}
            sx={{
              marginLeft: "40%",
              width: "68px",
              height: "68px",
              position: "relative",
            }}
          />
          <button className={css.buttonAdd}>
            <AddIcon sx={{ fontSize: "small", color: "black" }} />
          </button>
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          <TextField
            name="name"
            required
            id="name"
            value={userAvatar.name}
            label="Enter your name"
            variant="outlined"
            autoFocus
          />
          <TextField
            required
            id="email"
            value={userAvatar.email}
            label="Enter your email"
            name="email"
            variant="outlined"
          />
          <Box>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="password" required>
                Create a password
              </InputLabel>
              <OutlinedInput
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.3)" }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Create a password*"
                value={userAvatar.pasword}
                required
              />
            </FormControl>
          </Box>
          <Button
            variant="text"
            type="submit"
            sx={{
              mb: 1,
              background: "rgba(190, 219, 176, 1)",
              color: "rgba(22, 22, 22, 1)",
              fontFamily: "Poppins",
              textTransform: "unset",
              width: "344px",
              height: "49px",
              marginTop: "20px",
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
