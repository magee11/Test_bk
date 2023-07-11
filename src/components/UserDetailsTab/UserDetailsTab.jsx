import React from "react";
import "./style.css";
const UserDetailsTab = () => {
  return (
    <div className="userDetails">
      <div className="Img_UserName">
        <div className="userImg">
          <img
            className="ProfileImg"
            src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?size=626&ext=jpg&ga=GA1.1.1432586096.1688362872&semt=ais"
            alt=""
          />
        </div>
        <div className="ProfileText">
          <span className="ProfileName">Test User</span>
          <span className="ProfileNumber">9442497141</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsTab;
