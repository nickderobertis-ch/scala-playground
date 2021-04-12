import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator() {
  //   navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Taskbox"
        component={HomeScreen}
        options={{
          title: "Taskbox",
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: "Storybook",
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "Links":
      return "Your Storybook";
  }
}
