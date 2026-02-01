import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CustomTextButton from "@/components/CustomTextButton";


export default function LoginScreen() {

    const onLogin = () => {
        router.push('/')
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomTextButton label="Войти" size="default" variant="primary" onPress={onLogin}/>
            </ScrollView>
        </SafeAreaView>
    );
}
