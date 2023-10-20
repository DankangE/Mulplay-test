import React, { useState } from "react";

function CheckboxExample() {
  const [newChecked, setNewChecked] = useState(false);
  const [renewChecked, setRenewChecked] = useState(false);

  const handleCheckboxChange = (name) => {
    if (name === "new") {
      setNewChecked(!newChecked);
      setRenewChecked(false);
    } else if (name === "renew") {
      setNewChecked(false);
      setRenewChecked(!renewChecked);
    }
  };

  const checkboxContainer = {
    display: "flex",
    marginTop: "10px",
  };

  const labelStyle = {
    width: "122px",
    height: "50px",
    color: "#555",
    fontSize: "16px",
    fontWeight: "500",
    border: "1px solid #d1d1d1",
    borderRadius: "50px",
    margin: "0 10px 0 0",
    backgroundColor: newChecked ? "#EE833E" : "white",
    cursor: "pointer",
  };
  const labelStyle2 = {
    width: "122px",
    height: "50px",
    color: "#555",
    fontSize: "16px",
    fontWeight: "500",
    border: "1px solid #d1d1d1",
    borderRadius: "50px",
    margin: "0 10px 0 0",
    backgroundColor: renewChecked ? "#EE833E" : "white",
    cursor: "pointer",
  };
  const pStyle = {
    // <p> 태그 스타일
    margin: "0 auto",
  };
  const checkboxStyle = {
    display: "none",
  };

  return (
    <div style={checkboxContainer}>
      <label onChange={handleCheckboxChange} for="new" style={labelStyle}>
        <p style={pStyle}>신규 </p>
        <input
          type="checkbox"
          checked={newChecked}
          onChange={() => handleCheckboxChange("new")}
          style={checkboxStyle}
          id="new"
        />
      </label>

      <label onChange={handleCheckboxChange} for="renew" style={labelStyle2}>
        <p style={pStyle}>리뉴얼</p>
        <input
          type="checkbox"
          checked={renewChecked}
          onChange={() => handleCheckboxChange("renew")}
          style={checkboxStyle}
          id="renew"
        />
      </label>
    </div>
  );
}

export default CheckboxExample;
