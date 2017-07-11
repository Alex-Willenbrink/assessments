Alex Willenbrink

## JavaScript Prep Work Assessment

Welcome to the VCS JavaScript Prep Work assessment. You'll be answering questions and writing code that will
assess your obtained knowledge regarding the JavaScript section from our Prep Work curriculum.

### Getting Started

1. Fork and clone this repo
1. `cd` into the project directory, add your name to the top of this README file. Something like: `Name: Jiggly Puff`
1. Commit and push and verify it works properly
1. You will need to follow the instructions below for the two major parts of the assessment: questions & code

### A note to remember

The entire assessment lasts for 90 minutes.

Both questions and the coding part are mandatory. They will both be assessed and taken into consideration when we calculate the final grade. Omit either at your own risk!

**We suggest spending 20 mins on questions and 70 mins on coding.**

**Grading**

- Questions: 30 points (see the value of each one in the `QUESTIONS.md file`)
- Code Challenge 1: 20 points
- Code Challenge 2: 30 points
- Code Challenge 3: 20 points

Total: 100 points

### Answering questions

The answering questions part is fairly straightforward. You will find in the repository a `QUESTIONS.md` file that contains the questions. They are numbered, starting with `1`.

Besides the `QUESTIONS.md` file, you will also find in the repository an `ANSWERS.md` file. Obviously, this one is blank by default and it is expected of you to write the answers to the questions in it. Write them by specifying the number of the question in front. Eg:

```
1. My awesome answer to question 1.
1. My awesome answer to question 2.
etc.
```

### Tackling the code part

#### Code Challenge 1 - JavaScript

A palindromic number reads the same both ways (eg: 11, 99, 101, etc). The largest palindrome made from the product of two 2-digit numbers is 9009 (9009 = 91 × 99). Find the largest palindrome made from the product of two 3-digit numbers.

Write your solution in the `code_challenge_1.js` file under `code/code_challenge_1` folder. You can always check your solution by running `node code_challenge_1.js` inside that folder.

#### Code Challenge 2 - jQuery & DOM manipulation

You will find an `index.html` file inside `code/code_challenge_2` folder. In that file, there is a reference in the `head` to `jQuery`, as well as a `div` with an id of `root` and a `script` at the bottom of the page which includes a `users` array.

Your tasks are:
1. Dynamically create a `table` inside the `#root` div (insert from jQuery)
2. Create a table header where you list Name, Age, Email and Phone (insert from jQuery)
3. Create entries in the table for every user in the `users` array. Display the correct info in the appropriate columns. (insert from jQuery)
4. Add a functionality to the table such as, when we click a column in the table, the entire row changes its background to red. When we click another column, the previous highlighted row returns back to normal and the new row gets a background color of red (only one row can be highlighted with red at a certain point of time).

Write your solution in the `index.html` file, in the `script` at the end of the body. You cannot modify anything else in that file. You can always check your solution by running `index.html` in the browser.

#### Code Challenge 3 - Node

**Prep:**

1. `cd` into the `code/code_challenge_3/` folder and run `npm i`

This will install `express` which you will now use to complete this coding challenge. Inside the folder, there is a `server.js` file.

Your tasks are:
1. Spin up an `express` app that listens at port `3000`
2. When we access the `/data` route inside the application, you must read the contents of the `data.json` file inside the folder and send it back to the user
3. For all the other routes in the app, respond with the string `Hello!`

Write your solution in the `server.js` file. You can always check your app by running `node server.js` or `npm start` in the terminal.

**Good luck!**

### NOTE

**This repo is copyrighted material for your private use only and not to be shared outside of Viking Code School.**
