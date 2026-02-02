import { Image, Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CustomTextButton from "@/components/CustomTextButton";
import CustomTextInput from "@/components/CustomTextInput";
import { COLORS } from "@/constants/ui";
import SectionContainer from "@/components/SectionContainer";
import CustomText from "@/components/CustomText";
import { validateEmail, validatePassword } from "@/functions/validation";
import { useLoginForm } from "@/hooks/useLoginForm";


export default function LoginScreen() {
    const { formState, updateField, setFieldError, resetErrors } = useLoginForm();

    const onLogin = () => {
        resetErrors()

        if (!validateEmail(formState.email)) {
            setFieldError('email', 'Некорректный Email')
            return
        }

        if (!validatePassword(formState.password)) {
            setFieldError('password', 'Пароль минимум 8 символов')
            return
        }

        router.push('/');
    };

    const onResetPassword = () => {
        router.push('/(auth)/ResetPasswordScreen');
    }

    const onRegister = () => {
        router.push('/(auth)/RegisterScreen');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.screenContainer}>
                <Image source={require('@/assets/images/reg-bg.jpg')} style={styles.backgroundImage} />
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
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        position: 'relative'
    },
    backgroundImage: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '110%',
        resizeMode: 'cover'
    },
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