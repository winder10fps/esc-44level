import CustomText from "@/components/CustomText";
import CustomTextButton from "@/components/CustomTextButton";
import { COLORS } from "@/constants/ui";
import { clubInfo, Tournament } from "@/constants/withServer";
import { router } from "expo-router";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";


const TournamentSection = () => {

    const futureTournaments = clubInfo['tournaments'].future

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
                onPress={() => { router.push('/screens/TournamentsScreen') }}
            />
        </View>
    )

    return (
        <View style={styles.sectionContainer}>
            <CustomText variant="h2">Ближайшие турниры</CustomText>
            {futureTournaments.length === 0 ? (
                <View>
                    <CustomText variant="big" style={styles.tournamentContainer}>Нет турниров</CustomText>
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