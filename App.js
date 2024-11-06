import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, FlatList, TextInput } from 'react-native';
import Products from './Components/Products';
import Products_data from './patistore-items.json';

const App = () => {

  const [text, onChangeText] = React.useState('Ara...');

  const renderPati = ({item}) => <Products pati={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>MyAppyStore</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={onChangeText}
        placeholder="Ara..."
      />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={Products_data}
        renderItem={renderPati}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'purple',
    padding: 5,
  },
  textInput: {
    height: 40,
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 5,  
  },
});

export default App;
