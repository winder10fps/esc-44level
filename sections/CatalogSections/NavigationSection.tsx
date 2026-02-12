import CatalogNavigationButton from "@/components/CatalogNavigationButton";
import { StyleSheet, View } from "react-native"


const NavigationSection = () => {
    return (
        <View style={styles.navigateSection}>
            <CatalogNavigationButton
                label='Компьютеры'
                image={{
                    source: require('@/assets/images/catalog/computers.png'),
                    position: {
                        rigth: -40,
                        bottom: -60
                    }
                }}
            />
            <View style={styles.navigateDoubleRow}>
                <CatalogNavigationButton
                    label='PS5 & VR'
                    image={{
                        source: require('@/assets/images/catalog/gamepad.png'),
                        position: {
                            rigth: -50,
                            bottom: -60
                        }
                    }}
                />
                <CatalogNavigationButton
                    label='Бар'
                    image={{
                        source: require('@/assets/images/catalog/can.png'),
                        position: {
                            rigth: 10,
                            bottom: -70
                        }
                    }}
                />
            </View>
            <View style={styles.navigateDoubleRow}>
                <CatalogNavigationButton
                    label='Цены и акции'
                    image={{
                        source: require('@/assets/images/catalog/rouble.png'),
                        position: {
                            rigth: 5,
                            bottom: -25
                        }
                    }}
                />
                <CatalogNavigationButton
                    label='Игры'
                    image={{
                        source: require('@/assets/images/catalog/dice.png'),
                        position: {
                            rigth: -20,
                            bottom: -20
                        }
                    }}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    navigateDoubleRow: {
        flexDirection: 'row',
        gap: 16
    },
    navigateSection: {
        marginVertical: 32,
        marginHorizontal: 8,
        gap: 16
    }
})


export default NavigationSection;
