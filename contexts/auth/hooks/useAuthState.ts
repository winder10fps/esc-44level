import { useState, useCallback } from 'react';
import { User, AuthError } from '../types';

export const useAuthState = () => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
    const [authError, setAuthError] = useState<AuthError | null>(null);

    const clearAuthError = useCallback(() => {
        setAuthError(null);
    }, []);

    const resetState = useCallback(() => {
        setUser(null);
        setToken(null);
        setIsAuth(false);
        setAuthError(null);
    }, []);

    return {
        user,
        setUser,
        token,
        setToken,
        isLoading,
        setIsLoading,
        isAuth,
        setIsAuth,
        authError,
        setAuthError,
        clearAuthError,
        resetState
    };
};