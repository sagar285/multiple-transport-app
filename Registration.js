import React, { useState } from "react";
import heroImage from "./hero.png";


const Registraion = () => {
let history;
  
  const [userRegister, setUserRegister] = useState({
    username: "",
    phone: "",
    password: "",
    repeatpassword: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegister({ ...userRegister, [name]: value });
  };

const postData =async (e)=>{
  e.preventDefault();
 const  { username, phone, password, repeatpassword, } = userRegister;

 const res =await fetch("/register",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
      username, phone, password, repeatpassword
    })

 });
 const data =  await res.json();
 if(data.status === 422|| !data){
   window.alert("invalid registration ");
   console.log("invalid registration");
 }else{
   window.alert("succesfull");
   console.log("succesfull");
 }
 history.pushState("/login");
    
}

  return (
    <>
      <section className="loginsection register-section ">
        <div className="container grid grid-two-column">
          <div className="login-image">
            {/* <img src="/hero.png" alt="user loggin pic" /> */}
            {/* <img src={heroImage} className="hero-image" alt="user login " /> */}
          </div>
          {/* right side div  */}
          <div className="login-data register-data">
            <img src={heroImage} className="logo-image" alt="logo" />
            <p className="bold-text">Create Your Account!</p>
            <p className="common-para register-para">
              Join the most trusted platform and connect with your gamers
              community instantly.
            </p>
            {/* form start  */}
            <form method="post">
              <div className="form">
                <input
                  type="text"
                  id="email"
                  className="form__input"
                  placeholder=" "
                  name="username"
                  value={userRegister.username}
                  onChange={handleInput}
                />
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
              </div>

              {/* for mobile number  */}
              <div className="form">
                <input
                  type="text"
                  id="phone"
                  className="form__input"
                  placeholder=" "
                  name="phone"
                  value={userRegister.phone}
                  onChange={handleInput}
                />
                <label htmlFor="phone" className="form__label">
                  Contact No.
                </label>
              </div>

              <div className="form">
                <input
                  type="password"
                  id="pasword"
                  className="form__input"
                  placeholder=" "
                  name="password"
                  value={userRegister.password}
                  onChange={handleInput}
                />
                <label htmlFor="pasword" className="form__label">
                  Pasword
                </label>
              </div>

              <div className="form">
                <input
                  type="text"
                  id="repeat password"
                  className="form__input"
                  placeholder=" "
                  name="repeatpassword"
                  value={userRegister.repeatpassword}
                  onChange={handleInput}
                />
                <label htmlFor="repeat password" className="form__label">
                  Repeat Password
                </label>
              </div>

              <div className="checkbox">
                <input type="checkbox" />
                <p className="common-para">
                  By clicking the checkbox, I agree to Playwise{" "}
                  <a href="/login"> Terms & Conditions </a>
                </p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p className="common-para">
                  Two Factor Authentication (Dual Layer Security)
                </p>
              </div>

              <input
                type="submit"
                value="REGISTER"
                className="btn register-btn"
                onClick={postData}
              />
            </form>
            {/* extra way to login  */}
            <p className="common-para">
              You will receive a confirmation email to your registered mailbox
              to activate the account. If you face any issues, kindly{" "}
              <a href="/contact"> contact us!</a>
            </p>

            <p className="common-para">
              or join us with your social network account
            </p>
            <div className="social-btn">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-solid fa-m"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <p className="common-para">
              Already have an account with us? <a href="/login"> Login </a> here
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registraion;