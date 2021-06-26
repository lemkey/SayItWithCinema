import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';

export default function SearchBar() {
  const [subject, setSubject] = useState(null)
  return (
    <View style={styles.container}>
    <Text style={styles.title}> Search By Topic! </Text>
      <TextInput style={{flex: 1}}
          onSubmitEditing={({ nativeEvent}) => {
              setSubject(nativeEvent.text)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  title: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',