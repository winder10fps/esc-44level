import AuthScreen from "@/components/AuthScreen";
import CustomText from "@/components/CustomText";
import CustomTextButton from "@/components/CustomTextButton";
import CustomTextInput from "@/components/CustomTextInput";
import SectionContainer from "@/components/SectionContainer";
import { COLORS } from "@/constants/ui";
import { validateLogin } from "@/functions/validation";
import { useForm } from "@/hooks/useForm";
import { router } from "expo-router";
import { StyleSheet } from "react-native";


export default function LoginScreen() {
    const { formState, updateField, setFieldError, resetErrors } = useForm();

    const onLogin = () => {
        if (validateLogin(formState, setFieldError, resetErrors)) {
            router.push('/');
        }
    };

    const onResetPassword = () => {
        router.push('/(auth)/ResetPasswordScreen');
    }

    const onRegister = () => {
        router.push('/(auth)/RegisterScreen');
    }

    return (
        <AuthScreen back={false}>
            <CustomText variant="h2" style={styles.welcomeText}>Добро пожаловать в Level44</CustomText>
            <SectionContainer>
                <CustomText
                    variant="h3"
                    style={styles.heading}
                >
                    Авторизация
                </CustomText>
                <CustomText
                    variant="secondary"
                    style={styles.errorMessage}
                >
                    {formState.errorMessage}
                </CustomText>
                <CustomTextInput
                    variant="default"
                    label='Email'
                    placeholder=""
                    errored={formState.errors.email}
                    keyboardType="email-address"
                    onChangeText={(text) => updateField('email', text)}
                />
                <CustomTextInput
                    variant="default"
                    label='Пароль'
                    placeholder=""
                    errored={formState.errors.password}
                    keyboardType="default"
                    secureTextEntry
                    style={styles.passwordInput}
                    onChangeText={(text) => updateField('password', text)}
                />
                <CustomTextButton
                    variant="onlyText"
                    size="default"
                    label="Забыли пароль?"
                    onPress={onResetPassword}
                    style={styles.resetButton}
                />
                <CustomTextButton
                    variant="primary"
                    size="default"
                    label="Войти"
                    onPress={onLogin}
                    style={styles.loginButton}
                />
                <CustomTextButton
                    variant="onlyText"
                    size="default"
                    label="Зарегистрироваться"
                    onPress={onRegister}
                    style={styles.registerButton}
                />
            </SectionContainer>
        </AuthScreen>
    );
}


const styles = StyleSheet.create({
    welcomeText: {
        marginTop: 32,
        marginBottom: 40,
        textAlign: 'center'
    },
    heading: {
        textAlign: 'center',
        marginBottom: 8
    },
    errorMessage: {
        textAlign: 'center',
        color: COLORS.PRIMARY,
        marginBottom: 20
    },
    passwordInput: {
        marginTop: 24,
        marginBottom: 8
    },
    resetButton: {
        marginLeft: 14,
    },
    loginButton: {
        alignSelf: 'center',
        marginTop: 32,
        marginBottom: 24
    },
    registerButton: {
        alignSelf: 'center'
    }
})