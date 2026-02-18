// hooks/useUserData.ts
import { useCallback } from 'react';
import { User } from '../types';
import { MockAPI } from '../api';
import { calculateLevelProgress, calculateUserLevel } from '../utils';

export const useUserData = (
    user: User | null,
    setUser: (user: User | null) => void,
    setAuthError: (error: any) => void
) => {
    const loadUserData = useCallback(async (userId: string) => {
        try {
            console.log('Загрузка данных пользователя с сервера');
            const userData = await MockAPI.fetchUser(userId);

            if (userData) {
                setUser(userData);
                console.log('Данные пользователя загружены:', userData.email);
            } else {
                console.log('Не удалось загрузить данные пользователя');
                setAuthError({
                    message: 'Не удалось загрузить данные пользователя',
                    field: 'general'
                });
            }
        } catch {
            setAuthError({
                message: 'Ошибка загрузки данных пользователя',
                field: 'general'
            });
        }
    }, [setUser, setAuthError]);

    const refreshUserData = useCallback(async () => {
        if (!user?.id) return;

        try {
            console.log('Принудительное обновление данных пользователя...');
            const freshData = await MockAPI.fetchUser(user.id);

            if (freshData) {
                setUser(freshData);
                console.log('Данные обновлены');
            } else {
                console.log('Не удалось обновить данные пользователя');
            }
        } catch {
            console.error('Ошибка обновления данных');
        }
    }, [user?.id, setUser]);

    const updateUser = useCallback(async (userData: Partial<User>): Promise<User | null> => {
        if (!user) {
            console.log('Пользователь не авторизован');
            return null;
        }

        try {
            const updatedUser = await MockAPI.updateUser(user.id, userData);

            if (!updatedUser) {
                console.log('Не удалось обновить данные пользователя');
                return null;
            }

            setUser(updatedUser);
            console.log('Данные пользователя обновлены на сервере');
            return updatedUser;
        } catch {
            console.error('Ошибка обновления пользователя');
            return null;
        }
    }, [user, setUser]);

    const levelProgress = calculateLevelProgress(user?.hours);
    const userLevel = calculateUserLevel(user?.hours);

    return {
        loadUserData,
        refreshUserData,
        updateUser,
        levelProgress,
        userLevel
    };
};