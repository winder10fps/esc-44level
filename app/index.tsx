import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../constants/ui";
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextButton from "@/components/CustomTextButton";
import TournamentSection from "@/sections/HomeScreenSections/TournamentSection";
import { useRouter } from "expo-router";


const Index = () => {
  const router = useRouter();

  const goBooking = () => {
    router.push('./screens/BookingScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView style={styles.content}>
        <CustomTextButton
          size="big"
          variant="primary"
          label='Забронировать ПК'
          onPress={goBooking} />
        <TournamentSection />
        <TournamentSection />
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  content: {
    paddingTop: 8
  },
})


export default Index