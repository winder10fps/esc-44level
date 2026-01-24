import CustomText from "@/components/CustomText";
import CustomTextButton from "@/components/CustomTextButton";
import { COLORS } from "@/constants/ui";
import { useEffect, useState } from "react";
import { ListRenderItem, View, FlatList, StyleSheet } from "react-native";


interface Tournament {
    id: number;
    name: string;
    game: string;
    date: string;
    time: string;
    caption: string;
    prize_pool: string;
    max_teams?: number;
    registered_teams?: number;
    status: string;
}


const TournamentSection = () => {
    const [tournaments, SetTournaments] = useState<Tournament[]>([]);

    useEffect(() => {
        fetchTournaments();
    }, [])

    const fetchTournaments = async () => {
        // const response = await fetch('https://сервер.com/api/tournaments/upcoming');
        // const data = await response.json();ф
        const data = {
            status: "success",
            data: [
                {
                    id: 1,
                    name: "Киберспринт: Valorant Open Cup",
                    game: "Valorant",
                    date: "2024-03-15",
                    time: "18:00",
                    caption: "турнир турнир турнир турнир турнир турнир турнир турниртурниртурниртурниртурниртурнир",
                    prize_pool: "50 000 ₽",
                    max_teams: 16,
                    registered_teams: 12,
                    status: "registration_open",
                },
                {
                    id: 2,
                    name: "Dota 2 Battle Royal",
                    game: "Dota 2",
                    date: "2024-03-20",
                    time: "17:30",
                    caption: "турнир турнир турнир турнир турнир турнир турнир турниртурниртурниртурниртурниртурнир",
                    prize_pool: "75 000 ₽",
                    max_teams: 8,
                    registered_teams: 8,
                    status: "registration_closed",
                }
            ],
            timestamp: "2024-03-10T14:30:00Z"
        };
        SetTournaments(data.data)
    }

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
            <CustomTextButton label="Подробнее" size="default" variant="secondary" />
        </View>
    )

    return (
        <View style={styles.sectionContainer}>
            <CustomText
                variant="h2"
                style={{
                    marginLeft: 8,
                    marginBottom: 24
                }}
            >
                Ближайшие турниры
            </CustomText>
            {tournaments.length === 0 ? (
                <View>
                    <CustomText variant="big" style={styles.tournamentContainer}>Нет турниров</CustomText>
                </View>
            ) : (
                <FlatList
                    data={tournaments}
                    renderItem={renderTournament}
                    keyExtractor={(item) => item.id.toString()}
                    scrollEnabled={false}
                />
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        marginHorizontal: 8,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        paddingTop: 24,
        paddingBottom: 8,
        paddingHorizontal: 8,
        borderRadius: 25,
    },
    tournamentContainer: {
        padding: 16,
        backgroundColor: COLORS.CARD_BACKGROUND,
        borderRadius: 25,
        marginBottom: 16
    }
})


export default TournamentSection;