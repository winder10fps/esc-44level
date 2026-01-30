import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StackScreen from '@/components/StackScreen';
import CustomText from '@/components/CustomText';
import { COLORS } from '@/constants/ui';
import FullScreenImageModal from '@/components/FullScreenImageModal';
import { useState } from 'react';


export default function AboutClubScreen() {
    const [fullScreenTopImage, setFullScreenTopImage] = useState(false)

    const [selectedBottomImage, setSelectedBottomImage] = useState<any>(null);
    const [fullScreenBottomImage, setFullScreenBottomImage] = useState(false);

    const openImage = (imageSource: any) => {
        setSelectedBottomImage(imageSource);
        setFullScreenBottomImage(true);
    };

    const images = [
        { id: 1, source: require('@/assets/images/homePageImage3.jpg') },
        { id: 2, source: require('@/assets/images/homePageImage2.jpg') },
        { id: 3, source: require('@/assets/images/homePageImage1.jpg') }
    ];

    return (
        <StackScreen title='О клубе'>
            <View style={{ marginTop: 24 }}>
                <CustomText variant='primary' style={styles.paragraph}>
                    <Text style={{ color: COLORS.PRIMARY }}>Level44</Text> — это не просто компьютерный клуб. Это портал в цифровые миры, где каждый игрок может выйти за пределы обычного.
                </CustomText>
            </View>
            <View>
                <TouchableOpacity onPress={() => setFullScreenTopImage(true)}>
                    <Image
                        source={images[2].source}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <FullScreenImageModal
                    visible={fullScreenTopImage}
                    imageSource={images[2].source}
                    onClose={() => setFullScreenTopImage(false)}
                />
            </View>
            <View style={styles.block}>
                <CustomText variant='h3'>
                    Почему стоит выбрать Level44?
                </CustomText>
                <CustomText variant='primary' style={styles.paragraph}>
                    <Text style={styles.accentText}>— Мощь без компромиссов:</Text> Топовое железо (RTX 40-й серии, процессоры Intel Core i9/Ryzen 9, быстрая DDR5 память) обеспечивает стабильный FPS.
                </CustomText>
                <CustomText variant='primary' style={styles.paragraph}>
                    <Text style={styles.accentText}>— Идеальная связь:</Text> Выделенный оптоволоконный канал с минимальным пингом для победы в любых онлайн-баталиях.
                </CustomText>
                <CustomText variant='primary' style={styles.paragraph}>
                    <Text style={styles.accentText}>— Эргономика на уровне:</Text> Профессиональные игровые кресла, большие мониторы и пространство для полного погружения.
                </CustomText>
                <CustomText variant='primary' style={styles.paragraph}>
                    <Text style={styles.accentText}>— Библиотека мечты:</Text> Полный доступ к лицензионным играм в Steam, Epic Games и других платформах.
                </CustomText>
                <CustomText variant='primary' style={styles.paragraph}>
                    <Text style={styles.accentText}>— Киберспортивная атмосфера:</Text> Регулярные турниры, трансляции матчей и сообщество единомышленников.
                </CustomText>
                <CustomText variant='primary' style={styles.paragraph}>
                    <Text style={styles.accentText}>— Перезагрузка:</Text> Уютная лаунж-зона с прохладительными напитками и закусками.
                </CustomText>
            </View>
            <View style={styles.bottomImages}>
                {images.slice(0, 2).map((image) => (
                    <TouchableOpacity
                        key={image.id}
                        onPress={() => openImage(image.source)}
                    >
                        <Image
                            source={image.source}
                            style={[styles.image, styles.bottomImage]}
                        />
                    </TouchableOpacity>
                ))}
                <FullScreenImageModal
                    visible={fullScreenBottomImage}
                    imageSource={selectedBottomImage}
                    onClose={() => { setFullScreenBottomImage(false) }}
                />
            </View>
        </StackScreen>
    );
}


const styles = StyleSheet.create({
    accentText: {
        color: COLORS.WHITE
    },
    block: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        borderRadius: 25,
        gap: 16
    },
    paragraph: {
        color: COLORS.GRAY
    },
    bottomImage: {
        marginVertical: 8
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 25,
        marginVertical: 24
    },
    bottomImages: {
        marginVertical: 24
    }
});