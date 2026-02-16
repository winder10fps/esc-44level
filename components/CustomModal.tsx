import { COLORS } from "@/constants/ui";
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

type CustomModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <Modal visible={isOpen} onRequestClose={onClose} animationType="fade" transparent={true}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalBackgroundContainer}>
                    <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
                        <View style={styles.contentContainer}>{children}</View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackgroundContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center"
    },
    contentContainer: {
        padding: 16,
        borderRadius: 25,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        width: "90%"
    }
})


export default CustomModal;