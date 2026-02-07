import CustomText from "@/components/CustomText";
import FullScreenImageModal from "@/components/FullScreenImageModal";
import { COLORS } from "@/constants/ui";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";


const UserSection = () => {

    const [avatarFullScreen, setAvatarFullScreen] = useState(false)

    const {user} = useAuth()

    return (
        <View style={styles.sectionContainer}>
            <View style={styles.topElements}>
                <TouchableOpacity onPress={() => setAvatarFullScreen(true)}>
                    <Image source={{ uri: user?.avatar }} style={styles.avatar} />
                </TouchableOpacity>
                <FullScreenImageModal
                    visible={avatarFullScreen}
                    imageSource={{ uri: user?.avatar }}
                    onClose={() => { setAvatarFullScreen(false) }}
                />
                <CustomText style={styles.userName}>{user?.name}</CustomText>
                <CustomText style={styles.grayText} variant="secondary">#P{user?.id}</CustomText>
            </View>
            <View style={styles.bottomElements}>
                <View style={styles.elementContainer}>
                    <CustomText style={styles.elementNumber}>{user?.level}</CustomText>
                    <CustomText style={styles.grayText} variant="primary">Level</CustomText>
                </View>
                <View style={styles.elementContainer}>
                    <CustomText style={styles.elementNumber}>{user?.hours}</CustomText>
                    <CustomText style={styles.grayText} variant="primary">Часов с нами</CustomText>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 32
    },
    topElements: {
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.SECTION_BACKGROUND
    },
    userName: {
        fontSize: 30,
        fontWeight: 700,
        lineHeight: 28,
        letterSpacing: -0.2,
        marginTop: 16,
        marginBottom: 4
    },
    grayText: {
        color: COLORS.GRAY
    },
    bottomElements: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32
    },
    elementContainer: {
        flex: 1,
        maxWidth: '48%',
        alignItems: 'center',
        backgroundColor: COLORS.SECTION_BACKGROUND,
        paddingVertical: 16,
        borderRadius: 25,
    },
    elementNumber: {
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: -0.2
    }
})


export default UserSection;
