import { Box, Typography, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { CardFormEdit } from "./CardFormEdit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(21, 21, 21, 1)",
  borderRadius: "8px",
  border: "1px solid rgba(190, 219, 176, 0.50)",
  p: 4,
};

export default function CardFormColumn({ boardId, columnId, cardId }) {
  const text =
    "Create a visually stunning and eye-catching watch dial design that embodies our brands essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.";

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showMore, setShowMore] = useState(false);
  const maxCharsToShow = 50;
  const fixedHeight = 154;

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box
      sx={{
        height: showMore ? "auto" : `${fixedHeight}px`,
        overflow: "hidden",
        maxHeight: showMore ? "1000px" : `${fixedHeight}px`,
        overflowY: "hidden",
        transition: "max-height 0.3s ease",
        padding: "14px 20px 14px 24px",
        borderRadius: "4px",
        borderLeft: "4px solid rgba(190, 219, 176, 1)",
        width: "334px",
        background: "rgba(18, 18, 18, 1)",
      }}
    >
      <Box>
        <Box>
          <Typography
            variant="h2"
            sx={{
              marginBottom: "8px",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "14px",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            Title
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: "5px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              marginBottom: "14px",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            {showMore ? text : `${text.slice(0, maxCharsToShow)}...`}
          </Typography>
          {text.length > maxCharsToShow && (
            <Button
              onClick={handleToggleShowMore}
              sx={{
                color: "rgba(18, 18, 18, 1)",
                fontSize: "12px",
                textTransform: "none",
                marginTop: "auto",
                alignSelf: "flex-end",
                padding: "0",
                minWidth: "0",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              {showMore ? (
                <ExpandLessIcon
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "transparent",
                    },
                  }}
                />
              ) : (
                <ExpandMoreIcon
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "transparent",
                    },
                  }}
                />
              )}
            </Button>
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "end" }}>
          <Box>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "8px",
              }}
            >
              Priority
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "10px",
              }}
            >
              Culoare x{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "8px",
              }}
            >
              Deadline
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "10px",
              }}
            >
              Data Deadline
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "end", gap: "3px" }}>
          <IconButton
            sx={{
              padding: "0",
              "&:hover": {
                backgroundColor: "rgba(18, 18, 18, 1)",
              },
            }}
            onClick={handleOpen}
          >
            <CreateTwoToneIcon
              fontSize="large"
              sx={{
                backgroundColor: "rgba(18, 18, 18, 1)",
                fontSize: 20,
                color: "rgba(255, 255, 255, 0.5)",
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              padding: "0",
              "&:hover": {
                backgroundColor: "rgba(18, 18, 18, 1)",
              },
            }}
          >
            <DeleteOutlineRoundedIcon
              fontSize="large"
              sx={{
                backgroundColor: "rgba(18, 18, 18, 1)",
                fontSize: 20,
                color: "rgba(255, 255, 255, 0.5)",
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            <CloseIcon />
          </IconButton>
          <CardFormEdit />
        </Box>
      </Modal>
    </Box>
  );
}
