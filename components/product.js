import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { TouchableHighlight } from "react-native-gesture-handler";

const Product = ({ product, navigation }) => {
    const land = () => {
        navigation.navigate("Description", {product: product});
    }
  return (
    <TouchableOpacity  onPress={land}>
      <View style={styles.root}>
        <Image
          style={{
            width: 180,
            height: 200,
          }}
          source={{
            uri: product.image,
          }}
        />
        <View style={styles.rightcontainer}>
          <Text style={styles.title} numberOfLines={4}>
            {product.title}
          </Text>
          {/* Ratings*/}
          <View style={styles.ratingscontainer}>
            <FontAwesome name="star" size={18} color={"#e47911"} />
            <FontAwesome name="star" size={18} color={"#e47911"} />
            <FontAwesome name="star" size={18} color={"#e47911"} />
            <FontAwesome name="star" size={18} color={"#e47911"} />
            <FontAwesome name="star" size={18} color={"#e47911"} />

            <Text>{product.ratings}</Text>
          </View>
          <Text style={styles.price}>
            {product.price}
            <Text style={styles.oldPrice}>$500.00</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
