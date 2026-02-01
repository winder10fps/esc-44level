import CustomText from "@/components/CustomText";
import FullScreenImageModal from "@/components/FullScreenImageModal";
import { mockUser } from "@/constants/fromServer";
import { COLORS } from "@/constants/ui";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"


const UserSection = () => {

    const [avatarFullScreen, setAvatarFullScreen] = useState(false)

    return (
        <View style={styles.sectionContainer}>
            <View style={styles.topElements}>
                <TouchableOpacity onPress={() => setAvatarFullScreen(true)}>
                    <Image source={{ uri: mockUser.avatar }} style={styles.avatar} />
                </TouchableOpacity>
                <FullScreenImageModal
                    visible={avatarFullScreen}
                    imageSource={{ uri: mockUser.avatar }}
                    onClose={() => { setAvatarFullScreen(false) }}
                />
                <CustomText style={styles.userName}>{mockUser.name}</CustomText>
                <CustomText style={styles.grayText} variant="secondary">#P{mockUser.id}</CustomText>
            </View>
            <View style={styles.bottomElements}>
                <View style={styles.elementContainer}>
                    <CustomText style={styles.elementNumber}>{mockUser.level}</CustomText>
                    <CustomText style={styles.grayText} variant="primary">Level</CustomText>
                </View>
                <View style={styles.elementContainer}>
                    <CustomText style={styles.elementNumber}>{mockUser.hours}</CustomText>
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
