import ButtonClicker from "@/components/ButtonClicker";
import React, { FC } from "react";
import { Text, View } from "react-native";

type Props = { children?: React.ReactNode };

const screenTwo: FC<Props> = ({ children }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text>screenTwo inside drawer navigator</Text>
      <ButtonClicker text="onPress events are fired normal" />
    </View>
  );
};

export default screenTwo;
