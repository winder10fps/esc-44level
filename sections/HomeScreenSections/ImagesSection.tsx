import { COLORS } from "@/constants/ui";
import { Dimensions, Image, StyleSheet, View } from "react-native"

const ImagesSection = () => {
    const screenWinth = Dimensions.get('window').width;
    const imagesContainerWidth = screenWinth - 32;
    const imageWidth = (imagesContainerWidth - (8 * 3)) / 4;

    return (
        <View style={styles.sectionContainer}>
            <Image
                source={require('@/assets/images/homePageImage1.png')}
                style={[styles.image, { width: imageWidth, height: imageWidth }]}
            />
            <Image
                source={require('@/assets/images/homePageImage2.png')}
                style={[styles.image, { width: imageWidth, height: imageWidth }]}
            />
            <Image
                source={require('@/assets/images/homePageImage3.png')}
                style={[styles.image, { width: imageWidth, height: imageWidth }]}
            />
            <Image
                source={require('@/assets/images/homePageImage4.png')}
                style={[styles.image, { width: imageWidth, height: imageWidth }]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        marginHorizontal: 16,
        flexDirection: 'row',
        gap: 8,
        marginBottom: 48
    },
    image: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY
    }
})


export default ImagesSection;