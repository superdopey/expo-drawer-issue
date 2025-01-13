import React, { FC, useState } from "react";

import { Button, Pressable, View, Text } from "react-native";

type Props = { children?: React.ReactNode };

const PressClicker: FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <View style={{ paddingTop: 20 }}>
      <Pressable
        onPress={() => setCount(count + 1)}
        style={{ backgroundColor: "green", width: 100, height: 100 }}
      >
        <Text>{`press ${count}`}</Text>
      </Pressable>
    </View>
  );
};

export default PressClicker;
