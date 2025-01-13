import { Stack, Tabs, Slot } from "expo-router";
import React, { FC } from "react";
import { Text } from "react-native";

type Props = { children?: React.ReactNode };
//this the problem, nested stack ?
const layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Text style={{ paddingTop: 10 }}>Header</Text>
      <Slot />
    </>
  );
};

export default layout;
