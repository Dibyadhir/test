import React, { useEffect, useState } from 'react'
import { Avatar, Box, Container, Grid, Grid2, IconButton, List, ListItem, Paper, Divider,ListItemText, ListItemAvatar, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import DashboardLayoutAccount from './Dashbord';


import SearchIcon from '@mui/icons-material/Search';
import PersonAdd from '@mui/icons-material/PersonAdd';
import axios from 'axios';
import { toast } from 'react-toastify';
function DashboardContent() {
    const [userData, setUserData] = useState({
        profile_pic: '',
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        date_of_birth: '',
        about_yourself: '',
    });
  



    function Search() {
        return (
            <React.Fragment>
                <Tooltip title="Search" enterDelay={1000}>
                    <div>
                        <IconButton
                            type="button"
                            aria-label="search"
                            sx={{
                                display: { xs: 'inline', md: 'none' },
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                    </div>
                </Tooltip>
                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    slotProps={{
                        input: {
                            endAdornment: (
                                <IconButton type="button" aria-label="search" size="small">
                                    <SearchIcon />
                                </IconButton>
                            ),
                            sx: { pr: 0.5 },
                        },
                    }}
                    sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
                />
            </React.Fragment>
        );
    }
    function Friendslist(){
        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar  src={userData.profile_pic} />
                </ListItemAvatar>
                <ListItemText
                  primary={userData.first_name + userData.last_name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        {userData.about_yourself}
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Dibya kanti Dhir"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        Sandra Adams
                      </Typography>
                      {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                    
                  }
                />
              </ListItem>
            </List>
          );
    }
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
                            <Box>
                            <Friendslist />
                            </Box>
                

                    </Paper>
                </Paper>
            </DashboardLayoutAccount>

        </>
    );
}

export default DashboardContent