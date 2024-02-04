# JSON Surfer!

We have been assigned to develop an application in React, designed to read and navigate through JSON files. This application will enable us to interact with various keys within the file and feature a dynamic search that can scan the entire file. To achieve this, we must display the JSON format with proper indentation and style, highlight relevant keys, and render the JSON data along with its key-value pairs efficiently.

## Table of Contents 

- [Stack](#stack)
- [Production](#production)
- [Installation](#installation)
- [Functionality / Code Decisions](#functionality)
- [Known Bugs](#known-bugs)
- [To Improve](#to-improve)
- [Author](#author)


## Stack 

<img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge"><img src="https://img.shields.io/badge/-Vite-747bff?style=for-the-badge&logo=vite&logoColor=white">

## Production

## Installation 

If, however, you prefer to install the application locally on your computer, please feel free to follow the steps outlined below. These will guide you through cloning the repository onto your machine and setting up the app to run.

```sh
git clone https://github.com/Dave86dev/jsonsurfer
cd jsonsurfer
npm i
npm run dev
```

## Functionality

The application is capable of rendering JSON files with a well-indented and correct structure. Moreover, it pays attention to details such as not placing a comma on the last element of both arrays and objects. 

It also allows clicking on keys with 'false' or 'null' values, displaying these to the user, as well as hiding '[object Object]' values in certain paths. Notably, we can only click on keys that are objects, avoiding the possibility of clicking on key-value pairs where the value is an array. 

As for the search system, it operates independently from the JSON rendering system. This allows us to dynamically display values as we enter a path, without hindering the previously mentioned value display through clicking.

When it comes to decision-making for the development of this application, it was decided, following a prior analysis, to generate the rendering of JSON using a recursive technique, rather than assembly through components. 

This may initially seem less conventional in an environment like React, but the writer of this text must admit that I found that using a component-based system could potentially lead to challenges when dealing with certain levels of depth. 

My previous experience years ago with C++ in reading, traversing, generating, and searching code in txt files reminded me of the recursive system as a solution to this challenge. 

I'm also mindful of the resemblance and the reuse of similar methods present in both the recursive function responsible for rendering the project and the 'explore' function responsible for document searching. Nevertheless, my commitment to the single responsibility principle has guided me in the decision to keep these functions separate.

## Known bugs

- **Impossibility to stablish error handling on empty or faulty JSON files:** During the development of this application, I encountered a challenge where I tried to implement a system within the function that renders the application. This system was meant to check whether the JSON input to the functional component containing this function is empty or corrupt. I consistently attempted this outside the recursive function (due to its nature, encountering primitive values might be misinterpreted as a non-JSON entity). However, even when trying the method of stringify-ing followed by parsing, and returning an error message to the user in case of a failure, all within an appropriate try-catch block, the application still crashed unacceptably. I will continue to investigate this matter. Although the data reception for this demo is static and secure, I believe this is an aspect that needs addressing.

## To improve 

- **Improved efficiency for reading properly large JSON files:** While it's true that the recursive function is a method I've considered most suitable for accomplishing this technical task, it's well-known that this technique may require additional optimization when it comes to loading very large JSON files. Recursive functions utilize stack memory, with each recursive call adding a new layer to the stack. This can be problematic for deeply nested or very large JSON files, as it increases the risk of encountering a stack overflow error. To enhance performance when working with extremely large JSON files, techniques such as chunking or streaming are being considered for implementation in due time.

## Author

- **David Ochando Blasco** - Project Developer
  - [GitHub](https://github.com/Dave86dev) - [LinkedIn](https://www.linkedin.com/in/david-ochando-blasco-90b2ba1a/)