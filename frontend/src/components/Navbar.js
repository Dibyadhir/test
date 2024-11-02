import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import AccountSlotsAccountSwitcher from './AccountSlotsAccountSwitcher';
import ProfilePage from './Profile';
import { Link } from 'react-router-dom';
import {AccountCircleIcon } from '@mui/icons-material'
import { Avatar } from '@mui/material';

const NAVIGATION = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
        path: '/dashboard', // Add path for routing
    },
    {
        segment: 'profile',
        title: 'Profile',
        icon: <Avatar />, // Assume you have this icon imported
        path: '/profile', // Add path for routing
    },
    // Add more navigation items as needed
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

function Navbar(props) {
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
                        name: 'Bharat Kashyap',
                        email: 'bharatkashyap@outlook.com',
                        image: 'https://avatars.githubusercontent.com/u/19550456',
                    },
                });
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);
    const router = useDemoRouter('/dashboard');
    const demoWindow = window !== undefined ? window() : undefined;
    function DashboardPageContent({ pathname }) {
        return (
            <>  
                             
            </>
        );
    }
    return (
        // preview-start
        <AppProvider
            authentication={AccountSlotsAccountSwitcher}
            navigation={NAVIGATION}
            bgcolor={"#59C7F3"}
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
            <DashboardLayout
            slots={{
                toolbarAccount: AccountSlotsAccountSwitcher,
                toolbar: (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {NAVIGATION.map((item) => (
                            <Link key={item.segment} to={item.path}>
                                {item.icon}
                                {item.title}
                            </Link>
                        ))}
                    </Box>
                ),
            }}
        >
            {/* The content will be rendered by the MainLayout */}
        </DashboardLayout>
        </AppProvider>
        // preview-end
    );
}




export default Navbar;
