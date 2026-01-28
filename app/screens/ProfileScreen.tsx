import InfoSection from '@/sections/ProfileSections/InfoSection';
import UserSection from '@/sections/ProfileSections/UserSection';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/ui';


const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <ScrollView>
                <UserSection />
                <InfoSection />
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    }
})


export default Profile