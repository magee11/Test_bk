import React from "react";
import "./style.css";
const AdditionalItems = () => {
  const Additional_List = [
    "American Cheese",
    "Chicken Whooper",
  ];
  return (
    <div>
      <div className="AdditionalIcredients">
        <span>Additonal Incredients</span>
        {Additional_List.map((items) => (
          <div className="AdditonalItems">
            <div>
              {/* <div className="AdditonalItemImg">
                  <img
                    src="https://img.freepik.com/free-vector/cheese-isolated-cartoon-art-illustration_56104-624.jpg?w=360"
                    alt=""
                  />
                </div> */}
              <div className="AdditonalItemTitle">
                <span>{items}</span>
                <span>$2</span>
              </div>
            </div>

            <div className="AdditonalItemAdd">Add+</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalItems;
