import { Image, StyleSheet, View } from "react-native"
import CustomText from "./CustomText";
import CustomTextButton from "./CustomTextButton";
import { COLORS } from "@/constants/ui";

type TournamentCardProps = {
    status: 'past' | 'future',
    avatar: string;
    name: string,
    game: string;
    caption: string;
    max_teams: number;
    registered_teams: number;
}

const TournamentCard: React.FC<TournamentCardProps> = ({
    status,
    avatar,
    name,
    game,
    caption,
    max_teams,
    registered_teams
}) => {
    const goCheckInTournament = () => {
        console.log('check in');
    }

    const goResultTournament = () => {
        console.log('result');
    }

    const burronText = status === 'past' ? 'Результаты' : 'Участвовать';
    const buttonVariant = status === 'past' ? 'secondary' : 'primary';
    const pressAction = status === 'past' ? goResultTournament : goCheckInTournament;

    return (
        <View style={styles.cardContainer} >
            <View style={styles.topRow}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <View style={styles.topTextContainer}>

                    <CustomText variant='h3'>{name}</CustomText>
                    <CustomText variant='secondary' style={styles.grayText}>{game}</CustomText>
                </View>
            </View>
            <CustomText
                variant="secondary"
                style={[styles.grayText, styles.captionText]}
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                {caption}
            </CustomText>
            <View style={styles.bottomRow}>
                <CustomTextButton
                    label={burronText}
                    size="default"
                    variant={buttonVariant}
                    onPress={pressAction}
                />
                {status === 'future' &&
                    <View style={styles.participants}>
                        <CustomText
                            variant="h2"
                            style={{ marginBottom: 0 }}
                        >
                            {registered_teams}/{max_teams}
                        </CustomText>
                        <CustomText variant="secondary">Участвуют</CustomText>
                    </View>
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
        backgroundColor: COLORS.CARD_BACKGROUND,
        borderRadius: 25,
        marginTop: 24
    },
    topRow: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
    },
    topTextContainer: {
        flex: 1
    },
    avatar: {
        width: 62,
        height: 62,
        borderRadius: 32,
        backgroundColor: COLORS.SECTION_BACKGROUND
    },
    grayText: {
        color: COLORS.GRAY
    },
    captionText: {
        marginTop: 16,
        marginBottom: 24
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    participants: {
        alignItems: 'center',
        marginRight: 16
    }
})


export default TournamentCard