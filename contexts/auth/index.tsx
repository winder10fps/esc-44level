import React, { ReactNode, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useAuthState } from './hooks/useAuthState';
import { useUserData } from './hooks/useUserData';
import { useAuthActions } from './hooks/useAuthActions';
import { useDataFetching } from './hooks/useDataFetching';
import { AuthContextType } from './types';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const {
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
    } = useAuthState();

    const {
        loadUserData,
        refreshUserData,
        updateUser,
        levelProgress,
        userLevel
    } = useUserData(user, setUser, setAuthError);

    const {
        login,
        register,
        logout,
        updatePassword,
        checkAuth
    } = useAuthActions(
        setUser,
        setToken,
        setIsAuth,
        setIsLoading,
        setAuthError,
        clearAuthError,
        resetState,
        loadUserData
    );

    const {
        fetchAllTournaments,
        fetchAllCatalogCards
    } = useDataFetching();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    const value: AuthContextType = {
        user,
        token,
        isLoading,
        isAuth,
        authError,
        checkAuth,
        login,
        register,
        logout,
        updateUser,
        updatePassword,
        refreshUserData,
        clearAuthError,
        fetchAllTournaments,
        fetchAllCatalogCards,
        userLevel,
        levelProgress
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export { useAuth } from './AuthContext';