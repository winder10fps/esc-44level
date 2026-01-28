import LinkInProfileSection from "@/components/LinkInProfileSection";
import { COLORS } from "@/constants/ui";
import { StyleSheet, View } from "react-native"


const InfoSection = () => {
    return (
        <View style={styles.sectionConstainer}>
            <LinkInProfileSection text="О клубе" />
            <LinkInProfileSection text="Турниры" />
            <LinkInProfileSection text="Уведомления" />
            <LinkInProfileSection text="Частые вопросы" />
            <LinkInProfileSection text="Конфиденциальность" />
            <LinkInProfileSection text="Польз. соглашение"/>
            <LinkInProfileSection text="Выйти" accent/>
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
