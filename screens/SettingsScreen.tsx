import React, { memo, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  BackButton,
  Background3 as Background,
  Paragraph,
  Title,
} from "../components";
import {
  Avatar,
  Card,
  IconButton,
  useTheme,
  Snackbar,
} from "react-native-paper";
import { Navigation } from "../types";

import { requestAirDrop } from "../api";

import { useStoreState } from "../hooks/storeHooks";

import { accountFromSeed } from "../utils";

type Props = {
  navigation: Navigation;
};

const SettingsScreen = ({ navigation }: Props) => {
  const { colors } = useTheme();

  const wallet = useStoreState((state) => state.wallet);
  const accounts = useStoreState((state) => state.accounts);
  const [account, setAccount] = useState({});

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const [airdropText, setAirdropText] = useState("");

  useEffect(() => {
    async function generate() {
      const currentAccount = accounts[0];
      setAccount({
        index: currentAccount.index,
        title: currentAccount.title,
        keyPair: accountFromSeed(
          wallet.seed,
          currentAccount.index,
          currentAccount.derivationPath,
          0
        ),
      });
      // }
    }

    generate();
  }, []);

  const _requestAirdrop = async () => {
    setAirdropText("Requesting Airdrop...");
    setVisible(true);
    const signature = await requestAirDrop(
      account.keyPair.publicKey.toString()
    );
    setAirdropText("Airdrop completed!");
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("Dashboard")} />

      <View style={{ width: "100%" }}>
        <Card style={styles.card} onPress={() => navigation.navigate("Backup")}>
          <Card.Title
            title="Backup"
            left={(props) => <Avatar.Icon {...props} icon="shield" />}
            right={(props) => <IconButton {...props} icon="chevron-right" />}
          />
          <Card.Content>
            <Paragraph>
              This 12 word phrase is your backup phrase. It is the only way to
              restore your wallet if you lose your phone or reinstall the app.
            </Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card} onPress={() => _requestAirdrop()}>
          <Card.Title
            title="Request Airdrop"
            left={(props) => <Avatar.Icon {...props} icon="cash-usd" />}
            right={(props) => (
              <IconButton {...props} icon="chevron-right" onPress={() => {}} />
            )}
          />
          <Card.Content>
            <Paragraph>Fetch your funds from your default account</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card} onPress={() => navigation.navigate("About")}>
          <Card.Title
            title="About"
            left={(props) => <Avatar.Icon {...props} icon="info" />}
            right={(props) => <IconButton {...props} icon="chevron-right" />}
          />
          <Card.Content>
            <Paragraph>
              Find more information about NextPay
            </Paragraph>
          </Card.Content>
        </Card>
      </View>

      <Snackbar
        visible={visible}
        duration={30000}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Close",
          onPress: () => {
            // Do something
          },
        }}
        style={{ backgroundColor: colors.primary }}
      >
        {airdropText}
      </Snackbar>
    </Background>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(52, 52, 52, 0.2)",
  },
});

export default memo(SettingsScreen);
