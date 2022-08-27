import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Masonry from "./Masonry";
import ImageUploading from "react-images-uploading";
import Box from "@mui/material/Box";
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
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-end",
                            p: 1,
                            m: 1,
                            gap: 1,
                        }}
                    >
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
                    </Box>
                    <Box height="80vh" display="flex" {...dragProps}>
                        <Masonry
                            imageList={imageList}
                            onImageRemove={onImageRemove}
                        />
                    </Box>
                </Box>
            )}
        </ImageUploading>
    );
}

export default ImageUpload;
