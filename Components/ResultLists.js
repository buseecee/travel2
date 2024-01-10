import {StyleSheet, Text ,View, FlatList} from "react-native";
import React from "react";

const ResultLists= ({title,results}) => {
    return (
        <View>
            <Text style={styles.titleStyle} >{title}</Text>
            <Text>Results: {results.length}</Text>
            <FlatList
            horizontal
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return <Text>{item.name}</Text>
            }} />
        </View>
    );
};

export default ResultLists;

const styles= StyleSheet({
    titleStyle: {
        fontSize:18,
        fontWeight: "bold",
    },
});