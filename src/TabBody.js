import React from "react";
import ImageCarousel from "./components/ImageCarousel";
import { Box, Grid, TextField, Button } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";


const TabBody = ({ images }) => {
  return (
    <Box sx={{ mx: 6 }}>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <ImageCarousel images={images} />
        </Grid>
        <Grid style={{ height: "100%" }} item xs={8} sx={{textAlign: 'left'}}>
          <Grid style={{ height: "100%" }}>
            <TextField
              label="Description"
              multiline
              rows={11.5}
              sx={{ width: "50%" }}
            />
          </Grid>
          <Grid style={{ height: "100%" }}>
        <Button startIcon={<FileUploadIcon />} multiline rows={2}>click to post</Button>
        </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TabBody;