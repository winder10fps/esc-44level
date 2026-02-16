import CustomText from "@/components/CustomText";
import CustomTextButton from "@/components/CustomTextButton";
import { COLORS } from "@/constants/ui";
import { useAuth } from "@/contexts/AuthContext/AuthContext";
import { Tournament } from "@/contexts/AuthContext/AuthContextInterfaces";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ListRenderItem, StyleSheet, View } from "react-native";


type TournamentSectionProps = {
    refreshKey: number;
}


const TournamentSection = ({ refreshKey = 0 }: TournamentSectionProps) => {
    const { fetchAllTournaments } = useAuth();
    const [futureTournaments, setFutureTournaments] = useState<Tournament[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTournaments = async () => {
            try {
                setLoading(true);
                const tournamentsData = await fetchAllTournaments();
                setFutureTournaments(tournamentsData.future);
            } finally {
                setLoading(false);
            }
        };

        loadTournaments();
    }, [fetchAllTournaments, refreshKey]);

    const renderTournament: ListRenderItem<Tournament> = ({ item }) => (
        <View style={styles.tournamentContainer}>
            <CustomText variant="h3">{item.name}</CustomText>
            <CustomText
                variant="secondary"
                style={{
                    color: COLORS.GRAY,
                    marginTop: 8,
                    marginBottom: 16
                }}
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                {item.caption}
            </CustomText>
            <CustomTextButton
                label="Подробнее"
                size="default"
                variant="secondary"
                onPress={() => {
                    router.push({
                        pathname: '/screens/TournamentsScreen',
                        params: { tournamentId: item.id.toString() }
                    });
                }}
            />
        </View>
    );

    if (loading) {
        return (
            <View style={styles.sectionContainer}>
                <CustomText variant="h2">Ближайшие турниры</CustomText>
                <ActivityIndicator size="small" color={COLORS.GRAY} style={styles.loadingIndicator} />
            </View>
        );
    }

    return (
        <View style={styles.sectionContainer}>
            <CustomText variant="h2">Ближайшие турниры</CustomText>
            {futureTournaments.length === 0 ? (
                <View style={styles.noTournamentsContainer}>
                    <CustomText variant="big" style={styles.noTournamentsText}>
                        Нет запланированных турниров
                    </CustomText>
                </View>
            ) : (
                <FlatList
                    data={futureTournaments}
                    renderItem={renderTournament}
                    keyExtractor={(item) => item.id.toString()}
                    scrollEnabled={false}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginHorizontal: 8,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        paddingTop: 24,
        paddingBottom: 8,
        paddingHorizontal: 8,
        borderRadius: 25,
        marginBottom: 16,
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
    loadingIndicator: {
        marginBottom: 16
    }
});

export default TournamentSection;