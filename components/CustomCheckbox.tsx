import { Checkbox } from "expo-checkbox"
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, ViewProps } from "react-native"
import CustomText from "./CustomText"
import { COLORS } from "@/constants/ui"
import { Href, router } from "expo-router"

type CustomCheckboxProps = ViewProps & {
    text?: string;
    link?: {
        linkText: string,
        linkPath: Href
    };
    isChecked: boolean;
    setIsChecked: (isChecked: boolean) => void;
}


const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    text,
    link,
    isChecked: checked,
    setIsChecked,
    style
}) => {
    return (
        <View style={[styles.checkboxContainer, style]}>
            <Checkbox
                style={styles.checkbox}
                value={checked}
                onValueChange={setIsChecked}
                color={COLORS.GRAY}
            />
            {text &&
                <TouchableWithoutFeedback onPress={() => setIsChecked(!checked)}>
                    <View style={styles.checkboxTextContainer}>
                        <CustomText variant="micro">{text} </CustomText>
                        {link &&
                            <TouchableOpacity onPress={() => router.push(link.linkPath)}>
                                <CustomText
                                    style={styles.linkText}
                                    variant="micro"
                                >
                                    {link.linkText}
                                </CustomText>
                            </TouchableOpacity>
                        }
                    </View>
                </TouchableWithoutFeedback>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    checkboxTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        borderRadius: 4,
        borderColor: COLORS.GRAY,
        borderWidth: 1,
        width: 16,
        height: 16
    },
    linkText: {
        textDecorationLine: 'underline'
    }
})


export default CustomCheckbox;