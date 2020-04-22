import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote,
  IonIcon
  } from '@ionic/react';
import { readerOutline } from 'ionicons/icons'
import { Message } from '../data/messages';
import './MessageListItem.css';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <IonIcon icon={readerOutline} color="white" slot="start"></IonIcon>
      <IonLabel className="ion-text-wrap">
        <h2>
          {message.fromName}
          <span className="date">
            <IonNote>{message.date}</IonNote>
          </span>
        </h2>
        <h3>{message.subject}</h3>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
