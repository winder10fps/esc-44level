import ChampionCupIcon from '@/assets/icons/ChampionCupIcon';
import CustomCheckbox from '@/components/CustomCheckbox';
import CustomText from '@/components/CustomText';
import CustomTextButton from '@/components/CustomTextButton';
import CustomTextInput from '@/components/CustomTextInput';
import SectionContainer from '@/components/SectionContainer';
import StackScreen from '@/components/StackScreen';
import CustomModal from '@/components/CustomModal';
import { COLORS } from '@/constants/ui';
import { useAuth } from '@/contexts/auth';
import { validateTournamentSignIn } from '@/functions/validation';
import { useForm } from '@/hooks/useForm';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Tournament } from '../../contexts/auth/types';

export default function TournamentPreviewScreen() {
    const params = useLocalSearchParams();
    const router = useRouter();
    const { user, fetchAllTournaments, signUpForTournament } = useAuth();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const [tournament, setTournament] = useState<Tournament | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [signingUp, setSigningUp] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const loadCard = async () => {
            setLoading(true);
            setTournament(undefined);
            try {
                const cardsData = await fetchAllTournaments();
                const allCards = [...cardsData.future, ...cardsData.past];
                const foundCard = allCards.find(c => c.id.toString() === id);
                setTournament(foundCard);
            } catch (error) {
                console.log('Error loading tournament:', error);
                setErrorMessage('Не удалось загрузить информацию о турнире');
                setIsErrorModalOpen(true);
            } finally {
                setLoading(false);
            }
        };

        if (id) loadCard();
        return () => {
            setTournament(undefined);
        };
    }, [id, fetchAllTournaments]);

    const [isChecked, setIsChecked] = useState(false);

    const { formState, updateField, setFieldError, resetErrors } = useForm();

    const onSignIn = async () => {
        if (!user) {
            setErrorMessage('Необходимо авторизоваться');
            setIsErrorModalOpen(true);
            return;
        }

        if (!validateTournamentSignIn(formState, setFieldError, resetErrors)) {
            return;
        }

        setSigningUp(true);
        try {
            console.log(`🔵 ОТПРАВКА ЗАПРОСА: Регистрация на турнир ${id}`);
            
            const result = await signUpForTournament(
                user.id,
                parseInt(id),
                formState.name || '',
                formState.numbers || '' // для teamPlayers
            );

            if (result.success) {
                console.log('✅ РЕГИСТРАЦИЯ НА ТУРНИР УСПЕШНА');
                setIsSuccessModalOpen(true);
            } else {
                setErrorMessage(result.error || 'Не удалось зарегистрироваться на турнир');
                setIsErrorModalOpen(true);
                console.log('❌ ОШИБКА РЕГИСТРАЦИИ:', result.error);
            }
        } catch (error) {
            console.log('❌ ОШИБКА ПРИ РЕГИСТРАЦИИ:', error);
            setErrorMessage('Произошла ошибка при регистрации');
            setIsErrorModalOpen(true);
        } finally {
            setSigningUp(false);
        }
    };

    const title = Array.isArray(params.title) ? params.title[0] : params.title;

    return (
        <StackScreen title={title} style={{ paddingHorizontal: 8 }}>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.PRIMARY} />
                </View>
            ) : (
                <View>
                    <SectionContainer style={styles.sectionContainer}>
                        <Image source={{ uri: tournament?.avatar }} style={styles.image} />
                        <CustomText variant='h2' style={styles.name}>{tournament?.name}</CustomText>
                        {tournament?.status === 'past' && (
                            <View style={[styles.tournamentInfoSection, { marginBottom: 24 }]}>
                                <ChampionCupIcon style={{ alignSelf: 'center' }} />
                                <CustomText variant='h2' style={styles.winnersHeading}>{tournament.winners?.teamName}</CustomText>
                                <CustomText variant='primary'>
                                    <Text style={styles.grayText}>Состав команды победителей: </Text>
                                    {tournament.winners?.teamPlayers}
                                </CustomText>
                            </View>
                        )}
                        <View style={styles.tournamentInfoSection}>
                            <CustomText variant='primary' style={styles.grayText}>
                                Игра: <Text style={styles.whiteText}>{tournament?.game}</Text>
                            </CustomText>
                            <CustomText variant='primary' style={styles.grayText}>
                                Участников: <Text style={styles.whiteText}>{tournament?.registered_teams.length} из {tournament?.max_teams}</Text>
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
                                editable={!signingUp}
                            />
                            <CustomTextInput
                                placeholder=''
                                label='Никнеймы участников (первый капитан)'
                                errored={formState.errors.teamPlayers}
                                onChangeText={(text) => updateField('teamPlayers', text)}
                                editable={!signingUp}
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
                                label={signingUp ? 'Регистрация...' : 'Зарегистрироваться'}
                                size='default'
                                variant='primary'
                                style={styles.button}
                                onPress={onSignIn}
                                disabled={!isChecked || signingUp}
                            />
                        </>
                    )}
                </View>
            )}

            {/* Модальное окно успеха */}
            <CustomModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
                <CustomText variant="primary" style={styles.modalText}>
                    Вы успешно зарегистрированы на турнир
                </CustomText>
                <View style={styles.modalButtonContainer}>
                    <CustomTextButton 
                        label="Ок" 
                        size='default' 
                        variant="primary" 
                        onPress={() => {
                            setIsSuccessModalOpen(false);
                            router.back();
                        }} 
                    />
                </View>
            </CustomModal>

            {/* Модальное окно ошибки */}
            <CustomModal isOpen={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)}>
                <CustomText variant="primary" style={styles.modalText}>
                    {errorMessage}
                </CustomText>
                <View style={styles.modalButtonContainer}>
                    <CustomTextButton 
                        label="Ок" 
                        size='default' 
                        variant="primary" 
                        onPress={() => setIsErrorModalOpen(false)} 
                    />
                </View>
            </CustomModal>
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
        borderRadius: 16,
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
    },
    loadingContainer: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalText: {
        textAlign: 'left',
        marginBottom: 24
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 8
    }
});