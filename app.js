const express = require('express');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index', { response: null });
});

app.post('/chat', async (req, res) => {
  const userInput = req.body.userInput;

  const bannedWords = ['kill', 'attack', 'hack'];
  if (bannedWords.some(w => userInput.toLowerCase().includes(w))) {
    return res.render('index', { response: '⚠️ Sorry, that input is not allowed.' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent([
      {
        role: 'user',
        parts: [
          {
            text: `You are a helpful and responsible AI assistant. Always answer ethically, respectfully, and honestly. Reject requests that are illegal, harmful, or abusive.`,
          },
          { text: userInput },
        ],
      },
    ]);

    const reply = result.response.text();
    res.render('index', { response: reply });
  } catch (err) {
    console.error(err);
    res.render('index', { response: '⚠️ Error talking to Gemini AI.' });
  }
});

app.listen(3000, () => {
  console.log('Gemini chatbot running at http://localhost:3000');
});
