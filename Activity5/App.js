import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, } from 'react-native';


const App = () => {
  const morningActivities = ['Taking bath', 'Breakfast', 'Toothbrush', 'Social media', 'Play games','Sleep', 'Watch Movies', 'Play Computer', 'Grocery'];
  const afternoonActivities = ['Taking bath', 'Breakfast', 'Toothbrush', 'Social media', 'Play games','Feed the dog','Watch Movies','Play Games', 'Make Coffe', 'Play Computer'];
  const eveningActivities = ['Taking bath', 'Dinner', 'Toothbrush','Play Games', 'Relax', 'Watch Movies','Make Snack', 'Study', 'Sleep'];

  const handlePress = (activity) => {
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.sectionHeader}>MORNING</Text>
        <FlatList
          data={morningActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlessPress(item)}>
              <View style={styles.itemContainer}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.sectionHeader}>AFTERNOON</Text>
        <FlatList
          data={afternoonActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={styles.itemContainer}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.sectionHeader}>EVENING</Text>
        <FlatList
          data={eveningActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={styles.itemContainer}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#A6F1E0",
  },
  container: {
    borderWidth: 1,
    padding: 20,
    backgroundColor: "A6F1E0",
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
  },
  textBold: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
  },
  textItalic: {
    fontStyle: "italic",
  },
  itemContainer: {
    borderWidth: 3,
    borderColor: "#A94A4A",
    marginBottom: 10,
    padding: 10,
  },
});

export default App;