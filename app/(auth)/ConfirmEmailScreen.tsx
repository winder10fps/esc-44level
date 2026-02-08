import AuthScreen from "@/components/AuthScreen";
import AuthSectionContainer from "@/components/AuthSectionContainer";
import CustomText from "@/components/CustomText";
import CustomTextButton from "@/components/CustomTextButton";
import CustomTextInput from "@/components/CustomTextInput";
import { COLORS } from "@/constants/ui";
import { useAuth } from "@/contexts/AuthContext/AuthContext";
import { validateConfirmEmail } from "@/functions/validation";
import { useForm } from "@/hooks/useForm";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text } from "react-native";


export default function ConfirmEmailScreen() {
    const { formState, updateField, setFieldError, resetErrors } = useForm();
    const { user, register, updatePassword } = useAuth()

    const params = useLocalSearchParams();
    const email = params.email as string;
    const password = params.password as string;
    const name = params.name as string;
    const newPassword = params.newPassword as string;

    const onConfirmEmail = () => {
        if (validateConfirmEmail(formState, setFieldError, resetErrors)) {
            if (name !== undefined) {
                console.log(name);
                register({ email, password, name })
                return;
            }
            else {
                updatePassword({ email, newPassword })
                console.log('reseted password');
                console.log(user);
            }
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
                    На адрес <Text style={{ color: COLORS.WHITE }}>{email}</Text> было выслано письмо с 4-х значным кодом
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