import React, { memo } from "react";
import { Background, Button, Paragraph } from "../components";
import { ImageBackground, Image } from "react-native";
import { Navigation } from "../types";

type Props = {
  navigation: Navigation;
};

const OnboardingScreen = ({ navigation }: Props) => (
  <Background>
    <Image 
      source={require('../assets/images/logoSPL.png')}
      style={{
        width: 100,
        height: undefined,
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: 20,
        aspectRatio: 1,
      }} />
    <Paragraph bold>Welcome to NextPay, a new era of cryptowallet paying</Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("Set Pin")}>
      Let's go!
    </Button>
  </Background>
);

export default memo(OnboardingScreen);
