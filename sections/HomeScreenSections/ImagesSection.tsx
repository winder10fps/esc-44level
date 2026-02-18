import { useState } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import { COLORS, TOUCHABLE_OPACITY } from '@/constants/ui';
import FullScreenImageModal from '@/components/FullScreenImageModal';


const ImagesSection = () => {
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const images = [
        { id: 1, source: require('@/assets/images/homePageImage3.jpg') },
        { id: 2, source: require('@/assets/images/homePageImage2.jpg') },
        { id: 3, source: require('@/assets/images/homePageImage1.jpg') },
        { id: 4, source: require('@/assets/images/homePageImage4.jpg') },
    ];

    const { width } = Dimensions.get('window');
    const imageWidth = (width - 32 - 24) / 4;

    const openImage = (imageSource: any) => {
        setSelectedImage(imageSource);
        setModalVisible(true);
    };

    const closeImage = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.section}>
            {images.map((image) => (
                <TouchableOpacity
                    key={image.id}
                    activeOpacity={TOUCHABLE_OPACITY.OPACITY}
                    onPress={() => openImage(image.source)}
                    style={styles.imageContainer}
                >
                    <Image
                        source={image.source}
                        style={[styles.image, { width: imageWidth, height: imageWidth }]}
                    />
                    <View style={styles.overlay}></View>
                </TouchableOpacity>
            ))}
            <FullScreenImageModal
                visible={modalVisible}
                imageSource={selectedImage}
                onClose={closeImage}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    section: {
        marginHorizontal: 16,
        flexDirection: 'row',
        gap: 8,
        marginBottom: 48,
    },
    image: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY,
    },
    imageContainer: {
        position: 'relative'
    },
    overlay: {
        position: 'absolute',
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        borderRadius: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'

    }
});


export default ImagesSection;