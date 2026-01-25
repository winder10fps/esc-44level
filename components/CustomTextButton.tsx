import { COLORS, FONT_FAMILIES } from "@/constants/ui";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"
import CustomText from "./CustomText";


type CustomTextButtonProps = TouchableOpacityProps & {
    label: string;
    size: 'default' | 'big';
    variant: 'primary' | 'secondary'
}


const CustomTextButton: React.FC<CustomTextButtonProps> = ({ style, label, size, variant, ...props }) => {
    return (
        <TouchableOpacity
            style={[
                styles.base,
                variant === 'primary' && styles.primary,
                variant === 'secondary' && styles.secondary,
                style
            ]}
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
        fontFamily: FONT_FAMILIES.ROBOTO_CONDENSED
    },
    default: {
        fontSize: 16
    },
    big: {
        fontSize: 20
    }
})


export default CustomTextButton;