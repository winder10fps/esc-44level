import CustomText from "@/components/CustomText";
import BellIcon from "@/icons/BellIcon";
import CallingPhoneIcon from "@/icons/CallingPhoneIcon";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Linking, StyleSheet, TouchableOpacity, View } from "react-native";


interface User {
    name: string;
    avatar: string;
}


const HeaderSection = () => {
    const router = useRouter();
    const number = '+7 915 905 20 08';

    const goProfile = () => {
        router.push('./screens/ProfileScreen');
    }

    const handleCall = async () => {
        const url = `tel:${number}`;
        await Linking.openURL(url);
    }

    const handleNotifs = () => {
        // !
    }

    const [user, setUser] = useState<User | null>(null);
    // ! Сделать обработку загрузки

    useEffect(() => {
        const fetchUser = async () => {
            // Имитация задержки сети
            // await new Promise(resolve => setTimeout(resolve, 800));

            // Моковый объект с сервера
            const mockUser: User = {
                name: "Иван",
                avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Ivan",
            };

            setUser(mockUser);
        };

        fetchUser();
    }, []);

    return (
        <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.profileInfo} onPress={goProfile}>
                <Image
                    source={{
                        uri: user?.avatar
                    }}
                    style={styles.avatar}
                />
                <CustomText variant="h3">{user?.name}</CustomText>
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