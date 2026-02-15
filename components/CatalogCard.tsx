import { CatalogCardType } from "@/contexts/AuthContext/AuthContextInterfaces"
import { Image, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import CustomText from "./CustomText";
import { COLORS } from "@/constants/ui";
import CustomTextButton from "./CustomTextButton";
import OtherIcon from "@/assets/icons/ОtherIcon";
import { router } from "expo-router";


type CatalogCardProps = TouchableOpacityProps & {
    card: CatalogCardType;
    variant: 'computerOrPs' | 'bar';
}

const GrayText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <CustomText variant="micro" style={{ color: COLORS.GRAY }}>{children}</CustomText>
);

const CatalogCard: React.FC<CatalogCardProps> = ({ card, variant }) => {
    const cardSecifications = card.specifications;
    const processor = cardSecifications.processor;
    const viedocard = cardSecifications.viedocard
    const resolution = cardSecifications.resolution
    const refreshRate = cardSecifications.refreshRate
    const screen = cardSecifications.screen
    const audioSystem = cardSecifications.audioSystem
    const helmets = cardSecifications.helmets

    const quantity = cardSecifications.quantity
    const price = cardSecifications.price?.toString()

    const handlePreviewProduct = () => {
        router.push({
            pathname: '/screens/CatalogPreviewScreen',
            params: {
                heading: card.heading,
                id: card.id.toString(),
                variant: variant
            }
        })
    }

    const imageSource = card.photo
        ? { uri: card.photo }
        : require('@/assets/images/logo.png');

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={handlePreviewProduct}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.cardTextContent}>
                <View style={styles.row}>
                    <CustomText variant="h4">{card.heading}</CustomText>
                    {card.line && <CustomText variant="big" style={{ color: COLORS.GRAY }}>L{card.line}</CustomText>}
                </View>
                {variant === 'computerOrPs' && (
                    <>
                        <View style={styles.specifications}>
                            {processor && <GrayText>Процессор: {processor}</GrayText>}
                            {viedocard && <GrayText>Видеокарта: {viedocard}</GrayText>}
                            {resolution && <GrayText>Разрешение: {resolution}</GrayText>}
                            {refreshRate && <GrayText>Частота обновления: {refreshRate}</GrayText>}
                            {screen && <GrayText>Экран: {screen}</GrayText>}
                            {audioSystem && <GrayText>Аккуст. система {audioSystem}</GrayText>}
                            {helmets && <GrayText>Кол-во шлемов {helmets}</GrayText>}
                        </View>
                        <View style={styles.row}>
                            <CustomTextButton
                                variant="primary"
                                size="mini"
                                label="Бронировать"
                                onPress={() => router.push('/(tabs)/BookingScreen')}
                            />
                            <OtherIcon style={{ marginRight: 8 }} />
                        </View>
                    </>
                )}
                {variant === 'bar' && (
                    <>
                        <View style={styles.row}>
                            <GrayText>{quantity}</GrayText>
                            <CustomText variant="h3">{price} ₽</CustomText>
                        </View>
                    </>
                )}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: COLORS.CARD_BACKGROUND,
        borderRadius: 25,
        flex: 1
    },
    image: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    cardTextContent: {
        padding: 8
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    specifications: {
        marginBottom: 8,
    }
})


export default CatalogCard;
