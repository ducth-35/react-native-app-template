import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useCreateTodo, useGetOneTodo} from '../../features/todos/hooks';
import {useGetOneUser, useUpdateUser} from '../../features/user/hooks';
import type {ApiError} from '../../lib/api/types';

export const ProfileScreen: React.FC = () => {
  const {
    data: todo,
    isLoading: isLoadingGetTodo,
    isError: isGetTodoError,
    error: getTodoError,
  } = useGetOneTodo('1');
  const createTodo = useCreateTodo();

  const {
    data: user,
    isLoading: isLoadingGetUser,
    isError: isGetUserError,
    error: getUserError,
  } = useGetOneUser('1');
  const updateUser = useUpdateUser('1');

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Todo (features/todos)</Text>
      {isLoadingGetTodo && <Text>fetching...</Text>}
      {isGetTodoError && (
        <Text style={styles.error}>
          Error: {(getTodoError as ApiError).message}
        </Text>
      )}
      {todo && <Text>{JSON.stringify(todo)}</Text>}

      <View style={styles.mutationSection}>
        <Button
          title={createTodo.isPending ? 'Creating...' : 'Create todo'}
          disabled={createTodo.isPending}
          onPress={() => createTodo.mutate({title: 'New todo', userId: 1})}
        />
        {createTodo.isError && (
          <Text style={styles.error}>
            Create failed: {(createTodo.error as ApiError).message}
          </Text>
        )}
        {createTodo.isSuccess && (
          <Text>Created todo #{createTodo.data.data.id}</Text>
        )}
      </View>

      <Text style={styles.sectionTitle}>User (features/user)</Text>
      {isLoadingGetUser && <Text>fetching...</Text>}
      {isGetUserError && (
        <Text style={styles.error}>
          Error: {(getUserError as ApiError).message}
        </Text>
      )}
      {user && <Text>{JSON.stringify(user)}</Text>}

      <View style={styles.mutationSection}>
        <Button
          title={updateUser.isPending ? 'Updating...' : 'Update user name'}
          disabled={updateUser.isPending}
          onPress={() => updateUser.mutate({name: 'Updated Name'})}
        />
        {updateUser.isError && (
          <Text style={styles.error}>
            Update failed: {(updateUser.error as ApiError).message}
          </Text>
        )}
        {updateUser.isSuccess && (
          <Text>Updated: {updateUser.data.data.name}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  mutationSection: {
    marginTop: 12,
  },
  error: {
    color: 'red',
  },
});
