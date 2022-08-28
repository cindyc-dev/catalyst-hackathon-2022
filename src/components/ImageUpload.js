import React from "react";
import { Button } from "@mui/material";
import Masonry from "./Masonry";
import ImageUploading from "react-images-uploading";
import Box from "@mui/material/Box";
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
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        p: 1,
                        m: 1,
                        gap: 1,
                    }}
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
                    <Box display="flex" {...dragProps} className="image-container">
                        <div className="image-gallery">
                            <Masonry
                                imageList={imageList}
                                onImageRemove={onImageRemove}
                            />
                        </div>
                    </Box>
                </Box>
            )}
        </ImageUploading>
    );
}

export default ImageUpload;
