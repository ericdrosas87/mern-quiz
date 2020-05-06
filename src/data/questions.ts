import Unit1CommandLineQuestions from "./question_sets/unit-1-command-line-questions";
import Unit1HtmlBasicsQuestions from "./question_sets/unit-1-html-basics-questions";
import Unit1HtmlTagsQuestions from "./question_sets/unit-1-html-tags-questions";

export interface Questions {
  unit: string;
  topic: string;
  date: string;
  id: number;
  questions: any[];
}

const questions: Questions[] = [
  Unit1CommandLineQuestions,
  Unit1HtmlBasicsQuestions,
  Unit1HtmlTagsQuestions
];

function shuffle(a:any) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const getQuestions = () => questions;

export const getQuestion = (id: number) => {
  let q:any = questions.find(m => m.id === id);
  q.questions = shuffle(q.questions);
  q.questions.map((o:any, i:number, arr:any) => {
    arr[i].options = shuffle(arr[i].options);
  });
  return q;
};
