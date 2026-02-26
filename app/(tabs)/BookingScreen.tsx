import React, { useState, useMemo, useEffect } from 'react';
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
import { useUpdateTabs } from '@/hooks/useUpdateTabs';
import ClubMap from '@/components/ClubMap';

const PANEL_CLOSED_HEIGHT = 80;

const Booking = () => {
    const { refreshing, onRefresh } = useUpdateTabs(); // заменить на обновление бронирования
    const { user, fetchAllBookings } = useAuth()
    const userId = user?.id ? user?.id : undefined;

    const [computers, setComputers] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadBookings = async () => {
            try {
                const serverResponse = await fetchAllBookings()

                const computersData = Object.values(serverResponse).map(pc => ({
                    id: pc.id,
                    title: pc.title,
                    status: pc.status as 'free' | 'booking' | 'busy',
                    bookingTime: pc.bookingTime,
                    fromId: pc.fromId,
                    isSelected: false
                }))

                setComputers(computersData)
            } catch (error) {
                console.error('Error loading bookings:', error)
            } finally {
                setLoading(false)
            }
        }

        loadBookings()
    }, [fetchAllBookings])

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
                        return computer
                    }
                    return {
                        ...computer,
                        isSelected: !computer.isSelected
                    }
                }
                return computer
            })
        )
    }

    const selectedComputers = computers.filter(c => c.isSelected)

    const computerButtons = computers.map(computer => (
        <ComputerInBooking
            key={computer.id}
            title={computer.title}
            status={computer.status}
            isSelected={computer.isSelected}
            onPress={() => handleComputerPress(computer.id)}
        />
    ))

    const handleBookingConfirm = (computerId: number) => {
        setComputers(prevComputers =>
            prevComputers.map(computer =>
                computer.id === computerId
                    ? { ...computer, isSelected: false }
                    : computer
            )
        );
    };

    const selectedComputersInSection = selectedComputers.map(computer => (
        <SelectedComputer
            key={computer.id}
            booking={computer}
            variant='selected'
            onBookingConfirm={handleBookingConfirm}
        />
    ))

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
        )
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
                            refreshing={refreshing}
                            onRefresh={onRefresh}
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

                    <ClubMap computerButtons={computerButtons} >

                        {selectedComputers.length > 0 && (
                            <SectionContainer style={styles.selectedContainer}>
                                <View style={styles.selectedList}>
                                    {selectedComputersInSection}
                                </View>
                            </SectionContainer>
                        )}
                    </ClubMap>
                </ScrollView>
            </SafeAreaView>

            <BookingsPanel
                myBookings={myBookings}
            />
        </View>
    )
}

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

    selectedList: {
        gap: 16
    },
    selectedContainer: {
        marginHorizontal: 0,
        paddingHorizontal: 0,
        marginTop: 16
    }
})


export default Booking