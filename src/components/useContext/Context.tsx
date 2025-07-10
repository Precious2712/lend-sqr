'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Information } from '@/data/user/data';

type AppContextType = {
    userData: Information | null
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
    children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

    const [userData, setUserData] = useState<Information | null>(null);

    const response = async () => {
        try {
            const res = await fetch('/json/generated.json');
            const data = await res.json();
            setUserData(data[0]);
            console.log('✅ Data fetched via fetch:', data);
        } catch (error) {
            console.error('❌ Fetch error:', error);
        }
    }

    useEffect(() => {
        response()
    }, []);

    return (
        <AppContext.Provider value={{
            userData
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};