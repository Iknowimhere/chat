import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from '@chakra-ui/react'

export const Signup = () => {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  let toast=useToast()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !email || !password || !confirmPassword || !pic ){
       toast({
        title: `Please fill all the fields`,
        status: "error",
        isClosable: true,
      })
      return
    }
    // if(pic.type!=="image/jpg" ||)
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("photo", pic);

    let {data} = await axios.post(
      "http://localhost:5000/api/v1/user/register",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    localStorage.setItem("user",JSON.stringify(data))
    navigate("/chats",{replace:true})
  };
  return (
    <div className="signup-form">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          name="photo"
          id="photo"
          onChange={(e) => setPic(e.target.files[0])}
        />
        <div className="buttons">
          <button type="submit">Register</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </div>
  );
};
