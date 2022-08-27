import React from "react";
import ImageCarousel from "./components/ImageCarousel";
import { Box, Grid, TextField, Button } from "@mui/material";

const TabBody = ({ images }) => {
  return (
    <Box width={500} mx={"auto"}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ImageCarousel images={images} />
        </Grid>
        <Grid style={{height: "100%"}} item xs={6} sx={{textAlign: 'left'}}>
          <Grid><TextField
            label="Description"
            multiline
            rows={12}
            sx={{ width: "70%" }}
          /> 
          </Grid>
          <Grid style={{height: "100%"}}>
          <Button>click to post</Button>
        </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TabBody;