import * as React from 'react';
import { AuthenticationContext, SessionContext } from '@toolpad/core/AppProvider';
import { Account } from '@toolpad/core/Account';
import CustomMenu from './CustomMenu';
import axios from 'axios';

const demoSession = {
    user: {
        name: 'Dibya Kanti Dhir',
        email: 'dibya8572@gmail.com',
        image: '',
    },
};

export default function AccountSlotsAccountSwitcher() {
    const [session, setSession] = React.useState({
        user: {
            name: '',
            email: '',
            image: '',
        },
    });
   

    React.useEffect(() => {
        axios.post('http://localhost:8000/getuser', { userId: localStorage.getItem('userId') })
            .then(res => setSession({
                user: {
                    name:res.data.firstname,
                    email: res.data.email,
                    image: res.data.pic
                },
            }))
       
    }, [])
    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession(demoSession);
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);

    return (
        <AuthenticationContext.Provider value={authentication}>
            <SessionContext.Provider value={session}>
                {/* preview-start */}
                <Account
                    slots={{
                        popoverContent: CustomMenu,
                    }}
                />
                {/* preview-end */}
            </SessionContext.Provider>
        </AuthenticationContext.Provider>
    );
}
