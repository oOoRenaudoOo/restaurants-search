import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryItem from './src/components/CategoryItem';

import Header from './src/components/Header';
import Search from './src/components/Search';



export default function App() {

  const [term, setTerm] = useState("");

  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/burger.png")
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png")
    },
    {
      name: "Dessert",
      imageUrl: require("./src/assets/images/cake.png")
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/images/smoothies.png")
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/images/steak.png")
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png")
    }
  ];
 

  return (
    <View>
      <Header />
      <Search />
        <FlatList
          data={commonCategories}
          renderItem={({ item, index }) => {
            return (
              <CategoryItem
                name={item.name}
                imageUrl={item.imageUrl}
                index={index}
                active={item.name === term}
                handlePress={() => setTerm(item.name)}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category) => category.name}
        />

      {/* <CategoryItem
        name="Burger"
        imageUrl={require("./src/assets/images/burger.png")} /> */}
     
      <StatusBar style="auto" />
    </View>
  );
};





const styles = StyleSheet.create({});
