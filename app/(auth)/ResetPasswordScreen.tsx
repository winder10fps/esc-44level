import AuthScreen from "@/components/AuthScreen";
import AuthSectionContainer from "@/components/AuthSectionContainer";
import CustomText from "@/components/CustomText";
import CustomTextButton from "@/components/CustomTextButton";
import CustomTextInput from "@/components/CustomTextInput";
import { COLORS } from "@/constants/ui";
import { validateResetPassword } from "@/functions/validation";
import { useForm } from "@/hooks/useForm";
import { router } from "expo-router";
import { StyleSheet } from "react-native";


export default function ResetPasswordScreen() {
    const { formState, updateField, setFieldError, resetErrors } = useForm();

    const onResetPassword = () => {
        if (validateResetPassword(formState, setFieldError, resetErrors)) {
            router.push({
                pathname: '/(auth)/ConfirmEmailScreen',
                params: {
                    email: formState.email,
                    newPassword: formState.password
                }
            });
        }
    }

    return (
        <AuthScreen back>
            <AuthSectionContainer>
                <CustomText
                    variant="h3"
                    style={styles.heading}
                >
                    Восстановление пароля
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
                <CustomTextButton
                    variant="primary"
                    size="default"
                    label="Восстановить"
                    onPress={onResetPassword}
                    style={styles.resetButton}
                />
            </AuthSectionContainer>
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
        marginBottom: 24
    },
    secondPasswordInput: {
        marginVertical: 24
    },
    resetButton: {
        alignSelf: 'center',
        marginTop: 16
    },
})