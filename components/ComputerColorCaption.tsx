import { COLORS } from "@/constants/ui"
import { StyleSheet, View } from "react-native"
import CustomText from "./CustomText"

type ComputerColorCaptionProps = {
    text: 'свободные' | 'бронь' | 'занятые' | 'выбранное'
}

const ComputerColorCaption: React.FC<ComputerColorCaptionProps> = ({text}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.dot, 
                text === 'свободные' && {backgroundColor: COLORS.GREEN},
                text === 'бронь' && {backgroundColor: COLORS.BLUE},
                text === 'занятые' && {backgroundColor: COLORS.PRIMARY},
                text === 'выбранное' && {backgroundColor: COLORS.DARK_GRAY},
            ]} />
            <CustomText variant="primary">{text}</CustomText>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    dot: {
        width: 16,
        height: 16,
        borderRadius: 4
    }
})


export default ComputerColorCaption;
