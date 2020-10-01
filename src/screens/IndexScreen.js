import React, {useContext} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Context, Provider} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const IndexScreen = ({navigation}) => {
  const {state, addBlogPost} = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={listItem}
      />
      <Button title="Add post" onPress={() => addBlogPost()} />
      <Button
        title="Go To Show Screen"
        onPress={() => navigation.navigate('Shows')}
      />
    </View>
  );
};

const listItem = ({item}) => (
  <TouchableOpacity>
      <View style={styles.row}>
          <Text>{item.title}</Text>
          <Icon name="trash-o" style={styles.icon}/>
      </View>


  </TouchableOpacity>
);
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 10,
    },
    icon: {
        fontSize: 20,
    }
});

export default IndexScreen;
