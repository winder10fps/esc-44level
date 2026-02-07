import LinkInProfileSection from "@/components/LinkInProfileSection";
import { COLORS } from "@/constants/ui";
import { useAuth } from "@/contexts/AuthContext";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native"


const InfoSection = () => {
    const {logout} = useAuth();



    const onLogout = async () => {
        await logout()
    }
    
    return (
        <View style={styles.sectionConstainer}>
            <LinkInProfileSection text="О клубе" onPress={() => router.push('/screens/AboutClubScreen')} />
            <LinkInProfileSection text="Турниры" onPress={() => router.push('/screens/TournamentsScreen')} />
            <LinkInProfileSection text="Уведомления" onPress={() => router.push('/screens/NotifScreen')} />
            <LinkInProfileSection text="Частые вопросы" onPress={() => router.push('/screens/FAQScreen')} />
            <LinkInProfileSection text="Конфиденциальность" onPress={() => router.push('/screens/PrivacyScreen')} />
            <LinkInProfileSection text="Польз. соглашение" onPress={() => router.push('/screens/UserAgreementScreen')} />
            <LinkInProfileSection text="Выйти" accent onPress={onLogout}/>
        </View>
    )
}


const styles = StyleSheet.create({
    sectionConstainer: {
        marginHorizontal: 16,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        flex: 1,
        paddingTop: 8,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    }
})


export default InfoSection;
