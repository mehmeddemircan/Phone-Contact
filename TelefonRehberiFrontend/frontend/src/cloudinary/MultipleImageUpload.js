// const uploadSelection = () => {
//     if (selectedFiles.length === 0) {
//       message.error("You need to upload a media file first");
//     } else {
//       setIsUploading(true);
//       selectedFiles.forEach((file, index) => {
//         const fileType = file["type"].split("/")[0];
//         upload({
//           file,
//           fileType,
//           successCallback: () => {
//             if (index === selectedFiles.length - 1) {
//               message.success("Images uploaded successfully");
//               // myGallery.update({
//               //   mediaAssets: [
//               //     { tag: "cloudinary_interactive_gallery" },
//               //     { tag: "cloudinary_interactive_gallery", mediaType: "video" }
//               //   ]
//               // });
//               setIsUploading(false);
              
//             }
//           }
//         });
//       });
//     }
//   };
//   const props = {
//       multiple: true,
//       onRemove: (file) => {
//         setSelectedFiles((currentSelection) => {
//           const newSelection = currentSelection.slice();
//           const fileIndex = currentSelection.indexOf(file);
//           newSelection.splice(fileIndex, 1);
//           return newSelection;
//         });
//       },
//       beforeUpload: (file) => {
//         setSelectedFiles((currentSelection) => [...currentSelection, file]);
//         return false;
//       },
//       showUploadList: true
//     };

// <Upload.Dragger {...props}>
//         <p className="ant-upload-drag-icon">
//           <UploadOutlined />
//         </p>
//         <p className="ant-upload-text">Click to Upload Files</p>
//       </Upload.Dragger>
//   <Button type="primary" loading={isUploading} onClick={uploadSelection}>
//           Submit
//         </Button>