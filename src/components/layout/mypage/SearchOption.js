import React, { useState } from "react";

const SearchOption = ({ stateText, allStats }) => {
  // 버튼을 클릭하여 필터링을 적용하고 setText에 일치하는 setState 값을 보여줄 상태
  const [filteredStats, setFilteredStats] = useState(allStats);

  // 버튼을 클릭할 때 필터링 적용
  const handleButtonClick = (text) => {
    const filtered = allStats.filter((stat) =>
      stat.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredStats(filtered);
    stateText(text);
  };

  return (
    <div className="searchOption">
      <div>
        {allStats.map((stat) => (
          <button key={stat} onClick={() => handleButtonClick(stat)}>
            {stat}
          </button>
        ))}
      </div>
      <div>
        <p>현재 선택된 상태: {stateText}</p>
      </div>
      <div>
        {/* 필터링된 상태 보여주기 */}
        <ul>
          {filteredStats.map((filteredStat) => (
            <li key={filteredStat}>{filteredStat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchOption;
