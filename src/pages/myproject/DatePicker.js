import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

function MyDatePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        selectsStart
        startDate={startDate}
        endDate={endDate}
        showYearDropdown
      />{" "}
      ~{" "}
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        showYearDropdown
      />
    </div>
  );
}

export default MyDatePicker;
