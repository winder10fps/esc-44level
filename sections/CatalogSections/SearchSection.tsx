import FilterIcon from "@/assets/icons/Filtericon";
import CustomTextInput from "@/components/CustomTextInput";
import { COLORS } from "@/constants/ui";
import { StyleSheet, TouchableOpacity, View } from "react-native"


const SearchSection = () => {
    return (
        <View style={styles.searchSection}>
            <CustomTextInput placeholder='Поиск' style={styles.searchInput} />
            <TouchableOpacity style={styles.filterButton}>
                <FilterIcon />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        gap: 8,
        marginHorizontal: 8
    },
    searchInput: {
        flex: 1
    },
    filterButton: {
        backgroundColor: COLORS.CARD_BACKGROUND,
        width: 56,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
})


export default SearchSection;
