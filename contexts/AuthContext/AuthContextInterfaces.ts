export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    avatar?: string;
    level: number;
    hours: number;
    notifs: any[];
    role?: string;
    booking: any[]
}

export interface LoginCredentials {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export interface ResetPasswordCredentials {
    email: string;
    newPassword: string;
}

export interface RegisterData {
    email: string;
    password: string;
    name: string;
}

export interface AuthResponse {
    user: User;
    token: string;
    refreshToken?: string;
}

export interface AuthError {
    message: string;
    field?: 'email' | 'password' | 'general';
}

export type Tournament = {
    id: number;
    name: string;
    game: string;
    date: string;
    time: string;
    caption: string;
    prize_pool: string;
    max_teams: number;
    registered_teams: number;
    status: 'past' | 'future';
    avatar: string;
}

export interface TournamentsData {
    future: Tournament[];
    past: Tournament[];
}

export type CatalogCardType = {
    id: number;
    heading: string;
    photo: string;
    line?: number;
    specifications: {
        processor?: string;
        viedocard?: string;
        resolution?: string;
        refreshRate?: number;
        screen?: number;
        audioSystem?: string;
        helmets?: number;
        quantity?: string;
        price?: number;
    }
}

export interface CatalogData {
    computers: CatalogCardType[];
    PSAndVR: CatalogCardType[];
    bar: CatalogCardType[];
}

export interface Notif {
    id: number;
    title: string;
    message: string;
}

export interface AuthContextType {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    isAuth: boolean;
    authError: AuthError | null;
    checkAuth: () => Promise<void>;
    login: (credentials: LoginCredentials) => Promise<AuthResponse | null>;
    register: (data: RegisterData) => Promise<AuthResponse | null>;
    logout: () => Promise<void>;
    updateUser: (userData: Partial<User>) => Promise<User | null>;
    updatePassword: (credentials: ResetPasswordCredentials) => Promise<AuthResponse | null>;
    refreshUserData: () => Promise<void>;
    clearAuthError: () => void;
    fetchAllTournaments: () => Promise<TournamentsData>;
    fetchAllCatalogCards: () => Promise<CatalogData>
}