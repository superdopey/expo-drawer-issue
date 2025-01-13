import React, { FC } from "react";
import { Link } from "expo-router";
import ButtonClicker from "@/components/ButtonClicker";
import { View, Text, Button } from "react-native";
import PressClicker from "@/components/PressClicker";

type Props = { children?: React.ReactNode };

const two: FC<Props> = ({ children }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text>Two</Text>

      <View style={{ paddingTop: 20 }}>
        <Link href="/(home)/three" asChild>
          <Button title="three" />
        </Link>
      </View>
      <ButtonClicker />
      <PressClicker />
    </View>
  );
};

export default two;
