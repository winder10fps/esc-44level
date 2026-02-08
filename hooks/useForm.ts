import { useState } from "react";


interface FormState {
    name: string;
    email: string;
    password: string,
    confirmPassword: string;
    numbers: string;
    errors: {
        name: boolean;
        email: boolean;
        password: boolean;
        confirmPassword: boolean;
        numbers: boolean;
    };
    errorMessage: string;
}


export const useForm = () => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        numbers: '',
        errors: { name: false, email: false, password: false, confirmPassword: false, numbers: false },
        errorMessage: ' '
    })

    const updateField = (field: 'name' | 'email' | 'password' | 'confirmPassword' | 'numbers', value: string) => {
        setFormState(prev => ({
            ...prev,
            [field]: value,
            errors: { ...prev.errors, [field]: false },
            errorMessage: ' '
        }))
    }

    const setFieldError = (field: 'name' | 'email' | 'password' | 'confirmPassword' | 'numbers', message: string) => {
        setFormState(prev => ({
            ...prev,
            errors: { ...prev.errors, [field]: true },
            errorMessage: message
        }));
    };

    const setErrorMessage = (message: string) => {
        setFormState(prev => ({
            ...prev,
            errorMessage: message
        }));
    }

    const resetErrors = () => {
        setFormState(prev => ({
            ...prev,
            errors: { name: false, email: false, password: false, confirmPassword: false, numbers: false },
            errorMessage: ' '
        }))
    }

    return {
        formState,
        updateField,
        setFieldError,
        setErrorMessage,
        resetErrors
    }
} 