import { Drawer } from "expo-router/drawer";
import React from "react";

export default function MainLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerPosition: "left",
      }}
    >
      <Drawer.Screen name="HOME" />
    </Drawer>
  );
}
