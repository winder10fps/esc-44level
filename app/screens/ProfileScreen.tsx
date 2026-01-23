import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { COLORS } from '../../constants/ui';
import { SafeAreaView } from 'react-native-safe-area-context';


const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <Text style={styles.text}>Profile</Text>
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


export default Profile