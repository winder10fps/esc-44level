import { COLORS, FONT_FAMILIES } from "@/constants/ui";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"
import CustomText from "./CustomText";


type CustomTextButtonProps = TouchableOpacityProps & {
    label: string;
    size: 'default' | 'big';
    variant: 'primary' | 'secondary' | 'onlyText';
    disabled?: boolean;
}


const CustomTextButton: React.FC<CustomTextButtonProps> = ({
    style,
    label,
    size,
    variant,
    disabled = false,
    onPress,
    ...props
}) => {

    const handlePress = (event: any) => {
        if (!disabled && onPress) {
            onPress(event);
        }
    }

    return (
        <TouchableOpacity
            style={[
                styles.base,
                variant === 'primary' && styles.primary,
                variant === 'secondary' && styles.secondary,
                variant === 'onlyText' && styles.onlyText,
                disabled && styles.disabled,
                style
            ]}
            onPress={handlePress}
            activeOpacity={disabled ? 0.5 : 0.2}
            {...props}
        >
            <CustomText
                style={[
                    styles.buttonFontBase,
                    size === 'default' && styles.default,
                    size === 'big' && styles.big,
                ]}
            >
                {label}
            </CustomText>
        </TouchableOpacity >
    )
}


const styles = StyleSheet.create({
    base: {
        borderRadius: 25,
        paddingVertical: 16,
        paddingHorizontal: 40,
        alignSelf: 'baseline'
    },
    primary: {
        backgroundColor: COLORS.PRIMARY,
    },
    secondary: {
        borderWidth: 1,
        borderColor: COLORS.WHITE,
    },
    buttonFontBase: {
        fontFamily: FONT_FAMILIES.ROBOTO_CONDENSED,
        textAlign: 'center'
    },
    default: {
        fontSize: 16
    },
    big: {
        fontSize: 20
    },
    onlyText: {
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    disabled: {
        opacity: 0.5
    }
})


export default CustomTextButton;