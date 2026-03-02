import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/ui';
import CustomText from '@/components/CustomText';
import ComputerInBooking from '@/components/ComputerInBooking';
import SectionContainer from '@/components/SectionContainer';
import SelectedComputer from '@/components/SelectedComputer';
import { useAuth } from '@/contexts/auth';
import BookingsPanel from '@/components/BookingsPanel';
import ClubMap from '@/components/ClubMap';
import CustomModal from '@/components/CustomModal';
import CustomTextButton from '@/components/CustomTextButton';

const PANEL_CLOSED_HEIGHT = 80;

const Booking = () => {
    const { user, fetchAllBookings, createBooking, cancelBooking, refreshBookings } = useAuth();
    const userId = user?.id;

    const [computers, setComputers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshingBookings, setRefreshingBookings] = useState(false);

    // Модальные окна
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const loadBookings = useCallback(async () => {
        try {
            const serverResponse = await fetchAllBookings();

            const computersData = Object.values(serverResponse).map(pc => ({
                id: pc.id,
                title: pc.title,
                status: pc.status as 'free' | 'booking' | 'busy',
                bookingTime: pc.bookingTime,
                fromId: pc.fromId,
                isSelected: false
            }));

            setComputers(computersData);
        } catch (error) {
            console.log('Error loading bookings:', error);
            setErrorMessage('Не удалось загрузить данные о бронированиях');
            setIsErrorModalOpen(true);
        } finally {
            setLoading(false);
        }
    }, [fetchAllBookings]);

    useEffect(() => {
        loadBookings();
    }, [loadBookings]);

    const handleRefresh = useCallback(async () => {
        setRefreshingBookings(true);
        try {
            const updatedBookings = await refreshBookings();
            const computersData = Object.values(updatedBookings).map(pc => ({
                id: pc.id,
                title: pc.title,
                status: pc.status as 'free' | 'booking' | 'busy',
                bookingTime: pc.bookingTime,
                fromId: pc.fromId,
                isSelected: false
            }));
            setComputers(computersData);
        } catch (error) {
            console.log('Error refreshing bookings:', error);
        } finally {
            setRefreshingBookings(false);
        }
    }, [refreshBookings]);

    const myBookings = useMemo(() => {
        if (!userId) return [];

        return computers.filter(computer =>
            computer.fromId === userId && computer.status === 'booking'
        );
    }, [computers, userId]);

    const handleComputerPress = (id: number) => {
        setComputers(prevComputers =>
            prevComputers.map(computer => {
                if (computer.id === id) {
                    if (computer.status === 'busy') {
                        return computer;
                    }
                    return {
                        ...computer,
                        isSelected: !computer.isSelected
                    };
                }
                return computer;
            })
        );
    };

    const selectedComputers = computers.filter(c => c.isSelected);

    const handleBookingConfirm = async (computerId: number, bookingTime: string) => {
        if (!userId) {
            setErrorMessage('Необходимо авторизоваться');
            setIsErrorModalOpen(true);
            return;
        }

        try {
            console.log(`🔵 ОТПРАВКА ЗАПРОСА: Бронирование компьютера ${computerId} на время ${bookingTime}`);

            const result = await createBooking(userId, computerId, bookingTime);

            if (result.success && result.computer) {
                setComputers(prevComputers =>
                    prevComputers.map(computer =>
                        computer.id === computerId
                            ? {
                                ...computer,
                                status: 'booking',
                                bookingTime: bookingTime,
                                fromId: userId,
                                isSelected: false
                            }
                            : computer
                    )
                );

                setSuccessMessage('Компьютер успешно забронирован');
                setIsSuccessModalOpen(true);
                console.log('✅ БРОНИРОВАНИЕ УСПЕШНО');
            } else {
                setErrorMessage(result.error || 'Не удалось забронировать компьютер');
                setIsErrorModalOpen(true);
                console.log('❌ ОШИБКА БРОНИРОВАНИЯ:', result.error);
            }
        } catch (error) {
            console.log('❌ ОШИБКА ПРИ БРОНИРОВАНИИ:', error);
            setErrorMessage('Произошла ошибка при бронировании');
            setIsErrorModalOpen(true);
        }
    };

    const handleCancelBooking = async (computerId: number) => {
        if (!userId) return;

        try {
            console.log(`🔵 ОТПРАВКА ЗАПРОСА: Отмена брони компьютера ${computerId}`);

            const result = await cancelBooking(userId, computerId);

            if (result.success && result.computer) {
                setComputers(prevComputers =>
                    prevComputers.map(computer =>
                        computer.id === computerId
                            ? {
                                ...computer,
                                status: 'free',
                                bookingTime: undefined,
                                fromId: undefined
                            }
                            : computer
                    )
                );

                setSuccessMessage('Бронь успешно отменена');
                setIsSuccessModalOpen(true);
                console.log('✅ ОТМЕНА БРОНИ УСПЕШНА');
            } else {
                setErrorMessage(result.error || 'Не удалось отменить бронь');
                setIsErrorModalOpen(true);
                console.log('❌ ОШИБКА ОТМЕНЫ БРОНИ:', result.error);
            }
        } catch (error) {
            console.log('❌ ОШИБКА ПРИ ОТМЕНЕ БРОНИ:', error);
            setErrorMessage('Произошла ошибка при отмене брони');
            setIsErrorModalOpen(true);
        }
    };

    const computerButtons = computers.map(computer => (
        <ComputerInBooking
            key={computer.id}
            title={computer.title}
            status={computer.status}
            isSelected={computer.isSelected}
            onPress={() => handleComputerPress(computer.id)}
        />
    ));

    const selectedComputersInSection = selectedComputers.map(computer => (
        <SelectedComputer
            key={computer.id}
            booking={computer}
            variant='selected'
            onBookingConfirm={handleBookingConfirm}
        />
    ));

    if (loading) {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeArea}>
                    <ActivityIndicator
                        size={'small'}
                        color={COLORS.GRAY}
                        style={{ marginTop: 16 }}
                    />
                </SafeAreaView>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <StatusBar barStyle={"light-content"} />
                <ScrollView
                    style={styles.mainContent}
                    contentContainerStyle={{ paddingBottom: PANEL_CLOSED_HEIGHT + 20 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshingBookings}
                            onRefresh={handleRefresh}
                            colors={[COLORS.PRIMARY]}
                            progressBackgroundColor={COLORS.CARD_BACKGROUND}
                        />
                    }
                >
                    <View style={styles.topText}>
                        <CustomText variant='h1'>Бронирование</CustomText>
                        <CustomText variant='primary' style={styles.grayText}>
                            {selectedComputers.length > 0
                                ? `Выбрано: ${selectedComputers.length}`
                                : 'Выбирай один или несколько!'}
                        </CustomText>
                    </View>

                    <ClubMap computerButtons={computerButtons}>
                        {selectedComputers.length > 0 && (
                            <SectionContainer style={styles.selectedContainer}>
                                {selectedComputersInSection}
                            </SectionContainer>
                        )}
                    </ClubMap>
                </ScrollView>
            </SafeAreaView>

            <BookingsPanel
                myBookings={myBookings}
                onCancelBooking={handleCancelBooking}
            />

            {/* Модальное окно успеха */}
            <CustomModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
                <CustomText variant="primary" style={styles.modalText}>
                    {successMessage}
                </CustomText>
                <View style={styles.modalButtonContainer}>
                    <CustomTextButton 
                        label="Ок" 
                        size='default' 
                        variant="primary" 
                        onPress={() => setIsSuccessModalOpen(false)} 
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    safeArea: {
        flex: 1,
    },
    mainContent: {
        flex: 1,
    },
    grayText: {
        color: COLORS.GRAY
    },
    topText: {
        marginLeft: 16,
        marginTop: 8
    },
    selectedContainer: {
        marginHorizontal: 0,
        paddingHorizontal: 0,
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

export default Booking;