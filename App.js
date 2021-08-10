
import React from 'react';
import { SafeAreaView ,StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }
                        
  componentDidMount() {                           // compnent did mount 
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson         // data - dataSource
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }

// now complete your view content

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <View style={styles.listItem}>
              <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/1256/1256650.png' }} style={styles.imageItem}  />
              <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                <Text>{item.email}</Text>
                <Text>{item.company.name}</Text>
              </View>
              <TouchableOpacity onPress={() => Alert.alert('Phone No :'+ item.phone)}  style={styles.button}>   
               <Text style={{ color: "green" }}>Call</Text>
              </TouchableOpacity>
            </View>
          }

          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }


}

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
