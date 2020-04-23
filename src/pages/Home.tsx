import QuestionListItem from '../components/QuestionListItem';
import React, { useState } from 'react';
import { Questions, getQuestions } from '../data/questions';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar, 
  useIonViewWillEnter,
  IonIcon
} from '@ionic/react';
import { gameControllerOutline } from 'ionicons/icons'
import './Home.css';

const Home: React.FC = () => {

  const [questions, setQuestion] = useState<Questions[]>([]);

  useIonViewWillEnter(() => {
    const questions = getQuestions();
    setQuestion(questions);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quiz Topics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Quiz Topics
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {questions.map(m => <QuestionListItem key={m.id} questions={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
