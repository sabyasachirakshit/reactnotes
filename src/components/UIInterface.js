import React from "react";

function UIInterface() {
  return (
    <>
      <div className="container mx-14 my-3">
        <h1>Welcome To Notes Taker</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add Note Title:</h5>
            <div className="form-group">
              <textarea
                className="form-control"
                id="addTitle"
                rows="1"
              ></textarea>
              <br />
              <h5>Add Note Content:</h5>
              <textarea
                className="form-control"
                id="addTxt"
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-success" id="addBtn">
              Add Note
            </button>
          </div>
        </div>

        <h1>Your Notes</h1>
        <hr />
        <div id="notes" className="row container-fluid"></div>
      </div>
    </>
  );
}

export default UIInterface;
