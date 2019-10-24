import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function LoginIcon(props) {
  return (
    <SimpleLineIcons
      name={login}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.loginIconSelected : Colors.loginIconDefault}
    />
  );
}