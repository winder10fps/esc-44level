import { useForm } from "@/hooks/useForm";


const validateName = (name: string) => {
    return name.length > 0;
}


const validateEmail = (email: string) => {
    const hasAtSymbol = email.includes('@');
    const hasDotSymbol = email.includes('.');
    const isDotAfterAt = email.indexOf('.') > email.indexOf('@')

    return hasAtSymbol && hasDotSymbol && isDotAfterAt;
}


const validatePassword = (password: string) => {
    return password.length >= 8;
}


const validateSimilarityOfPasswords = (
    password1: string,
    password2: string
) => {
    return password1 === password2
}


const validateNumbers = (numbers: string): boolean => {
    // строка состоит ровно из 4 цифр
    return /^\d{4}$/.test(numbers?.trim() || '');
}


type UseFormTypes = ReturnType<typeof useForm>


export const validateLogin = (
    formState: UseFormTypes['formState'],
    setFieldError: UseFormTypes['setFieldError'],
    resetErrors: UseFormTypes['resetErrors']
) => {
    resetErrors();

    if (!validateEmail(formState.email)) {
        setFieldError('email', 'Некорректный Email');
        return false;
    }

    if (!validatePassword(formState.password)) {
        setFieldError('password', 'Пароль минимум 8 символов');
        return false;
    }

    return true;
}


export const validateRegister = (
    formState: UseFormTypes['formState'],
    setFieldError: UseFormTypes['setFieldError'],
    resetErrors: UseFormTypes['resetErrors']
) => {
    resetErrors()

    if (!validateName(formState.name)) {
        setFieldError('name', 'Введите имя!');
        return false;
    }

    if (!validateEmail(formState.email)) {
        setFieldError('email', 'Некорректный Email!');
        return false;
    }

    if (!validatePassword(formState.password)) {
        setFieldError('password', 'Пароль минимум 8 символов!');
        return false;
    }

    if (!validateSimilarityOfPasswords(formState.password, formState.confirmPassword)) {
        setFieldError('confirmPassword', 'Пароли не совпадают!');
        return false;
    }

    return true;
}


export const validateResetPassword = (
    formState: UseFormTypes['formState'],
    setFieldError: UseFormTypes['setFieldError'],
    resetErrors: UseFormTypes['resetErrors']
) => {
    resetErrors()

    if (!validateEmail(formState.email)) {
        setFieldError('email', 'Некорректный Email!');
        return false;
    }

    if (!validatePassword(formState.password)) {
        setFieldError('password', 'Пароль минимум 8 символов!');
        return false;
    }

    if (!validateSimilarityOfPasswords(formState.password, formState.confirmPassword)) {
        setFieldError('confirmPassword', 'Пароли не совпадают!');
        return false;
    }

    return true;
}


export const validateConfirmEmail = (formState: UseFormTypes['formState'],
    setFieldError: UseFormTypes['setFieldError'],
    resetErrors: UseFormTypes['resetErrors']
) => {
    resetErrors()

    if (!validateNumbers(formState.numbers)) {
        setFieldError('numbers', 'Заполните поле кодом с почты!');
        return false;
    }

    return true;
}