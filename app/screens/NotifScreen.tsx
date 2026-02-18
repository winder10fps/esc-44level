import { FlatList, ListRenderItem, RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import StackScreen from '@/components/StackScreen';
import CustomText from '@/components/CustomText';
import { COLORS } from '@/constants/ui';
import { useUpdateTabs } from '@/hooks/useUpdateTabs';
import { Notif } from '../../contexts/auth/types';
import { useAuth } from '@/contexts/auth';

export default function NotifScreen() {
    const { user } = useAuth()
    const { refreshing, onRefresh } = useUpdateTabs()

    const renderNotif: ListRenderItem<Notif> = ({ item }) => (
        <View style={styles.notifContainer}>
            <CustomText variant="h3">{item.title}</CustomText>
            <CustomText
                variant="secondary"
                style={styles.messageText}
            >
                {item.message}
            </CustomText>
        </View>
    );

    return (
        <StackScreen title='Уведомления'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[COLORS.PRIMARY]}
                        progressBackgroundColor={COLORS.CARD_BACKGROUND}
                    />
                }>
                <FlatList
                    data={user?.notifs}
                    renderItem={renderNotif}
                    keyExtractor={(item) => item.id.toString()}
                    scrollEnabled={false}
                />
            </ScrollView>
        </StackScreen>
    );
}

const styles = StyleSheet.create({
    notifContainer: {
        padding: 16,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        marginTop: 16,
        borderRadius: 25,
    },
    messageText: {
        color: COLORS.GRAY,
    }
});