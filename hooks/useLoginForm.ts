import { useState } from "react"


interface LoginFormState {
    email: string;
    password: string,
    errors: {
        email: boolean;
        password: boolean;
    };
    errorMessage: string;
}


export const useLoginForm = () => {
    const [formState, setFormState] = useState<LoginFormState>({
        email: '',
        password: '',
        errors: { email: false, password: false },
        errorMessage: ' '
    })

    const updateField = (field: 'email' | 'password', value: string) => {
        setFormState(prev => ({
            ...prev,
            [field]: value,
            errors: { ...prev.errors, [field]: false },
            errorMessage: ' '
        }))
    }

    const setFieldError = (field: 'email' | 'password', message: string) => {
        setFormState(prev => ({
            ...prev,
            errors: { ...prev.errors, [field]: true },
            errorMessage: message
        }));
    };

    const resetErrors = () => {
        setFormState(prev => ({
            ...prev,
            errors: {email: false, password: false},
            errorMessage: ' '
        }))
    }

    return {
        formState,
        updateField,
        setFieldError,
        resetErrors
    }
} 