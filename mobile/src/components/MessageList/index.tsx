import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';

import { styles } from './styles';

const message = {
  id: '1',
  text: 'message text',
  user: {
    name: 'Ana',
    avatar_url: 'https://randomuser.me/api/portraits/women/79.jpg'
  }
}

export function MessageList(){
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message  data={message} />
      <Message data={message} />
      
    </ScrollView>
  );
}