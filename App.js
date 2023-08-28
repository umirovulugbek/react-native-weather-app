// import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, View } from "react-native";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Weather from "./components/weather";
import * as Location from "expo-location";

import axios from "axios";

export default function App() {
  const [isloading, setIsloading] = useState(true);
  const [location, setLocation] = useState(null);
  const API_KEY = "df921538ea43acbbb8af00a54e18bb8c";

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    setLocation(data);
    setIsloading(false);
  };
  
  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      console.log(
        location?.coords?.latitude,
        location?.coords?.longitude,
        "location?.coords?.latitude, location?.coords?.longitude"
      );
      getWeather(location?.coords?.latitude, location?.coords?.longitude);
    } catch (error) {
      Alert.alert("I can't find your current location  ,  so bad ):");
    }
  };

  const setWeather = async (query) => {
    setIsloading(true);
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    );
    setLocation(data);
    setIsloading(false);
  };
  useEffect(() => {
    getLocation();
  }, []);

  return isloading === true ? (
    <Loader />
  ) : (
    <Weather
      temp={Math.round(location?.main?.temp)}
      name={location?.name}
      setWeather={setWeather}
      condition={location?.weather[0]?.main}
    />
  );
}

const styles = StyleSheet.create({});
