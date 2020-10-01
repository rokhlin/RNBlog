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

const IndexScreen = ({navigation}) => {
  const {state, addBlogPost} = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
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
    <Text>{item.title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({});

export default IndexScreen;
