import SearchIcon from "@/assets/icons/SearchIcon";
import CustomTextInput from "@/components/CustomTextInput";
import { COLORS } from "@/constants/ui";
import { StyleSheet, TouchableOpacity, View } from "react-native"


const SearchSection = () => {
    return (
        <View style={styles.searchSection}>
            <CustomTextInput placeholder='Поиск' style={styles.searchInput} />
            <TouchableOpacity style={styles.iconButton}>
                <SearchIcon />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        marginHorizontal: 8,
        gap: 8
    },
    searchInput: {
        flex: 1,
    },
    iconButton: {
        backgroundColor: COLORS.CARD_BACKGROUND,
        width: 56,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
})


export default SearchSection;
