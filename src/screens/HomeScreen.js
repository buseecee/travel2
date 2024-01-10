import React, { useState } from "react";
import SearchBar from "../../Components/SearchBar";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import useResults from "../../hooks/useResults";
import ResultLists from "../../Components/ResultLists";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [yelpApi, results, errorMessage] = useResults();

  const filterResultsByLocation = (location) => {
    return results.filter((result) => {
      return result.location === location;
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.exploreText}>Let's explore the world!</Text>
        <Image
          source={require("../../assets/icons/explorer.png")}
          style={styles.icon}
        />
      </View>
      <View>
        <View style={styles.categories}>
          <Text style={styles.categoriesText}>Categories:</Text>
        </View>
      </View>
      <View>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={yelpApi}
        />
        {errorMessage ? <Text>{ }errorMessage</Text> : null}
        <Text>We have found {results.length} results</Text>
        <ResultLists results={filterResultsByLocation("Istanbul")} title="Istanbul" />
        <ResultLists />
        <ResultLists />
        <Text>{term}</Text>
      </View>
      <View style={styles.exploreTypeGeneralView}>
        <View style={styles.exploreTypeRow}>
          <View style={styles.exploreTypeView}>
            <Image
              source={require("../../assets/icons/sun.png")}
              style={styles.icon}
            />
            <Text style={styles.imgText}>Summer</Text>
          </View>
          <View style={styles.exploreTypeView}>
            <Image
              source={require("../../assets/icons/winter.png")}
              style={styles.icon}
            />
            <Text style={styles.imgText}>Winter</Text>
          </View>
          <View style={styles.exploreTypeView}>
            <Image
              source={require("../../assets/icons/culture.png")}
              style={styles.icon}
            />
            <Text style={styles.imgText}>Arts&Culture</Text>
          </View>
        </View>
        <View style={styles.exploreTypeRow}>
          <View style={styles.exploreTypeView}>
            <Image
              source={require("../../assets/icons/nature.png")}
              style={styles.icon}
            />
            <Text style={styles.imgText}>Sport&Nature</Text>
          </View>
          <View style={styles.exploreTypeView}>
            <Image
              source={require("../../assets/icons/fun.png")}
              style={styles.icon}
            />
            <Text style={styles.imgText}>Adventure&Fun</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAF0E6", // Light blue color
  },
  headerView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-evenly",
  },
  exploreText: {
    fontSize: 28,
    width: 200,
    fontWeight: "bold",
    color: "#191970",
  },
  categories: {
    marginTop: 50,
    marginLeft: 25,
    flexDirection: "row",
  },
  categoriesText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  exploreTypeView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  exploreTypeRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 40, // Adjust the value to increase or decrease the space
  },
  exploreTypeGeneralView: {
    marginTop: 40,
  },
  icon: {
    width: 50,
    height: 50,
  },
  imgText: {
    fontWeight: "bold",
  },
});

export default HomeScreen;
