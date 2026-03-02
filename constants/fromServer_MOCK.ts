import { User } from "@/contexts/auth/types";

export let MOCK_USERS: User[] = [
    {
        id: 1,
        email: 'user@example.com',
        password: 'pass1234',
        name: 'Иван Иванов',
        hours: 1039,
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


export let MOCK_FROMCLUB = {
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
                registered_teams: [
                    'top_team',
                    'good_team'
                ],
                status: "future",
                avatar: 'https://i.pravatar.cc/150?img=2',
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
                registered_teams: [
                    'top_team',
                    'good_team'
                ],
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
                registered_teams: [
                    'top_team',
                    'good_team',
                    'крутая тима'
                ],
                status: "past",
                avatar: 'https://i.pravatar.cc/150?img=4',
                winners: {
                    teamName: 'крутая тима',
                    teamPlayers: 'player1, player2, player3, plm, ppp'
                }
            }
        ]
    },
    catalog: {
        computers: [
            {
                id: 1,
                heading: 'ПК 1-10',
                photo: '',
                line: '1',
                specifications: {
                    processor: '11400F',
                    viedocard: 'GTX 1060',
                    ram: '16 ГБ DDR4, 3200 МГц',
                    resolution: '1920x1080',
                    refreshRate: '144 гц',
                    keyboard: 'Механическая, 87 клавиш',
                    headphones: 'HyperX Cloud II',
                    ageLimit: 'Нет',
                    price: {
                        hour: '90',
                        day: '650',
                        night: '400'
                    }
                },
                description: 'Идеальная отправная точка в мир современных игр. Игровая линия LINE-1 создана для тех, кто ценит стабильность и плавный геймплей в популярном разрешении Full HD. Это сбалансированное и доступное решение, обеспечивающее комфортную игру в киберспортивные и многие сюжетные проекты. Полная комплектация с быстрым монитором, механической клавиатурой и качественной акустикой позволит с головой погрузиться в игровую вселенную с первого включения.'
            },
            {
                id: 2,
                heading: 'ПК 11-20',
                photo: '',
                line: '2',
                specifications: {
                    processor: '11400F',
                    viedocard: 'GTX 1060',
                    ram: '16 ГБ DDR4, 3200 МГц',
                    resolution: '1920x1080',
                    refreshRate: '144 гц',
                    keyboard: 'Механическая, 87 клавиш',
                    headphones: 'HyperX Cloud II',
                    ageLimit: 'Нет',
                    price: {
                        hour: '90',
                        day: '650',
                        night: '400'
                    },
                },
                description: 'Идеальная отправная точка в мир современных игр. Игровая линия LINE-2 создана для тех, кто ценит стабильность и плавный геймплей в популярном разрешении Full HD. Это сбалансированное и доступное решение, обеспечивающее комфортную игру в киберспортивные и многие сюжетные проекты. Полная комплектация с быстрым монитором, механической клавиатурой и качественной акустикой позволит с головой погрузиться в игровую вселенную с первого включения.'
            },
        ],
        PSAndVR: [
            {
                id: 3,
                heading: 'Playstation 5',
                photo: '',
                specifications: {
                    screen: '130',
                    audioSystem: '5.1 dolby digital',
                },
                description: 'Идеальная отправная точка в мир современных игр. Игровая линия ps5 создана для тех, кто ценит стабильность и плавный геймплей в популярном разрешении Full HD. Это сбалансированное и доступное решение, обеспечивающее комфортную игру в киберспортивные и многие сюжетные проекты. Полная комплектация с быстрым монитором, механической клавиатурой и качественной акустикой позволит с головой погрузиться в игровую вселенную с первого включения.'
            }
        ],
        bar: [
            {
                id: 4,
                heading: 'Sprite',
                photo: '',
                specifications: {
                    quantity: '100 г',
                    price: '34'
                },
                description: 'Идеальная отправная точка в мир современных игр. Игровая линия sprite создана для тех, кто ценит стабильность и плавный геймплей в популярном разрешении Full HD. Это сбалансированное и доступное решение, обеспечивающее комфортную игру в киберспортивные и многие сюжетные проекты. Полная комплектация с быстрым монитором, механической клавиатурой и качественной акустикой позволит с головой погрузиться в игровую вселенную с первого включения.'
            },
            {
                id: 5,
                heading: 'Добрый кола',
                photo: '',
                specifications: {
                    quantity: '100 г',
                    price: '34'
                },
                description: 'Идеальная отправная точка в мир современных игр. Игровая линия cola создана для тех, кто ценит стабильность и плавный геймплей в популярном разрешении Full HD. Это сбалансированное и доступное решение, обеспечивающее комфортную игру в киберспортивные и многие сюжетные проекты. Полная комплектация с быстрым монитором, механической клавиатурой и качественной акустикой позволит с головой погрузиться в игровую вселенную с первого включения.'
            }
        ]
    },

    booking: {
        pc1: {
            id: 1,
            title: '1',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc2: {
            id: 2,
            title: '2',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc3: {
            id: 3,
            title: '3',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc4: {
            id: 4,
            title: '4',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc5: {
            id: 5,
            title: '5',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc6: {
            id: 6,
            title: '6',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc7: {
            id: 7,
            title: '7',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc8: {
            id: 8,
            title: '8',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc9: {
            id: 9,
            title: '9',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc10: {
            id: 10,
            title: '10',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc11: {
            id: 11,
            title: '11',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc12: {
            id: 12,
            title: '12',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc13: {
            id: 13,
            title: '13',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc14: {
            id: 14,
            title: '14',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc15: {
            id: 15,
            title: '15',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc16: {
            id: 16,
            title: '16',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc17: {
            id: 17,
            title: '17',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc18: {
            id: 18,
            title: '18',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc19: {
            id: 19,
            title: '19',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc20: {
            id: 20,
            title: '20',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc21: {
            id: 21,
            title: '21',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc22: {
            id: 22,
            title: '22',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc23: {
            id: 23,
            title: '23',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc24: {
            id: 24,
            title: '24',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc25: {
            id: 25,
            title: '25',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc26: {
            id: 26,
            title: '26',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc27: {
            id: 27,
            title: '27',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc28: {
            id: 28,
            title: '28',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc29: {
            id: 29,
            title: '29',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc30: {
            id: 30,
            title: '30',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc31: {
            id: 31,
            title: '31',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc32: {
            id: 32,
            title: '32',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc33: {
            id: 33,
            title: '33',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc34: {
            id: 34,
            title: '34',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc35: {
            id: 35,
            title: '35',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc36: {
            id: 36,
            title: '36',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc37: {
            id: 37,
            title: '37',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        pc38: {
            id: 38,
            title: '38',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        ps: {
            id: 39,
            title: 'PS',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        vr: {
            id: 40,
            title: 'VR',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        },
        as: {
            id: 41,
            title: 'AS',
            status: 'free',
            bookingTime: undefined,
            fromId: undefined
        }
    }
}
