import axios from "axios";
// import { cloudName, defaultUploadTag, uploadPreset } from "./cloudinaryConfig";

export const upload = ({ file, fileType, successCallback }) => {
  const url = `https://api.cloudinary.com/v1_1/dn6obhhvq/${fileType}/upload`;
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "telefonrehberi");
//   data.append("tags", "cloudinary_interactive_gallery");
 
  axios
    .post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => successCallback(response.data));
};
