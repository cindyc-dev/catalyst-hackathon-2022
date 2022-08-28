import React, {useState} from "react";
import ImageCarousel from "./ImageCarousel";
import { Box, Grid, TextField, Button } from "@mui/material";
import "./TabBody.css";
import ChipsArray from "./ChipsArray";

const TabBody = ({ images }) => {

  const [template, setTemplate] = useState("0");

  return (
    <Box id="tabBody">
      <div className="tab-container">
        <div className="image-container">
          <ImageCarousel images={images} className="image-carousel" />
        </div>
        <div className="input-group" style={{height: "100%", textAlign: 'left'}}>
          {(template=="0")?<TextField
            label="Description"
            multiline
            rows={12}
            sx={{ width: "100%" }}
          />: <TextField
          label="Happy [Day]!, My plan for today is to [action(s)]. What goals are you going to crush? Let me know in the comments!"
          multiline
          rows={12}
          sx={{ width: "100%" }}/>}
          
          <div>
            <h2>Hashtags</h2>
            <div className="hashtag-buttons">
              <ChipsArray />
            </div>
          </div>
          <div id="post-btn-group">
            <Button variant="contained">post</Button>
            <Button variant="contained" onClick={setTemplate("1")}>template1</Button>
            <Button variant="contained">template2</Button>
            <Button variant="contained">template3</Button>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default TabBody;