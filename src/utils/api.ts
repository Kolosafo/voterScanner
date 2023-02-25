import axios from "axios";
import { getIinspirtionalQoute } from "./openAi";
export interface Watermarked {
  profile_img: string;
  banner_img: string;
  post_img: string;
  post_3_img: string;
}
export interface original {
  profile_img: string;
  banner_img: string;
  post_img: string;
  post_3_img: string;
}
export interface ResultType {
  watermarked: Watermarked;
  original: original;
}

let retryGetDesign = 0;
// const navigate = useNavigate();
export const handleGetDesign = async (
  img_url: string,
  party: string,
  name: string,
  setResult: React.Dispatch<React.SetStateAction<ResultType | null>>
) => {
  const getInsptQoute = await getIinspirtionalQoute();
  const data = {
    party: party,
    profile_img: img_url,
    name,
    inspirationalQoute: getInsptQoute ? getInsptQoute : "",
  };
  // console.log("DESIGNING", name);
  try {
    const response = await axios.post(
      `https://twitter-img-generator.herokuapp.com/design/`,
      data
    );
    setResult({
      watermarked: response.data.watermarked,
      original: response.data.original,
    });
    return;
  } catch (err) {
    if (retryGetDesign !== 1) {
      handleGetDesign(img_url, party, name, setResult);
      retryGetDesign += 1;
    } else {
      // Navigate to the Location.reload article by replacing this page
      // window.location.replace("https://vislendor.com/");
      alert(`"ERROR" ${err}`);
    }
  }
};

export const handleGetViewCount = async (
  setViewCount: React.Dispatch<React.SetStateAction<null | number>>
) => {
  const response = await axios.get(
    `https://twitter-img-generator.herokuapp.com/design/getViewCount`
  );
  const votes = parseInt(response.data.votes);
  setViewCount(votes);
  // console.log("I DEY RUN");
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

export const extractionApi = (imgData: string | Blob | File, id = null) => {
  const api_key = "l39YP-QKZdo6otXIhnuVcZmlbK9-uT9MQw40sILqd1U";
  const url = `https://seashell-app-rkt4r.ondigitalocean.app/${api_key}`;
  const ubuntuUrl = `https://new-horizon-util-service.in/${api_key}`;
  // const ubuntuUrl =`https://twitter-img-generator.herokuapp.com/${api_key}`

  let image = new FormData();

  let data;
  if (!id) {
    image.append("image", imgData);
    console.log("NO ID", imgData);
  } else {
    console.log("ID dey");
    image.append("image", imgData);
    image.append("id", id);
  }

  const requestOption = {
    method: "POST",
    body: image,
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    // referrerPolicy: "unsafe-url"
  };

  return { ubuntuUrl, requestOption };
};

export const handleExtract = async (
  imgData: string | Blob,
  setGoodScore: React.Dispatch<React.SetStateAction<number>>,
  setReceiptText: React.Dispatch<React.SetStateAction<string>>
) => {
  console.log("BISMILLAH");
  const { ubuntuUrl, requestOption } = extractionApi(imgData);
  const testAxios = "";
  await fetch(ubuntuUrl, requestOption)
    .then((res) => res.json())
    .then((response) => {
      const filtered = response.text.filter((e: string) => {
        return e !== "";
      });
      const filtered2 = filtered.filter((e: string) => {
        return e !== " ";
      });
      const filtered3 = filtered2.filter((e: string) => {
        return e !== "  ";
      });
      setReceiptText(filtered3);
      let pass_count = 0;
      for (let i = 0; i < filtered3.length; i++) {
        if (filtered3[i].toLowerCase().includes("dauda kolo")) {
          setGoodScore((count) => count + 1);
        } else if (
          filtered3[i].toLowerCase().includes("1500") ||
          filtered3[i].toLowerCase().includes("1,500")
        ) {
          setGoodScore((count) => count + 1);
          pass_count++;
        } else if (filtered3[i].toLowerCase().includes("7727691020")) {
          setGoodScore((count) => count + 1);
          pass_count++;
        } else if (
          filtered3[i].toLowerCase().includes("feb 25") ||
          filtered3[i].toLowerCase().includes("february 25")
        ) {
          setGoodScore((count) => count + 1);
          pass_count++;
        } else if (
          filtered3[i].toLowerCase().includes("fcmb") ||
          filtered3[i].toLowerCase().includes("first city monument bank")
        ) {
          setGoodScore((count) => count + 1);
        }
      }
      pass_count === 0 ? setGoodScore(0) : null;
    });
};

export const saveTransactionReceipt = async (name: string, receipt: string) => {
  const data = { name: name, receipt: receipt };
  const sendReceipt = await axios.post(
    ` https://twitter-img-generator.herokuapp.com/design/receipt/`,
    data
  );
};
