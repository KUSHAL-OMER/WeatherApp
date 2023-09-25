import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const Tab = createBottomTabNavigator();

const App = () => {

  const [loading, error, weather] = useGetWeather();

  if(weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error ? <ErrorItem /> : <ActivityIndicator size={'large'} color={'blue'} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
});

export default App;