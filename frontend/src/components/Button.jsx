import React from "react";

      

const Button = ({ label, onclick, size = "default", variant = "primary" }) => {
  return (
    <button  className={`g-btn ${size} ${variant} `} onClick={onclick}>
      {label}
    </button>
  );
};

export default Button;
