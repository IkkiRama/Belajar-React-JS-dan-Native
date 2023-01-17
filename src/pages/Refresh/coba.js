import {
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const CobaRefresh = () => {
  const [isRefres, setIsRefres] = useState(false);
  let [DATA, setDATA] = useState([
    {
      title: "Item 1",
      data: ["Item 1-1", "Item 1-2", "Item 1-3", "Item 1-4"],
    },
  ]);

  return (
    <SectionList
      sections={DATA}
      style={styles.container}
      keyExtractor={(data, i) => i}
      renderItem={({ item }) => <Text style={styles.childText}>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={isRefres}
          onRefresh={() => {
            setIsRefres(true);
            setDATA([
              ...DATA,
              {
                title: `Item ${DATA.length + 1}`,
                data: [
                  `Item ${DATA.length + 1}-1`,
                  `Item ${DATA.length + 1}-2`,
                  `Item ${DATA.length + 1}-3`,
                  `Item ${DATA.length + 1}-4`,
                ],
              },
            ]);
            setIsRefres(false);
          }}
          colors={["#1c6ed9"]}
        ></RefreshControl>
      }
    ></SectionList>
  );
};

export default CobaRefresh;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  item: {
    flex: 1,
    paddingVertical: 20,
    margin: 10,
    alignItems: "center",
    backgroundColor: "#1c6ed9",
  },

  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },

  childContainer: {
    margin: 10,
  },
  childText: {
    margin: 10,
    fontSize: 20,
    fontWeight: "600",
  },
});
