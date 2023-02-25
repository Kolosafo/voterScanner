import { Configuration, OpenAIApi } from "openai";
import React from "react";
const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);
export interface ThumbnailEditObject {
  thumbnailList: string[] | null;
  catchPhrase: string[] | null;
}
export const getIinspirtionalQoute = async () => {
  const modifyPrompt = `input: Write a 20 word inspirational qoute for a presidential candidate I want to win. output:`;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: modifyPrompt,
    temperature: 0.4,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["input:"],
  });
  const text_response = response.data.choices[0].text;
  if (text_response) {
    const splitText = text_response.split("\n");
    // THIS ALWAYS RETURNS A SETTINGS FIRST SO WE CAN POP AND SHIFT IT

    const init_filter = splitText.filter((e) => {
      return e !== "";
    });
    const filter2: string[] = init_filter.map((e) => {
      const initial = e.replace(" ", "");
      return initial;
    });

    const filtered = filter2.filter((e) => {
      return e !== "";
    });
    // console.log("THESE ARE THE  RETURN WORDS", filtered);
    return filtered.toString();
    // setCatchPhrase(filtered);
    // setStartGeneration(false);
  }
};
