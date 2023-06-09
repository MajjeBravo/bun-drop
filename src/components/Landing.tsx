import { Box, Typography } from '@mui/material';
import React from 'react';


function Landing() {
    return (  
        <Box sx={{mt:8, width: "100%", textAlign: "center"}}>
          <Typography variant="h2"> Welcome To Our Drone Delivered Burger Shop</Typography>
          <Typography variant="h4"> Please Check Out Our Menu!</Typography>
        </Box>

    );
}

export default Landing;