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
    topic: 'HTML',
    date: 'May 4th, 2020',
    questions: [{
      question: "What does HTML stand for?",
      options: [{
          text: "Heuristic text for marking linguistics",
          correctAnswer: false
        },
        {
          text: "Hyper-typed markup language",
          correctAnswer: false
        },
        {
          text: "Hyper-text makeshift linguistics",
          correctAnswer: false
        },
        {
          text: "Hyper-text markup language",
          correctAnswer: true
        }
      ]},
      {
        question: "HTML is what type of computer language?",
        options: [
          {
            text: "Programming language",
            correctAnswer: false
          },
          {
            text: "Styling language",
            correctAnswer: false
          },
          {
            text: "Web language",
            correctAnswer: false
          },
          {
            text: "Markup language",
            correctAnswer: true
          }
        ]
      }
    ],
    id: 0
  },
  {
    unit: 'Unit 1',
    topic: 'CSS',
    date: 'May 6th, 2020',
    questions: [],
    id: 1
  },
  {
    unit: 'Unit 1',
    topic: 'HTML & CSS',
    date: 'May 6th, 2020',
    questions: [],
    id: 2

  },
  {
    unit: 'Unit 2',
    topic: 'Git/Github',
    date: 'May 9th, 2020',
    questions: [],
    id: 3

  },
];

export const getQuestions = () => questions;

export const getQuestion = (id: number) => questions.find(m => m.id === id);
