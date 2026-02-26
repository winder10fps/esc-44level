import React, { useRef, useState } from 'react';
import {
    View,
    TouchableOpacity,
    Animated,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import { COLORS, TOUCHABLE_OPACITY } from '../constants/ui';
import CustomText from './CustomText';
import SelectedComputer from './SelectedComputer';
import ArrowIcon from '@/assets/icons/ArrowIcon';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const PANEL_CLOSED_HEIGHT = 80;
const PANEL_OPEN_HEIGHT = SCREEN_HEIGHT * 0.5;

interface BookingsPanelProps {
    myBookings: {
        id: number;
        title: string;
        status: "free" | "booking" | "busy";
        bookingTime: string | undefined;
        fromId: number | undefined;
        isSelected: boolean;
    }[]
}

const AnimatedArrowIcon = Animated.createAnimatedComponent(ArrowIcon);

const BookingsPanel: React.FC<BookingsPanelProps> = ({
    myBookings
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const panelAnimation = useRef(new Animated.Value(PANEL_CLOSED_HEIGHT)).current;
    const overlayOpacity = useRef(new Animated.Value(0)).current;
    const rotateValue = useRef(new Animated.Value(0)).current;

    const openPanel = () => {
        Animated.parallel([
            Animated.timing(panelAnimation, {
                toValue: PANEL_OPEN_HEIGHT,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(overlayOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(rotateValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            })
        ]).start();
        setIsOpen(true);
    }

    const closePanel = () => {
        Animated.parallel([
            Animated.timing(panelAnimation, {
                toValue: PANEL_CLOSED_HEIGHT,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(overlayOpacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(rotateValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            })
        ]).start(() => {
            setIsOpen(false);
        });
    }

    const togglePanel = () => {
        if (isOpen) {
            closePanel();
        } else {
            openPanel();
        }
    }

    return (
        <>
            {isOpen && (
                <TouchableWithoutFeedback onPress={closePanel}>
                    <Animated.View
                        style={[
                            styles.overlay,
                            { opacity: overlayOpacity }
                        ]}
                    />
                </TouchableWithoutFeedback>
            )}

            <Animated.View
                style={[
                    styles.bottomPanel,
                    { height: panelAnimation }
                ]}
            >
                <TouchableOpacity
                    style={styles.panelHandle}
                    onPress={togglePanel}
                    activeOpacity={TOUCHABLE_OPACITY.OPACITY}
                >
                    <CustomText variant='h2' style={{ marginBottom: 8 }}>
                        Мои брони {myBookings.length > 0 ? `(${myBookings.length})` : ''}
                    </CustomText>
                    <AnimatedArrowIcon
                        style={{
                            transform: [{
                                rotate: rotateValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['-90deg', '90deg']
                                })
                            }]
                        }}
                    />
                </TouchableOpacity>

                {isOpen && (
                    <View style={styles.panelContent}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {myBookings.length === 0 ? (
                                <View style={styles.emptyBookings}>
                                    <CustomText style={styles.emptyText}>
                                        У вас пока нет броней
                                    </CustomText>
                                </View>
                            ) : (
                                myBookings.map(booking => (
                                    <SelectedComputer
                                        key={booking.id}
                                        booking={booking}
                                        variant='booked'
                                    />
                                ))
                            )}
                        </ScrollView>
                    </View>
                )}
            </Animated.View>
        </>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    bottomPanel: {
        position: 'absolute',
        borderWidth: 1,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 24,
    },
    panelHandle: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 24
    },
    panelContent: {
        flex: 1,
        padding: 16,
    },
    emptyBookings: {
        padding: 20,
        alignItems: 'center',
    },
    emptyText: {
        color: COLORS.GRAY,
    },
});

export default BookingsPanel;