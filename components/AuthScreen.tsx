import ArrowIcon from "@/assets/icons/ArrowIcon";
import { COLORS, TOUCHABLE_OPACITY } from "@/constants/ui";
import { router } from "expo-router";
import {
    Image,
    Keyboard,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


type AuthScreenProps = TouchableOpacityProps & {
    back: boolean;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ back, children }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={styles.screenContainer}>
                <Image source={require('@/assets/images/reg-bg.jpg')} style={styles.backgroundImage} />
                <View style={styles.overlay}></View>
                <SafeAreaView >
                    {back &&
                        <View style={styles.backArrow}>
                            <TouchableOpacity
                                activeOpacity={TOUCHABLE_OPACITY.OPACITY}
                                style={styles.backButton}
                                onPress={() => router.back()}
                            >
                                <ArrowIcon />
                            </TouchableOpacity>
                        </View>
                    }
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {children}
                    </ScrollView>
                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: COLORS.BACKGROUND,
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '110%',
        resizeMode: 'cover'
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'hsla(0, 0%, 0%, 0.40)'
    },
    backArrow: {
        position: 'fixed',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        transform: [{ rotate: '180deg' }],
        padding: 16,
    },
    headerText: {
        textAlign: 'center',
        flex: 1,
        marginRight: 24
    }
})


export default AuthScreen;
