import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSampleStore} from '../../store/useSampleStore';
import {useNavigation} from '@react-navigation/native';
import {_routes} from '../../navigators';
export const HomeScreen: React.FC = () => {
  const {navigate} = useNavigation<any>();
  const {count, actions: sampleActions} = useSampleStore(state => state);
  return (
    <View style={styles.container}>
      <Button title="decrease" onPress={() => sampleActions.decrease()} />
      <Text>{count}</Text>
      <Button title="increase" onPress={() => sampleActions.increase()} />
      <View style={{marginTop: 100}}>
        <Button
          title="Go to Profile screen"
          onPress={() => navigate(_routes.profile_page)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
});
