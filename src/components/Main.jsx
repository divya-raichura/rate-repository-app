import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import FlexboxExample from "./Flexbox";
import AppBar from "./AppBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./SignIn";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      {/* <AppBar /> */}
      <Stack.Navigator
        initialRouteName="RepositoryList"
        // screenOptions={{
        //   header: AppBar,
        // }}
      >
        <Stack.Screen name="RepositoryList" component={RepositoryList} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
      {/* <FlexboxExample /> */}
      {/* <Text>Rate Repository Application</Text> */}
      {/* <RepositoryList /> */}
    </View>
  );
};

export default Main;
