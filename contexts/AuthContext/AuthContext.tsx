import React, { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContextType, AuthError, AuthResponse, CatalogData, LoginCredentials, RegisterData, ResetPasswordCredentials, TournamentsData, User } from './AuthContextInterfaces';


const AuthContext = createContext<AuthContextType | undefined>(undefined);

//  для AsyncStorage
const STORAGE_KEYS = {
    TOKEN: 'auth_token',
    REFRESH_TOKEN: 'auth_refresh_token',
};

// заглушки
let MOCK_USERS: User[] = [
    {
        id: '1',
        email: 'user@example.com',
        password: 'pass1234',
        name: 'Иван Иванов',
        avatar: 'https://i.pravatar.cc/150?img=1',
        level: 56,
        hours: 120,
        notifs: [
            { id: 1, title: 'Добро пожаловать!', message: 'Вы успешно зарегистрировались', read: false },
            { id: 2, title: 'Новый турнир', message: 'Зарегистрируйтесь на ближайший турнир', read: true }
        ],
        booking: [{
            pc: 1,
            time: '19:00',
            busyWithMe: false,
        }]
    },
];

let MOCK_FROMCLUB = {
    tournaments: {
        future: [
            {
                id: 3,
                name: "Киберспринт: Valorant Open Cup",
                game: "Valorant",
                date: "2024-03-15",
                time: "18:00",
                caption: "турнир турнир турнир турнир турнир турнир турнир турниртурниртурниртурниртурниртурнир",
                prize_pool: "50 000 ₽",
                max_teams: 16,
                registered_teams: 12,
                status: "future",
                avatar: 'https://i.pravatar.cc/150?img=2'
            },
            {
                id: 2,
                name: "Dota 2 Battle Royal",
                game: "Dota 2",
                date: "2024-03-20",
                time: "17:30",
                caption: "турнир турнир турнир турнир турнир турнир турнир турниртурниртурниртурниртурниртурнир",
                prize_pool: "75 000 ₽",
                max_teams: 8,
                registered_teams: 8,
                status: "future",
                avatar: 'https://i.pravatar.cc/150?img=3'
            },

        ],
        past: [
            {
                id: 1,
                name: "Royal",
                game: "Dota 6",
                date: "2024-03-20",
                time: "17:30",
                caption: "турнир турнир турнир турнир турнир турнир турнир турниртурниртурниртурниртурниртурнир",
                prize_pool: "75 000 ₽",
                max_teams: 8,
                registered_teams: 8,
                status: "past",
                avatar: 'https://i.pravatar.cc/150?img=4'
            }
        ]
    },
    catalog: {
        computers: [
            {
                id: 1,
                heading: 'ПК 1-10',
                photo: 'https://static.insales-cdn.com/images/articles/1/1550/1418766/api.jpg',
                line: 1,
                specifications: {
                    processor: '11400F',
                    viedocard: 'GTX 1060',
                    resolution: '1920x1080',
                    refreshRate: 144
                }
            },
            {
                id: 2,
                heading: 'ПК 11-20',
                photo: 'https://static.insales-cdn.com/images/articles/1/1550/1418766/api.jpg',
                line: 2,
                specifications: {
                    processor: '11400F',
                    viedocard: 'GTX 1060',
                    resolution: '1920x1080',
                    refreshRate: 144
                }
            },
            
        ],
        PSAndVR: [
            {
                id: 1,
                heading: 'Playstation 5',
                photo: '',
                specifications: {
                    screen: 130,
                    audioSystem: '5.1 dolby digital',
                    helmets: undefined,
                }
            }
        ],
        bar: [
            {
                id: 1,
                heading: 'Sprite',
                photo: '',
                specifications: {
                    quantity: '100 г',
                    price: 34
                }
            },
            {
                id: 2,
                heading: 'Добрый кола',
                photo: '',
                specifications: {
                    quantity: '100 г',
                    price: 34
                }
            }
        ]
    },
    booking: {
        pc1: '19:00', // забронен на 19
        pc2: '+', // занят
        pc3: '-', // свободен
        // ...
    }
}


// Моковый токен, должен приходить с сервера
const generateMockToken = (userId: string): string => {
    return `mock_jwt_token_${userId}_${Date.now()}`;
};


// Заглушка для запроса к серверу за данными пользователя
const fetchUserFromServer = async (userId: string): Promise<User | null> => {
    await delay(800); // Имитация сетевой задержки

    // Ищем пользователя
    const foundUser = MOCK_USERS.find(u => u.id === userId);

    if (!foundUser) {
        console.log('Пользователь не найден');
        return null;
    }

    // Возвращаем данные пользователя
    return {
        id: foundUser.id,
        email: foundUser.email,
        password: foundUser.password,
        name: foundUser.name,
        avatar: foundUser.avatar,
        role: foundUser.role,
        level: foundUser.level ?? 1,
        hours: foundUser.hours ?? 0,
        notifs: foundUser.notifs ?? [],
        booking: foundUser.booking
    };
};


// Заглушка для обновления данных на сервере
const updateUserOnServer = async (userId: string, userData: Partial<User>): Promise<User | null> => {
    await delay(1000);

    const foundUser = MOCK_USERS.find(u => u.id === userId);

    if (!foundUser) {
        console.log('Пользователь не найден');
        return null;
    }

    // В реальности здесь был бы запрос к API
    const currentUser: User = {
        id: foundUser.id,
        email: foundUser.email,
        password: foundUser.password,
        name: foundUser.name,
        avatar: foundUser.avatar,
        role: foundUser.role,
        level: foundUser.level ?? 1,
        hours: foundUser.hours ?? 0,
        notifs: foundUser.notifs ?? [],
        booking: foundUser.booking
    };

    return { ...currentUser, ...userData };
};


// Функция для обновления пароля пользователя
const updatePasswordOnServer = async (email: string, newPassword: string): Promise<User | null> => {
    await delay(1000);

    // Ищем пользователя по email
    const userIndex = MOCK_USERS.findIndex(u => u.email === email);

    if (userIndex === -1) {
        console.log('Пользователь с таким email не найден');
        return null;
    }

    // Обновляем пароль пользователя
    MOCK_USERS[userIndex] = {
        ...MOCK_USERS[userIndex],
        password: newPassword
    };

    console.log('Пароль обновлен для пользователя:', email);

    return MOCK_USERS[userIndex];
};


// Функция задержки для имитации сетевого запроса
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
    const [authError, setAuthError] = useState<AuthError | null>(null);

    // Очистка авторизации
    const clearAuth = useCallback(async () => {
        try {
            await AsyncStorage.multiRemove([
                STORAGE_KEYS.TOKEN,
                STORAGE_KEYS.REFRESH_TOKEN,
            ]);

            setUser(null);
            setToken(null);
            setIsAuth(false);
            setAuthError(null);
        } catch {
            console.error('Ошибка очистки авторизации');
        }
    }, []);

    // Функция для очистки ошибок авторизации
    const clearAuthError = useCallback(() => {
        setAuthError(null);
    }, []);

    // Функция для загрузки данных пользователя с сервера
    const loadUserData = useCallback(async (userId: string) => {
        try {
            console.log('Загрузка данных пользователя с сервера');
            const userData = await fetchUserFromServer(userId);

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
    }, []);

    // Проверка авторизации, запрашивает с сервера
    const checkAuth = useCallback(async () => {
        try {
            setIsLoading(true);
            clearAuthError();

            // токен из хранилища
            const storedToken = await AsyncStorage.getItem(STORAGE_KEYS.TOKEN);

            if (!storedToken) {
                console.log('Токен не найден, пользователь не авторизован');
                setIsAuth(false);
                return;
            }

            // должна быть проверка токена на сервере
            // для мока извлекаем userId из токена
            const tokenMatch = storedToken.match(/mock_jwt_token_([^_]+)_/);
            if (!tokenMatch) {
                console.log('Неверный формат токена');
                await clearAuth();
                return;
            }

            const userId = tokenMatch[1];

            // Загружаем свежие данные пользователя с сервера
            await loadUserData(userId);

            setToken(storedToken);
            setIsAuth(true);
            console.log('Авторизация восстановлена, данные загружены с сервера');

        } catch {
            console.error('Ошибка проверки авторизации');
            await clearAuth();
        } finally {
            setIsLoading(false);
        }
    }, [clearAuth, loadUserData, clearAuthError]);

    // Проверка авторизации при старте приложения
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // Вход в приложение
    const login = useCallback(async (credentials: LoginCredentials): Promise<AuthResponse | null> => {
        try {
            setIsLoading(true);
            clearAuthError();
            await delay(1500);

            // имитация запроса к серверу
            const foundUser = MOCK_USERS.find(
                u => u.email === credentials.email && u.password === credentials.password
            );

            if (!foundUser) {
                setAuthError({
                    message: 'Неверный email или пароль',
                    field: 'general'
                });
                return null;
            }

            // Генерируем моковый токен
            const authToken = generateMockToken(foundUser.id);
            const refreshToken = `mock_refresh_token_${foundUser.id}_${Date.now()}`;

            // Сохраняем токены в AsyncStorage
            await AsyncStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
            await AsyncStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);

            // Загружаем данные пользователя с сервера
            const userData = await fetchUserFromServer(foundUser.id);

            if (!userData) {
                setAuthError({
                    message: 'Не удалось загрузить данные пользователя',
                    field: 'general'
                });
                return null;
            }

            setUser(userData);
            setToken(authToken);
            setIsAuth(true);
            setAuthError(null);

            console.log('Успешный вход, данные загружены с сервера:', userData.email);

            return {
                user: userData,
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
    }, [clearAuthError]);

    // Регистрация
    const register = useCallback(async (data: RegisterData): Promise<AuthResponse | null> => {
        try {
            setIsLoading(true);
            clearAuthError();
            await delay(1500);

            // Проверка существования пользователя
            const userExists = MOCK_USERS.some(u => u.email === data.email);
            if (userExists) {
                setAuthError({
                    message: 'Пользователь с таким email уже существует',
                    field: 'general'
                });
                return null;
            }

            // создание нового пользователя
            const newUserId = `mock_${Date.now()}`;
            const newUser: User = {
                id: newUserId,
                email: data.email,
                password: data.password,
                name: data.name,
                level: 1,
                hours: 0,
                notifs: [],
                booking: [],
            };

            // Добавляем в базу данных
            MOCK_USERS.push(newUser);
            console.log('Пользователь добавлен в базу:', newUser);

            // Генерируем токены
            const authToken = generateMockToken(newUserId);
            const refreshToken = `mock_refresh_token_${newUserId}_${Date.now()}`;

            // Сохраняем токены
            await AsyncStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
            await AsyncStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);

            // Загружаем данные пользователя с сервера
            const userData = await fetchUserFromServer(newUserId);

            if (!userData) {
                setAuthError({
                    message: 'Не удалось загрузить данные пользователя после регистрации',
                    field: 'general'
                });
                return null;
            }

            console.log('Данные загружены с сервера:', userData);

            setUser(userData);
            setToken(authToken);
            setIsAuth(true);
            setAuthError(null);

            console.log('Успешная регистрация:', userData.email);

            return {
                user: userData,
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
    }, [clearAuthError]);

    // Выход
    const logout = useCallback(async () => {
        try {
            setIsLoading(true);
            await delay(500);

            await clearAuth();

            console.log('Успешный выход');
        } catch {
            console.error('Ошибка выхода');
        } finally {
            setIsLoading(false);
        }
    }, [clearAuth]);

    // Обновление пароля и автоматический вход
    const updatePassword = useCallback(async (credentials: ResetPasswordCredentials): Promise<AuthResponse | null> => {
        try {
            setIsLoading(true);
            clearAuthError();
            await delay(1500);

            console.log('Обновление пароля для email:', credentials.email);

            // Обновляем пароль на сервере
            const updatedUser = await updatePasswordOnServer(credentials.email, credentials.newPassword);

            if (!updatedUser) {
                setAuthError({
                    message: 'Пользователь с таким email не найден',
                    field: 'general'
                });
                return null;
            }

            console.log('Пароль обновлен, пользователь:', updatedUser);

            // Генерируем новые токены
            const authToken = generateMockToken(updatedUser.id);
            const refreshToken = `mock_refresh_token_${updatedUser.id}_${Date.now()}`;

            // Сохраняем новые токены
            await AsyncStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
            await AsyncStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);

            // Загружаем обновленные данные пользователя
            const userData = await fetchUserFromServer(updatedUser.id);

            if (!userData) {
                setAuthError({
                    message: 'Не удалось загрузить данные пользователя после обновления пароля',
                    field: 'general'
                });
                return null;
            }

            setUser(userData);
            setToken(authToken);
            setIsAuth(true);
            setAuthError(null);

            console.log('Пароль успешно обновлен, пользователь авторизован:', userData.email);

            return {
                user: userData,
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
    }, [clearAuthError]);

    // Обновление данных пользователя
    const updateUser = useCallback(async (userData: Partial<User>): Promise<User | null> => {
        try {
            if (!user) {
                console.log('Пользователь не авторизован');
                return null;
            }

            // Отправляем обновление на сервер
            const updatedUser = await updateUserOnServer(user.id, userData);

            if (!updatedUser) {
                console.log('Не удалось обновить данные пользователя');
                return null;
            }

            // Обновляем состояние
            setUser(updatedUser);

            console.log('Данные пользователя обновлены на сервере');
            return updatedUser;
        } catch {
            console.error('Ошибка обновления пользователя');
            return null;
        }
    }, [user]);

    // принудительное обновление данных с сервера
    const refreshUserData = useCallback(async () => {
        if (!user?.id) return;

        try {
            console.log('Принудительное обновление данных пользователя...');
            const freshData = await fetchUserFromServer(user.id);

            if (freshData) {
                setUser(freshData);
                console.log('Данные обновлены');
            } else {
                console.log('Не удалось обновить данные пользователя');
            }
        } catch {
            console.error('Ошибка обновления данных');
        }
    }, [user?.id]);

    // Функция для получения всех турниров
    const fetchAllTournaments = useCallback(async (): Promise<TournamentsData> => {
        await delay(800);

        const tournaments = MOCK_FROMCLUB.tournaments;

        return tournaments as TournamentsData;
    }, []);

    const fetchAllCatalogCards = useCallback(async (): Promise<CatalogData> => {
        await delay(800);
        const catalog = MOCK_FROMCLUB.catalog;

        return catalog as CatalogData;
    }, []);

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
        fetchAllCatalogCards
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};