import React, { FC, useState, useContext, useRef, useEffect } from "react";
import axios from "axios";

import AvatarEditor from "react-avatar-editor";
const AvatarEdit = () => {
  const [src, setSrc] = useState<any>(null);
  const [preview, setPreview] = useState<any>(null);
  const [party, setParty] = useState('');

  const [result, setResult] = useState()
  const editor = useRef(null);


const handleDownload = (url) => {
    const a = document.createElement('a');
    a.download = `sifbshdbf`;
    a.href = url;
    a.click();
}
const handleGetDesign = async (img_url) => {
    const data = {
        party: party,
        profile_img: img_url
    }
    const response = await axios.post(`http://127.0.0.1:8000/design/`, data)
    setResult(response.data.url)
    console.log("RESPONSE IS HERE", response)
}   


  return <>

  <input type="file" onChange={(e) => {setSrc(e.target.files[0])}} />
  <select
                    name="channelCategory"
                    id="channelCategory"
                    style={{ marginBottom: '20px', width: '253px', height: '40px' }}
                    onChange={(e) => setParty(e.target.value)}
                  >
                    <option value="---">Select Party</option>
                    <option value="APC">APC</option>
                    <option value="PDP">PDP</option>
                    <option value="LP">LABOUR PARTY</option>
                  </select>
  {/* <AvatarEditor width={400} height={400} image={src}  ref={editor}/> */}
  <button onClick={() => {
          if (editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            const canvas = editor.current.getImage()

            // If you want the image resized to the canvas size (also a HTMLCanvasElement)
            const canvasScaled = editor.current.getImage().toDataURL()
            setPreview(canvasScaled);
            handleGetDesign(canvasScaled)

            // console.log("RESULT", canvasScaled)
          }
        }}>Save</button>
  <img src={result} alt="cropped" style={{width: '30%'}} /> 

  <button onClick={() => handleDownload(result)}>DOWNLOAD</button>
  </> 
};

export default AvatarEdit;
