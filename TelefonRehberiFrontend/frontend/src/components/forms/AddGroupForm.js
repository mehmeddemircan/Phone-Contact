import React, { Fragment } from 'react'

const AddGroupForm = (props) => {
  return (
   <Fragment>
     <div class="d-flex flex-column">
     <div class="mb-3 ">
          <label class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="mb-3 ">
          <label class="col-sm-2 col-form-label">
            Title
          </label>
          <div class="col-sm-10">
            <input
              value={props.title}
              onChange={(e) => props.setTitle(e.target.value)}
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="mb-3 ">
          <label class="col-sm-2 col-form-label">
            Description
          </label>
          <div class="col-sm-10">
            <input
              value={props.description}
              onChange={(e) => props.setDescription(e.target.value)}
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="mb-3 ">
          <label class="col-sm-2 col-form-label">
            Capacity
          </label>
          <div class="col-sm-10">
            <input
              value={props.capacity}
              onChange={(e) => props.setCapacity(e.target.value)}
              type="text"
              class="form-control"
            />
          </div>
        </div>
        </div>
        {/* <div class="mb-3 ">
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
          <label class="col-sm-2 col-form-label">
            PhoneNumber
          </label>
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
          <label  class="col-sm-2 col-form-label">
            Description
          </label>
          <div class="col-sm-10">
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <button onClick={handleAddSubmit} class="btn btn-primary w-25 fs-5">
          Create Group
        </button>
      </div> */}
   </Fragment>
  )
}

export default AddGroupForm