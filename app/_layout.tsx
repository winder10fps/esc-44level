import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import * as Font from 'expo-font';
import { View } from "react-native";
import { COLORS } from "@/constants/ui";
import { isAuth } from "@/constants/fromServer";


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
    const [fontsLoaded, fontError] = Font.useFonts({
        'Roboto': require('@/assets/fonts/Roboto.ttf'),
        'Roboto-Condensed': require('@/assets/fonts/RobotoCondensed.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
            {isAuth ? (
                <Stack
                    screenOptions={{
                        headerShown: false,
                        animation: 'fade',
                        animationDuration: 100,
                    }}
                >
                    <Stack.Screen name="(tabs)" />
                    <Stack.Screen name="screens/AboutClubScreen" />
                    <Stack.Screen name="screens/TournamentsScreen" />
                    <Stack.Screen name="screens/NotifScreen" />
                    <Stack.Screen name="screens/FAQScreen" />
                    <Stack.Screen name="screens/PrivacyScreen" />
                    <Stack.Screen name="screens/UserAgreementScreen" />
                </Stack>
            ) : (
                <Stack screenOptions={{
                    headerShown: false,
                    animation: 'fade',
                    animationDuration: 100,
                }}
                >
                    <Stack.Screen name="(auth)/LoginScreen" />
                    <Stack.Screen name="(auth)/RegisterScreen" />
                    <Stack.Screen name="(auth)/ConfirmEmailScreen" />
                    <Stack.Screen name="(auth)/ResetPasswordScreen" />
                </Stack>
            )}
        </View>
    );
}