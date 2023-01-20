import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 5000;

app.post("/", async (req: any, res: any) => {
  const { message, currentModel } = req.body;
  const response = await openai.createCompletion({
    model: `${currentModel}`, //"text-davinci-003",
    prompt: `${message}`,
    max_tokens: 50,
    temperature: 0.5,
  });
  res.json({
    message: response.data.choices[0].text,
  });
});

app.get("/models", async (res: any) => {
  const response = await openai.listModels();
  res.json({
    models: response.data.data,
  });
});

app.listen(port, () => {
  console.log(`server started, listening at http://localhost:${port}`);
});
