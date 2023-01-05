import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  Octicons,
  Feather,
} from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "Animation.scss";

const Stack = createNativeStackNavigator();

export default function App() {
  const [screenText, setScreenText] = useState("Home");

  changeText = (text) => {
    console.log(text + " has been pressed");
    setScreenText(text);
  };

  function handleSearch() {
    console.log("Button clicked");
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2DAA91",
    alignItems: "center",
    justifyContent: "center",
  },
  MainContainer: {},
  NavContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 100,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#eee",
    width: "90%",
    justifyContent: "space-evenly",
    borderRadius: 40,
    padding: 8,
  },

  Icon: {
    color: "#2DAA91",
    padding: 15,
    borderRadius: 50,
  },
  CenterText: {
    fontSize: 30,
    color: "white",
  },
});

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={ }>
        <Feather name="search" size={84} color="white" />
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
};

const HistoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.CenterText}>HistoryScreen</Text>
      <NavBar navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const ListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.CenterText}>ListScreen</Text>
      <NavBar navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.NavContainer}>
      <View style={styles.NavBar}>
        <Ripple
          rippleCentered
          rippleDuration={400}
          rippleSize={75}
          onPress={() => navigation.navigate("History")}
        >
          <Octicons name="history" size={32} style={styles.Icon} />
        </Ripple>

        <Ripple
          rippleCentered
          rippleDuration={400}
          rippleSize={75}
          onPress={() => navigation.navigate("Search")}
        >
          <MaterialCommunityIcons
            name="barcode-scan"
            size={32}
            style={styles.Icon}
          />
        </Ripple>

        <Ripple
          rippleCentered
          rippleDuration={400}
          rippleSize={75}
          onPress={() => navigation.navigate("List")}
        >
          <Entypo name="add-to-list" size={32} style={styles.Icon} />
        </Ripple>
      </View>
    </View>
  );
};


