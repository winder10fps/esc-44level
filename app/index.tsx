import { Image, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "../constants/ui";
import { SafeAreaView } from 'react-native-safe-area-context';
import TournamentSection from "@/sections/HomeScreenSections/TournamentSection";
import ServiceSection from "@/sections/HomeScreenSections/ServiceSection";
import ContactsSection from "@/sections/HomeScreenSections/ContactsSection";
import HeaderSection from "@/sections/HomeScreenSections/HeaderSection";
import CTASection from "@/sections/HomeScreenSections/CTASection";
import ImagesSection from "@/sections/HomeScreenSections/ImagesSection";


const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView>
        <View style={styles.forBackgroundImage}>
          <HeaderSection />
          <CTASection />
          <ImagesSection />
          <Image source={require('@/assets/images/homePageBackground.png')} style={styles.backgroundImage}/>
        </View>
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
  forBackgroundImage: {
    position: 'relative'
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '90%',
    flex: 1
  }
})


export default Index