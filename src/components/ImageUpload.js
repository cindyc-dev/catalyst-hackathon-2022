import React from "react";
import { Button } from "@mui/material";
import Masonry from "./Masonry";
import ImageUploading from "react-images-uploading";
import Box from "@mui/material/Box";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import "./ImageUpload.css";

const maxNumber = 69;
function ImageUpload({ images, setImages, setTabDisable }) {
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        if (imageList.length >= 1) {
            setTabDisable(false);
        } else {
            setTabDisable(true);
        }
    };
    return (
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
                <Box
                    id="upload-tab"
                >
                    <div className="btn-group">
                        <Button onClick={onImageUpload} sx={{display: 'block'}}>
                            <img src="upload.png" alt="Upload Icon" />
                            <p>Upload</p>
                        </Button>
                        <Button onClick={onImageRemoveAll} sx={{display: 'block'}}>
                            <img src="bin.png" alt="Remove All Icon" />
                            <p>Remove All</p>
                        </Button>
                    </div>
                    <Box className="upload-image-container">
                        <div className="image-gallery" {...dragProps}>
                            {imageList.length > 0 ? (
                                <Masonry
                                    imageList={imageList}
                                    onImageRemove={onImageRemove}
                                />
                            ) : (
                                <Button onClick={onImageUpload} id="no-image">
                                    <FileDownloadOutlinedIcon id="upload-icon" />Click or Drag to Upload
                                </Button>
                            )}
                        </div>
                    </Box>
                </Box>
            )}
        </ImageUploading>
    );
}

export default ImageUpload;
