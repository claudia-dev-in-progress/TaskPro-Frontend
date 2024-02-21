import React from 'react';
 
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography } from '@mui/material';
 
import { FiltersButtons } from 'components/FiltersButtons/FiltersButtons';

export const ModalFilter = ({ handleClose, onClick }) => {
    let priority = '';
    return (
    <FormControl sx={{width: "100%"}}>
      <Typography
        sx={{
          marginBottom: '24px',
          color: 'rgba(255, 255, 255, 1)',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '1.5',
          letterSpacing: '-0.36px',
        }}
      >
        Filters
      </Typography>

      <FormLabel
        sx={{
          color: 'rgba(255, 255, 255, 1)',
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '1.5',
          marginBottom: "15px",
          paddingTop: "15px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1) "
        }}
        id="demo-radio-buttons-group-label"
      >
        Label color
      </FormLabel>
      <FiltersButtons
          onFilterChange={() => priority}
          onclick={handleClose}
           
        />
    </FormControl>
  );
};