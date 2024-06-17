import React, { useState } from "react";

export const Signup = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState("");
const [pic,setPic]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault()
    let formData=new FormData()
    formData.append("name",name)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("confirmPassword",confirmPassword)
    formData.append("photo",pic)
    console.log(formData);  
}
  return (
    <div className="signup-form">
        <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="name" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <label htmlFor="photo">Photo</label>
        <input type="file" name="photo" id="photo" onChange={(e)=>setPic(e.target.files[0])}/>
        <div className="btn-container">
          <button type="submit">Register</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </div>
  );
};
