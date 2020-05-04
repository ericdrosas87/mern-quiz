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
    topic: 'The Command Line',
    date: 'May 4th, 2020',
    questions: [{
      question: "What is the command to change into another directory?",
      options: [{
          text: "chdir",
          correctAnswer: false
        },
        {
          text: "dir",
          correctAnswer: false
        },
        {
          text: "dc",
          correctAnswer: false
        },
        {
          text: "cd",
          correctAnswer: true
        }
      ],
      answerExplanation: "'cd' stands for 'change directory'"
      },
      {
        question: "How do you go back to a previous directory?",
        options: [
          {
            text: "<cd",
            correctAnswer: false
          },
          {
            text: "bkdir",
            correctAnswer: false
          },
          {
            text: "..cd",
            correctAnswer: false
          },
          {
            text: "cd ..",
            correctAnswer: true
          }
        ],
        answerExplanation: "Depending on which command line program you use, you may need to add space between 'cd' and '..' or not."
      },
      {
        question: "Say you are in a directory, and there is another directory called 'html', how do you change into this directory?",
        options: [
          {
            text: "cd html",
            correctAnswer: true
          },
          {
            text: "cd > html",
            correctAnswer: false
          },
          {
            text: "chdir html",
            correctAnswer: false
          },
          {
            text: "cd 'html'",
            correctAnswer: false
          }
        ],
        answerExplanation: "You only need quotes around directory name if there are spaces in the name. Best practice is to avoid spaces in your folder names - instead use underscores to separate words, such as 'html_files'"
      },
      {
        question: "What is the command to make a directory called 'images'?",
        options: [
          {
            text: "mkdir images",
            correctAnswer: true
          },
          {
            text: "cd mk images",
            correctAnswer: false
          },
          {
            text: "cd make images",
            correctAnswer: false
          },
          {
            text: "makedir images",
            correctAnswer: false
          }
        ],
        answerExplanation: "'mkdir' stands for 'make directory', and is proceeded by the name of the folder to-be created."
      },
      {
        question: "What is the command to list all of the files in the current directory?",
        options: [
          {
            text: "ls",
            correctAnswer: true
          },
          {
            text: "list",
            correctAnswer: false
          },
          {
            text: "files",
            correctAnswer: false
          },
          {
            text: "show all",
            correctAnswer: false
          }
        ],
        answerExplanation: "'ls' is short for 'list'"
      },
      {
        question: "What is the argument that we pass the 'ls' command to show all folders/files?",
        options: [
          {
            text: "ls -l",
            correctAnswer: true
          },
          {
            text: "ls -v",
            correctAnswer: false
          },
          {
            text: "ls l",
            correctAnswer: false
          },
          {
            text: "ls --vertical",
            correctAnswer: false
          }
        ],
        answerExplanation: "The '-l' that proceeds the 'ls' command is called an argument, and the full command 'ls -l' shows all files/folders in a directory."
      },
      {
        question: "What is the argument that we pass the 'ls' command to show hidden files/folders?",
        options: [
          {
            text: "ls -h",
            correctAnswer: false
          },
          {
            text: "ls --hidden",
            correctAnswer: false
          },
          {
            text: "ls --show-hidden",
            correctAnswer: false
          },
          {
            text: "ls -a",
            correctAnswer: true
          }
        ],
        answerExplanation: "The '-a' that proceeds the 'ls' command is called an argument, and the full command 'ls -a' shows all files/folders, even hidden ones."
      }
    ],
    id: 0
  },
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
      ],
      answerExplanation: "The other options are fictitious terms."
      },
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
        ],
        answerExplanation: "If it helps, think of the HTML document(web page) as a sheet of paper and HTML is a black sharpie. You can draw things on the paper with the sharpie and perhaps provide some simple styling, but most styling will be applied via CSS - a styling language."
      },
      {
        question: "HTML is mostly responsible for providing what?",
        options: [
          {
            text: "What content appears on the page",
            correctAnswer: true
          },
          {
            text: "How the page is styled",
            correctAnswer: false
          },
          {
            text: "Interactive functionality",
            correctAnswer: false
          },
          {
            text: "Nothing of value",
            correctAnswer: false
          }
        ],
        answerExplanation: "There is some gray area here, but to keep things simple just know that HTML provides what appears on the screen, CSS provides the look, and Javascript provides the how it functions."
      },
      {
        question: "A single piece of HTML content is surrounded by what special characters?",
        options: [
          {
            text: "Carrots: <div></div>",
            correctAnswer: true
          },
          {
            text: "Square brackets: [div][/div]",
            correctAnswer: false
          },
          {
            text: "Parenthesis: (div)(/div)",
            correctAnswer: false
          },
          {
            text: "Curly braces: {div}{/div}",
            correctAnswer: false
          }
        ],
        answerExplanation: "Left-pointed carrot on the left, right pointed carrot on the right of the tag name."
      },
      {
        question: "Most HTML tags are terminated with what special character?",
        options: [
          {
            text: "Forward slash: <div></div>",
            correctAnswer: true
          },
          {
            text: "Back slash: <div><\\div>",
            correctAnswer: false
          },
          {
            text: "Pipe: <div><|div>",
            correctAnswer: false
          },
          {
            text: "Semi-colon: <div><;div>",
            correctAnswer: false
          }
        ],
        answerExplanation: "The terminating backslash denotes the closing tag and goes before the tag name within the carrots."
      },
      {
        question: "HTML tags that do not require a closing tag are called...",
        options: [
          {
            text: "Void tags",
            correctAnswer: true
          },
          {
            text: "EZ tags",
            correctAnswer: false
          },
          {
            text: "Short tags",
            correctAnswer: false
          },
          {
            text: "Self-closing tags",
            correctAnswer: false
          }
        ],
        answerExplanation: "Often a backslash will still appear, but at the end of the tag right before the right-pointed carrot."
      },
      {
        question: "Why can we write void tags without a closing tag?",
        options: [
          {
            text: "The content that goes between the void tags is optional",
            correctAnswer: false
          },
          {
            text: "The void tag is smart enough to close itself when there is no content between the opening and closing tag",
            correctAnswer: false
          },
          {
            text: "There is never content that would go between a void tag's opening/closing tags",
            correctAnswer: true
          },
          {
            text: "There is no such thing as a \"void tag\"",
            correctAnswer: false
          }
        ],
        answerExplanation: "Examples of void tags include img, link, input, meta, etc. and there is never a separate closing tag for these void tags."
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
