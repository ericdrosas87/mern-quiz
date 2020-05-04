import React, { useState, useCallback, useEffect } from 'react';
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

let slides:any;
let slideIndex:number = 0;

const ViewQuestion: React.FC<ViewQuestionsProps> = ({ match }) => {

  const [questions, setQuestions] = useState<Questions>();
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);

  useIonViewWillEnter(() => {
    const q = getQuestion(parseInt(match.params.id, 10));
    setQuestions(q);
  });

  useEffect(() => {
    slides = document.getElementById("slides");
  });

  const checkAnswer = useCallback((o:any, i:number) => {
    if(o.correctAnswer) {
      setShowCorrect(() => true);
      slideIndex = i;
    } else {
      setShowIncorrect(() => true);
    }
  }, []);

  const resetCorrect = useCallback(() => {
    setShowCorrect(() => false);
    slides.slideNext(500);
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
              
            <IonSlides pager={true} options={slideOpts} style={{width:"100%"}} id="slides">
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
                              <IonRadio value={o.text} onClick={() => checkAnswer(o, i)}></IonRadio>
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
                message={"Correct! " + questions.questions[slideIndex].answerExplanation}
                duration={6000}
                animated={true}
                color="success"
              />
              <IonToast
                isOpen={showIncorrect}
                onDidDismiss={() => resetIncorrect()}
                message="Sorry, that is incorrect, please try again!"
                duration={6000}
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
