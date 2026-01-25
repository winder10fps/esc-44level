import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../constants/ui";
import { SafeAreaView } from 'react-native-safe-area-context';
import TournamentSection from "@/sections/HomeScreenSections/TournamentSection";
import ServiceSection from "@/sections/HomeScreenSections/ServiceSection";
import ContactsSection from "@/sections/HomeScreenSections/ContactsSection";


const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView style={styles.content}> 
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
  content: {
    paddingTop: 8
  },
})


export default Index