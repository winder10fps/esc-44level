import { COLORS } from "@/constants/ui";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";


type CustomIconButtonProps = {
    icon: React.ComponentProps<typeof Ionicons>['name'],
    size: 'default' | 'big' | 'mini';
}


const CustomIconButton: React.FC<CustomIconButtonProps> = ({ icon, size, ...props }) => {
    const geticonSize = () => {
        switch (size) {
            case 'default':
                return 24;
            // Дописать
        }
    }

    return (
        <TouchableOpacity style={styles.base}>
            <Ionicons name={icon} size={geticonSize()} color={COLORS.WHITE} />
        </TouchableOpacity >
    )
}


const styles = StyleSheet.create({
    base: {
        alignSelf: 'baseline',
        padding: 12
    }
})


export default CustomIconButton;