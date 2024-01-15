import React from "react";

function Registration() {
  return (
    <section className="register">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        Launch course registration modal
      </button>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body overflow-hidden">
              <button
                type="button"
                className="btn-close ml-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  height: "200px",
                  width: "200px",
                  position: "absolute",
                  top: -100,
                  right: -100,
                }}
              >
                <path
                  fill="#45A5A1"
                  d="M39.7,-69C51.8,-61.8,62.1,-51.8,71.5,-39.8C80.9,-27.9,89.4,-13.9,91,0.9C92.6,15.8,87.4,31.6,77.4,42.6C67.4,53.5,52.7,59.7,39,67.8C25.3,75.9,12.7,86,-1.6,88.7C-15.9,91.5,-31.7,86.9,-45.4,78.8C-59.1,70.7,-70.5,59,-77.6,45.3C-84.6,31.6,-87.1,15.8,-86.9,0.2C-86.6,-15.5,-83.5,-31,-76.5,-44.7C-69.5,-58.4,-58.5,-70.4,-45.1,-76.8C-31.7,-83.3,-15.9,-84.2,-1,-82.4C13.8,-80.7,27.6,-76.3,39.7,-69Z"
                  transform="translate(100 100)"
                />
              </svg>

              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  height: "200px",
                  width: "200px",
                  position: "absolute",
                  bottom: -100,
                  left: -100,
                }}
              >
                <path
                  fill="#45A5A1"
                  d="M39.7,-69C51.8,-61.8,62.1,-51.8,71.5,-39.8C80.9,-27.9,89.4,-13.9,91,0.9C92.6,15.8,87.4,31.6,77.4,42.6C67.4,53.5,52.7,59.7,39,67.8C25.3,75.9,12.7,86,-1.6,88.7C-15.9,91.5,-31.7,86.9,-45.4,78.8C-59.1,70.7,-70.5,59,-77.6,45.3C-84.6,31.6,-87.1,15.8,-86.9,0.2C-86.6,-15.5,-83.5,-31,-76.5,-44.7C-69.5,-58.4,-58.5,-70.4,-45.1,-76.8C-31.7,-83.3,-15.9,-84.2,-1,-82.4C13.8,-80.7,27.6,-76.3,39.7,-69Z"
                  transform="translate(100 100)"
                />
              </svg>
              <p className="h5 text-center fw-bold">Course Registration</p>
              <form className="py-4 px-2">
                <div className="form-group pb-3">
                  <label htmlFor="email">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fName"
                    aria-describedby="fullNameHelp"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="telephone">Telephone number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telephone"
                    aria-describedby="emailHelp"
                    placeholder="254 ..."
                  />
                </div>
                <div className="form-group pb-3">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="form-label"
                  >
                    Educational Background
                  </label>
                  <select
                    className="form-select"
                    id="exampleFormControlSelect1"
                    aria-label="Educational Background"
                  >
                    <option value="">Select an option</option>
                    <option value="option1">Highschool Diploma</option>
                    <option value="option2">College Degree</option>
                    <option value="option3">Vocational Couse</option>
                    <option value="option3">Short course/Bootcamp</option>
                  </select>
                </div>
                <div className="checks d-flex flex-row align-items-start justify-content-start py-2 gap-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      part-time
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      full-time
                    </label>
                  </div>
                </div>
                <button type="submit" className=" course-modal-submit-btn">
                  register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
