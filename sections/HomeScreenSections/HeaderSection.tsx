import BellIcon from "@/assets/icons/BellIcon";
import CallingPhoneIcon from "@/assets/icons/CallingPhoneIcon";
import CustomText from "@/components/CustomText";
import { mockUser } from "@/constants/withServer";
import { useChangePage } from "@/functions/navigation";
import { router } from "expo-router";
import { Image, Linking, StyleSheet, TouchableOpacity, View } from "react-native";


const HeaderSection = () => {
    const number = '+7 915 905 20 08';

    const { changePageTo } = useChangePage();

    const goProfile = () => {
        changePageTo('./ProfileScreen')
    }

    const handleCall = () => {
        const url = `tel:${number}`;
        Linking.openURL(url);
    }

    const handleNotifs = () => {
        router.push('/screens/NotifScreen');
    }

    return (
        <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.profileInfo} onPress={goProfile}>
                <Image
                    source={{
                        uri: mockUser.avatar
                    }}
                    style={styles.avatar}
                />
                <CustomText variant="h3">{mockUser.name}</CustomText>
            </TouchableOpacity>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={handleNotifs}>
                    <BellIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCall}>
                    <CallingPhoneIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    buttons: {
        flexDirection: 'row',
        gap: 24
    }
})


export default HeaderSection;