import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { COLORS, FONT_FAMILIES } from "../constants/ui";


export default function RootLayout() {
  return <Tabs
    screenOptions={{
      tabBarActiveTintColor: COLORS.PRIMARY,
      tabBarInactiveTintColor: COLORS.GRAY,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: COLORS.BACKGROUND,
        borderTopWidth: 1,
        borderTopColor: COLORS.SEPARATOR,
      },
      tabBarLabelStyle: {
        fontSize: 10,
        marginBottom: 14,
        fontFamily: FONT_FAMILIES.ROBOTO,
        fontWeight: 300
      }
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Главная',
        tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />,
      }}
    />
    <Tabs.Screen
      name="screens/CatalogScreen"
      options={{
        title: 'Каталог',
        tabBarIcon: ({ color }) => <Ionicons name="cart-outline" size={22} color={color} />,
      }}
    />
    <Tabs.Screen
      name="screens/BookingScreen"
      options={{
        title: 'Бронь',
        tabBarIcon: ({ color }) => <Ionicons name="book-outline" size={22} color={color} />,
      }}
    />
    <Tabs.Screen
      name="screens/ProfileScreen"
      options={{
        title: 'Профиль',
        tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={22} color={color} />,
      }}
    />
  </Tabs>
}
