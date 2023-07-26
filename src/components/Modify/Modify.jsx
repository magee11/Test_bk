import React from "react";
import "./style.css";
const Modify = () => {
  const Modify_List = ["Onion", "Lettuce", "Tomoto"];
  return (
    <div>
      <div className="Modify">
        <span>Modify</span>
        {Modify_List.map((items) => (
          <div className="ModifyItems">
            <div>
              <div className="AdditonalItemTitle">
                <span>{items}</span>
              </div>
            </div>

            <div className="modifyCounter">
              <span className="CounterBtn">+</span>
              <span>1</span>
              <span className="CounterBtn">-</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modify;
