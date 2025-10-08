import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Typography from "@components/typoGraphy";
export default function DashboardScreen(props: any) {
  return (
    <View style={styles.container}>
      <Typography type="FOURTEENBOLD">DASHBOARD</Typography>
    </View>
  );
}
