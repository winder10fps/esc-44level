import CustomText from '@/components/CustomText';
import TournamentCard from '@/components/TournamentCard';
import { COLORS } from '@/constants/ui';
import { useAuth } from '@/contexts/auth';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, RefreshControl, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { Tournament } from '../../contexts/auth/types';
import StackScreen from '@/components/StackScreen';

type TournamentScreenProps = {
    refreshKey: number;
    onRefresh?: () => void;
}

export default function TournamentsScreen({ refreshKey = 0 }: TournamentScreenProps) {
    const { fetchAllTournaments, refreshTournaments } = useAuth();
    const [futureTournaments, setFutureTournaments] = useState<Tournament[]>([]);
    const [pastTournaments, setPastTournaments] = useState<Tournament[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const loadTournaments = useCallback(async () => {
        try {
            const tournamentsData = await fetchAllTournaments();
            setFutureTournaments(tournamentsData.future);
            setPastTournaments(tournamentsData.past);
        } catch (error) {
            console.log('Error loading tournaments:', error);
        } finally {
            setLoading(false);
        }
    }, [fetchAllTournaments]);

    useEffect(() => {
        loadTournaments();
    }, [loadTournaments, refreshKey]);

    const handleRefresh = useCallback(async () => {
        setRefreshing(true);
        try {
            const tournamentsData = await refreshTournaments();
            setFutureTournaments(tournamentsData.future);
            setPastTournaments(tournamentsData.past);
        } catch (error) {
            console.log('Error refreshing tournaments:', error);
        } finally {
            setRefreshing(false);
        }
    }, [refreshTournaments]);

    if (loading) {
        return (
            <StackScreen title='Киберспортивные турниры' style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="small" color={COLORS.GRAY} />
                </View>
            </StackScreen>
        );
    }

    return (
        <StackScreen title='Киберспортивные турниры' style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[COLORS.PRIMARY]}
                        progressBackgroundColor={COLORS.CARD_BACKGROUND}
                    />
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {futureTournaments.length === 0 && pastTournaments.length === 0 ? (
                    <View style={styles.noTournamentsContainer}>
                        <CustomText variant="big" style={styles.noTournamentsText}>
                            Нет доступных турниров
                        </CustomText>
                    </View>
                ) : (
                    <>
                        {futureTournaments.length > 0 && (
                            <View style={styles.sectionContainer}>
                                <CustomText variant='h2' style={styles.heading}>Предстоящие</CustomText>
                                <View style={styles.cardsContainer}>
                                    {futureTournaments.map((item) => (
                                        <TournamentCard
                                            key={item.id}
                                            id={item.id}
                                            status={item.status}
                                            avatar={item.avatar}
                                            name={item.name}
                                            game={item.game}
                                            caption={item.caption}
                                            max_teams={item.max_teams}
                                            registered_teams={item.registered_teams.length}
                                        />
                                    ))}
                                </View>
                            </View>
                        )}
                        
                        {pastTournaments.length > 0 && (
                            <View style={styles.sectionContainer}>
                                <CustomText variant='h2' style={styles.heading}>Прошедшие</CustomText>
                                <View style={styles.cardsContainer}>
                                    {pastTournaments.map((item) => (
                                        <TournamentCard
                                            key={item.id}
                                            id={item.id}
                                            status={item.status}
                                            avatar={item.avatar}
                                            game={item.game}
                                            name={item.name}
                                            caption={item.caption}
                                            max_teams={item.max_teams}
                                            registered_teams={item.registered_teams.length}
                                        />
                                    ))}
                                </View>
                            </View>
                        )}
                    </>
                )}
            </ScrollView>
        </StackScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        marginHorizontal: 0,
        paddingHorizontal: 8
    },
    scrollContent: {
        paddingBottom: 16
    },
    sectionContainer: {
        marginTop: 16,
        marginBottom: 16,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        paddingHorizontal: 8,
        paddingVertical: 24,
        borderRadius: 16
    },
    cardsContainer: {
        gap: 8
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    noTournamentsContainer: {
        padding: 20,
        alignItems: 'center',
        marginTop: 20
    },
    noTournamentsText: {
        color: COLORS.GRAY,
        textAlign: 'center',
    },
    heading: {
        marginBottom: 16
    }
});