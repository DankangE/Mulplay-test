import React from "react";
import styled from "styled-components";

const GaugeContainer = styled.div`
  width: 95%;
  margin-bottom: 20px;
  margin-top: 15px;
`;

const MyGauge = styled.div`
  height: 4px;
  background-color: #e0e0de;
  border-radius: 50px;
`;

const Filler = styled.div`
  height: 100%;
  width: ${(props) => `${props.percent}%`};
  max-width: 100%;
  background-color: #ee833e;
  border-radius: inherit;
  text-align: right;
`;

const GaugeLabel = styled.span`
  color: #333333;
  font-weight: bold;
  font-size: 11px;
  width: 50px;
  white-space: nowrap;
`;

const CurrentNum = styled.span`
  padding: 5px;
  color: #ee833e;
  font-weight: bold;
  font-size: 15px;
`;

const GaugeBar = ({ goal, current }) => {
  const percent = Math.floor((current / goal) * 100);
  return (
    <GaugeContainer>
      <CurrentNum>{`${current.toLocaleString()}원 펀딩`}</CurrentNum>{" "}
      <MyGauge>
        <Filler percent={percent} goal={goal}>
          <GaugeLabel>{`달성률 ${percent}%`}</GaugeLabel>
        </Filler>
      </MyGauge>
    </GaugeContainer>
  );
};

export default GaugeBar;
