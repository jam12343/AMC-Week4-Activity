import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.textBold}>Miranda <Text style={styles.textItalic}>Jovy</Text></Text>
        </View>
    </ScrollView>
  );
 
};
const styles = StyleSheet.create({
  container: {
      borderWidth: 9,
      padding: 20,
      backgroundColor: "#9DC08B",
 
  },
  textBold:{
      fontSize: 20,
      textAlign: "center",
      fontWeight: 'bold',
  },
  textItalic:{
      fontStyle: "italic"
  }
 
  })

export default App;