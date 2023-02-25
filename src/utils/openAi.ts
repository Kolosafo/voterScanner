import axios from "axios";
const rand1 = Math.floor(Math.random() * 1000);
export const getIinspirtionalQoute = async () => {
  const response = await axios.get("https://type.fit/api/quotes");
  const text_response = response.data[rand1].text;
  if (text_response) {
    return text_response
  } else {
    return "Choose a leader who will invest in building bridges not walls.";
  }
};
