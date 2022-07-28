import React, { useState ,useContext} from "react";

const Register = () => {
  const [firstname, setfirsname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div>
      <h3> Register </h3>

      
      <p>firstname: {setfirsname}</p>
      <input
        type="text"
        placeHolder="firstname"
        onChange={(e) => {
          setfirsname(e.target.value);
        }}
      />

      <p>lastname: {setlastname}</p>
      <input
        type="text"
        placeHolder="lastname"
        onChange={(e) => {
          setfirsname(e.target.value);
        }}
      />
      <p>email: {setemail}</p>

      <p>email: {email}</p>
      <input
        type="email"
        placeHolder="email"
        onChange={(e) => {
            setemail(e.target.value);
        }}
      />

      <p>password: {setpassword}</p>

      
      <p>email: {password}</p>
      <input
        type="password"
        placeHolder="password"
        onChange={(e) => {
            setpassword(e.target.value);
        }}
      />

      <button>Register</button>
    </div>
  );
};


export default Register ;