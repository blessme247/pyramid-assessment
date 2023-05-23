import React from "react";
import googleIcon from "../../assets/Icons/google.svg";
import googlePlayIcon from "../../assets/Icons/google-play.svg";
import appleIcon from "../../assets/Icons/apple.svg";

const Form = () => {
  return (
    <section className="formSection">
      <div className="formTitle">Create account</div>

      <div className="formSubTitle">For business, brand or celebrity</div>

      <form className="form">
        <div className="group ">
          <div className=" nameGroup">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" />
          </div>

          <div className=" nameGroup secondNameGroup">
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" />
          </div>
        </div>

        <div className="group otherGroup">
          <div className=" nameGroup">
            <label htmlFor="fname">Email or Phone Number</label>
            <input type="text" name="fname" />
          </div>

          <div className=" nameGroup secondNameGroup">
            <label htmlFor="date">Date of birth (MM/DD/YY)</label>
            <input type="date" name="date" />
          </div>
        </div>

        <div className="group otherGroup">
          <div className=" nameGroup">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>

          <div className=" nameGroup secondNameGroup">
            <label htmlFor="cpassword">Confirm Password</label>
            <input type="password" name="cpassword" />
          </div>
        </div>

        <div className="otherGroup">
          <div className="firstCheckGroup">
            <div className="leftSide">
              <input type="checkbox" name="check" />
              <label htmlFor="check">Remember me</label>
            </div>
            <div className="rightSide">Forgot Password?</div>
          </div>

          <div className="secondCheckGroup">
            <input type="checkbox" name="check" />
            <label htmlFor="check">
              I agree to all the <span>Terms</span> and{" "}
              <span>Privacy Policy</span>{" "}
            </label>
          </div>
        </div>

        <div className="ctaGroup">
          <button className="signupBtn">Create account</button>
          <button className="googleSigninBtn">
            <span>
              <img src={googleIcon} alt="goggle icon" />
            </span>{" "}
            <span className="textSpan">Sign-in with google</span>{" "}
          </button>
        </div>

        <div className="lGroup">
          Already have an account? <span className="loginText">Log in</span>{" "}
        </div>

        <div className="lastGroup">
          <button>
            <span className="btnImg"><img src={googlePlayIcon} alt="google play icon" /></span>
            <div className="btnText">

              <p className="topBtnText">GET IT ON</p>
              <p>Google Play</p>
            </div>
          </button>
          <button>
          <span className="btnImg"> <img src={appleIcon} alt="apple logo" /> </span>

            <div className="btnText" > 
            <p className="topBtnText" >Download on the</p>
            <p>App Store</p>
            </div>

          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
