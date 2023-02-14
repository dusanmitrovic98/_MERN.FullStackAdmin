import { useState, React } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "components/Navbar"

const Layout = () => {
    return <Box width="100%" height="height">
        <Box>
            <Navbar />
            <Outlet />
        </Box>
    </Box>
};

export default Layout;