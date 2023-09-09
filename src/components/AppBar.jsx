import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarColor,
    // ...
  },
  // ...
  tabs: {
    padding: 20,
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
    </View>
  );
};

export default AppBar;
