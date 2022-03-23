import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import {
    Background3 as Background,
    BackButton,
    Header,
    NumberKeyboard,
    Paragraph,
  } from "../components";
    import { Navigation } from "../types";
import DeviceInfo from "react-native-device-info";

    type Props = {
        navigation: Navigation;
    };

const AboutScreen = ({ navigation }:Props) => {
    return (
        <Background>
            <Image 
                source={require('../assets/images/logoSPL.png')}
                style={{
                    width: 50,
                    height: undefined,
                    alignSelf: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    aspectRatio: 1,
            }} />
            <BackButton goBack={() => navigation.navigate("Settings")} />
            <Header>About NextPay</Header>
            <Paragraph>Made by zeankun.dev</Paragraph>
            <Paragraph>This is build 1.0.0</Paragraph>
        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      flexDirection: "row",
      alignContent: "space-between",
      paddingHorizontal: 40,
    },
    row: {
      flex: 1,
    },
});
export default memo(AboutScreen);
