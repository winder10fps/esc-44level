import { ActivityIndicator, View } from "react-native";
import CustomText from "./CustomText";
import { COLORS } from "@/constants/ui";


const LoadingScreen =() => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.BACKGROUND,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
        }}>
            <ActivityIndicator size="large" color={COLORS.PRIMARY} />
            <CustomText variant="primary">Подождите...</CustomText>
        </View>
    );
}


export default LoadingScreen;