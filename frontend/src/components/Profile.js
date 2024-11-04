// src/ProfileUpdatePage.js
import React, { useEffect, useState } from 'react';
import {
    Avatar,
    Button,
    Container,
    FormControl,
    InputLabel,
    OutlinedInput,
    Select,
    MenuItem,
    Stack,
    Typography,
    IconButton,
    TextField,
    Paper,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import DashboardLayoutAccount from './Dashbord';
import { PageContainer } from '@toolpad/core/PageContainer';

export default function ProfilePage() {
    const [userData, setUserData] = useState({
        pic: '',
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        dob: '',
        about_yourself: '',
    });

    useEffect(() => {
        axios.post('http://localhost:8000/getuser', { userId: localStorage.getItem('userId') })
            .then(res => setUserData(res.data))
       
    }, [])

    const handleUserDataChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleCapture = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserData({ ...userData, pic: reader.result });
            };
            reader.readAsDataURL(file);
        } else {
            setUserData({ ...userData, pic: '' });
        }
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/updatepersonalinfo', userData);
            alert('Profile updated succssfully')
            //toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error updating profile');
        }
    };

    return (
        <>
        <DashboardLayoutAccount>
          
            <Container maxWidth="lg" >
                <Paper elevation={3} sx={{ p: 4 }}>
                    <form onSubmit={handleUpdateProfile}>
                        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar src={userData.pic} sx={{ width: 100, height: 100 }} />
                            <Button component="label" size="small" sx={{ mt: 2 }}>
                                Upload Profile
                                <input type="file" hidden accept="image/png, image/jpeg" onChange={handleCapture} />
                            </Button>
                            {userData.pic && (
                                <IconButton size="small" color="error" onClick={() => setUserData({ ...userData, pic: '' })}>
                                    <Delete />
                                </IconButton>
                            )}
                        </Container>
                        <Stack spacing={2} mb={2}>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}   >
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel size="small" required >First Name</InputLabel>
                                    <OutlinedInput size="small" name="first_name" value={userData.first_name} onChange={handleUserDataChange} required={true} type={"text"} label="First Name" placeholder="enter first name" />
                                </FormControl>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel size="small" required >Last Name</InputLabel>
                                    <OutlinedInput size="small" name="last_name" value={userData.last_name} onChange={handleUserDataChange} required={true} type={"text"} label="Last Name" placeholder="enter last name" />
                                </FormControl>
                            </Stack>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel size="small" required>Email</InputLabel>
                                <OutlinedInput
                                    size="small"
                                    name="email"
                                    required={true}
                                    type={'email'}
                                    label="Email"
                                    value={userData.email}
                                    disabled
                     
                                />
                            </FormControl>
                            <Stack spacing={2}>
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, sm: 1, md: 2, lg: 2 }}  >
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel size="small" required >Gender</InputLabel>
                                        <Select name="gender" size="small" value={userData.gender} onChange={handleUserDataChange} required label="Gender">
                                            <MenuItem value='male'>Male</MenuItem>
                                            <MenuItem value='female'>Female</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                    type='date'
                                    label='Date of birth'
                                    fullWidth
                                    required
                                    size='small'
                                    name='dob'
                                    value={userData.dob}
                                    InputLabelProps={{ shrink: true }}
                                    onChange={handleUserDataChange}

                                    />
                                </Stack>
                                <FormControl fullWidth variant="outlined">
                                <InputLabel size="small"  >About Yourself</InputLabel>
                                <OutlinedInput size="small" value={userData.about_yourself} onChange={handleUserDataChange} name="about_yourself" multiline minRows={3} maxRows={3} type={"text"} label="About Yourself" placeholder="enter about yourself" />
                            </FormControl>
                            </Stack>
                            <Stack direction="row" justifyContent="center" mt={4}>
                                <Button type="submit" variant="contained" color="success">Update Profile</Button>
                            </Stack>
                        </Stack>
                    </form>
                </Paper>
            </Container>
            
            </DashboardLayoutAccount>
            
        </>
    );
}
