import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Amazing weather",
    description: "Go for a walk, stop staying at home!",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Sit at home",
    description: "Do you see what's on the street?",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Take an umbrella",
    description: "Perhaps the rain will increase soon",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1CB5E0"],
    title: "It's raining outside",
    description: "So there will be a rainbow soon!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "There's a snow outside!",
    description: "Dress warmly, make snowmen",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#B79891", "#94716B"],
    title: "Dusty",
    description: "Better close the windows",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "On the street smog :(",
    description: "I do not advise going out unnecessarily",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
    title: "There's a snow outside!",
    description: "Dress warmly, make snowmen",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "You can't see a damn thing in the fog",
    description: "Do you see what's on the street?",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "The clouds",
    description: "Go for a walk, stop staying at home!",
  },
};

export default function Weather({ temp, name, condition, setWeather }) {
  const d = new Date();
  const [query, setQuery] = useState("");
  return (
    <LinearGradient
      colors={weatherOptions[condition]?.gradient}
      style={style.mainContainer}
    >
      <StatusBar barStyle={"light-content"} />
      <View style={style.container}>
        <MaterialCommunityIcons
          name={weatherOptions[condition]?.iconName}
          size={96}
          color={"white"}
        />
        <View style={style?.flex}>
          <Text style={style.text}>{temp}°C </Text>
          <Text style={style.text}>| {name}</Text>
        </View>
        <Text style={style?.textDate}>
          {d.getHours()}:{d?.getMinutes()}
        </Text>
      </View>

      <View style={{ ...style.container, ...style.textContainer }}>
        {/* <Text
        // style={style.title}
        >
          {weatherOptions[condition]?.title}
        </Text> */}
        <Text style={style.description}>
          {weatherOptions[condition]?.description}
        </Text>
        <View style={style?.searchContainer}>
          <TextInput
            placeholder="enter the city"
            style={style?.input}
            value={query}
            onChangeText={(text) => setQuery(text)}
          />

          <Pressable style={style.btn} onPress={() => setWeather(query)}>
            <Text style={style.btntext}>Search</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  text: {
    color: "white",
    fontSize: 40,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  // title: {
  //   fontSize: 44,
  // },
  textDate: {
    color: "white",
    fontSize: 22,
    justifyContent: "flex-end",
    textAlign: "right",
  },
  description: {
    fontSize: 20,
    color: "white",
    margin: 0,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    position: "relative",
  },
  btn: {
    backgroundColor: "#e8e8e8",
    color: "blue",
    // width: "30%",
  },
  btntext: {
    color: "#2F80ED",
    fontSize: 15,
  },
  input: {
    width: "70%",
  },
});
