import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import StackScreen from '@/components/StackScreen';
import { router, useLocalSearchParams } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext/AuthContext';
import { useEffect, useState } from 'react';
import { CatalogCardType } from '@/contexts/AuthContext/AuthContextInterfaces';
import { COLORS } from '@/constants/ui';
import FullScreenImageModal from '@/components/FullScreenImageModal';
import CustomText from '@/components/CustomText';
import CustomTextButton from '@/components/CustomTextButton';

export default function CatalogPreviewScreen() {
    const params = useLocalSearchParams();
    const { fetchAllCatalogCards } = useAuth();
    const [card, setCard] = useState<CatalogCardType | undefined>(undefined);
    const [loading, setLoading] = useState(false)

    const title = Array.isArray(params.heading)
        ? params.heading[0]
        : params.heading;

    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    useEffect(() => {
        const loadCard = async () => {
            setLoading(true)
            setCard(undefined)
            const cardsData = await fetchAllCatalogCards();
            const allCards = [...cardsData.computers, ...cardsData.PSAndVR, ...cardsData.bar];
            const foundCard = allCards.find(c => c.id.toString() === id);
            setCard(foundCard);
            setLoading(false)
        };

        if (id) loadCard();
        return () => {
            setCard(undefined);
        };
    }, [id, fetchAllCatalogCards]);

    const [isProductPhotoOpen, setIsProductPhotoOpen] = useState(false)

    const heading1 = card?.line ? `Игровая линия LINE-${card?.line} (${card?.heading})` : title

    const cardSecifications = card?.specifications;
    const processor = cardSecifications?.processor;
    const viedocard = cardSecifications?.viedocard
    const resolution = cardSecifications?.resolution
    const refreshRate = cardSecifications?.refreshRate
    const screen = cardSecifications?.screen
    const audioSystem = cardSecifications?.audioSystem
    const helmets = cardSecifications?.helmets
    const quantity = cardSecifications?.quantity
    const price = card?.specifications.price
    const ram = cardSecifications?.ram;
    const keyboard = cardSecifications?.keyboard;
    const headphones = cardSecifications?.headphones;
    const ageLimit = cardSecifications?.ageLimit;

    const renderPrice = () => {
        if (!price) return null;

        if (typeof price === 'object' && price !== null && !Array.isArray(price)) {
            const priceLabels: Record<string, string> = {
                hour: 'Час',
                day: 'День',
                night: 'Ночь'
            };

            return (
                <View>
                    {Object.entries(price).map(([key, value]) => (
                        <CustomText key={key} variant='primary' style={styles.text}>
                            {priceLabels[key] || key}: {value} ₽
                        </CustomText>
                    ))}
                </View>
            );
        }

        return (
            <CustomText variant='primary' style={styles.text}>
                Цена: {price} ₽
            </CustomText>
        );
    };


    return (
        <StackScreen title={title} style={{ paddingHorizontal: 8 }}>
            {loading ? (
                <ActivityIndicator size={'small'} color={COLORS.GRAY} style={styles.loading} />
            ) : (
                <View style={styles.contentContainer}>
                    {card?.photo !== '' && card?.photo &&
                        <>
                            <TouchableOpacity onPress={() => setIsProductPhotoOpen(true)}>
                                <Image
                                    source={{ uri: card?.photo }}
                                    style={styles.image}
                                />
                            </TouchableOpacity>
                            <FullScreenImageModal
                                imageSource={{ uri: card?.photo }}
                                visible={isProductPhotoOpen}
                                onClose={() => setIsProductPhotoOpen(false)}
                            />
                        </>}
                    <View style={styles.sectionContainer}>
                        <CustomText variant='h2' style={styles.heading}>{heading1}</CustomText>
                        <CustomText variant='primary' style={styles.text}>{card?.description}</CustomText>
                    </View>
                    <View style={styles.sectionContainer}>
                        <CustomText variant='h2' style={styles.heading}>Характеристики</CustomText>
                        {processor && <CustomText variant='primary' style={styles.text}>• Процессор: {processor}</CustomText>}
                        {viedocard && <CustomText variant='primary' style={styles.text}>• Видеокарта: {viedocard}</CustomText>}
                        {resolution && <CustomText variant='primary' style={styles.text}>• Разрешение монитора: {resolution}</CustomText>}
                        {refreshRate && <CustomText variant='primary' style={styles.text}>• Частота обновления: {refreshRate}</CustomText>}
                        {screen && <CustomText variant='primary' style={styles.text}>• Экран: {screen}</CustomText>}
                        {audioSystem && <CustomText variant='primary' style={styles.text}>• Аккустическая система: {audioSystem}</CustomText>}
                        {helmets && <CustomText variant='primary' style={styles.text}>• Количество шлемов: {helmets}</CustomText>}
                        {quantity && <CustomText variant='primary' style={styles.text}>• Количество: {quantity}</CustomText>}
                        {ram && <CustomText variant='primary' style={styles.text}>• Оперативная память: {ram}</CustomText>}
                        {keyboard && <CustomText variant='primary' style={styles.text}>• Клавиатура: {keyboard}</CustomText>}
                        {headphones && <CustomText variant='primary' style={styles.text}>• Наушники: {headphones}</CustomText>}
                        {ageLimit && <CustomText variant='primary' style={styles.text}>• Возрастное ограничение: {ageLimit}</CustomText>}
                    </View>
                    <View style={styles.sectionContainer}>
                        <CustomText variant='h2' style={styles.heading}>Цены</CustomText>
                        {renderPrice()}
                    </View>
                    {!quantity &&
                        <CustomTextButton
                            size='default'
                            variant='primary'
                            label='Забронировать'
                            style={styles.button}
                            onPress={() => router.push('/BookingScreen')}
                        />
                    }
                </View>
            )}
        </StackScreen>
    );
}

const styles = StyleSheet.create({
    loading: {
        marginTop: 8
    },
    contentContainer: {
        gap: 16,
    },
    image: {
        width: '100%',
        height: 190,
        borderRadius: 25,
        marginTop: 16
    },
    sectionContainer: {
        paddingHorizontal: 8,
        paddingVertical: 24,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        borderRadius: 25

    },
    heading: {
        marginLeft: 0,
        marginBottom: 8
    },
    text: {
        color: COLORS.GRAY
    },
    button: {
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 16
    }
});
