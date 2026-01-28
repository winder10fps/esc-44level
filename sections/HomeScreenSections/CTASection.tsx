import CustomText from "@/components/CustomText";
import CustomTextButton from "@/components/CustomTextButton";
import SemiCircleProgress from "@/components/SemiCircleProgress";
import { COLORS, FONT_FAMILIES } from "@/constants/ui";
import { useChangePage } from "@/functions/navigation";
import { StyleSheet, Text, View } from "react-native";

const CTASection = () => {
    const { changePageTo } = useChangePage();

    const goBooking = () => {
        changePageTo('./screens/BookingScreen')
    }

    const level = 1;
    const levelProgress = 35;

    return (
        <View style={styles.sectionContainer}>
            <View style={styles.infoContainer}>
                <SemiCircleProgress
                    progress={levelProgress}
                    radius={87}
                    strokeWidth={6}
                    style={styles.progressBar}
                />
                <Text style={[styles.levelLabel]}>{level}</Text>
                <CustomText variant='secondary'>Твой Level</CustomText>
                <CustomText variant='primary' style={{ marginTop: 16 }}>Больше играешь — больше Level</CustomText>
            </View>
            <CustomTextButton
                label="Забронировать ПК"
                size="big"
                variant="primary"
                style={{
                    alignSelf: 'center'
                }}
                onPress={goBooking}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        marginHorizontal: 16,
        marginBottom: 72,
        gap: 24
    },
    infoContainer: {
        alignItems: 'center',
        backgroundColor: COLORS.BACKGROUND,
        padding: 24,
        borderRadius: 25,
        position: 'relative'
    },
    levelLabel: {
        color: COLORS.PRIMARY,
        fontFamily: FONT_FAMILIES.ROBOTO,
        fontSize: 40,
        fontWeight: 700,
        marginTop: 16,
    },
    progressBar: {
        position: 'absolute',
        top: 24
    }
})


export default CTASection;