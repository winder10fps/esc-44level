// app/_layout.tsx
import { COLORS } from "@/constants/ui";
import * as Font from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import LoadingScreen from "@/components/LoadingScreen";


// Основной контент
const RootLayoutContent = () => {
    const { isAuth, isLoading } = useAuth();
    const [fontsLoaded, fontError] = Font.useFonts({
        'Roboto': require('@/assets/fonts/Roboto.ttf'),
        'Roboto-Condensed': require('@/assets/fonts/RobotoCondensed.ttf'),
    });

    const [showSplash, setShowSplash] = useState(true);

    // Управляем сплеш-скрином
    useEffect(() => {
        if (showSplash) {
            SplashScreen.preventAutoHideAsync();
        } else {
            SplashScreen.hideAsync();
        }
    }, [showSplash]);

    // Скрываем сплеш когда все готово
    useEffect(() => {
        if (fontsLoaded && !isLoading) {
            setTimeout(() => setShowSplash(false), 500);
        }
    }, [fontsLoaded, isLoading]);

    // Показываем загрузку пока не готовы шрифты или проверка авторизации
    if (!fontsLoaded || fontError || isLoading) {
        return <LoadingScreen />;
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
            {isAuth ? (
                // Авторизованные экраны
                <Stack
                    screenOptions={{
                        headerShown: false,
                        animation: 'fade',
                        animationDuration: 300,
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
                // Неавторизованные экраны
                <Stack screenOptions={{
                    headerShown: false,
                    animation: 'fade',
                    animationDuration: 300
                }}>
                    <Stack.Screen name="(auth)/LoginScreen" />
                    <Stack.Screen name="(auth)/RegisterScreen" />
                    <Stack.Screen name="(auth)/ConfirmEmailScreen" />
                    <Stack.Screen name="(auth)/ResetPasswordScreen" />
                </Stack>
            )}
        </View>
    );
}


// Главный компонент
export default function RootLayout() {
    return (
        <AuthProvider>
            <RootLayoutContent />
        </AuthProvider>
    );
}