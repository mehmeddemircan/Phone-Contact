// const[img,setImg] = useState("");
// const[imageData,setimageData] = useState({url: "", public_id: ""});

// const updateImage = (e)=>{
//     setImg(e.target.files[0]);
// }

// const uploadImage = async (e) => {
//   e.preventDefault();
//   const data = new FormData();
//   data.append("file", img);
//   data.append("upload_preset",process.env.REACT_APP_PRESET_NAME);
//   data.append("cloud_name",process.env.REACT_APP_CLOUD_NAME );
//   data.append("folder","your-folder-name");
//   try{
//     const resp = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,data);  
//     setimageData({url: resp.data.url, public_id: resp.data.public_id});
//   }catch(err){
//     console.log("errr : ",err);
//   }
// }
// const deleteImage = async (e) => {
//   e.preventDefault();
//     cloudinary.v2.uploader.destroy(imageData.public_id, function(error,result) {
//       console.log(result, error) })
//       .then(resp => console.log(resp))
//       .catch(_err=> console.log("Something went wrong, please try again later."));
// }

// return(
// <>
//  <form>
//           <input type="file" onChange={updateImage} className="form-control shadow-sm" id="image" name="image" accept="image/*"/>
//           <button onClick={uploadImage}>Upload</button>
//           <button onClick={deleteImage}>Remove</button>
//   </form>
// </>
// );