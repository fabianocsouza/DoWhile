import React from 'react';

import { Image } from 'react-native';

import { styles } from './styles';

export function UserPhoto(){
  return (
    <Image 
      source={{uri: 'https://github.com/fabianocsouza.png'}}
      style={styles.avatar}
    />
  );
}