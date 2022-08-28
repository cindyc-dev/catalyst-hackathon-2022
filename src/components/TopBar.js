import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { SignOut } from "../firebase/LoginProvider";


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function handleSetting(setting, setUser) {
    if (setting === "Logout") {
        console.log("Logout")
        SignOut();
        setUser(null)
    }
}

const settings = ["Logout"];

function TopBar({ tabVal, setTabVal, tabDisable, setUser }) {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {

        setAnchorElUser(null);
    };
    return (
        <Box sx={{ padding: 1, display: "flex", flexDirection: "row" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Tabs
                    value={tabVal}
                    onChange={(e, newVal) => setTabVal(newVal)}
                    aria-label="basic tabs example"
                >
                    <Tab label="Upload" {...a11yProps(0)} />
                    <Tab
                        label="Facebook (Meta)"
                        {...a11yProps(1)}
                        disabled={tabDisable}
                    />
                    <Tab
                        label="Twitter"
                        {...a11yProps(2)}
                        disabled={tabDisable}
                    />
                </Tabs>
            </Box>
            <Box>
                <Tooltip title="Open setting" index={4}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Hello" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={() => handleSetting(setting, setUser)}>
                            <Typography textAlign="center">
                                {setting}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Box>
    );
}

export default TopBar;
