import React, { useState } from "react";
import ImageCarousel from "./components/ImageCarousel";
import { Box, Grid, TextField, Button } from "@mui/material";
import { getPages, publishPost, uploadPhoto } from "./api/facebook";

const TabBody = ({ images }) => {
    const [description, setDescription] = useState("");
    return (
        <Box width={1000} mx={"auto"}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <ImageCarousel images={images} />
                </Grid>
                <Grid
                    style={{ height: "100%" }}
                    item
                    xs={6}
                    sx={{ textAlign: "left" }}
                >
                    <Grid>
                        <TextField
                            label="Description"
                            multiline
                            rows={12}
                            sx={{ width: "100%" }}
                            value={description}
                            onChange={(e) => setDescription(e.currentTarget.value)}
                        />
                    </Grid>
                    <Grid style={{ height: "100%" }}>
                    <Button
                          onClick={() => {
                            getPages(localStorage.getItem("facebook"))
                          }}
                        >getpages</Button>
                        <Button
                          onClick={() => {
                            publishPost()
                          }}
                        >publish post</Button>
                        <Button
                            onClick={() => {
                                console.log(localStorage.getItem("facebook"));
                                uploadPhoto(
                                    "me",
                                    localStorage.getItem("facebook"),
                                    images[0]["data_url"]
                                );
                            }}
                        >
                            test fb uplaod
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TabBody;
