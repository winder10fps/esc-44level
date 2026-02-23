import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomModal from '@/components/CustomModal';
import CustomText from '@/components/CustomText';
import { COLORS } from '@/constants/ui';
import ArrowIcon from '@/assets/icons/ArrowIcon';
import CustomTextButton from './CustomTextButton';

interface TimePickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (time: string) => void;
}

const TimePickerModal: React.FC<TimePickerModalProps> = ({ isOpen, onClose, onConfirm }) => {
    const [selectedHour, setSelectedHour] = useState(11);
    const [selectedMinute, setSelectedMinute] = useState(0);

    const availableHours = [...Array(24).keys()].filter(h => h >= 11 || h <= 6);

    const availableMinutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

    const handleHourUp = () => {
        const currentIndex = availableHours.indexOf(selectedHour);
        const nextIndex = (currentIndex + 1) % availableHours.length;
        setSelectedHour(availableHours[nextIndex]);
    };

    const handleHourDown = () => {
        const currentIndex = availableHours.indexOf(selectedHour);
        const prevIndex = (currentIndex - 1 + availableHours.length) % availableHours.length;
        setSelectedHour(availableHours[prevIndex]);
    };

    const handleMinuteUp = () => {
        const currentIndex = availableMinutes.indexOf(selectedMinute);
        const nextIndex = (currentIndex + 1) % availableMinutes.length;
        setSelectedMinute(availableMinutes[nextIndex]);
    };

    const handleMinuteDown = () => {
        const currentIndex = availableMinutes.indexOf(selectedMinute);
        const prevIndex = (currentIndex - 1 + availableMinutes.length) % availableMinutes.length;
        setSelectedMinute(availableMinutes[prevIndex]);
    };

    const formatTime = (hour: number, minute: number): string => {
        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    };

    const handleConfirm = () => {
        onConfirm(formatTime(selectedHour, selectedMinute));
        onClose();
    };

    return (
        <CustomModal isOpen={isOpen} onClose={onClose}>
            <CustomText variant="primary" style={styles.title}>Выберите врямя брони в пределах следующих 24 часов</CustomText>
            <View style={styles.timePickerContainer}>
                {/* Часы */}
                <View style={styles.timeColumn}>
                    <TouchableOpacity onPress={handleHourUp} style={styles.arrowButton}>
                        <ArrowIcon style={{ transform: [{ rotate: '-90deg' }] }} />
                    </TouchableOpacity>

                    <View style={styles.timeValue}>
                        <CustomText variant="h1">
                            {selectedHour.toString().padStart(2, '0')}
                        </CustomText>
                    </View>

                    <TouchableOpacity onPress={handleHourDown} style={styles.arrowButton}>
                        <ArrowIcon style={{ transform: [{ rotate: '90deg' }] }} />
                    </TouchableOpacity>
                </View>

                <CustomText variant="h1" style={styles.separator}>:</CustomText>

                {/* Минуты */}
                <View style={styles.timeColumn}>
                    <TouchableOpacity onPress={handleMinuteUp} style={styles.arrowButton}>
                        <ArrowIcon style={{ transform: [{ rotate: '-90deg' }] }} />
                    </TouchableOpacity>

                    <View style={styles.timeValue}>
                        <CustomText variant="h1">
                            {selectedMinute.toString().padStart(2, '0')}
                        </CustomText>
                    </View>

                    <TouchableOpacity onPress={handleMinuteDown} style={styles.arrowButton}>
                        <ArrowIcon style={{ transform: [{ rotate: '90deg' }] }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.modalButtonsContainer}>
                <CustomTextButton size='default' variant='primary' label='Подтвердить' onPress={handleConfirm} />
            </View>
        </CustomModal>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginBottom: 24,
    },
    timePickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    timeColumn: {
        alignItems: 'center',
        width: 80,
    },
    arrowButton: {
        padding: 12,
    },
    timeValue: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        borderRadius: 25,
        minWidth: 70,
        alignItems: 'center',
    },
    separator: {
        marginHorizontal: 8,
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    button: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: COLORS.SECTION_BACKGROUND,
    },
    confirmButton: {
        backgroundColor: COLORS.PRIMARY,
    },
    confirmText: {
        color: COLORS.BACKGROUND,
    },
});

export default TimePickerModal;