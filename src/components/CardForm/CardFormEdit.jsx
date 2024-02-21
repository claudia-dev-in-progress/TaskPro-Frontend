import 'react-datepicker/dist/react-datepicker.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React from 'react';
import  {MyDatePicker}  from './MyDatePicker';
import 'react-datepicker/dist/react-datepicker.css';

import RadioLabel from './RadioLabel';

export const CardFormEdit = () => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: 'rgba(190, 219, 176, 1)',
              color: 'rgba(22, 22, 22, 1)',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            '&.Mui-focused': {
              color: 'rgba(255, 255, 255, 0.3)',
            },
            color: 'rgba(255, 255, 255, 0.3)',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
            color: '#fff',
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '400',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box
          sx={{
            mt: 1,
            background: 'rgba(21, 21, 21, 1)',
            borderRadius: '8px',
            paddingLeft: '20px',
            paddingRight: '20px',
            width: '100%',
            height: '425px',
            '@media (max-width: 375px)': {
              padding: '24px 5px',
            },
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '18px',
              textTransform: 'none',
              marginBottom: '20px',
            }}
          >
            Edit card
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <TextField
              id="title"
              label="Title"
              name="title"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              defaultValue=""
            />
          </Box>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.3)',
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '12px',
              textTransform: 'none',
              marginTop: '15px',
              marginBottom: '5px',
            }}
          >
            Label color
          </Typography>
          <RadioLabel />
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.3)',
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '12px',
              textTransform: 'none',
              marginTop: '15px',
            }}
          >
            Deadline
          </Typography>
         <MyDatePicker />
          <Button
            sx={{
              mb: 1,
              background: 'rgba(190, 219, 176, 1)',
              color: 'rgba(22, 22, 22, 1)',
              fontFamily: 'Poppins',
              textTransform: 'unset',
              width: '100%',
              height: '49px',
              marginTop: '20px',
              gap: '10px',
              '&:hover': {
                color: 'rgba(22, 22, 22, 1)',
                backgroundColor: 'rgba(190, 219, 176, 1)',
              },
            }}
          >
            <AddBoxIcon
              sx={{
                width: '28px',
                height: '28px',
              }}
            />
            <Typography
              sx={{
                color: 'rgba(22, 22, 22, 1)',
                fontFamily: 'Poppins',
                fontWeight: '500',
                fontSize: '14px',
                textTransform: 'none',
              }}
            >
              Edit
            </Typography>
          </Button>
        </Box>
      </div>
    </ThemeProvider>
  );
};
