import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IsOpen } from "../../redux/app/counter/LoginPop";
import { IsLogedIn } from "../../redux/app/counter/LoginPop";
import "./style.css";
const Login = () => {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(IsOpen());
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const { innerWidth } = window;
  return (
    <div className="Login">
      {innerWidth > 1023 ? (
        <div className="login">
          <div className="backdrop" onClick={handler}>
            <div className="LoginWrapper">
              <div
                className="close-arrow"
                onClick={() => {
                  dispatch(IsOpen());
                }}
              >
                <span className="backMove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="svgImg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
              <div className="LoginContent">
                <img
                  className="loginImg"
                  src="https://www.burgerkingdev.in/static/media/bkLogo.2e1e9383.png"
                  alt=""
                />
                <p className="LoginText">Login</p>
                <p className="LoginTextP">Enter your phone number to proceed</p>
                <div className="PhoneNumbe_Verify">
                  <div className="phoneCode">+91</div>
                  <div className="InputPhone">
                    <input
                      className="PhoneNumber"
                      type="text"
                      placeholder="Enter 10 digit phone number"
                      maxLength={10}
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      // maxValue={10}
                    />
                  </div>
                </div>
                <div
                  className="LoginButton"
                  onClick={() => {
                    {
                      phoneNumber.length == 10 && handler();
                      phoneNumber.length == 10 && dispatch(IsLogedIn());
                    }
                  }}
                >
                  <button
                    style={{
                      background:
                        phoneNumber.length == 10 ? "#6F3C2F" : "#DCDCDC",
                    }}
                    className="getOtp_button"
                  >
                    {phoneNumber.length == 10
                      ? "GET OTP"
                      : "ENTER PHONE NUMBER"}
                  </button>
                </div>
                <div className="social">
                  <span className="social_line"></span>
                  <span className="social_text">or</span>
                </div>
                <p className="LoginUsing">Login Using</p>
                <div className="SocialLogin">
                  <div className="facebook">
                    <img
                      src="https://www.burgerkingdev.in/static/media/facebook-app.5ea18559.svg"
                      alt=""
                      className="facebook_img"
                    />
                    <p className="facebook_text">Facebook</p>
                  </div>
                  <div className="google">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="google_img"
                    />
                    <p className="google_text">Google</p>
                  </div>
                </div>
              </div>
              <div className="colorLine"></div>
              <div className="LoginFooter">
                <p className="Terms_and_contition">
                  By continue, your agree for our <u>Terms & Condition </u>,{" "}
                  <u>Privacy Policy</u> and <u>Promotion T&C</u>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="MobileLoginWrapper">
          <div
            className="close-arrow"
            onClick={() => {
              dispatch(IsOpen());
            }}
          >
            <span className="backMove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="svgImg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
          <div className="LoginContent">
            <img
              className="loginImg"
              src="https://www.burgerkingdev.in/static/media/bkLogo.2e1e9383.png"
              alt=""
            />
            <p className="LoginText">Login</p>
            <p className="LoginTextP">Enter your phone number to proceed</p>
            <div className="PhoneNumbe_Verify">
              <div className="phoneCode">+91</div>
              <div className="InputPhone">
                <input
                  className="PhoneNumber"
                  type="text"
                  placeholder="Enter 10 digit phone number"
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  // maxValue={10}
                />
              </div>
            </div>
            <div
              className="LoginButton"
              onClick={() => {
                {
                  phoneNumber.length == 10 && handler();
                  phoneNumber.length == 10 && dispatch(IsLogedIn());
                }
              }}
            >
              <button
                style={{
                  background: phoneNumber.length == 10 ? "#6F3C2F" : "#DCDCDC",
                }}
                className="getOtp_button"
              >
                {phoneNumber.length == 10 ? "GET OTP" : "ENTER PHONE NUMBER"}
              </button>
            </div>
            <div className="social">
              <span className="social_line"></span>
              <span className="social_text">or</span>
            </div>
            <p className="LoginUsing">Login Using</p>
            <div className="SocialLogin">
              <div className="facebook">
                <img
                  src="https://www.burgerkingdev.in/static/media/facebook-app.5ea18559.svg"
                  alt=""
                  className="facebook_img"
                />
                <p className="facebook_text">Facebook</p>
              </div>
              <div className="google">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="google_img"
                />
                <p className="google_text">Google</p>
              </div>
            </div>
          </div>
          <div className="colorLine"></div>
          <div className="LoginFooter">
            <p className="Terms_and_contition">
              By continue, your agree for our <u>Terms & Condition </u>,{" "}
              <u>Privacy Policy</u> and <u>Promotion T&C</u>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
