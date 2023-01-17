import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

const Refresh = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      nama: "Item 1",
    },
    {
      id: 2,
      nama: "Item 2",
    },
    {
      id: 3,
      nama: "Item 3",
    },
    {
      id: 4,
      nama: "Item 4",
    },
    {
      id: 5,
      nama: "Item 5",
    },
    {
      id: 6,
      nama: "Item 6",
    },
    {
      id: 7,
      nama: "Item 7",
    },
    {
      id: 8,
      nama: "Item 8",
    },
    {
      id: 9,
      nama: "Item 9",
    },
  ]);

  const [isRefres, setIsRefres] = useState(false);

  const DATA = [
    {
      title: "Item 1",
      data: ["Item 1-1", "Item 1-2", "Item 1-3", "Item 1-4"],
    },
    {
      title: "Item 2",
      data: ["Item 2-1", "Item 2-2", "Item 2-3", "Item 2-4"],
    },
    {
      title: "Item 3",
      data: ["Item 3-1", "Item 3-2", "Item 3-3", "Item 3-4"],
    },
    {
      title: "Item 4",
      data: ["Item 4-1", "Item 4-2", "Item 4-3", "Item 4-4"],
    },
  ];

  return (
    <SectionList
      sections={DATA}
      style={styles.container}
      keyExtractor={(user, i) => i}
      renderItem={({ item }) => <Text style={styles.childText}>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    ></SectionList>

    // <FlatList
    //   style={styles.container}
    //   numColumns={2}
    //   // horizontal
    //   // inverted
    //   keyExtractor={(user, i) => i}
    //   data={users}
    // renderItem={({ item }) => (
    //   <View
    //     style={styles.item}
    //     // key={(item, i) => i}
    //   >
    //     <Text style={styles.text}>{item.nama}</Text>
    //   </View>
    // )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={isRefres}
    //       onRefresh={() => {
    //         setIsRefres(true);
    //         setUsers([{ id: 5, nama: "Item 5 Bitch" }, ...users]);
    //         setIsRefres(false);
    //       }}
    //       colors={["#1c6ed9"]}
    //     />
    //   }
    // ></FlatList>

    // <ScrollView
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={isRefres}
    //       onRefresh={() => {
    //         setIsRefres(true);
    //         setUsers([{ id: 5, nama: "Item 5 Bitch" }, ...users]);
    //         setIsRefres(false);
    //       }}
    //       colors={["#1c6ed9"]}
    //     />
    //   }
    //   style={styles.container}
    // >
    //   {users.map(({ id, nama }) => (
    //     <View style={styles.item} key={id}>
    //       <Text style={styles.text}>{nama}</Text>
    //     </View>
    //   ))}
    // </ScrollView>
  );
};

export default Refresh;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    // flexDirection: "row",
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
