import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/Search box";
import Product from "../components/product";
import products from "../components/products";

export default function Home({ navigation }) {
  const renderItem = ({ item }) => <Product product={item} navigation={navigation} />;

  return (
    <SafeAreaView>
        <SearchBar />
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
  );
}
