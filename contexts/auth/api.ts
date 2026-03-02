import { MOCK_FROMCLUB, MOCK_USERS } from '@/constants/fromServer_MOCK';
import {
    User,
    LoginCredentials,
    RegisterData,
    TournamentsData,
    CatalogData,
    BookingsData,
    Computer,
} from './types';
import { delay } from './utils';
import { API_CONFIG } from './constants';

export const MockAPI = {
    /**
     * Получение данных пользователя по ID
     * @param userId - идентификатор пользователя
     * @returns Promise с данными пользователя или null если не найден
     */
    async fetchUser(userId: number): Promise<User | null> {
        await delay(API_CONFIG.DELAY_MS);

        const foundUser = MOCK_USERS.find(u => u.id === userId);
        if (!foundUser) return null;

        return {
            id: foundUser.id,
            email: foundUser.email,
            password: foundUser.password,
            name: foundUser.name,
            hours: foundUser.hours ?? 0,
            notifs: foundUser.notifs ?? [],
            booking: foundUser.booking
        };
    },

    /**
     * Обновление данных пользователя
     * @param userId - идентификатор пользователя
     * @param userData - частичные данные для обновления
     * @returns Promise с обновленными данными пользователя или null если не найден
     */
    async updateUser(userId: number, userData: Partial<User>): Promise<User | null> {
        await delay(API_CONFIG.DELAY_MS);

        const foundUser = MOCK_USERS.find(u => u.id === userId);
        if (!foundUser) return null;

        const currentUser: User = {
            id: foundUser.id,
            email: foundUser.email,
            password: foundUser.password,
            name: foundUser.name,
            hours: foundUser.hours ?? 0,
            notifs: foundUser.notifs ?? [],
            booking: foundUser.booking
        };

        return { ...currentUser, ...userData };
    },

    /**
     * Авторизация пользователя
     * @param credentials - email и пароль
     * @returns Promise с данными пользователя или null если не найден
     */
    async login(credentials: LoginCredentials): Promise<User | null> {
        await delay(API_CONFIG.LOGIN_DELAY_MS);

        const foundUser = MOCK_USERS.find(
            u => u.email === credentials.email && u.password === credentials.password
        );

        return foundUser || null;
    },

    /**
     * Регистрация нового пользователя
     * @param data - данные для регистрации (email, пароль, имя)
     * @returns Promise с данными нового пользователя или null если email уже существует
     */
    async register(data: RegisterData): Promise<User | null> {
        await delay(API_CONFIG.REGISTER_DELAY_MS);

        const userExists = MOCK_USERS.some(u => u.email === data.email);
        if (userExists) return null;

        const newUser: User = {
            id: Math.max(...MOCK_USERS.map(u => u.id)) + 1,
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

    /**
     * Обновление пароля пользователя
     * @param email - email пользователя
     * @param newPassword - новый пароль
     * @returns Promise с обновленными данными пользователя или null если не найден
     */
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

    /**
     * Загрузка всех турниров (предстоящих и прошедших)
     * @returns Promise с объектом, содержащим массивы будущих и прошедших турниров
     */
    async fetchTournaments(): Promise<TournamentsData> {
        await delay(API_CONFIG.DELAY_MS);
        console.log('🔄 ЗАПРОС К СЕРВЕРУ: Загрузка турниров');
        return MOCK_FROMCLUB.tournaments as TournamentsData;
    },

    /**
     * Загрузка всего каталога (компьютеры, PS/VR, бар)
     * @returns Promise с объектом, содержащим все категории каталога
     */
    async fetchCatalog(): Promise<CatalogData> {
        await delay(API_CONFIG.DELAY_MS);
        console.log('🔄 ЗАПРОС К СЕРВЕРУ: Загрузка каталога');
        return MOCK_FROMCLUB.catalog as CatalogData;
    },

    /**
     * Загрузка всех бронирований компьютеров
     * @returns Promise с объектом, содержащим все компьютеры и их статусы
     */
    async fetchBookings(): Promise<BookingsData> {
        await delay(API_CONFIG.DELAY_MS);
        console.log('🔄 ЗАПРОС К СЕРВЕРУ: Загрузка бронирований');
        return MOCK_FROMCLUB.booking as BookingsData;
    },

    /**
     * Создание нового бронирования
     * @param userId - ID пользователя
     * @param computerId - ID компьютера
     * @param bookingTime - время бронирования
     * @returns Promise с результатом операции и обновленными данными компьютера
     */
    async createBooking(userId: number, computerId: number, bookingTime: string): Promise<{ success: boolean; computer?: Computer; error?: string }> {
        await delay(API_CONFIG.DELAY_MS);

        try {
            console.log(`🔵 ЗАПРОС К СЕРВЕРУ: Создание брони для пользователя ${userId} на компьютер ${computerId} на время ${bookingTime}`);

            const bookingEntries = Object.entries(MOCK_FROMCLUB.booking) as [string, Computer][];
            const computerEntry = bookingEntries.find(
                (entry) => entry[1].id === computerId
            );

            if (!computerEntry) {
                return {
                    success: false,
                    error: 'Компьютер не найден'
                };
            }

            const [key, computer] = computerEntry;

            if (computer.status !== 'free') {
                return {
                    success: false,
                    error: 'Компьютер уже занят или забронирован'
                };
            }

            const updatedComputer: Computer = {
                ...computer,
                status: 'booking',
                bookingTime,
                fromId: userId
            };

            (MOCK_FROMCLUB.booking as any)[key] = updatedComputer;

            const user = MOCK_USERS.find(u => u.id === userId);
            if (user) {
                user.booking = user.booking || [];
                user.booking.push({
                    pc: computerId,
                    time: bookingTime,
                    busyWithMe: false,
                });
            }

            console.log(`✅ УСПЕШНЫЙ ОТВЕТ СЕРВЕРА: Бронь создана для компьютера ${computerId}`);

            return {
                success: true,
                computer: updatedComputer
            };
        } catch (error) {
            console.log('❌ ОШИБКА СЕРВЕРА:', error);
            return {
                success: false,
                error: 'Ошибка при создании брони'
            };
        }
    },

    /**
     * Отмена существующего бронирования
     * @param userId - ID пользователя
     * @param computerId - ID компьютера
     * @returns Promise с результатом операции и обновленными данными компьютера
     */
    async cancelBooking(userId: number, computerId: number): Promise<{ success: boolean; computer?: Computer; error?: string }> {
        await delay(API_CONFIG.DELAY_MS);

        try {
            console.log(`🔵 ЗАПРОС К СЕРВЕРУ: Отмена брони для пользователя ${userId} на компьютер ${computerId}`);

            const bookingEntries = Object.entries(MOCK_FROMCLUB.booking) as [string, Computer][];
            const computerEntry = bookingEntries.find(
                (entry) => entry[1].id === computerId
            );

            if (!computerEntry) {
                return {
                    success: false,
                    error: 'Компьютер не найден'
                };
            }

            const [key, computer] = computerEntry;

            if (computer.fromId !== userId) {
                return {
                    success: false,
                    error: 'У вас нет прав на отмену этой брони'
                };
            }

            const updatedComputer: Computer = {
                ...computer,
                status: 'free',
                bookingTime: undefined,
                fromId: undefined
            };

            (MOCK_FROMCLUB.booking as any)[key] = updatedComputer;

            const user = MOCK_USERS.find(u => u.id === userId);
            if (user) {
                user.booking = (user.booking || []).filter((b: any) => b.pc !== computerId);
            }

            console.log(`✅ УСПЕШНЫЙ ОТВЕТ СЕРВЕРА: Бронь отменена для компьютера ${computerId}`);

            return {
                success: true,
                computer: updatedComputer
            };
        } catch (error) {
            console.log('❌ ОШИБКА СЕРВЕРА:', error);
            return {
                success: false,
                error: 'Ошибка при отмене брони'
            };
        }
    },

    /**
     * Проверка доступности компьютера на определенное время
     * @param computerId - ID компьютера
     * @param time - время для проверки
     * @returns Promise с информацией о доступности
     */
    async checkBookingAvailability(computerId: number, time: string): Promise<{ available: boolean; message?: string }> {
        await delay(API_CONFIG.DELAY_MS / 2);

        try {
            console.log(`🔵 ЗАПРОС К СЕРВЕРУ: Проверка доступности компьютера ${computerId} на время ${time}`);

            const bookingEntries = Object.entries(MOCK_FROMCLUB.booking) as [string, Computer][];
            const computerEntry = bookingEntries.find(
                (entry) => entry[1].id === computerId
            );

            if (!computerEntry) {
                return {
                    available: false,
                    message: 'Компьютер не найден'
                };
            }

            const computer = computerEntry[1];
            const available = computer.status === 'free';

            console.log(`✅ ОТВЕТ СЕРВЕРА: Компьютер ${computerId} ${available ? 'доступен' : 'не доступен'}`);

            return {
                available,
                message: available ? undefined : 'Компьютер уже занят'
            };
        } catch (error) {
            console.log('❌ ОШИБКА СЕРВЕРА:', error);
            return {
                available: false,
                message: 'Ошибка при проверке доступности'
            };
        }
    },

    /**
     * Обновление данных о бронированиях
     * @returns Promise с актуальными данными всех бронирований
     */
    async refreshBookings(): Promise<BookingsData> {
        await delay(API_CONFIG.DELAY_MS);
        console.log('🔄 ЗАПРОС К СЕРВЕРУ: Обновление данных о бронированиях');
        return MOCK_FROMCLUB.booking as BookingsData;
    },

    /**
     * Регистрация команды на турнир
     * @param userId - ID пользователя
     * @param tournamentId - ID турнира
     * @param teamName - название команды
     * @param teamPlayers - состав команды
     * @returns Promise с результатом регистрации
     */
    async signUpForTournament(userId: number, tournamentId: number, teamName: string, teamPlayers: string): Promise<{ success: boolean; error?: string }> {
        await delay(API_CONFIG.DELAY_MS);

        try {
            console.log(`🔵 ЗАПРОС К СЕРВЕРУ: Регистрация пользователя ${userId} на турнир ${tournamentId}`);
            console.log(`   Команда: ${teamName}, Игроки: ${teamPlayers}`);

            const tournament = MOCK_FROMCLUB.tournaments.future.find(t => t.id === tournamentId);

            if (!tournament) {
                return {
                    success: false,
                    error: 'Турнир не найден'
                };
            }

            if (tournament.registered_teams.length >= tournament.max_teams) {
                return {
                    success: false,
                    error: 'Достигнуто максимальное количество команд'
                };
            }

            tournament.registered_teams.push(teamName);

            console.log(`✅ УСПЕШНЫЙ ОТВЕТ СЕРВЕРА: Команда ${teamName} зарегистрирована на турнир ${tournamentId}`);

            return { success: true };
        } catch (error) {
            console.log('❌ ОШИБКА СЕРВЕРА:', error);
            return {
                success: false,
                error: 'Ошибка при регистрации на турнир'
            };
        }
    },

    /**
     * Обновление данных о турнирах
     * @returns Promise с актуальными данными всех турниров
     */
    async refreshTournaments(): Promise<TournamentsData> {
        await delay(API_CONFIG.DELAY_MS);
        console.log('🔄 ЗАПРОС К СЕРВЕРУ: Обновление данных о турнирах');
        return MOCK_FROMCLUB.tournaments as TournamentsData;
    }
};