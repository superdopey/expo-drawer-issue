import ButtonClicker from "@/components/ButtonClicker";
import React, { FC } from "react";
import { Text, View } from "react-native";

type Props = { children?: React.ReactNode };

const screenTwo: FC<Props> = ({ children }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text>screenTwo</Text>
      <ButtonClicker />
    </View>
  );
};

export default screenTwo;
