import ArrowIcon from "@/assets/icons/ArrowIcon";
import { COLORS } from "@/constants/ui";
import { router } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "./CustomText";


type StackScreenProps = TouchableOpacityProps & {
    title: string;
}

const StackScreen: React.FC<StackScreenProps> = ({ title, children }) => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <ArrowIcon />
                </TouchableOpacity>
                <CustomText variant="big" style={styles.headerText}>{title}</CustomText>
            </View>
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {children}
            </ScrollView>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: COLORS.BACKGROUND,
        flex: 1,
        paddingHorizontal: 16,
    },
    header: {
        position: 'fixed',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        transform: [{ rotate: '180deg' }],
        paddingVertical: 16,
    },
    headerText: {
        textAlign: 'center',
        flex: 1,
        marginRight: 24
    },
    content: {
    }
})


export default StackScreen;
