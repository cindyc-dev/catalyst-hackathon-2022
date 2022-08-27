import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Masonry({ imageList, onImageRemove }) {
    return (
        <ImageList variant="masonry" cols={3} gap={8}>
            {imageList.map((image, index) => (
                <ImageListItem key={index}>
                    <img src={image["data_url"]} alt="" loading="lazy" />
                    {
                        <ImageListItemBar
                            position="bottom"
                            actionIcon={
                                <IconButton
                                    sx={{
                                        color: "white",
                                    }}
                                    aria-label={`delete`}
                                    onClick={() => onImageRemove(index)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                            actionPosition="right"
                        />
                    }
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default Masonry;
