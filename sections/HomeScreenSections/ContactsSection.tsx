import CustomText from "@/components/CustomText";
import { COLORS } from "@/constants/ui";
import AddressIcon from "@/icons/AddressIcon";
import ClockIcon from "@/icons/ClockIcon";
import PhoneIcon from "@/icons/PhoneIcon";
import VKIcon from "@/icons/VKIcon";
import { Linking, StyleSheet, TouchableOpacity, View } from "react-native"

const ContactsSection = () => {
    const number = '+7 915 905 20 08';
    const workingHours = '11:00 — 7:00';
    const linkVK = 'https://vk.com/esc_level44';
    const address = 'г. Кострома, ул. Катинская, д. 2/7'

    const handleCall = async () => {
        const url = `tel:${number}`;
        await Linking.openURL(url);
    }

    const handleVK = async () => {
        const url = `${linkVK}`;
        await Linking.openURL(url);
    }

    const handleAddress = async () => {
        const encodedAddress = encodeURIComponent(address);
        const url = `https://yandex.ru/maps/?text=${encodedAddress}`;
        await Linking.openURL(url);
    }

    return (
        <View style={styles.sectionContainer}>
            <CustomText variant="h2">Контакты</CustomText>
            <View style={styles.contactList}>
                <TouchableOpacity style={styles.contactItem} onPress={handleCall}>
                    <PhoneIcon />
                    <CustomText variant="primary">{number}</CustomText>
                </TouchableOpacity>
                <View style={styles.contactItem}>
                    <ClockIcon />
                    <CustomText variant="primary">{workingHours}</CustomText>
                </View>
                <TouchableOpacity style={styles.contactItem} onPress={handleVK}>
                    <VKIcon />
                    <CustomText variant="primary">{linkVK}</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactItem} onPress={handleAddress}>
                    <AddressIcon />
                    <CustomText variant="primary">{address}</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        marginHorizontal: 8,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        paddingVertical: 24,
        paddingHorizontal: 8,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 24
    },
    contactList: {
        gap: 8
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    }
})


export default ContactsSection;