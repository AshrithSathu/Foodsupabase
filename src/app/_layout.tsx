import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#ccc",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
        }}
        
      />
      <Tabs.Screen
        name="Order"
        options={{
          title: "Order",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
