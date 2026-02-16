import CustomModal from "@/components/CustomModal";
import CustomText from "@/components/CustomText";
import CustomTextButton from "@/components/CustomTextButton";
import LinkInProfileSection from "@/components/LinkInProfileSection";
import { COLORS } from "@/constants/ui";
import { useAuth } from "@/contexts/AuthContext/AuthContext";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";


const InfoSection = () => {
    const { logout } = useAuth();

    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

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
            <LinkInProfileSection text="Выйти" accent onPress={() => setIsLogoutModalOpen(true)} />
            <CustomModal isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)}>
                <CustomText variant="primary">Вы точно хотите выйти из аккаунта?</CustomText>
                <View style={styles.modalButtonsContainer}>
                    <CustomTextButton label="Нет" size='default' variant="secondary" onPress={() => setIsLogoutModalOpen(false)} />
                    <CustomTextButton label="Да" size='default' variant="primary" onPress={onLogout} />
                </View>
            </CustomModal>
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
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 16,
        marginTop: 24
    }
})


export default InfoSection;
