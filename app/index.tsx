import { StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "../constants/ui";
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from "@/components/CustomText";
import CustomTextButton from "@/components/CustomTextButton";
import CustomIconButton from "@/components/CustomIconButton";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.content}>
        <CustomText variant="micro">Шрифт</CustomText>
        <CustomTextButton size="big" variant="primary" label='Забронировать ПК'/>
        <CustomIconButton icon="notifications-outline" size="default"/>
      </View>
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