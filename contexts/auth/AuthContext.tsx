import { createContext, useContext } from 'react';
import { AuthContextType } from './types';

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

