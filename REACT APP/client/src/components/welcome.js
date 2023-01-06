import React from "react";
import "./welcome.css";

function Welcome() {
  return (
    <div
      className="card"
      style={{ width: "40rem", height: "42rem", borderRadius: "20px" }}
    >
      <div className="card-body">
        <h4
          className="card-title"
          style={{
            paddingLeft: "160px",
            paddingTop: "30px",
            paddingBottom: "15px",
          }}
        >
          FACE RECOGNITION WEB APP
        </h4>
        <h6 className="card-subtitle mb-2 text-muted">
          Welcome to the webpage
        </h6>
        <p className="card-text">
          This is a web page which detects the faces of persons.
          <p>
            The data is trained on YOLOv5 and the dataset contains faces of 100
            people.
          </p>
          <img
            src="https://roc.ai/wp-content/uploads/2018/10/faces2.png"
            style={{ height: "200px", width: "300px" }}
          />
          <img
            src="https://roc.ai/wp-content/uploads/2018/10/faces_detect2.png"
            style={{ height: "200px", width: "300px" }}
          />
        </p>
        <h6>
          <i style={{ marginLeft: "100px" }}>input image </i>

          <i style={{ marginLeft: "200px" }}>output image </i>
        </h6>
        <br />
        <div style={{ textAlign: "center" }}>
          <h6>LOGIN if you are an existing user</h6>
          <button type="button" class="btn btn-outline-primary">
            <a href="/login" className="btn btn" style={{ fontWeight: "bold" }}>
              LOGIN
            </a>
          </button>
          <br />
          <br />
          <h6>SIGNUP if you are a new user</h6>
          <button type="button" class="btn btn-outline-primary">
            <a
              href="/signup"
              className="btn btn"
              style={{ fontWeight: "bold" }}
            >
              SIGNUP
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
