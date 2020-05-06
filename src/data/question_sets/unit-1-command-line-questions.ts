let Unit1CommandLineQuestions = {
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
}

export default Unit1CommandLineQuestions ;