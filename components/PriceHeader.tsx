import React from "react";
import { Text, View } from "react-native";
import { theme } from "../core/theme";

type Props = {
  usd: number;
  sol: number;
};

const PriceHeader = ({ usd, sol }: Props) => (
  <View style={{ width: "100%", alignItems: "center", backgroundColor: "#2e2e2e", padding: 20, marginTop: 170, borderRadius: 20, }}>
    <Text
      style={{
        marginTop: 0,
        color: theme.colors.primary,
        fontSize: 25,
        fontWeight: "bold",
      }}
    >
      {`$${usd}`}
    </Text>
    <Text style={{ color: theme.colors.accent, fontWeight: "bold" }}>
     You have {`${sol}`} SOL currently
    </Text>
  </View>
);

export default PriceHeader;
