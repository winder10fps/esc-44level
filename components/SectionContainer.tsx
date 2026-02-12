import { COLORS } from "@/constants/ui";
import { ScrollViewProps, View, ViewProps } from "react-native";


type SectionContainerProps = ViewProps & ScrollViewProps;

const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
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




export default SectionContainer;