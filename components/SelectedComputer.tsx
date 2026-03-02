import { COLORS } from "@/constants/ui";
import { useState } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import BookingTimeModal from "./BookingTimeModal";
import CustomModal from "./CustomModal";
import CustomText from "./CustomText";
import CustomTextButton from "./CustomTextButton";

type SelectedComputerProps = ViewProps & {
    booking: {
        id: number;
        title: string;
        status: "free" | "busy" | "booking";
        bookingTime: string | undefined;
        fromId: number | undefined;
        isSelected: boolean;
    };
    variant: 'selected' | 'booked';
    onBookingConfirm?: (id: number, time: string) => void;
    onCancelBooking?: (id: number) => void;
}

const SelectedComputer: React.FC<SelectedComputerProps> = ({
    booking,
    variant,
    onBookingConfirm,
    onCancelBooking,
}) => {
    const title = booking.title;
    const status = booking.status;
    const bookingTime = booking.bookingTime;

    const getFullTitle = () => {
        const isNumber = Number(title);
        if (!isNaN(isNumber))
            return `ПК №${title}`;
        else {
            switch (title) {
                case 'PS': return 'Playstation 5';
                case 'VR': return 'Вирт. реальность HTC VIVE';
                case 'AS': return 'Автосимулятор T500 RS PS 4 PRO';
                default: return title;
            }
        }
    };

    const captionText = status === 'free' ? 'Свободен' :
        status === 'booking' ? `Забронирован на ${bookingTime}` : '';

    const [isCancellationModalOpen, setIsCancellationModalOpen] = useState(false);
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

    const handleBooking = () => {
        setIsTimePickerOpen(true);
    };

    const handleCancellation = () => {
        setIsCancellationModalOpen(false);
        if (onCancelBooking) {
            onCancelBooking(booking.id);
        }
    };

    const handleTimeConfirm = (time: string) => {
        console.log('Выбрано время:', time);
        if (onBookingConfirm) {
            onBookingConfirm(booking.id, time);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
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
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: COLORS.CARD_BACKGROUND,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    textContainer: {
        flex: 1,
        marginRight: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
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
});

export default SelectedComputer;