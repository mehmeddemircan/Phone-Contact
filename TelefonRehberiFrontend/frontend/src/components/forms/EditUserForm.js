import React, { Fragment } from "react";

const EditUserForm = ({ 
  name,
  surname,
  phoneNumber,
  image,
  description,
  setName,
  setSurname,
  setPhoneNumber,
  setImage,
  setDescription,
  handleEditUserSubmit,}) => {
  return (
    <Fragment>
      <div class="d-flex flex-column">
        <div class="mb-3 ">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="form-control"
            />
          </div>

        </div>
        <div class="mb-3 ">
          <label class="col-sm-2 col-form-label">Surname</label>
          <div class="col-sm-10">
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="mb-3 ">
          <label class="col-sm-2 col-form-label">PhoneNumber</label>
          <div class="col-sm-10">
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="mb-3 ">
          <label class="col-sm-2 col-form-label">Description</label>
          <div class="col-sm-10">
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <button onClick={handleEditUserSubmit} class="btn btn-primary w-25 fs-5">
          Güncelle
        </button>
      </div>
    </Fragment>
  );
};

export default EditUserForm;
