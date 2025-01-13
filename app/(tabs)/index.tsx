import { Image, StyleSheet, Text, Button, Pressable, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { Link } from "expo-router";
import ButtonClicker from "@/components/ButtonClicker";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  return (
    <>
      <View style={{ paddingBottom: 20, paddingTop: 100 }}>
        <Text style={{ paddingBottom: 20 }}>Index</Text>
        <Link href="/dashboard" asChild>
          <Button title="dashboard" />
        </Link>
      </View>
      <ButtonClicker />
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
