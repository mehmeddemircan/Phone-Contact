import React, { Fragment, useEffect, useState } from "react";
import HomeLayout from "../components/layout/HomeLayout";
import { Upload, message, Button, Badge, Avatar } from "antd";
import ImgCrop from "antd-img-crop";
import { UploadOutlined } from "@ant-design/icons";
import { upload } from "../cloudinary/CloudinaryHelper";
import { useNavigate } from "react-router-dom";
import { ClockCircleOutlined, CameraFilled } from "@ant-design/icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { UpdateUser } from "../redux/actions/PersonAction";
import AccountInformation from "../components/descriptions/AccountDescription.js";
import AccountLinkList from "../components/list/AccountLinkList";
import AccountPageHeader from "../components/pageheader/AccountPageHeader";
import EditAccountForm from "../components/forms/EditAccountForm";

const AccountPage = () => {
  const dispatch = useDispatch();

  const [img, setImg] = useState("");
  const [imageData, setimageData] = useState({ url: "", public_id: "" });

  const [name, setName] = useState("mevlide update");
  const [surname, setSurname] = useState("surname update");
  const [phoneNumber, setPhoneNumber] = useState("5058406006");
  const [description, setDescription] = useState("dasdasdas");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState(82);



  const updateImage = (e) => {
    setImg(e.target.files[0]);
  };
  useEffect(() => {
    setImage(imageData.url);
  }, [imageData]);
  const uploadImage = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "telefonrehberi");
    data.append("cloud_name", "dn6obhhvq");
    // data.append("folder","your-folder-name");
    try {
      const resp = await axios.post(
        `https://api.cloudinary.com/v1_1/dn6obhhvq/image/upload`,
        data
      );
      setimageData({ url: resp.data.url, public_id: resp.data.public_id });
    } catch (err) {
      console.log("errr : ", err);
    }
  };

  const handleUpdatePerson = () => {
    alert(imageData.url);
    dispatch(
      UpdateUser(4, { name, surname, phoneNumber, description, image, userId })
    );
  };

  return (
    <Fragment>
      <HomeLayout>
          <AccountPageHeader />

        {/* <ImgCrop rotate>
      <Upload
        action={`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 2 && '+ Upload'}
      </Upload>
    </ImgCrop>   */}
        {/* <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload> */}
        <div class="row my-2">
          <div class="col-md-2">
            <AccountLinkList />
          </div>
          <div class="col-md-6 col-sm-12 ">
            <EditAccountForm />
          </div>
          <div class="col-md-4 col-sm-12">
            <AccountInformation />
          </div>
        </div>


        <div class="my-3">
          {imageData.url ? (
            <Badge count="X" style={{ cursor: "pointer" }}>
              <img
                width={100}
                height={100}
                src={imageData.url}
                className="img-fluid"
              />
            </Badge>
          ) : null}
        </div>
        <div class="d-flex flex-row">
          <input type="file" class="form-control w-25" onChange={updateImage} />

          <button
            class="btn btn-sm btn-outline-primary mx-4"
            onClick={uploadImage}
          >
            Upload{" "}
          </button>
          <button
            class="btn btn-sm btn-outline-primary mx-4"
            onClick={handleUpdatePerson}
          >
            Update{" "}
          </button>
        </div>
        {/* <ImgCrop rotate>
            <Upload
              action="https://api.cloudinary.com/v1_1/dn6obhhvq/image/upload"
              listType="picture-card"
              fileList={fileList}
              className="avatar-uploader"
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 1 && <CameraFilled style={{ fontSize: 30 }} />}
            </Upload>
          </ImgCrop> */}
      </HomeLayout>
    </Fragment>
  );
};

export default AccountPage;
