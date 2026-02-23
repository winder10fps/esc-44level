import { StyleSheet, View } from "react-native"
import CustomText from "./CustomText";
import { COLORS } from "@/constants/ui";
import CustomTextButton from "./CustomTextButton";
import CustomModal from "./CustomModal";
import { useState } from "react";
import BookingTimeModal from "./BookingTimeModal";


type SelectedComputerProps = {
    booking: {
        id: number;
        title: string;
        status: "free" | "busy" | "booking";
        bookingTime: string | undefined;
        fromId: number | undefined;
        isSelected: boolean;
    };
    variant: 'selected' | 'booked'
    onBookingConfirm?: (id: number) => void;
}

const SelectedComputer: React.FC<SelectedComputerProps> = ({ booking, variant, onBookingConfirm }) => {
    const title = booking.title
    const status = booking.status
    const bookingTime = booking.bookingTime

    const getFullTitle = () => {
        const isNumber = Number(title)
        if (!isNaN(isNumber))
            return `ПК №${title}`
        else {
            switch (title) {
                case 'PS': return 'Playstation 5'
                case 'VR': return 'Вирт. реальность HTC VIVE'
                case 'AS': return 'Автосимулятор T500 RS PS 4 PRO'
                default: return title
            }
        }
    }

    const captionText =
        status === 'free' && 'Свободен' ||
        status === 'booking' && `Забронрован на ${bookingTime}`

    const [isCancellationModalOpen, setIsCancellationModalOpen] = useState(false);

    const handleBooking = () => {
        setIsTimePickerOpen(true)
    }

    const handleCancellation = () => {
        setIsCancellationModalOpen(false)
        console.log('cancellation successfull');

    }

    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

    const handleTimeConfirm = (time: string) => {
        console.log('time:', time);
        // логика бронирования на выбранное время
        if (onBookingConfirm) {
            onBookingConfirm(booking.id);
        }
    };
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.row}>
                    <View style={[
                        styles.dot,
                        status === 'free' && styles.free,
                        status === 'busy' && styles.busy,
                        status === 'booking' && styles.booking
                    ]}
                    />
                    <CustomText variant="h3">{getFullTitle()}</CustomText>
                </View>
                <CustomText variant="secondary" style={{ color: COLORS.GRAY }}>{captionText}</CustomText>
            </View>
            <View>
                {variant === 'selected' ?
                    <CustomTextButton label="Забронировать" size="mini" variant="primary" onPress={handleBooking} />
                    :
                    <CustomTextButton label="Отменить" size="mini" variant="secondary" onPress={() => setIsCancellationModalOpen(true)} />
                }
            </View>

            <CustomModal isOpen={isCancellationModalOpen} onClose={() => setIsCancellationModalOpen(false)}>
                <CustomText variant="primary">Вы точно хотите отменить эту бронь?</CustomText>
                <View style={styles.modalButtonsContainer}>
                    <CustomTextButton label="Нет" size='default' variant="secondary" onPress={() => setIsCancellationModalOpen(false)} />
                    <CustomTextButton label="Да" size='default' variant="primary" onPress={handleCancellation} />
                </View>
            </CustomModal>

            <BookingTimeModal
                isOpen={isTimePickerOpen}
                onClose={() => setIsTimePickerOpen(false)}
                onConfirm={handleTimeConfirm}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: COLORS.CARD_BACKGROUND,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    free: {
        backgroundColor: COLORS.GREEN
    },
    busy: {
        backgroundColor: COLORS.PRIMARY
    },
    booking: {
        backgroundColor: COLORS.BLUE
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 16,
        marginTop: 24
    }
})


export default SelectedComputer;