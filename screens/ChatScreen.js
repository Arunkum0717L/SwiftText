import React, { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { db, auth } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.id,
          text: doc.data().text,
          createdAt: doc.data().createdAt.toDate(),
          user: doc.data().user
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const onSend = async (newMessages = []) => {
    const msg = newMessages[0];
    setMessages(previous => GiftedChat.append(previous, msg));
    await addDoc(collection(db, 'chats'), {
      ...msg,
      createdAt: new Date()
    });
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: auth.currentUser.email,
        name: auth.currentUser.email
      }}
    />
  );
}

