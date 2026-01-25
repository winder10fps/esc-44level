import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../constants/ui";
import { SafeAreaView } from 'react-native-safe-area-context';
import TournamentSection from "@/sections/HomeScreenSections/TournamentSection";
import ServiceSection from "@/sections/HomeScreenSections/ServiceSection";
import ContactsSection from "@/sections/HomeScreenSections/ContactsSection";
import HeaderSection from "@/sections/HomeScreenSections/HeaderSection";


const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView>
        <HeaderSection />
        <TournamentSection />
        <ServiceSection />
        <ContactsSection />
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
})


export default Index