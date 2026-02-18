// hooks/useAuthActions.ts
import { useCallback } from 'react';
import { LoginCredentials, RegisterData, ResetPasswordCredentials, AuthResponse } from '../types';
import { MockAPI } from '../api';
import { TokenStorage } from '../storage';
import { generateMockToken } from '../utils';

export const useAuthActions = (
    setUser: (user: any) => void,
    setToken: (token: string | null) => void,
    setIsAuth: (isAuth: boolean) => void,
    setIsLoading: (isLoading: boolean) => void,
    setAuthError: (error: any) => void,
    clearAuthError: () => void,
    resetState: () => void,
    loadUserData: (userId: string) => Promise<void>
) => {
    const login = useCallback(async (credentials: LoginCredentials): Promise<AuthResponse | null> => {
        try {
            setIsLoading(true);
            clearAuthError();

            const foundUser = await MockAPI.login(credentials);

            if (!foundUser) {
                setAuthError({
                    message: 'Неверный email или пароль',
                    field: 'general'
                });
                return null;
            }

            const authToken = generateMockToken(foundUser.id);
            const refreshToken = `mock_refresh_token_${foundUser.id}_${Date.now()}`;

            await TokenStorage.setToken(authToken, refreshToken);
            await loadUserData(foundUser.id);

            setToken(authToken);
            setIsAuth(true);

            console.log('Успешный вход');

            return {
                user: foundUser,
                token: authToken,
                refreshToken,
            };
        } catch {
            setAuthError({
                message: 'Ошибка входа',
                field: 'general'
            });
            return null;
        } finally {
            setIsLoading(false);
        }
    }, [setIsLoading, clearAuthError, setAuthError, loadUserData, setToken, setIsAuth]);

    const register = useCallback(async (data: RegisterData): Promise<AuthResponse | null> => {
        try {
            setIsLoading(true);
            clearAuthError();

            const newUser = await MockAPI.register(data);

            if (!newUser) {
                setAuthError({
                    message: 'Пользователь с таким email уже существует',
                    field: 'general'
                });
                return null;
            }

            const authToken = generateMockToken(newUser.id);
            const refreshToken = `mock_refresh_token_${newUser.id}_${Date.now()}`;

            await TokenStorage.setToken(authToken, refreshToken);
            await loadUserData(newUser.id);

            setToken(authToken);
            setIsAuth(true);

            console.log('Успешная регистрация:', newUser.email);

            return {
                user: newUser,
                token: authToken,
                refreshToken,
            };
        } catch {
            console.error('Ошибка регистрации');
            setAuthError({
                message: 'Ошибка регистрации',
                field: 'general'
            });
            return null;
        } finally {
            setIsLoading(false);
        }
    }, [setIsLoading, clearAuthError, setAuthError, loadUserData, setToken, setIsAuth]);

    const logout = useCallback(async () => {
        try {
            setIsLoading(true);
            await TokenStorage.clearTokens();
            resetState();
            console.log('Успешный выход');
        } catch {
            console.error('Ошибка выхода');
        } finally {
            setIsLoading(false);
        }
    }, [setIsLoading, resetState]);

    const updatePassword = useCallback(async (credentials: ResetPasswordCredentials): Promise<AuthResponse | null> => {
        try {
            setIsLoading(true);
            clearAuthError();

            console.log('Обновление пароля для email:', credentials.email);

            const updatedUser = await MockAPI.updatePassword(credentials.email, credentials.newPassword);

            if (!updatedUser) {
                setAuthError({
                    message: 'Пользователь с таким email не найден',
                    field: 'general'
                });
                return null;
            }

            const authToken = generateMockToken(updatedUser.id);
            const refreshToken = `mock_refresh_token_${updatedUser.id}_${Date.now()}`;

            await TokenStorage.setToken(authToken, refreshToken);
            await loadUserData(updatedUser.id);

            setToken(authToken);
            setIsAuth(true);

            console.log('Пароль успешно обновлен');

            return {
                user: updatedUser,
                token: authToken,
                refreshToken,
            };
        } catch {
            console.error('Ошибка обновления пароля');
            setAuthError({
                message: 'Ошибка обновления пароля',
                field: 'general'
            });
            return null;
        } finally {
            setIsLoading(false);
        }
    }, [setIsLoading, clearAuthError, setAuthError, loadUserData, setToken, setIsAuth]);

    const checkAuth = useCallback(async () => {
        try {
            setIsLoading(true);
            clearAuthError();

            const storedToken = await TokenStorage.getToken();

            if (!storedToken) {
                console.log('Токен не найден, пользователь не авторизован');
                resetState();
                return;
            }

            const tokenMatch = storedToken.match(/mock_jwt_token_([^_]+)_/);
            if (!tokenMatch) {
                console.log('Неверный формат токена');
                await TokenStorage.clearTokens();
                resetState();
                return;
            }

            const userId = tokenMatch[1];
            await loadUserData(userId);

            setToken(storedToken);
            setIsAuth(true);
            console.log('Авторизация восстановлена');

        } catch {
            console.error('Ошибка проверки авторизации');
            await TokenStorage.clearTokens();
            resetState();
        } finally {
            setIsLoading(false);
        }
    }, [setIsLoading, clearAuthError, resetState, loadUserData, setToken, setIsAuth]);

    return {
        login,
        register,
        logout,
        updatePassword,
        checkAuth
    };
};