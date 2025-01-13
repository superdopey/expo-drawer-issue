import React, { FC } from "react";
import { Link } from "expo-router";
import ButtonClicker from "@/components/ButtonClicker";
import { View, Text, Button } from "react-native";
import PressClicker from "@/components/PressClicker";

type Props = { children?: React.ReactNode };

const three: FC<Props> = ({ children }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text>Three</Text>

      <ButtonClicker />
      <PressClicker />
    </View>
  );
};

export default three;
