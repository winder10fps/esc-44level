import CarIcon from "@/assets/icons/CarIcon"
import CleanerIcon from "@/assets/icons/CleanerIcon"
import ComputerIcon from "@/assets/icons/ComputerIcon"
import FoodIcon from "@/assets/icons/FoodIcon"
import GamepadIcon from "@/assets/icons/GamepadIcon"
import LinesIcon from "@/assets/icons/LinesIcon"
import PlayStationIcon from "@/assets/icons/PlayStationIcon"
import VRIcon from "@/assets/icons/VRIcon"
import CustomText from "@/components/CustomText"
import CustomTextButton from "@/components/CustomTextButton"
import { COLORS } from "@/constants/ui"
import { useChangePage } from "@/functions/navigation"
import { StyleSheet, View } from "react-native"


const ServiceSection = () => {
    const { changePageTo } = useChangePage();

    const goCatalog = () => {
        changePageTo('./CatalogScreen')
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