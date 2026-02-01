// личная инфа каждого
export const isAuth = false;

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    level: number;
    levelProgress: number;
    hours: number
}

export const userInfo: User = {
    id: 1,
    name: 'Ivan',
    email: 'ivan@gmail.com',
    password: '123456',
    avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=Iva',
    level: 1,
    levelProgress: 30,
    hours: 6
}

export const mockUser = userInfo;


// для всех юзеров показывает
export interface Tournament {
    id: number;
    name: string;
    game: string;
    date: string;
    time: string;
    caption: string;
    prize_pool: string;
    max_teams?: number;
    registered_teams?: number;
    status: string;
}

export const clubInfo = {
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
                status: "registration_open",
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
                status: "registration_closed",
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
                status: "registration_closed",
            }
        ]
    },
}