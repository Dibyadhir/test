import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {
    AppProvider,
} from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import AccountSlotsAccountSwitcher from './AccountSlotsAccountSwitcher';
import { Avatar, Container, Grid, Grid2, IconButton, ListItemIcon, MenuItem, Paper, Skeleton, Stack, TextField, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { PageContainer, PageContainerToolbar } from '@toolpad/core/PageContainer';
import { orange } from '@mui/material/colors';

const NAVIGATION = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function Friendlists() {
    return (

        <Stack direction="column" spacing={1}>
            <MenuItem sx={{ p: 1, borderRadius: 1, '&:hover': { bgcolor: '#e0e0e0' } }}>
                <ListItemIcon>
                    <Avatar fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1" color='primary' sx={{ fontWeight: 'bold' }}> Diya</Typography>
            </MenuItem>

            <MenuItem sx={{ p: 1, borderRadius: 1, '&:hover': { bgcolor: '#e0e0e0' } }}>
                <ListItemIcon>
                    <Avatar fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1" color='primary' sx={{ fontWeight: 'bold' }}> Lucky</Typography>
            </MenuItem>
        </Stack>

    );
}

function DashboardPageContent({ pathname }) {
    return (
        <>
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
                    <Friendlists />
                </Paper>
            </Paper>

        </>
    );
}

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

export default function DashboardLayoutAccount(props) {
    const { window } = props;

    const [session, setSession] = React.useState({
        user: {
            name: 'Dibya Kanti Dhir',
            email: 'dibya8572@gmail.com',
            image: 'https://i.ibb.co/rGVS7C3/Diya-profile.jpg',
        },
    });

    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: 'Dibya Kanti Dhir',
                        email: 'dibya8572@gmail.com',
                        image: 'https://i.ibb.co/rGVS7C3/Diya-profile.jpg',
                    },
                });
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);

    const router = useDemoRouter('/dashboard');

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        // preview-start

        <AppProvider

            authentication={AccountSlotsAccountSwitcher}
            navigation={NAVIGATION}
            bgcolor = {"#59C7F3"}
            branding={{
                logo: (
                    <img
                        src="https://i.ibb.co/T0hBTPr/Untitled-design-removebg-preview-1.png"
                        alt="Wexa Talk"
                        style={{ width: '70px', height: '150px' }} // Adjust width as needed
                    />
                ),
                title: 'WexaTalk',
            }}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout slots={{toolbarAccount: AccountSlotsAccountSwitcher }}>
                <DashboardPageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
        // preview-end
    );
}
