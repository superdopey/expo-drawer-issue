import ButtonClicker from "@/components/ButtonClicker";
import { Link } from "expo-router";
import React, { FC } from "react";
import { Button, Text, View } from "react-native";

type Props = { children?: React.ReactNode };

const index: FC<Props> = ({ children }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text>Screen with drawer</Text>

      <View style={{ paddingTop: 20 }}>
        <Link href="/(main)/otherscreen" asChild>
          <Button title="Other screen" />
        </Link>
      </View>
      <ButtonClicker />
    </View>
  );
};

export default index;
