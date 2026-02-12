import { StyleSheet } from 'react-native';
import StackScreen from '@/components/StackScreen';
import { useLocalSearchParams } from 'expo-router';

export default function CatalogPreviewScreen() {
    const params = useLocalSearchParams();

    const title = Array.isArray(params.heading)
        ? params.heading[0]
        : params.heading;

    return (
        <StackScreen title={title} style={styles}>

        </StackScreen>
    );
}

const styles = StyleSheet.create({

});
