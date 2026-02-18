import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from './constants';

export const TokenStorage = {
    async setToken(token: string, refreshToken?: string): Promise<void> {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.TOKEN, token);
            if (refreshToken) {
                await AsyncStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
            }
        } catch (error) {
            console.error('Error saving tokens:', error);
            throw error;
        }
    },

    async getToken(): Promise<string | null> {
        try {
            return await AsyncStorage.getItem(STORAGE_KEYS.TOKEN);
        } catch (error) {
            console.error('Error getting token:', error);
            return null;
        }
    },

    async getRefreshToken(): Promise<string | null> {
        try {
            return await AsyncStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
        } catch (error) {
            console.error('Error getting refresh token:', error);
            return null;
        }
    },

    async clearTokens(): Promise<void> {
        try {
            await AsyncStorage.multiRemove([
                STORAGE_KEYS.TOKEN,
                STORAGE_KEYS.REFRESH_TOKEN,
            ]);
        } catch (error) {
            console.error('Error clearing tokens:', error);
            throw error;
        }
    }
};