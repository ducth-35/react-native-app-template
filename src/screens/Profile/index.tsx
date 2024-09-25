import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetOneTodo} from '../../hooks/todos/useGetOne';

export const ProfileScreen: React.FC = () => {
  const {data: todoData, isLoading: isLoadingGetTodo} = useGetOneTodo('1');

  return (
    <View style={styles.container}>
      {isLoadingGetTodo && <Text>fetching...</Text>}
      <Text>{JSON.stringify(todoData)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
});
