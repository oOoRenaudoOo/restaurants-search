import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import { elevation } from "../common/styles";


function RestaurantItem({restaurant, navigation}) {
  return (
    <TouchableOpacity
      onPress={ () => navigation.navigate("Restaurant", {id: restaurant.id}) }>
      <View style={[styles.elevation, styles.container]}>
        <Image
          source={{ uri: restaurant.image_url }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{restaurant.rating}</Text>
            <Text style={styles.money}>{restaurant.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default withNavigation(RestaurantItem);



const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: "white",
    height: 100,
    alignSelf: "stretch",
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 75,
    height: 75,
    marginLeft: 10,
    borderRadius: 50
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },
  info: {
    flexDirection: "row"
  },
  rating: {
    marginRight: 20
  },
  money: {
    color: "gold"
  }
});