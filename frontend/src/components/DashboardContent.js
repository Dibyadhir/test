import React, { useEffect, useState } from 'react'
import { Avatar, Box, Container, Grid, Grid2, IconButton, ListItemIcon, MenuItem, Paper, Skeleton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import DashboardLayoutAccount from './Dashbord';
import axios from 'axios';

function DashboardContent() {
    const [loginActivityData, setLoginActivityData] = useState({activity_time:'', first_name:'', last_name:''})
    useEffect(()=>{
        axios.post('http://localhost:8000/user-login-activity',{userId:localStorage.getItem('userId')})
        .then(res=>setLoginActivityData(res.data[0]))
    },[])
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
                <Typography color='primary' fontSize={25} variant='h2' fontWeight="bold">Welcome {loginActivityData.first_name+ ' '+loginActivityData.last_name}!</Typography>
                <Typography color='info'>Last Login:{new Date(loginActivityData.activity_time).toLocaleString()}</Typography>
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