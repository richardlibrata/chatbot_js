# Getting started

Have you ever want to try a chatbot? Then you can use this project to test it out.

I'm using node.js and express.js to build this project and also use Gemini API for my chatbot that you can use by yourself.

## Installation

Clone the repository

```bash
git clone https://github.com/richardlibrata/chatbot_js.git
```

Switch to the repo folder

```bash
cd [your target folder]
```

Install all the dependencies that you need

    npm init -y
    npm install express body-parser @google/generative-ai dotenv
    npm install ejs

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Input your API key into your .env


```env
GEMINI_API_KEY=yourapikeyhere
```

Run your local node.js

```bash
node app.js
```

Open in your browser url localhost webserve
    http://localhost:3000

DISCLAIMER: This project may or may not work because of inadequate use of API Key of Gemini

## Learn More

To learn more about node.js and other related stuff, take a look at the following resources:

- [Node.js Menu](https://nodejs.org/en) - run JavaScript Everywhere.
- [Express.js](https://expressjs.com/) - fast, unopinionated, minimalist web framework for Node.js.
- [NPM](https://docs.npmjs.com/) - documentation for the npm registry, website, and command-line interface.
