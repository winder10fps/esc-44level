import { ActivityIndicator, FlatList, ListRenderItem, RefreshControl, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/ui';
import { useUpdateTabs } from '@/hooks/useUpdateTabs';
import CustomText from '@/components/CustomText';
import SectionContainer from '@/components/SectionContainer';
import NavigationSection from '@/sections/CatalogSections/NavigationSection';
import SearchSection from '@/sections/CatalogSections/SearchSection';
import { CatalogCardType } from '@/contexts/AuthContext/AuthContextInterfaces';
import CatalogCard from '@/components/CatalogCard';
import { useAuth } from '@/contexts/AuthContext/AuthContext';
import { useEffect, useState } from 'react';


const Catalog = () => {
    const { refreshing, onRefresh } = useUpdateTabs(); // заменить на обновление каталога
    const { fetchAllCatalogCards } = useAuth();
    const [computerCards, setComputerCards] = useState<CatalogCardType[]>([]);
    const [psCards, setPsCards] = useState<CatalogCardType[]>([]);
    const [barCards, setBarCards] = useState<CatalogCardType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadCards = async () => {
            try {
                setLoading(true);
                const cardsData = await fetchAllCatalogCards();
                setComputerCards(cardsData.computers);
                setPsCards(cardsData.PSAndVR);
                setBarCards(cardsData.bar);
            } finally {
                setLoading(false);
            }
        };

        loadCards();
    }, [fetchAllCatalogCards]);

    const renderComputerOrPsCards: ListRenderItem<CatalogCardType> = ({ item }) => (
        <CatalogCard
            card={item} variant='computerOrPs'
        />
    );
    const renderBarCards: ListRenderItem<CatalogCardType> = ({ item }) => (
        <CatalogCard
            card={item} variant='bar'
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[COLORS.PRIMARY]}
                        progressBackgroundColor={COLORS.CARD_BACKGROUND}
                    />
                }
            >
                <CustomText variant='h1' style={styles.heading}>Каталог</CustomText>
                <SearchSection />
                <NavigationSection />
                <View style={styles.productSections}>
                    <SectionContainer>
                        <CustomText variant='h2' style={styles.sectionHeading}>Компьютеры</CustomText>
                        {loading ? (
                            <ActivityIndicator size={'small'} color={COLORS.GRAY} />
                        ) : (
                            <FlatList
                                data={computerCards}
                                renderItem={renderComputerOrPsCards}
                                keyExtractor={(item) => item.id.toString()}
                                scrollEnabled={false}
                                numColumns={2}
                                columnWrapperStyle={styles.columnWrapper}
                            />
                        )}
                    </SectionContainer>
                    <SectionContainer>
                        <CustomText variant='h2' style={styles.sectionHeading}>PS5 & VR</CustomText>
                        {loading ? (
                            <ActivityIndicator size={'small'} color={COLORS.GRAY} />
                        ) : (
                            <FlatList
                                data={psCards}
                                renderItem={renderComputerOrPsCards}
                                keyExtractor={(item) => item.id.toString()}
                                scrollEnabled={false}
                                numColumns={2}
                                columnWrapperStyle={styles.columnWrapper}
                            />
                        )}
                    </SectionContainer>
                    <SectionContainer>
                        <CustomText variant='h2' style={styles.sectionHeading}>Бар</CustomText>
                        {loading ? (
                            <ActivityIndicator size={'small'} color={COLORS.GRAY} />
                        ) : (
                            <FlatList
                                data={barCards}
                                renderItem={renderBarCards}
                                keyExtractor={(item) => item.id.toString()}
                                scrollEnabled={false}
                                numColumns={2}
                                columnWrapperStyle={styles.columnWrapper}
                            />
                        )}
                    </SectionContainer>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    heading: {
        marginTop: 8,
        marginBottom: 24,
        marginLeft: 16
    },
    productSections: {
        gap: 32
    },
    columnWrapper: {
        gap: 8,
        marginTop: 8
    },
    sectionHeading: {
        marginBottom: 16
    }
})


export default Catalog;