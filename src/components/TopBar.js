import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TopBar({tabVal, setTabVal, tabDisable}) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={tabVal} onChange={(e, newVal) => setTabVal(newVal)} aria-label="basic tabs example">
        <Tab label="Upload" {...a11yProps(0)} />
        <Tab label="Facebook (Meta)" {...a11yProps(1)} disabled={tabDisable}  />
        <Tab label="Twitter" {...a11yProps(2)} disabled={tabDisable} />
      </Tabs>
    </Box>
  )
}

export default TopBar