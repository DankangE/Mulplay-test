import { orange } from "@mui/material/colors";
import React, { useState, useEffect } from "react";

function CheckboxList() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
  });
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const [checkbox6, setCheckbox6] = useState(false);
  const [checkbox7, setCheckbox7] = useState(false);
  const [checkbox8, setCheckbox8] = useState(false);
  const [checkbox9, setCheckbox9] = useState(false);
  const [checkbox10, setCheckbox10] = useState(false);

  const handleCheckboxChange = (name) => {
    setCheckboxes({
      ...checkboxes,
      [name]: !checkboxes[name],
    });
  };

  useEffect(() => {
    if (checkbox1) {
      document.getElementById("lbl1").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("lbl1").style.backgroundColor = "white";
    }

    if (checkbox2) {
      document.getElementById("lbl2").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("lbl2").style.backgroundColor = "white";
    }

    if (checkbox3) {
      document.getElementById("lbl3").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("lbl3").style.backgroundColor = "white";
    }

    if (checkbox4) {
      document.getElementById("lbl4").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("lbl4").style.backgroundColor = "white";
    }

    if (checkbox5) {
      document.getElementById("lbl5").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("lbl5").style.backgroundColor = "white";
    }

    if (checkbox6) {
      document.getElementById("lbl6").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("lbl6").style.backgroundColor = "white";
    }

    if (checkbox7) {
      document.getElementById("lbl7").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("lbl7").style.backgroundColor = "white";
    }

    if (checkbox8) {
      document.getElementById("lbl8").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("lbl8").style.backgroundColor = "white";
    }

    if (checkbox9) {
      document.getElementById("lbl9").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("lbl9").style.backgroundColor = "white";
    }

    if (checkbox10) {
      document.getElementById("lbl10").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("lbl10").style.backgroundColor = "white";
    }
  }, [
    checkbox1,
    checkbox2,
    checkbox3,
    checkbox4,
    checkbox5,
    checkbox6,
    checkbox7,
    checkbox8,
    checkbox9,
    checkbox10,
  ]);
  // 전체 스타일
  const checkboxContainer = {
    marginTop: "10px",
    display: "grid", // display 속성을 "grid"로 변경
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", // 5개의 열
    gridTemplateRows: "1fr 1fr", // 2개의 행
  };
  // 레이블 스타일
  const labelStyle = {
    width: "110px",
    height: "50px",
    border: "1px solid #d1d1d1",
    borderRadius: "50px",
    margin: "0 10px 10px 0",
    cursor: "pointer",
  };
  const pStyle = {
    // <p> 태그 스타일
    margin: "0 auto",
    color: "#555",
    fontSize: "16px",
    fontWeight: "500",
  };

  const checkboxStyle = {
    display: "none",
  };

  return (
    <div style={checkboxContainer}>
      <label style={labelStyle} id="lbl1">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox1}
          onChange={() => setCheckbox1(!checkbox1)}
          id="checkbox1"
        />
        <p style={pStyle}>Java </p>
      </label>
      <label style={labelStyle} id="lbl2">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox2}
          onChange={() => setCheckbox2(!checkbox2)}
          id="checkbox2"
        />
        <p style={pStyle}>Linux</p>
      </label>
      <label style={labelStyle} id="lbl3">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox3}
          onChange={() => setCheckbox3(!checkbox3)}
          id="checkbox3"
        />
        <p style={pStyle}>Android</p>
      </label>
      <label style={labelStyle} id="lbl4">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox4}
          onChange={() => setCheckbox4(!checkbox4)}
          id="checkbox4"
        />
        <p style={pStyle}>IOS</p>
      </label>
      <label style={labelStyle} id="lbl5">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox5}
          onChange={() => setCheckbox5(!checkbox5)}
          id="checkbox5"
        />
        <p style={pStyle}>PHP</p>
      </label>
      <label style={labelStyle} id="lbl6">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox6}
          onChange={() => setCheckbox6(!checkbox6)}
          id="checkbox6"
        />
        <p style={pStyle}>Spring</p>
      </label>
      <label style={labelStyle} id="lbl7">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox7}
          onChange={() => setCheckbox7(!checkbox7)}
          id="checkbox7"
        />
        <p style={pStyle}>mariadb</p>
      </label>
      <label style={labelStyle} id="lbl8">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox8}
          onChange={() => setCheckbox8(!checkbox8)}
          id="checkbox8"
        />
        <p style={pStyle}>react.js</p>
      </label>
      <label style={labelStyle} id="lbl9">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox9}
          onChange={() => setCheckbox9(!checkbox9)}
          id="checkbox9"
        />
        <p style={pStyle}>next.js</p>
      </label>
      <label style={labelStyle} id="lbl10">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox10}
          onChange={() => setCheckbox10(!checkbox10)}
          id="checkbox10"
        />
        <p style={pStyle}>typescript</p>
      </label>
    </div>
  );
}

export default CheckboxList;
