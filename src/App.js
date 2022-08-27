import './App.css';
import React, { useState } from 'react';

import ImageUploading from 'react-images-uploading';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import TopBar from './components/TopBar';
import { Button, ImageListItemBar, Link } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Login } from './firebase';
import IconButton from '@mui/material/IconButton';
import FileUploadIcon from '@mui/icons-material/FileUpload';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function App() {
  const [tabVal, setTabVal] = useState(0);
  const [tabDisable, setTabDisable] = useState(true);
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    if (imageList.length >= 1) {
      setTabDisable(false);
    } else {
      setTabDisable(true);
    }
  };
  

  return (
    <div className="App">
      <TopBar tabVal={tabVal} setTabVal={setTabVal} tabDisable={tabDisable} />
      <TabPanel value={tabVal} index={0}>
        <Button
          variant="contained"
          onClick={() => Login("facebook")}
        >
          Login
        </Button>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <Box>
              {
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                p: 1,
                m: 1,
                gap: 1,
              }}>
                <Button
                  variant="contained"
                  startIcon={<FileUploadIcon />}
                  onClick={onImageUpload}
                >
                  Upload
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={onImageRemoveAll}
                >
                  Remove all
                </Button>
              </Box>}
              <Box height="80vh"
                display="flex" 
                style={{
                  border: imageList.length === 0 || isDragging ? "0.3em dashed grey" : null }}
                {...dragProps}
              >
                <Button
                  variant="contained"
                  startIcon={<FileUploadIcon />}
                  onClick={onImageUpload}
                >
                  Upload
                </Button>
                {imageList.length === 0 &&
                  <Box m="auto">
                    <IconButton
                      sx={{ color: 'white' }}
                      aria-label={`delete`}
                      onClick={onImageUpload}
                    >
                    <FileUploadIcon />
                    </IconButton>
                    <Typography>Drag files here or <Link onClick={onImageUpload}>browse</Link></Typography>
                  </Box>
                }
                &nbsp;

                
                <ImageList variant="masonry" cols={3} gap={8}>
                {imageList.map((image, index) => (
                  <ImageListItem key={index}>
                    <img src={image['data_url']} alt="" loading="lazy" />
                    {
                    <ImageListItemBar
                      position="bottom"
                      actionIcon={
                      <IconButton
                        sx={{ color: 'white' }}
                        aria-label={`delete`}
                        onClick={() => onImageRemove(index)}
                      >
                        <DeleteIcon/>
                      </IconButton>}
                      actionPosition="right"
                    />
                    }
                  </ImageListItem>
                ))}
                </ImageList>
              </Box>
            </Box>
          )}
        </ImageUploading>
      </TabPanel>

      <TabPanel value={tabVal} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={tabVal} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

export default App;