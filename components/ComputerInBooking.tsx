import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"
import CustomText from "./CustomText";
import { COLORS, TOUCHABLE_OPACITY } from "@/constants/ui";


type ComputerInBookingProps = TouchableOpacityProps & {
    title: string;
    status: 'free' | 'busy' | 'booking';
    isSelected: boolean

}

const ComputerInBooking: React.FC<ComputerInBookingProps> = ({title, status, isSelected, onPress}) => {
    return (
        <TouchableOpacity
        activeOpacity={TOUCHABLE_OPACITY.OPACITY}
        disabled={status === 'busy'}
        style={[
            styles.container,
            status === 'free' && styles.free,
            status === 'busy' && styles.busy,
            status === 'booking' && styles.booking,
            isSelected && styles.selected
        ]}
        onPress={onPress}>
            <CustomText variant="micro">{title}</CustomText>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    free: {
        backgroundColor: COLORS.GREEN
    },
    busy: {
        backgroundColor: COLORS.PRIMARY
    },
    booking: {
        backgroundColor: COLORS.BLUE
    },
    selected: {
        backgroundColor: COLORS.DARK_GRAY
    },
})


export default ComputerInBooking;