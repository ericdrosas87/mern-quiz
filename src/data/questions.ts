export interface Questions {
  unit: string;
  topic: string;
  date: string;
  id: number;
  questions: any[];
}

const questions: Questions[] = [
  {
    unit: 'Unit 1',
    topic: 'HTML & CSS Basics',
    date: 'May 4th, 2020',
    questions: [{
      question: "What does HTML stand for?",
      option1: "Heuristic text for marking linguistics",
      option2: "Hyper-typed markup language",
      option3: "Hyper-text makeshift linguistics",
      option4: "Hyper-text markup language"
      },
      {
        question: "HTML is what type of computer language?",
        option1: "Programming language",
        option2: "Styling language",
        option3: "Web language",
        option4: "Markup language"
      }
    ],
    id: 0
  },
  {
    unit: 'Unit 2',
    topic: 'CSS & Bootstrap',
    date: 'May 11th, 2020',
    questions: [],
    id: 1
  },
  {
    unit: 'Unit 3',
    topic: 'Intro to Javascript',
    date: 'May 18th, 2020',
    questions: [],
    id: 2

  }
];

export const getQuestions = () => questions;

export const getQuestion = (id: number) => questions.find(m => m.id === id);
