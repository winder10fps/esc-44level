import InfoSection from '@/sections/ProfileSections/InfoSection';
import UserSection from '@/sections/ProfileSections/UserSection';
import React from 'react';
import { RefreshControl, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/ui';
import { useUpdateTabs } from '@/hooks/useUpdateTabs';


const Profile = () => {
    const { refreshing, onRefresh } = useUpdateTabs()

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[COLORS.PRIMARY]}
                        progressBackgroundColor={COLORS.CARD_BACKGROUND}
                    />
                }>
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