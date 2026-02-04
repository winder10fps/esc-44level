import { COLORS } from "@/constants/ui";
import { View, ViewProps } from "react-native";


type AuthSectionContainerProps = ViewProps;

const AuthSectionContainer: React.FC<AuthSectionContainerProps> = ({ children }) => {
    return (
        <View style={{
            paddingVertical: 24,
            paddingHorizontal: 8,
            marginHorizontal: 8,
            backgroundColor: COLORS.SECTION_BACKGROUND,
            borderRadius: 25
        }}>
            {children}
        </View>
    )
}




export default AuthSectionContainer;