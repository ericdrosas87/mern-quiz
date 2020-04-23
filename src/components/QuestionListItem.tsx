import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote,
  IonIcon
  } from '@ionic/react';
import { readerOutline } from 'ionicons/icons'
import { Questions } from '../data/questions';
import './QuestionListItem.css';

interface QuestionListItemProps {
  questions: Questions;
}

const QuestionListItem: React.FC<QuestionListItemProps> = ({ questions }) => {
  return (
    <IonItem routerLink={`/message/${questions.id}`} detail={false}>
      <IonIcon icon={readerOutline} color="white" slot="start"></IonIcon>
      <IonLabel className="ion-text-wrap">
        <h2>
          {questions.unit}
          <span className="date">
            <IonNote>{questions.date}</IonNote>
          </span>
        </h2>
        <h3>{questions.topic}</h3>
      </IonLabel>
    </IonItem>
  );
};

export default QuestionListItem;
