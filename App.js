import React, { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }) =>
          <View style={styles.listItem}>
            <Image source={{ uri: 'https://img-premium.flaticon.com/png/512/1165/premium/1165674.png?token=exp=1628513272~hmac=a94f95966a5725122c52ae188e430cf1' }} style={styles.imageItem} />
            <View style={{ alignItems: "center", flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text>{item.email}</Text>
              <Text>{item.company.name}</Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert('Phone No :' + item.phone)} style={styles.button}>
              <Text style={{ color: "green" }}>Call</Text>
            </TouchableOpacity>
          </View>
        }

        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  imageItem: {
    width: 60,
    height: 60,
    borderRadius: 30

  },
  button: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center"
  }

});
