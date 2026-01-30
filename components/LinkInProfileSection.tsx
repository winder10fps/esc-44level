import ArrowIcon from "@/assets/icons/ArrowIcon";
import { COLORS } from "@/constants/ui";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import CustomText from "./CustomText";


type LinkInProfileSectionProps = TouchableOpacityProps & {
    text: string;
    accent?: boolean;
}


const LinkInProfileSection: React.FC<LinkInProfileSectionProps> = ({ text, accent, ...props }) => {
    return (
        <TouchableOpacity style={styles.base} {...props}>
            <CustomText variant="big" style={accent && styles.accent}>{text}</CustomText>
            {!accent && <ArrowIcon />}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },
    accent: {
        color: COLORS.PRIMARY
    }
})


export default LinkInProfileSection;
