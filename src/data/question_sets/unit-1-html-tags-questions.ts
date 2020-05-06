let Unit1HtmlTagsQuestions = {
        unit: 'Unit 1',
        topic: 'HTML - Describe the Tags',
        date: 'May 6th, 2020',
        questions: [{
          question: "<a href='/'>Home</a>",
          options: [{
              text: "Anchor tag - used for creating links on a page",
              correctAnswer: true
            },
            {
              text: "Active tag - used for creating links on a page",
              correctAnswer: false
            },
            {
              text: "Achor tag - used for making text bold",
              correctAnswer: false
            },
            {
              text: "Archive tag - used for creating a download",
              correctAnswer: false
            }
          ],
          answerExplanation: "An anchor tag turns the text between the opening and closing tags a link, and the href attribute defines which page the link will navigate to."
          },
          {
            question: "<p>Cloudy with a chance of meatballs</p>",
            options: [
              {
                text: "Paragraph tag - used for adding text to a page",
                correctAnswer: true
              },
              {
                text: "Point tag - used for highlighting text on a page",
                correctAnswer: false
              },
              {
                text: "Paragraph tag - used for styling text on a page",
                correctAnswer: false
              },
              {
                text: "Point tag - used for adding text to a page",
                correctAnswer: false
              }
            ],
            answerExplanation: "You can add text to a page without a paragraph tag, but wrapping text in a tag allows you to add attributes, like a class or ID, that can be used for styling."
          },
          {
            question: "<div></div>",
            options: [
              {
                text: "Division tag - used for grouping other HTML components",
                correctAnswer: true
              },
              {
                text: "Division tag - used for performing division math",
                correctAnswer: false
              },
              {
                text: "Divide tag - use for creating a horizontal line on a page",
                correctAnswer: false
              },
              {
                text: "Dividend tag - used for producing more HTML tags",
                correctAnswer: false
              }
            ],
            answerExplanation: "Div tags don't do much on their own, but they typically group other HTML components together. Perhaps you might have a div tag that groups the HTML that creates a menu together, or a login form, etc."
          },
          {
            question: "<input type='text' value='username'>",
            options: [
              {
                text: "Input tag - used for taking input from a user",
                correctAnswer: true
              },
              {
                text: "Input tag - used for printing text to the user",
                correctAnswer: false
              },
              {
                text: "Input tag - used for showing a popup window to the user",
                correctAnswer: false
              },
              {
                text: "Input tag - used for communicating between two websites",
                correctAnswer: false
              }
            ],
            answerExplanation: "The input tag, as the name suggests is used for taking text input from the user. An example of an input tag might be a place to enter your username or password. Note the lack of closing tag - this is a void tag requiring no closing tag."
          },
          {
            question: "<html></html>",
            options: [
              {
                text: "HTML tag - placed at the beginning of your HTML code and at the end.",
                correctAnswer: true
              },
              {
                text: "HTML tag - used for creating links on a page",
                correctAnswer: false
              },
              {
                text: "HTML tag - used for communicating between two websites",
                correctAnswer: false
              },
              {
                text: "HTML tag - used for adding sound to a website",
                correctAnswer: false
              }
            ],
            answerExplanation: "In the most basic terms, an html tag is placed at the beginning of your HTML file and at the end. The browser reads these tags and can use them to determine how to structure your website."
          },
          {
            question: "<script></script>",
            options: [
              {
                text: "Script tag - used for adding Javascript to a page",
                correctAnswer: true
              },
              {
                text: "Script tag - used for adding text-to-speech to a page",
                correctAnswer: false
              },
              {
                text: "Script tag - used for denoting a quote on a page",
                correctAnswer: false
              },
              {
                text: "Script tag - not a real HTML tag",
                correctAnswer: false
              }
            ],
            answerExplanation: "The script tag is for when you want to add Javascript directly to an HTML file. The alternative, and more common usage, is to separate out your Javascript to a separate file."
          },
          {
            question: "<link type='text/css' href='style.css'>",
            options: [
              {
                text: "Link tag - used for importing a CSS file to a page",
                correctAnswer: true
              },
              {
                text: "Link tag - used for creating a hyperlink on a page",
                correctAnswer: false
              },
              {
                text: "Link tag - used for referencing outside source material used on a page",
                correctAnswer: true
              },
              {
                text: "Link tag - used for linking two HTML elements together",
                correctAnswer: false
              }
            ],
            answerExplanation: "The link tag is a void tag (requires no closing tag) that allows you to import an external CSS stylsheet into a webpage."
          }
        ],
        id: 2
      
};

export default Unit1HtmlTagsQuestions;