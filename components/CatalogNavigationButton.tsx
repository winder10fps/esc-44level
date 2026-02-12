import { Image, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"
import CustomText from "./CustomText";
import { COLORS } from "@/constants/ui";


type CatalogNavigationButtonProps = TouchableOpacityProps & {
    label: string;
    image: {
        source: number
        position: {
            rigth: number,
            bottom: number
        }
    };
}

const CatalogNavigationButton: React.FC<CatalogNavigationButtonProps> = ({ label, image }) => {
    const imageRightPosition = image.position.rigth;
    const imageBottomPosition = image.position.bottom;
    return (
        <TouchableOpacity style={styles.container}>
            <CustomText variant='h3'>{label}</CustomText>
            <Image
                source={image.source}
                style={[
                    styles.image,
                    {
                        right: imageRightPosition,
                        bottom: imageBottomPosition
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