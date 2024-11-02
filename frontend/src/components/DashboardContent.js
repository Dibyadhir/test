import React from 'react'
import { Avatar, Box, Container, Grid, Grid2, IconButton, ListItemIcon, MenuItem, Paper, Skeleton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import DashboardLayoutAccount from './Dashbord';

function DashboardContent() {
    return (
        <>
        <DashboardLayoutAccount>
            <Paper
                sx={{
                    p: 2,
                    width: '100%',
                    marginTop: 2,
                    marginLeft: 2,
                    marginRight: 2,
                    // bgcolor: orange[500],
                    color: 'white',
                    textAlign: 'center'
                }}
               
            >
                <Typography color='primary' fontSize={25} variant='h2' fontWeight="bold">Welcome DibyaKanti !</Typography>
            </Paper>

            <Paper sx={{ display: 'flex', gap: 2, mt: 2, marginLeft: 2 }}>
                <Paper elevation={10} sx={{ p: 2, flex: 1 }}>
                    <Typography color='primary' variant="h6" fontWeight="bold">Activity Feed</Typography>
                </Paper>

                <Paper elevation={10} sx={{ p: 2, flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <Typography color='primary' variant="h6" fontWeight="bold">Friends List</Typography>
                        <Search />
                    </Box>
                    
                </Paper>
            </Paper>
            </DashboardLayoutAccount>

        </>
    );
}

export default DashboardContent