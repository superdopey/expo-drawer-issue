import React, { FC, useState } from "react";

import { Button, View, Text } from "react-native";

type Props = { text: string };

const ButtonClicker: FC<Props> = ({ text }) => {
  const [count, setCount] = useState(0);
  return (
    <View style={{ paddingTop: 20 }}>
      <Text>{text}</Text>
      <Button
        title={`BTN ${count}`}
        onPress={() => setCount(count + 1)}
      ></Button>
    </View>
  );
};

export default ButtonClicker;
