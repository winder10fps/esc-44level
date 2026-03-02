import { ActivityIndicator, FlatList, ListRenderItem, RefreshControl, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/ui';
import CustomText from '@/components/CustomText';
import SectionContainer from '@/components/SectionContainer';
import NavigationSection from '@/sections/CatalogSections/NavigationSection';
import CatalogCard from '@/components/CatalogCard';
import { useEffect, useRef, useState, useCallback } from 'react';
import { CatalogCardType } from '../../contexts/auth/types';
import { useAuth } from '@/contexts/auth';

const Catalog = () => {
    const { fetchAllCatalogCards } = useAuth();
    
    const [computerCards, setComputerCards] = useState<CatalogCardType[]>([]);
    const [psCards, setPsCards] = useState<CatalogCardType[]>([]);
    const [barCards, setBarCards] = useState<CatalogCardType[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshingCatalog, setRefreshingCatalog] = useState(false);

    const computersRef = useRef<View | null>(null);
    const psRef = useRef<View | null>(null);
    const barRef = useRef<View | null>(null);
    const scrollViewRef = useRef<ScrollView>(null);

    const loadCards = useCallback(async () => {
        try {
            const cardsData = await fetchAllCatalogCards();
            setComputerCards(cardsData.computers);
            setPsCards(cardsData.PSAndVR);
            setBarCards(cardsData.bar);
        } catch (error) {
            console.log('Error loading catalog:', error);
        } finally {
            setLoading(false);
        }
    }, [fetchAllCatalogCards]);

    useEffect(() => {
        loadCards();
    }, [loadCards]);

    const handleRefresh = useCallback(async () => {
        setRefreshingCatalog(true);
        try {
            await loadCards();
        } catch (error) {
            console.log('Error refreshing catalog:', error);
        } finally {
            setRefreshingCatalog(false);
        }
    }, [loadCards]);

    const renderComputerOrPsCards: ListRenderItem<CatalogCardType> = ({ item }) => (
        <CatalogCard card={item} variant='computerOrPs' />
    );

    const renderBarCards: ListRenderItem<CatalogCardType> = ({ item }) => (
        <CatalogCard card={item} variant='bar' />
    );

    const scrollToSection = (ref: React.RefObject<View | null>) => {
        if (ref.current && scrollViewRef.current) {
            ref.current.measure((...args) => {
                const pageY = args[5];
                scrollViewRef.current?.scrollTo({ y: pageY, animated: true });
            });
        }
    };

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={'large'} color={COLORS.PRIMARY} />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <ScrollView
                ref={scrollViewRef}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshingCatalog}
                        onRefresh={handleRefresh}
                        colors={[COLORS.PRIMARY]}
                        progressBackgroundColor={COLORS.CARD_BACKGROUND}
                    />
                }
            >
                <CustomText variant='h1' style={styles.heading}>Каталог</CustomText>

                <NavigationSection
                    onNavigateToBar={() => scrollToSection(barRef)}
                    onNavigateToComputers={() => scrollToSection(computersRef)}
                    onNavigateToPS={() => scrollToSection(psRef)}
                />

                <View style={styles.productSections}>
                    {/* Компьютеры секция */}
                    <View ref={computersRef} collapsable={false}>
                        <SectionContainer>
                            <CustomText variant='h2' style={styles.sectionHeading}>Компьютеры</CustomText>
                            {computerCards.length === 0 ? (
                                <CustomText style={styles.emptyText}>Нет доступных компьютеров</CustomText>
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
                    </View>

                    {/* PS5 & VR секция */}
                    <View ref={psRef} collapsable={false}>
                        <SectionContainer>
                            <CustomText variant='h2' style={styles.sectionHeading}>PS5 & VR</CustomText>
                            {psCards.length === 0 ? (
                                <CustomText style={styles.emptyText}>Нет доступных PlayStation и VR</CustomText>
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
                    </View>

                    {/* Бар секция */}
                    <View ref={barRef} collapsable={false}>
                        <SectionContainer>
                            <CustomText variant='h2' style={styles.sectionHeading}>Бар</CustomText>
                            {barCards.length === 0 ? (
                                <CustomText style={styles.emptyText}>Нет доступных товаров в баре</CustomText>
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
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    heading: {
        marginTop: 8,
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
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        color: COLORS.GRAY,
        textAlign: 'center',
        padding: 20,
    }
});

export default Catalog;