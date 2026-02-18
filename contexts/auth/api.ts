import { MOCK_FROMCLUB, MOCK_USERS } from '@/constants/fromServer_MOCK';
import { User, LoginCredentials, RegisterData, TournamentsData, CatalogData } from './types';
import { delay } from './utils';
import { API_CONFIG } from './constants';

// Моковые данные (в реальном приложении здесь будут fetch запросы)
export const MockAPI = {
    // Пользователи
    async fetchUser(userId: string): Promise<User | null> {
        await delay(API_CONFIG.DELAY_MS);

        const foundUser = MOCK_USERS.find(u => u.id === userId);
        if (!foundUser) return null;

        return {
            id: foundUser.id,
            email: foundUser.email,
            password: foundUser.password,
            name: foundUser.name,
            avatar: foundUser.avatar,
            hours: foundUser.hours ?? 0,
            notifs: foundUser.notifs ?? [],
            booking: foundUser.booking
        };
    },

    async updateUser(userId: string, userData: Partial<User>): Promise<User | null> {
        await delay(API_CONFIG.DELAY_MS);

        const foundUser = MOCK_USERS.find(u => u.id === userId);
        if (!foundUser) return null;

        const currentUser: User = {
            id: foundUser.id,
            email: foundUser.email,
            password: foundUser.password,
            name: foundUser.name,
            avatar: foundUser.avatar,
            hours: foundUser.hours ?? 0,
            notifs: foundUser.notifs ?? [],
            booking: foundUser.booking
        };

        return { ...currentUser, ...userData };
    },

    async login(credentials: LoginCredentials): Promise<User | null> {
        await delay(API_CONFIG.LOGIN_DELAY_MS);

        const foundUser = MOCK_USERS.find(
            u => u.email === credentials.email && u.password === credentials.password
        );

        return foundUser || null;
    },

    async register(data: RegisterData): Promise<User | null> {
        await delay(API_CONFIG.REGISTER_DELAY_MS);

        const userExists = MOCK_USERS.some(u => u.email === data.email);
        if (userExists) return null;

        const newUser: User = {
            id: `mock_${Date.now()}`,
            email: data.email,
            password: data.password,
            name: data.name,
            hours: 0,
            notifs: [],
            booking: [],
        };

        MOCK_USERS.push(newUser);
        return newUser;
    },

    async updatePassword(email: string, newPassword: string): Promise<User | null> {
        await delay(API_CONFIG.DELAY_MS);

        const userIndex = MOCK_USERS.findIndex(u => u.email === email);
        if (userIndex === -1) return null;

        MOCK_USERS[userIndex] = {
            ...MOCK_USERS[userIndex],
            password: newPassword
        };

        return MOCK_USERS[userIndex];
    },

    // Данные
    async fetchTournaments(): Promise<TournamentsData> {
        await delay(API_CONFIG.DELAY_MS);
        return MOCK_FROMCLUB.tournaments as TournamentsData;
    },

    async fetchCatalog(): Promise<CatalogData> {
        await delay(API_CONFIG.DELAY_MS);
        return MOCK_FROMCLUB.catalog as CatalogData;
    }
};