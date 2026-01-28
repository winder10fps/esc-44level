import CustomText from "@/components/CustomText";
import { COLORS } from "@/constants/ui";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native"


interface User {
    id: number;
    name: string;
    avatar: string;
    level: number;
    hours: number;
}


const UserSection = () => {
    const [user, setUser] = useState<User | null>(null);
    // ! Сделать обработку загрузки

    useEffect(() => {
        const fetchUser = async () => {
            // Имитация задержки сети
            // await new Promise(resolve => setTimeout(resolve, 800));

            // Моковый объект с сервера
            const mockUser: User = {
                id: 123,
                name: "Иван",
                avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Ivan",
                level: 1,
                hours: 45
            };

            setUser(mockUser);
        };

        fetchUser();
    }, []);

    return (
        <View style={styles.sectionContainer}>
            <View style={styles.topElements}>
                <Image source={{ uri: user?.avatar }} style={styles.avatar} />
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
