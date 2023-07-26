import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const { innerWidth } = window;
  const navigate = useNavigate();
  const navigateToNearlyby = () => {
    navigate("/find-restaruent");
  };
  return (
    <div className="Mobile_footer">
      {innerWidth > 1023 ? (
        <div className="footer">
          <div>
            <div className="footer-div">
              <div>
                <p>Bk INFO</p>
                <ul>
                  <a href="">
                    {" "}
                    <li>About BK</li>
                  </a>
                  <a href="">
                    <li>Fresh Taste</li>
                  </a>
                  <a href="">
                    <li>Investor Relation</li>
                  </a>
                </ul>
              </div>
              <div>
                <p>CONTACT</p>
                <ul>
                  <a href="">
                    <li>FAQ's & Support</li>
                  </a>
                  <a href="">
                    <li>
                      Write to us:
                      <ul>
                        <a href="">
                          <li>Carees</li>
                        </a>
                        <a href="">
                          <li>Customers</li>
                        </a>
                        <a href="">
                          <li>Suplly Chain Queries</li>
                        </a>
                        <a href="">
                          <li>Investor Relations</li>
                        </a>
                        <a href="">
                          <li>Corporate Communications</li>
                        </a>
                        <a href="">
                          <li>Franchinsing</li>
                        </a>
                      </ul>
                    </li>
                  </a>
                </ul>
              </div>
              <div>
                <p>BK CAREERS</p>
                <ul>
                  <a href="">
                    <li>Nutrition Information</li>
                  </a>
                  <a href="">
                    <li> Creating Brighter Future</li>
                  </a>
                  <a href="">
                    <li>Trust & Taste</li>
                  </a>
                  <a href="">
                    <li>COVID-19 Safety</li>
                  </a>
                </ul>
              </div>
              <div>
                <p>LEGAL</p>
                <ul>
                  <a href="">
                    <li>Terms & Conditions </li>
                  </a>
                  <a href="">
                    <li>Privacy Policy</li>
                  </a>
                  <a href="">
                    <li>Promotional T & C</li>
                  </a>
                </ul>
              </div>
              <div>
                <p>DOWNLOAD OUR APP</p>
                <div className="download_app_img_div">
                  <img
                    className="download_app_img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAmCAYAAAAMe5M4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAgKADAAQAAAABAAAAJgAAAAC36W5BAAAOwklEQVR4Ae2bCbSW0xrHn3OUDEUyhAgZUwjRQEnmKfMUdWuZ52UlZLoJlXFZZmKFikxrIYVExjJcQkUh8zxUMpP2/f+ee/d73+8733e+SXWdzrPWd9733cOzn733s59xnyr7L0yfPr3xV1991XPOnDn/+PXXX5tWV1cviHX1z7//CixYsKC6UaNG81ZaaaVRzZo1G7nlllvOZVZV/Hn88cfbfvzxx8OffPLJ9tOmTbPff/+d4nqoYyvQsGFD23TTTW2nnXaa3qpVqz677rrrv2zGjBlNbrjhhimbbLJJ0Hzrf0vAGqy//vpBez7rxRdfbF796aef9po4cWI7MUId4/f66eRbgVmzZtmECRNaffvtt0Or586d2/utt97K17a+vI6uAAf+xx9/7Fj9xx9/NP7zzz/r6DTrp5VvBdjzEML8ajVA7y80kNVpZ555pj3yyCO2xhprlDXOKqusYt27d7d99tnHtthii7JwFOp04IEHYhwVapa3vnPnznb44Yfnra+kYv/997cdd9yxEhR5+8IACw3YrGeeecYuvfRS69ixo/3yyy9ljXXEEUfYNddcY926dbOLL77Y7rvvPlthhRXKwpWvU48ePaxr1675qguWy62yAw44oGC7YhrIBbeePXsaT2Dvvfe2Tp06FdO15DYNSu5RZIeVV17ZRo8ebfIuvIdcTZO9UWTvzGbLLLOMM1K/fv1sqaWWsscee8xOOOEEZ6wNNtjAjjrqKF+s22+/3d5++207+uijMXJ8vMMOO8xuuukm39yll17a3nzzTdt3332dgZBIV111lX3++ef222+/mdShD7zWWmvZcccdZ4x711132ZQpU2z11Ve3Y4891po0aWIPPPCAyYK2qqoq69Onj7Vt29brpVMzCdcXdb169TL54XbLLbfYBx98YF26dLG1117bNt98c/vmm2+cuePYIIDhr732Wttss83skksusR9++ME23HBDu+yyy+zdd9+12267zfG1a9fODj30UJs3b55df/31/qxBQIGChSYB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"
                    alt=""
                  />
                  <img
                    className="download_app_img"
                    src="https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr className="FinalFooterLine" />
            <div className="FinalFooterWrapper">
              <div className="FinalFooter">
                <img
                  className="FinalFooterImg"
                  src="https://www.burgerking.in/static/media/BK_LOGO_PRIMARY_%C2%AE_ST_MAYO_EGG_WHITE_RGB.07fd3a3a.PNG"
                  alt=""
                />
                <span className="FinalFooterText">
                  TM & © 2023 BURGER KING COMPANY LLC . All Rights Reserved.
                </span>
                <div>
                  <img
                    className="FinalFooterIcons"
                    src="https://www.burgerking.in/static/media/facebook.ff3fbd2c.svg"
                    alt=""
                  />
                  <img
                    className="FinalFooterIcons"
                    src="https://www.burgerking.in/static/media/instagram.a9d8bd71.svg"
                    alt=""
                  />
                  <img
                    className="FinalFooterIcons"
                    src="https://www.burgerking.in/static/media/twitter.7db1e7d8.svg"
                    alt=""
                  />
                  <img
                    className="FinalFooterIcons"
                    src="https://www.burgerking.in/static/media/youtube.1ff5f219.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="Mobile_Footer_Wrapper">
          <div className="home">
            <img
              className="mobileIcons"
              src="https://www.burgerkingdev.in/static/media/home.4d0f929f.svg"
              alt=""
            />
            <span className="MobileBottomText">Home</span>
          </div>
          <div className="king_deals">
            <img
              className="mobileIcons"
              src="https://www.burgerkingdev.in/static/media/offers-inactive.81dcb21f.svg"
              alt=""
            />
            <span className="MobileBottomText">King Deals</span>
          </div>
          <div className="nearly_by_store">
            <img
              className="mobileIcons"
              src="https://www.burgerkingdev.in/static/media/dine-in-black.c32e1cdd.svg"
              alt=""
            />
            <span className="MobileBottomText" onClick={navigateToNearlyby}>
              Nearby store
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
