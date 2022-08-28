import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import { Box, Grid, TextField, Button } from "@mui/material";
import "./TabBody.css";
import ChipsArray from "./ChipsArray";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'Personal',
  'Event WrapUp',
  'Event Notice 1',
  'Event Notice 2',
  'Event Notice 3'
];

const descrip = {
  'Personal': `Happy [Day]!, My plan for today is to [action(s)]. What goals are you going to crush? Let me know in the comments!`,
  'Event WrapUp': `And that’s a wrap on #[Event Name] 🎉! We loved having you all here, and we hope you had as much fun as we did 😍. There was so much to see: [Event Components] and so much more! Thank you to everyone that visited, it was a blast. 💞`,
  'Event Notice 1': `/////////////////////////////////////////////////////////////////////////////////////////
  [Event Name] is coming! 👀
  
  Get hyped for the biggest, warmest [Event Name] on [Location]! [Event Name] is [Introduction]. [Action statement that pertains to your event: dance your face off, learn from the smartest people in the business, eat all the best things…] and so much more! 🎊
  
  Keep your eyes peeled for our socials to hear about what’s on and get your tickets now! 🤩
  
  🗓 [Date]
  ⏰ [Time]
  📍 [Location]
  ✍️ Register: [Register Link]`,
  'Event Notice 2': `/////////////////////////////////////////////////////////////////////////////////////////
  Get ready to [action statement that pertains to your event: dance your face off, learn from the smartest people in the business, eat all the best things…] 🌟. The [xx]th annual [Event Name] is back 💥! Come visit [Event name] and keep your eyes peeled for our socials to hear about what’s on and get your tickets now! 🤩
  
  🗓 [Date]
  ⏰ [Time]
  📍 [Location]
  ✍️ Register: [Register Link]`,
  'Event Notice 3': `/////////////////////////////////////////////////////////////////////////////////////////
  Guess what ?! 😎
  
  We’re beyond excited to have [name of performer, speaker, or special guest] back at [event name] this year 🔥. And this year, we have a surprise guest alert 🙊: Grab your tickets now and find out what [celebrity chef/performer/speaker] will make an appearance ✨! 
  
  🗓 [Date]
  ⏰ [Time]
  📍 [Location]
  ✍️ Register: [Register Link]`
}

const ITEM_HEIGHT = 48;

const TabBody = ({ images }) => {
    const [description, setDescription] = useState("0");
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <Box id="tabBody">
            <div className="tab-container">
                <div className="image-container">
                    <ImageCarousel images={images} className="image-carousel" />
                </div>
                <div
                    className="input-group"
                    style={{ height: "100%", textAlign: "left" }}
                >
                    <TextField
                        label="Description"
                        multiline
                        rows={12}
                        sx={{ width: "100%" }}
                        value={description}
                        onChange={(e) => {
                            setDescription(e.currentTarget.value);
                        }}
                    />
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      Templates
                    </Button>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        'aria-labelledby': 'long-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: '20ch',
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem key={option} onClick={() => {setDescription(descrip[option]); handleClose()}}>
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
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
    );
};

export default TabBody;
