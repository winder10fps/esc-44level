export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    hours: number;
    notifs: any[];
    booking: any[];
}

export interface LoginCredentials {
    email: string;
    password: string;
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

export interface Notif {
    id: number;
    title: string;
    message: string;
}

// Tournaments
export type Tournament = {
    id: number;
    name: string;
    game: string;
    caption: string;
    max_teams: number;
    registered_teams: string[];
    status: 'past' | 'future';
    avatar: string;
    winners?: {
        teamName: string,
        teamPlayers: string
    }
    onSignIn?: (fromAccountId: number, teamName: string, teamPlayers: string) => void;
}

export interface TournamentsData {
    future: Tournament[];
    past: Tournament[];
}

// Catalog
type CardPrice = {
    hour: string;
    day: string;
    night: string;
}

export type CatalogCardType = {
    id: number;
    heading: string;
    photo: string;
    line?: string;
    specifications: {
        processor?: string;
        viedocard?: string;
        resolution?: string;
        refreshRate?: string;
        screen?: string;
        audioSystem?: string;
        helmets?: string;
        quantity?: string;
        price?: string | CardPrice;
        ram?: string;
        keyboard?: string;
        headphones?: string;
        ageLimit?: string;
    },
    description: string;
}

export interface CatalogData {
    computers: CatalogCardType[];
    PSAndVR: CatalogCardType[];
    bar: CatalogCardType[];
}

// Booking
export interface Computer {
    id: number;
    title: string;
    status: 'free' | 'busy' | 'booking';
    bookingTime?: string;
    fromId?: number;
}

export interface BookingsData {
    [key: string]: Computer;
}

// Context
// Добавить в интерфейс AuthContextType новые методы
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
    fetchAllCatalogCards: () => Promise<CatalogData>;
    fetchAllBookings: () => Promise<BookingsData>;
    createBooking: (userId: number, computerId: number, bookingTime: string) => Promise<{ success: boolean; computer?: Computer; error?: string }>;
    cancelBooking: (userId: number, computerId: number) => Promise<{ success: boolean; computer?: Computer; error?: string }>;
    checkBookingAvailability: (computerId: number, time: string) => Promise<{ available: boolean; message?: string }>;
    refreshBookings: () => Promise<BookingsData>;
    signUpForTournament: (userId: number, tournamentId: number, teamName: string, teamPlayers: string) => Promise<{ success: boolean; error?: string }>;
    refreshTournaments: () => Promise<TournamentsData>;
    levelProgress: number;
    userLevel: number;
}