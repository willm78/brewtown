import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const tabBarIcon = name => ({ tintColor }) => (
  <MaterialIcons
    {...this.props}
    name={name}
    color={tintColor}
    size={24}
  />
);

export default tabBarIcon;