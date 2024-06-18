import products from "@/assets/data/products";
import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";

const product = products[0];

const Productlistitem = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text>{product.name}</Text>
      <Text style={styles.text}>${product.price}</Text>
    </View>
  );
};

export default function Index() {
  return (
    <View>
      <Productlistitem />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: "blue",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
