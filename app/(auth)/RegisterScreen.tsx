import AuthScreen from "@/components/AuthScreen";
import CustomCheckbox from "@/components/CustomCheckbox";
import CustomText from "@/components/CustomText";
import CustomTextButton from "@/components/CustomTextButton";
import CustomTextInput from "@/components/CustomTextInput";
import SectionContainer from "@/components/SectionContainer";
import { COLORS } from "@/constants/ui";
import { useAuth } from "@/contexts/auth";
import { validateRegister } from "@/functions/validation";
import { useForm } from "@/hooks/useForm";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";


export default function LoginScreen() {
    const { formState, updateField, setFieldError, setErrorMessage, resetErrors } = useForm();
    const [isPolicyChecked, setIsPolicyChecked] = useState(false);
    const [isAgreementChecked, setIsAgreementChecked] = useState(false);
    const { authError, clearAuthError } = useAuth()

    const name = formState.name;
    const email = formState.email;
    const password = formState.password;

    useEffect(() => {
        if (authError) {
            setErrorMessage(authError.message);
            clearAuthError();
        }
    }, [authError, setErrorMessage, setFieldError, clearAuthError]);

    const onRegister = () => {
        if (validateRegister(formState, setFieldError, resetErrors)) {
            router.push({
                pathname: '/(auth)/ConfirmEmailScreen',
                params: { email, password, name }
            })
        }
    };

    return (
        <AuthScreen back>
            <SectionContainer>
                <CustomText
                    variant="h3"
                    style={styles.heading}
                >
                    Регистрация в Level44
                </CustomText>
                <CustomText
                    variant="secondary"
                    style={styles.errorMessage}
                >
                    {formState.errorMessage}
                </CustomText>
                <CustomTextInput
                    variant="default"
                    label='Имя'
                    placeholder=""
                    errored={formState.errors.name}
                    keyboardType="default"
                    onChangeText={(text) => updateField('name', text)}
                />
                <CustomTextInput
                    variant="default"
                    label='Email'
                    placeholder=""
                    errored={formState.errors.email}
                    keyboardType="email-address"
                    style={styles.emailInput}
                    onChangeText={(text) => updateField('email', text)}
                />
                <CustomTextInput
                    variant="default"
                    label='Пароль'
                    placeholder=""
                    errored={formState.errors.password}
                    keyboardType="default"
                    secureTextEntry
                    onChangeText={(text) => updateField('password', text)}
                />
                <CustomTextInput
                    variant="default"
                    label='Повторите пароль'
                    placeholder=""
                    errored={formState.errors.confirmPassword}
                    keyboardType="default"
                    secureTextEntry
                    style={styles.secondPasswordInput}
                    onChangeText={(text) => updateField('confirmPassword', text)}
                />
                <CustomCheckbox
                    text="Я согласен с"
                    link={{
                        linkText: 'политикой конфиденциальности',
                        linkPath: '/screens/PrivacyScreen'
                    }}
                    isChecked={isPolicyChecked}
                    setIsChecked={setIsPolicyChecked}
                    style={styles.checkbox}
                />
                <CustomCheckbox
                    text="Я согласен с"
                    link={{
                        linkText: 'пользовательским соглашением',
                        linkPath: '/screens/UserAgreementScreen'
                    }}
                    isChecked={isAgreementChecked}
                    setIsChecked={setIsAgreementChecked}
                    style={[styles.secondCheckbox, styles.checkbox]}
                />
                <CustomTextButton
                    variant="primary"
                    size="default"
                    label="Зарегистрироваться"
                    onPress={onRegister}
                    style={styles.registerButton}
                    disabled={!isPolicyChecked || !isAgreementChecked}
                />
            </SectionContainer>
        </AuthScreen>

    );
}


const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
    },
    errorMessage: {
        textAlign: 'center',
        color: COLORS.PRIMARY,
        marginTop: 8,
        marginBottom: 20
    },
    emailInput: {
        marginVertical: 24
    },
    secondPasswordInput: {
        marginVertical: 24
    },
    secondCheckbox: {
        marginTop: 8,
        marginBottom: 40
    },
    checkbox: {
        marginLeft: 8
    },
    registerButton: {
        alignSelf: 'center',
    }
})