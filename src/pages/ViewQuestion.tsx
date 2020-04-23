import React, { useState } from 'react';
import { Questions, getQuestion } from '../data/questions';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  IonRadio,
  IonList,
  IonRadioGroup,
  IonListHeader
} from '@ionic/react';
import { newspaperOutline } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import './ViewQuestion.css';

interface ViewQuestionsProps extends RouteComponentProps<{ id: string; }> { }

const ViewQuestion: React.FC<ViewQuestionsProps> = ({ match }) => {

  const [questions, setQuestions] = useState<Questions>();

  useIonViewWillEnter(() => {
    const q = getQuestion(parseInt(match.params.id, 10));
    setQuestions(q);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Quiz Topics" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {questions ? (
          <>
            <IonItem>
              <IonIcon icon={newspaperOutline} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {questions.topic}
                  <span className="date">
                    <IonNote>{questions.date}</IonNote>
                  </span>
                </h2>
              </IonLabel>
            </IonItem>

            <div className="ion-padding"></div>
              
            
              {questions.questions.map(m => {
                return (
                <React.Fragment>
                  <IonList>
                    <IonRadioGroup>
                      <IonListHeader>
                        <IonLabel>{m.question}</IonLabel>
                      </IonListHeader>
                      <IonItem>
                        <IonLabel>{m.option1}</IonLabel>
                        <IonRadio slot="start" value={m.option1}></IonRadio>
                      </IonItem>
                      <IonItem>
                        <IonLabel>{m.option2}</IonLabel>
                        <IonRadio slot="start" value={m.option2}></IonRadio>
                      </IonItem>
                      <IonItem>
                        <IonLabel>{m.option3}</IonLabel>
                        <IonRadio slot="start" value={m.option3}></IonRadio>
                      </IonItem>
                      <IonItem>
                        <IonLabel>{m.option4}</IonLabel>
                        <IonRadio slot="start" value={m.option4}></IonRadio>
                      </IonItem>
                    </IonRadioGroup>
                    </IonList>
                    <div className="ion-padding"></div>
                </React.Fragment>
                
                )}
              )}
              
            
          </>
        ) : <div>Message not found</div>}
      </IonContent>
    </IonPage>
  );
};

export default ViewQuestion;
