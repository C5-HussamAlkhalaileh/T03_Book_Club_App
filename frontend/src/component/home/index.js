import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 
 

const Home = () => {
  //save username on state
  const [username, setUsername] = useState("");
  //send request
  const getAllUsers = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users`
      )
      .then((res) => {
        setUsername(res.data.results);
        console.log(res.data.results);
      });
     
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const login = () => {
    console.log("where do i begin ");
    //console.log({username});
  };

  return (
    <div className="Dashbourd-continer">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
            users
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            posts
          </a>
        </li>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Login
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  login
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  className="input-login"
                  placeholder="Enter your email :"
                ></input>
                <br />

                <input
                  className="input-login"
                  placeholder="Enter your password :"
                  type="password"
                ></input>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary" onClick={login}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Home;
