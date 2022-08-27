import './App.css';
import React, { useState } from 'react';

import ImageUploading from 'react-images-uploading';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TopBar from './components/TopBar';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FacebookLogin } from './firebase/LoginProvider';

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
          onClick={FacebookLogin}
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
            // write your building UI
            <div className="upload__image-wrapper">
              <Button
                variant="contained"
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </Button>

              &nbsp;

              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={onImageRemoveAll}
              >
                Remove all images
              </Button>

              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image['data_url']} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
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