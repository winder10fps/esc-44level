import AuthScreen from "@/components/AuthScreen";
import AuthSectionContainer from "@/components/AuthSectionContainer";
import CustomText from "@/components/CustomText";
import CustomTextButton from "@/components/CustomTextButton";
import CustomTextInput from "@/components/CustomTextInput";
import { COLORS } from "@/constants/ui";
import { validateConfirmEmail } from "@/functions/validation";
import { useForm } from "@/hooks/useForm";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text } from "react-native";


export default function ConfirmEmailScreen() {
    const { formState, updateField, setFieldError, resetErrors } = useForm();

    const params = useLocalSearchParams();
    const email = params.email as string;

    const onConfirmEmail = () => {
        if (validateConfirmEmail(formState, setFieldError, resetErrors)) {
            router.push('/(auth)/LoginScreen')
        }
    }

    return (
        <AuthScreen back>
            <AuthSectionContainer>
                <CustomText
                    variant="h3"
                    style={styles.heading}
                >
                    Подтвердите email
                </CustomText>
                <CustomText
                    variant="secondary"
                    style={styles.caption}
                >
                    На адрес <Text style={{color: COLORS.WHITE}}>{email}</Text> было выслано письмо с 4-х значным кодом
                </CustomText>
                <CustomText
                    variant="secondary"
                    style={styles.errorMessage}
                >
                    {formState.errorMessage}
                </CustomText>
                <CustomTextInput
                    variant="confirm"
                    placeholder=""
                    errored={formState.errors.numbers}
                    keyboardType="numeric"
                    maxLength={4}
                    onChangeText={(text) => updateField('numbers', text)}
                />
                <CustomTextButton
                    variant="primary"
                    size="default"
                    label="Подтвердить"
                    onPress={onConfirmEmail}
                    style={styles.confirmButton}
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
        marginBottom: 16
    },
    caption: {
        textAlign: 'center',
        alignSelf: 'center',
        maxWidth: 265,
        color: COLORS.GRAY,
        marginTop: 8, 
        marginBottom: 24
    },
    confirmButton: {
        alignSelf: 'center',
        marginTop: 72
    }
})