import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmail, setMessage } from "../../redux/help/messageSlice";
import { sendMessageHelp } from "../../redux/help/messageOperation";
import { Button, Typography, Box, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

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

export default function ModalHelp({ visible, onClose }) {
  const dispatch = useDispatch();
  const [email, setEmailLocal] = useState("");
  const [comment, setComment] = useState("");

  const handleEmailChange = (e) => {
    setEmailLocal(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setEmail(email));
    dispatch(setMessage(comment));
    dispatch(sendMessageHelp({ email: email, comment: comment }));

    onClose();
  };

  if (!visible) return null;

  return (
    <ThemeProvider theme={theme}>
      <div className="   sm:mt-0 fixed inset-0 bg-black bg-opacity-30  flex justify-center items-center">
        <div className="relative  ">
          <div className=" rounded-[8px]  max-w-[335px]   bg-[#151515]   ">
            <button
              onClick={onClose}
              className="pr-[14px] pt-[14px]  absolute right-0  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-[24px]">
              <h4 className="text-white font-medium text-lg pb-[24px]">
                Need help
              </h4>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
              >
                <TextField
                  required
                  id="email"
                  label="Email address"
                  name="email"
                  variant="outlined"
                  onChange={handleEmailChange}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Comment"
                  multiline
                  rows={4}
                  defaultValue=""
                  onChange={handleCommentChange}
                />

                <Button
                  sx={{
                    mb: 1,
                    background: "rgba(190, 219, 176, 1)",
                    color: "rgba(22, 22, 22, 1)",
                    fontFamily: "Poppins",
                    textTransform: "unset",
                    width: "100%",
                    height: "49px",
                    marginTop: "20px",
                    gap: "10px",
                    "&:hover": {
                      color: "rgba(22, 22, 22, 1)",
                      backgroundColor: "rgba(190, 219, 176, 1)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(22, 22, 22, 1)",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      fontSize: "14px",
                      textTransform: "none",
                    }}
                  >
                    Send
                  </Typography>
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
