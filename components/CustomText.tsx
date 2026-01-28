import { COLORS, FONT_FAMILIES } from "@/constants/ui";
import { StyleSheet, Text, TextProps } from "react-native";


type CustomTextProps = TextProps & {
    variant?: 'primary' | 'secondary' | 'big' | 'micro' | 'h1' | 'h2' | 'h3' | 'h4';
};


const CustomText: React.FC<CustomTextProps> = ({ style, variant, children, ...props }) => {
    return (
        <Text
            style={[
                styles.base,
                variant === 'primary' && styles.primary,
                variant === 'secondary' && styles.secondary,
                variant === 'big' && styles.big,
                variant === 'micro' && styles.micro,
                variant === 'h1' && styles.h1,
                variant === 'h2' && styles.h2,
                variant === 'h3' && styles.h3,
                variant === 'h4' && styles.h4,
                style
            ]}
            {...props}
        >
            {children}
            {'\u200B'}
        </Text>
    )
};


const styles = StyleSheet.create({
    base: {
        color: COLORS.WHITE,
        fontFamily: FONT_FAMILIES.ROBOTO,
        fontWeight: 400,
    },
    primary: {
        fontSize: 16,
        lineHeight: 24
    },
    secondary: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1
    },
    big: {
        fontSize: 18,
        lineHeight: 28
    },
    micro: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.2
    },
    h1: {
        fontFamily: FONT_FAMILIES.ROBOTO_CONDENSED,
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: -0.6
    },
    h2: {
        fontFamily: FONT_FAMILIES.ROBOTO_CONDENSED,
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: -0.2,
        marginLeft: 8,
        marginBottom: 24
    },
    h3: {
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: -0.2
    },
    h4: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: -0.1
    }
});


export default CustomText;