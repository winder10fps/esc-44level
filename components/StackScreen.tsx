import ArrowIcon from "@/assets/icons/ArrowIcon";
import { COLORS, TOUCHABLE_OPACITY } from "@/constants/ui";
import { router } from "expo-router";
import { ScrollView, ScrollViewProps, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "./CustomText";


type StackScreenProps = TouchableOpacityProps & ScrollViewProps & {
    title: string;
}

const StackScreen: React.FC<StackScreenProps> = ({ title, children, style }) => {
    return (
        <SafeAreaView style={[styles.screenContainer, style]}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={TOUCHABLE_OPACITY.OPACITY}
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
