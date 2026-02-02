export const validateEmail = (email: string) => {
    const hasAtSymbol = email.includes('@');
    const hasDotSymbol = email.includes('.');
    const isDotAfterAt = email.indexOf('.') > email.indexOf('@')

    return hasAtSymbol && hasDotSymbol && isDotAfterAt;
}


export const validatePassword = (password: string) => {
    const length = password.length >= 8;

    return length;
}