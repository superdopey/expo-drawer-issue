import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import React, { FC } from "react";
import { Text } from "react-native";

type Props = { children?: React.ReactNode };
//is this the problem, using a drawer and navigating to a nother screen outside  the drawer?
const drawerLayout: FC<Props> = ({ children }) => {
  return <Drawer />;
};

export default drawerLayout;
