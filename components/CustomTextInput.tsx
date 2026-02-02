import { StyleSheet, TextInput, TextInputProps, View } from "react-native"
import CustomText from "./CustomText";
import { COLORS } from "@/constants/ui";

type CustomTextInputProps = TextInputProps & {
    variant?: 'default' | 'confirm';
    label?: string;
    placeholder: string;
    errored?: boolean;
}


const CustomTextInput: React.FC<CustomTextInputProps> = ({ variant = 'default', label, placeholder, errored = false, style, ...props }) => {
    return (
        <View style={[styles.container, style]} >
            {label && (
                <CustomText variant="micro" style={[
                    styles.label,
                    errored && styles.erroredText
                ]}
                >
                    {label}
                </CustomText>
            )}
            <TextInput style={[
                styles.input,
                variant === 'confirm' && styles.confirm,
                errored && styles.erroredInput,
            ]}
                placeholder={placeholder}
                placeholderTextColor={COLORS.GRAY}
                {...props}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    },
    label: {
        color: COLORS.GRAY,
        marginLeft: 16,
        marginBottom: 2,
    },
    input: {
        padding: 16,
        borderRadius: 25,
        backgroundColor: COLORS.CARD_BACKGROUND,
        color: COLORS.WHITE,
        borderWidth: 1,
        borderColor: COLORS.CARD_BACKGROUND,
        fontSize: 16,
        height: 56
    },
    confirm: {
        textAlign: 'center',
        alignSelf: 'center',
        paddingHorizontal: 55,
        paddingVertical: 8,
        minWidth: 190,
        fontSize: 32,
        fontWeight: 700

    },
    erroredInput: {
        borderColor: COLORS.PRIMARY
    },
    erroredText: {
        color: COLORS.PRIMARY
    },
})

export default CustomTextInput