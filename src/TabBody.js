import React from "react";
import ImageCarousel from "./components/ImageCarousel";
import { Box, Grid, TextField } from "@mui/material";

const TabBody = ({ images }) => {
  return (
    <Box width={1000} mx={"auto"}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ImageCarousel images={images} />
        </Grid>
        <Grid item xs={6} sx={{textAlign: 'left'}}>
          <TextField
            label="Description"
            multiline
            rows={12}
            sx={{ width: "70%" }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default TabBody;