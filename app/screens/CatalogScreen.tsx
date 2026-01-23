import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { COLORS } from '../../constants/ui';
import { SafeAreaView } from 'react-native-safe-area-context';


const Catalog = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <Text style={styles.text}>Catalog</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    text: {
        color: "#ffffff"
    }
})


export default Catalog