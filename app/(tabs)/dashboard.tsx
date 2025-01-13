import React, { FC } from "react";
import { Link } from "expo-router";
import ButtonClicker from "@/components/ButtonClicker";
import { View, Text, Button } from "react-native";
import PressClicker from "@/components/PressClicker";

type Props = { children?: React.ReactNode };

const index: FC<Props> = ({ children }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text>Dashboard</Text>

      <View style={{ paddingTop: 20 }}>
        <Link href="/(tabs)" asChild>
          <Button title="index" />
        </Link>
      </View>
      <View style={{ paddingTop: 20 }}>
        <Link href="/(tabs)/explore" asChild style={{ paddingTop: 20 }}>
          <Button title="explore" />
        </Link>
      </View>
      <ButtonClicker />
      <PressClicker />
    </View>
  );
};

export default index;
