import ButtonClicker from "@/components/ButtonClicker";
import { Link } from "expo-router";
import React, { FC } from "react";
import { Button, Text, View } from "react-native";

type Props = { children?: React.ReactNode };

const index: FC<Props> = ({ children }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text>Screen inside drawer navigator</Text>
      <View style={{ paddingTop: 20 }}>
        <Link href="/(main)/otherscreen" asChild>
          <Button title="Screen outside drawer" />
        </Link>
      </View>
      <ButtonClicker text="onPress events are fired normal" />
    </View>
  );
};

export default index;
