import React, { FC, useState } from "react";

import { Button, View } from "react-native";

type Props = { children?: React.ReactNode };

const ButtonClicker: FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <View style={{ paddingTop: 20 }}>
      <Button
        title={`BTN ${count}`}
        onPress={() => setCount(count + 1)}
      ></Button>
    </View>
  );
};

export default ButtonClicker;
