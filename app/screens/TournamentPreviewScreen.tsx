import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import StackScreen from '@/components/StackScreen';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext/AuthContext';
import { Tournament } from '@/contexts/AuthContext/AuthContextInterfaces';
import { COLORS } from '@/constants/ui';
import CustomText from '@/components/CustomText';
import SectionContainer from '@/components/SectionContainer';
import CustomTextInput from '@/components/CustomTextInput';
import CustomCheckbox from '@/components/CustomCheckbox';
import CustomTextButton from '@/components/CustomTextButton';
import { useForm } from '@/hooks/useForm';
import { validateTournamentSignIn } from '@/functions/validation';

export default function TournamentSignInScreen() {
    const params = useLocalSearchParams();
    const { fetchAllTournaments } = useAuth()
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const [tournament, setTournament] = useState<Tournament | undefined>(undefined);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loadCard = async () => {
            setLoading(true)
            setTournament(undefined)
            const cardsData = await fetchAllTournaments();
            const allCards = [...cardsData.future, ...cardsData.past];
            const foundCard = allCards.find(c => c.id.toString() === id);
            setTournament(foundCard);
            setLoading(false)
        };

        if (id) loadCard();
        return () => {
            setTournament(undefined);
        };
    }, [id, fetchAllTournaments]);

    const [isChecked, setIsChecked] = useState(false)

    const { formState, updateField, setFieldError, resetErrors } = useForm();

    const onSignIn = () => {
        if (validateTournamentSignIn(formState, setFieldError, resetErrors))
            console.log('sign in');
    }

    const title = Array.isArray(params.title) ? params.title[0] : params.title;

    return (
        <StackScreen title={title} style={{ paddingHorizontal: 8 }}>
            {loading ? (
                <ActivityIndicator size={'small'} color={COLORS.GRAY} />
            ) : (
                <View>
                    <SectionContainer style={styles.sectionContainer}>
                        <Image source={{ uri: tournament?.avatar }} style={styles.image} />
                        <CustomText variant='h2' style={styles.name}>{tournament?.name}</CustomText>
                        {tournament?.status === 'past' && (
                            <View style={[styles.tournamentInfoSection, { marginBottom: 24 }]}>
                                <CustomText variant='h2' style={styles.winnersHeading}>{tournament.winners.teamName}</CustomText>
                                <CustomText
                                    variant='primary'
                                >
                                    <Text style={styles.grayText}>Сотав команды победителей: </Text>
                                    {tournament.winners.teamPlayers}
                                </CustomText>
                            </View>
                        )}
                        <View style={styles.tournamentInfoSection}>
                            <CustomText variant='primary' style={styles.grayText}>
                                Игра: <Text style={styles.whiteText}>{tournament?.game}</Text>
                            </CustomText>
                            <CustomText variant='primary' style={styles.grayText}>
                                Участников: <Text style={styles.whiteText}>{tournament?.registered_teams} из {tournament?.max_teams}</Text>
                            </CustomText>
                            <CustomText variant='primary' style={styles.grayText}>{tournament?.caption}</CustomText>
                        </View>
                    </SectionContainer>
                    {tournament?.status === 'future' && (
                        <>
                            <CustomTextInput
                                placeholder=''
                                label='Название вашей команды'
                                errored={formState.errors.name}
                                style={styles.firstInput}
                                onChangeText={(text) => updateField('name', text)}
                            />
                            <CustomTextInput
                                placeholder=''
                                label='Никнеймы участников (первый капитан)'
                                errored={formState.errors.teamPlayers}
                                onChangeText={(text) => updateField('teamPlayers', text)}
                            />
                            <CustomCheckbox
                                text="Я согласен с"
                                link={{
                                    linkText: 'правилами турниров',
                                    linkPath: '/screens/UserAgreementScreen'
                                }}
                                isChecked={isChecked}
                                setIsChecked={setIsChecked}
                                style={styles.checkbox}
                            />
                            <CustomTextButton
                                label='Зарегистрироваться'
                                size='default'
                                variant='primary'
                                style={styles.button}
                                onPress={onSignIn}
                                disabled={!isChecked}
                            />
                        </>
                    )}
                </View>
            )}
        </StackScreen>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginHorizontal: 0
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center'
    },
    name: {
        alignSelf: 'center',
        marginBottom: 16,
        marginTop: 8
    },
    whiteText: {
        color: COLORS.WHITE
    },
    grayText: {
        color: COLORS.GRAY
    },
    tournamentInfoSection: {
        backgroundColor: COLORS.CARD_BACKGROUND,
        borderRadius: 25,
        padding: 16
    },
    checkbox: {
        marginLeft: 16,
        marginTop: 16,
        marginBottom: 24
    },
    button: {
        alignSelf: 'center'
    },
    firstInput: {
        marginTop: 24,
        marginBottom: 16
    },
    winnersHeading: {
        marginBottom: 16,
        alignSelf: 'center'
    }
});
