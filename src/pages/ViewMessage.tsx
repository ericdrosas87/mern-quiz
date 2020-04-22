import React, { useState } from 'react';
import { Message, getMessage } from '../data/messages';
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
import './ViewMessage.css';

interface ViewMessageProps extends RouteComponentProps<{ id: string; }> { }

const ViewMessage: React.FC<ViewMessageProps> = ({ match }) => {

  const [message, setMessage] = useState<Message>();

  useIonViewWillEnter(() => {
    const msg = getMessage(parseInt(match.params.id, 10));
    setMessage(msg);
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
        {message ? (
          <>
            <IonItem>
              <IonIcon icon={newspaperOutline} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {message.subject}
                  <span className="date">
                    <IonNote>{message.date}</IonNote>
                  </span>
                </h2>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              
              {message.questions.map(m => {
                return (
                <React.Fragment>
                  <IonList>
                    <IonRadioGroup>
                      <IonListHeader>{m.question}</IonListHeader>
                    </IonRadioGroup>
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
                  </IonList>
                </React.Fragment>
                )}
              )}
            </div>
          </>
        ) : <div>Message not found</div>}
      </IonContent>
    </IonPage>
  );
};

export default ViewMessage;
