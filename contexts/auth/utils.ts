export const delay = (ms: number) => 
    new Promise(resolve => setTimeout(resolve, ms));

export const generateMockToken = (userId: string): string => {
    return `mock_jwt_token_${userId}_${Date.now()}`;
};

export const extractUserIdFromToken = (token: string): string | null => {
    const tokenMatch = token.match(/mock_jwt_token_([^_]+)_/);
    return tokenMatch ? tokenMatch[1] : null;
};

export const calculateLevelProgress = (hours: number = 0): number => {
    const level = hours / 5;
    return level ? Math.round(level % 1 * 100) : 0;
};

export const calculateUserLevel = (hours: number = 0): number => {
    return Math.floor(hours / 5);
};