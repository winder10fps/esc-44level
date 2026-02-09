import { ActivityIndicator, FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import StackScreen from '@/components/StackScreen';
import { useAuth } from '@/contexts/AuthContext/AuthContext';
import { useEffect, useState } from 'react';
import { Tournament } from '@/contexts/AuthContext/AuthContextInterfaces';
import CustomText from '@/components/CustomText';
import { COLORS } from '@/constants/ui';
import TournamentCard from '@/components/TournamentCard';

type TournamentScreenProps = {
    refreshKey: number;
    onRefresh?: () => void; 
}

export default function TournamentsScreen({ refreshKey = 0 }: TournamentScreenProps) {
    const { fetchAllTournaments } = useAuth();
    const [futureTournaments, setFutureTournaments] = useState<Tournament[]>([]);
    const [pastTournaments, setPastTournaments] = useState<Tournament[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadTournaments = async () => {
            try {
                setLoading(true);
                const tournamentsData = await fetchAllTournaments();
                setFutureTournaments(tournamentsData.future);
                setPastTournaments(tournamentsData.past);
            } finally {
                setLoading(false);
            }
        };

        loadTournaments();
    }, [fetchAllTournaments, refreshKey]);

    const renderTournament: ListRenderItem<Tournament> = ({ item }) => (
        <TournamentCard
            status={item.status}
            avatar={item.avatar}
            name={item.name}
            game={item.game}
            caption={item.caption}
            max_teams={item.max_teams}
            registered_teams={item.registered_teams}
        />
    );

    return (
        <StackScreen
        title='Киберспортивные турниры'
        style={{paddingHorizontal: 8}}
        >
            {loading ? (
                <View>
                    <ActivityIndicator size="small" color={COLORS.GRAY} />
                </View>
            ) : (
                <View >
                    {futureTournaments.length === 0 ? (
                        <View style={styles.noTournamentsContainer}>
                            <CustomText variant="big" style={styles.noTournamentsText}>
                                Нет запланированных турниров
                            </CustomText>
                        </View>
                    ) : (
                        <>
                            <View style={styles.sectionContainer}>
                                <CustomText variant='h2' style={styles.heading}>Предстоящие</CustomText>
                                <FlatList
                                    data={futureTournaments}
                                    renderItem={renderTournament}
                                    keyExtractor={(item) => item.id.toString()}
                                    scrollEnabled={false}
                                />
                            </View>
                            <View style={styles.sectionContainer}>
                                <CustomText variant='h2' style={styles.heading}>Прошедшие</CustomText>
                                <FlatList
                                    data={pastTournaments}
                                    renderItem={renderTournament}
                                    keyExtractor={(item) => item.id.toString()}
                                    scrollEnabled={false}
                                />
                            </View>
                        </>
                    )}
                </View>
            )}
        </StackScreen>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 16,
        marginBottom: 16,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        paddingHorizontal: 8,
        paddingVertical: 24,
        borderRadius: 25
    },
    tournamentContainer: {
        padding: 16,
        backgroundColor: COLORS.CARD_BACKGROUND,
        borderRadius: 25,
        marginBottom: 16
    },
    noTournamentsContainer: {
        padding: 20,
        alignItems: 'center',
    },
    noTournamentsText: {
        color: COLORS.GRAY,
        textAlign: 'center',
    },
    heading: {
        marginBottom: 0
    }
});