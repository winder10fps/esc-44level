// components/FullScreenImageModal.tsx
import { useRef } from 'react';
import {
    Modal,
    Image,
    StyleSheet,
    Dimensions,
    PanResponder,
    Animated,
    View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

type FullScreenImageModalProps = {
    visible: boolean;
    imageSource: any;
    onClose: () => void;
};

const FullScreenImageModal: React.FC<FullScreenImageModalProps> = ({
    visible,
    imageSource,
    onClose,
}) => {
    const translateY = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(1)).current;
    const isClosing = useRef(false);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => !isClosing.current,

        onPanResponderMove: (_, gesture) => {
            if (!isClosing.current) {
                translateY.setValue(gesture.dy);
                opacity.setValue(1 - Math.abs(gesture.dy) / height);
            }
        },

        onPanResponderRelease: (_, gesture) => {
            if (isClosing.current) return;

            const shouldClose = Math.abs(gesture.dy) > 100;

            if (shouldClose) {
                isClosing.current = true;

                // Плавно уезжает и закрывается
                Animated.parallel([
                    Animated.timing(translateY, {
                        toValue: gesture.dy > 0 ? height : -height,
                        duration: 150,
                        useNativeDriver: true,
                    }),
                    Animated.timing(opacity, {
                        toValue: 0,
                        duration: 150,
                        useNativeDriver: true,
                    }),
                ]).start(() => {
                    onClose();
                    // Сброс состояния для следующего раза
                    setTimeout(() => {
                        translateY.setValue(0);
                        opacity.setValue(1);
                        isClosing.current = false;
                    }, 100);
                });
            } else {
                // Возвращаем на место
                Animated.parallel([
                    Animated.spring(translateY, {
                        toValue: 0,
                        useNativeDriver: true,
                    }),
                    Animated.spring(opacity, {
                        toValue: 1,
                        useNativeDriver: true,
                    }),
                ]).start();
            }
        },
    });

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <Animated.View
                    style={{
                        transform: [{ translateY }],
                        opacity,
                    }}
                    {...panResponder.panHandlers}
                >
                    <Image
                        source={imageSource}
                        style={styles.fullScreenImage}
                        resizeMode="contain"
                    />
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullScreenImage: {
        width: width,
        height: height * 0.8,
    },
});

export default FullScreenImageModal;