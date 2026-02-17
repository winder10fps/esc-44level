import CatalogNavigationButton from "@/components/CatalogNavigationButton";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native"

type NavigationSectionProps = {
    onNavigateToComputers: () => void;
    onNavigateToPS: () => void;
    onNavigateToBar: () => void;
}

const NavigationSection = ({
    onNavigateToComputers,
    onNavigateToPS,
    onNavigateToBar
}: NavigationSectionProps) => {
    return (
        <View style={styles.navigateSection}>
            <CatalogNavigationButton
                label='Компьютеры'
                onPress={onNavigateToComputers}
                image={{
                    source: require('@/assets/images/catalog/computers.png'),
                    position: {
                        rigth: -40,
                        bottom: -60
                    },
                    size: {
                        width: 344,
                        height: 149
                    }
                }}
            />
            <View style={styles.navigateDoubleRow}>
                <CatalogNavigationButton
                    label='PS5 & VR'
                    onPress={onNavigateToPS}
                    image={{
                        source: require('@/assets/images/catalog/gamepad.png'),
                        position: {
                            rigth: -50,
                            bottom: -60
                        },
                        size: {
                            width: 154,
                            height: 154
                        }
                    }}
                />
                <CatalogNavigationButton
                    label='Бар'
                    onPress={onNavigateToBar}
                    image={{
                        source: require('@/assets/images/catalog/can.png'),
                        position: {
                            rigth: 10,
                            bottom: -70
                        },
                        size: {
                            width: 70,
                            height: 145
                        }
                    }}
                />
            </View>
            <View style={styles.navigateDoubleRow}>
                <CatalogNavigationButton
                    label='Цены и акции'
                    onPress={() => router.push('/screens/PricesScreen')}
                    image={{
                        source: require('@/assets/images/catalog/rouble.png'),
                        position: {
                            rigth: 5,
                            bottom: -25
                        },
                        size: {
                            width: 75,
                            height: 102
                        }
                    }}
                />
                <CatalogNavigationButton
                    label='Игры'
                    onPress={() => router.push('/screens/GamesScreen')}
                    image={{
                        source: require('@/assets/images/catalog/dice.png'),
                        position: {
                            rigth: -20,
                            bottom: -20
                        },
                        size: {
                            width: 126,
                            height: 85
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
        gap: 8
    },
    navigateSection: {
        marginVertical: 32,
        marginHorizontal: 8,
        gap: 8
    }
})


export default NavigationSection;
