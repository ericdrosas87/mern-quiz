import React, { useState, useCallback, useContext } from 'react';
import { Questions, getQuestion } from '../data/questions';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonSlides,
  IonSlide,
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
  IonListHeader,
  IonToast
} from '@ionic/react';
import { newspaperOutline } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import './ViewQuestion.css';

interface ViewQuestionsProps extends RouteComponentProps<{ id: string; }> { }

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const ViewQuestion: React.FC<ViewQuestionsProps> = ({ match }) => {

  const [questions, setQuestions] = useState<Questions>();
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);

  useIonViewWillEnter(() => {
    const q = getQuestion(parseInt(match.params.id, 10));
    setQuestions(q);
  });

  useContext(() => {

  })

  function shuffle(a:any) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const checkAnswer = useCallback((o:any) => {
    if(o.correctAnswer) {
      setShowCorrect(() => true);
    } else {
      setShowIncorrect(() => true);
    }
  }, []);

  const resetCorrect = useCallback(() => {
    setShowCorrect(() => false);
  }, []);

  const resetIncorrect = useCallback(() => {
    setShowIncorrect(() => false);
  }, []);

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
              
            <IonSlides pager={true} options={slideOpts} style={{width:"100%"}}>
              {questions.questions.map((m:any, i:number) => {
                return (
                  <IonSlide key={i}>
                      <IonList class="padding-left padding-right">
                      <IonRadioGroup>
                        <IonListHeader>
                          <IonLabel>{m.question}</IonLabel>
                        </IonListHeader>

                        {m.options.map((o:any, i2:number) => {
                          return (
                            <IonItem key={i2} text-wrap lines="full">
                              <IonLabel text-wrap className="ion-text-wrap">{o.text}</IonLabel>
                              <IonRadio value={o.text} onClick={() => checkAnswer(o)}></IonRadio>
                            </IonItem>
                          )}
                        )}
                      </IonRadioGroup>
                      </IonList>
                    </IonSlide>
                
                )}
              )}
              </IonSlides>
              <IonToast
                isOpen={showCorrect}
                onDidDismiss={() => resetCorrect()}
                message="Correct!"
                duration={2000}
                animated={true}
                color="success"
              />
              <IonToast
                isOpen={showIncorrect}
                onDidDismiss={() => resetIncorrect()}
                message="Sorry, that is incorrect, please try again!"
                duration={2000}
                animated={true}
                color="warning"
              />
          </>
        ) : <div>Message not found</div>}
      </IonContent>
    </IonPage>
  );
};

export default ViewQuestion;
