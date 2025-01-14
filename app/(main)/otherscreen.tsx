import ButtonClicker from "@/components/ButtonClicker";
import React, { FC } from "react";
import { Text, View } from "react-native";

type Props = { children?: React.ReactNode };

const otherscreen: FC<Props> = ({ children }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text>Other screen</Text>
      <ButtonClicker />
    </View>
  );
};

export default otherscreen;
