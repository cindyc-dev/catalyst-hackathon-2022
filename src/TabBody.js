import React from "react";
import ImageCarousel from "./components/ImageCarousel";
import { Box, Grid, TextField } from "@mui/material";

const TabBody = ({ images }) => {
  return (
    <Box sx={{ mx: 6 }}>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <ImageCarousel images={images} />
        </Grid>
        <Grid item xs={8} sx={{textAlign: 'left'}}>
          <TextField
            label="Description"
            multiline
            rows={12}
            sx={{ width: "50%" }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default TabBody;