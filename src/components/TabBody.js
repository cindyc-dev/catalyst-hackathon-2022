import React from "react";
import ImageCarousel from "./ImageCarousel";
import { Box, Grid, TextField, Button } from "@mui/material";
import "./TabBody.css";
import ChipsArray from "./ChipsArray";

const TabBody = ({ images }) => {
  return (
    <Box id="tabBody">
      <div className="tab-container">
        <div className="image-container">
          <ImageCarousel images={images} className="image-carousel" />
        </div>
        <div className="input-group" style={{height: "100%", textAlign: 'left'}}>
          <TextField
            label="Description"
            multiline
            rows={12}
            sx={{ width: "100%" }}
          /> 
          <div>
            <h2>Hashtags</h2>
            <div className="hashtag-buttons">
              <ChipsArray />
            </div>
          </div>
          <div id="post-btn-group">
            <Button variant="contained">post</Button>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default TabBody;