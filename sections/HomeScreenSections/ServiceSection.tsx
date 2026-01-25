import CustomText from "@/components/CustomText"
import CustomTextButton from "@/components/CustomTextButton"
import { COLORS } from "@/constants/ui"
import CarIcon from "@/icons/CarIcon"
import CleanerIcon from "@/icons/CleanerIcon"
import ComputerIcon from "@/icons/ComputerIcon"
import FoodIcon from "@/icons/FoodIcon"
import GamepadIcon from "@/icons/GamepadIcon"
import LinesIcon from "@/icons/LinesIcon"
import PlayStationIcon from "@/icons/PlayStationIcon"
import VRIcon from "@/icons/VRIcon"
import { useRouter } from "expo-router"
import { StyleSheet, View } from "react-native"

const ServiceSection = () => {
    const router = useRouter();

    const goCatalog = () => {
        router.push('./screens/CatalogScreen');
    }

    return (
        <View style={styles.sectionContainer}>
            <CustomText variant="h2">Мы предоставим</CustomText>
            <View>
                <View style={styles.serviceRow}>
                    <View style={styles.service}>
                        <GamepadIcon />
                        <CustomText variant="h4" style={styles.textInService}>Множество игр</CustomText>
                    </View>
                    <View style={styles.service}>
                        <VRIcon />
                        <CustomText variant="h4" style={styles.textInService}>VR площадка</CustomText>
                    </View>
                </View>
                <View style={styles.serviceRow}>
                    <View style={styles.service}>
                        <ComputerIcon />
                        <CustomText variant="h4" style={styles.textInService}>40+ компьютеров</CustomText>
                    </View>
                    <View style={styles.service}>
                        <PlayStationIcon />
                        <CustomText variant="h4" style={styles.textInService}>Кинозал с PS5</CustomText>
                    </View>
                </View>
                <View style={styles.serviceRow}>
                    <View style={styles.service}>
                        <FoodIcon />
                        <CustomText variant="h4" style={styles.textInService}>Снеки и напитки</CustomText>
                    </View>
                    <View style={styles.service}>
                        <CarIcon />
                        <CustomText variant="h4" style={styles.textInService}>Автосимулятор</CustomText>
                    </View>
                </View>
                <View style={styles.serviceRow}>
                    <View style={styles.service}>
                        <LinesIcon />
                        <CustomText variant="h4" style={styles.textInService}>9 игровых линий</CustomText>
                    </View>
                    <View style={styles.service}>
                        <CleanerIcon />
                        <CustomText variant="h4" style={styles.textInService}>Чистота и порядок</CustomText>
                    </View>
                </View>
            </View>
            <CustomTextButton
                label="В каталог"
                size="default"
                variant="primary"
                onPress={goCatalog}
                style={{
                    marginTop: 8,
                    alignSelf: 'center'
                }} />
        </View>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        marginHorizontal: 8,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        paddingVertical: 24,
        paddingHorizontal: 8,
        borderRadius: 25,
        marginTop: 24
    },
    serviceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: 16
    },
    service: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        flex: 1,
        backgroundColor: COLORS.CARD_BACKGROUND,
        paddingVertical: 16,
        paddingHorizontal: 4,
        borderRadius: 25,
    },
    textInService: {
        textAlign: 'center'
    }
})


export default ServiceSection