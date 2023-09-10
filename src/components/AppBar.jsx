import { View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarColor,
    flexDirection: "row",
  },
  // ...
  tabs: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text
        fontSize="subheading"
        fontWeight="bold"
        style={{ color: "white", ...styles.tabs }}
      >
        Repositories
      </Text>

      <Text
        fontSize="subheading"
        fontWeight="bold"
        style={{ color: "white", ...styles.tabs }}
      >
        SignIn
      </Text>
    </View>
  );
};

export default AppBar;
