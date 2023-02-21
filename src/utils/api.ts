import axios from "axios";

export interface Watermarked {
  profile_img: string;
  banner_img: string;
  post_img: string;
}
export interface original {
  profile_img: string;
  banner_img: string;
  post_img: string;
}
export interface ResultType {
  watermarked: Watermarked;
  original: original;
}
export const handleGetDesign = async (
  img_url: string,
  party: string,
  name: string,
  setResult: React.Dispatch<React.SetStateAction<ResultType | null>>
) => {
  const data = {
    party: party,
    profile_img: img_url,
    name,
  };
  const response = await axios.post(
    `https://twitter-img-generator.herokuapp.com/design/`,
    data
  );
  setResult({
    watermarked: response.data.watermarked,
    original: response.data.original,
  });
};

export const handleGetViewCount = async (
  setViewCount: React.Dispatch<React.SetStateAction<null | number>>
) => {
  const response = await axios.get(
    `https://twitter-img-generator.herokuapp.com/design/getViewCount`
  );
  const votes = parseInt(response.data.votes);
  setViewCount(votes);
  console.log("I DEY RUN");
};

export const contactUs = async (
  name: string,
  message: string,
  setSendStatus: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const data = { name: name, message: message };
  const response = await axios.post(
    `https://twitter-img-generator.herokuapp.com/design/contactUs/`,
    data
  );
  if (response.status === 200) {
    setSendStatus(true);
  }
};
