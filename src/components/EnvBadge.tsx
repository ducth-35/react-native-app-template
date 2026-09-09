import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Config from 'react-native-config';

export const EnvBadge: React.FC = () => {
  const env = Config.APP_ENV ?? 'unknown';

  return (
    <Text
      style={[
        styles.badge,
        env === 'prod' ? styles.prod : styles.dev,
      ]}
      pointerEvents="none">
      {env.toUpperCase()}
    </Text>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 44,
    right: 8,
    zIndex: 999,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    overflow: 'hidden',
  },
  dev: {
    backgroundColor: '#e67e22',
  },
  prod: {
    backgroundColor: '#27ae60',
  },
});
