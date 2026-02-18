import { Image, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"
import CustomText from "./CustomText";
import { COLORS, TOUCHABLE_OPACITY } from "@/constants/ui";


type CatalogNavigationButtonProps = TouchableOpacityProps & {
    label: string;
    onPress?: () => void;
    image: {
        source: number
        position: {
            rigth: number,
            bottom: number
        },
        size: {
            width: number,
            height: number
        }
    };
}

const CatalogNavigationButton: React.FC<CatalogNavigationButtonProps> = ({ label, image, onPress }) => {
    const imageRightPosition = image.position.rigth;
    const imageBottomPosition = image.position.bottom;
    const imageWidth = image.size.width;
    const imageHeight = image.size.height;

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={TOUCHABLE_OPACITY.OPACITY}
            onPress={onPress}
        >
            <CustomText variant='h3'>{label}</CustomText>
            <Image
                source={image.source}
                style={[
                    styles.image,
                    {
                        right: imageRightPosition,
                        bottom: imageBottomPosition,
                        width: imageWidth,
                        height: imageHeight
                    }
                ]}
            />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 140,
        overflow: 'hidden',
        flex: 1,
        backgroundColor: COLORS.CARD_BACKGROUND,
        borderRadius: 25,
        padding: 16,
        position: 'relative'
    },
    image: {
        position: 'absolute',
    }
})

export default CatalogNavigationButton