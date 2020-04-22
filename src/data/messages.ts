export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  questions: any[];
}

const messages: Message[] = [
  {
    fromName: 'Unit 1',
    subject: 'HTML & CSS Basics',
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
    fromName: 'Unit 2',
    subject: 'CSS & Bootstrap',
    date: 'May 11th, 2020',
    questions: [],
    id: 1
  },
  {
    fromName: 'Unit 3',
    subject: 'Intro to Javascript',
    date: 'May 18th, 2020',
    questions: [],
    id: 2

  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
