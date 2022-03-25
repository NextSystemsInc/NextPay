import React, { memo, useState, useEffect} from "react";
import uuid from 'react-native-uuid';
import Clipboard from 'expo-clipboard';
import { StyleSheet, Text, TouchableOpacity, View, Image, Linking, Touchable, Share } from "react-native";
import {
    Background3 as Background,
    BackButton,
    Header,
    NumberKeyboard,
    Paragraph,
  } from "../components";

import { Snackbar } from "react-native-paper";
    import { Navigation } from "../types";
import DeviceInfo from "react-native-device-info";

    type Props = {
        navigation: Navigation;
    };

const AboutScreen = ({ navigation }: Props) => {
    const [visible, setVisible] = useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const copyUUID = async () => {
        // copy uuid.v4() string to clipboard without await
        const uuidString = uuid.v4().toString();
        // copy uuidString to clipboard
        await Clipboard.setString(uuidString);
        onToggleSnackBar();
    };

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
            <TouchableOpacity onPress={() => copyUUID()}>
                <Paragraph>This is build 1.1.0</Paragraph>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/zeankundev/NextPay')}>
                <Paragraph>GitHub repository here</Paragraph>
            </TouchableOpacity>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: "OK",
                    onPress: () => {
                        onDismissSnackBar();
                    },
                }}
            >UUID has been copied!</Snackbar>
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
