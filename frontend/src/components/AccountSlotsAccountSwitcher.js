import * as React from 'react';
import { AuthenticationContext, SessionContext } from '@toolpad/core/AppProvider';
import { Account } from '@toolpad/core/Account';
import CustomMenu from './CustomMenu';

const demoSession = {
    user: {
        name: 'Dibya Kanti Dhir',
        email: 'dibya8572@gmail.com',
        image: 'https://i.ibb.co/rGVS7C3/Diya-profile.jpg',
    },
};

export default function AccountSlotsAccountSwitcher() {
    const [session, setSession] = React.useState(demoSession);
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
