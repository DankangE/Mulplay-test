import React from "react";
import { useState, useEffect } from "react";
import "./Funding.css";
import rewardData from "../../data/rewardData.json";
import InputNumber from "./InputNumber";
import PropTypes from 'prop-types';
// 오른쪽 장바구니

// 리워드 박스
import { Card, Space } from 'antd';
import Box from "@mui/material/Box";
import Canvas from "./Canvas";


// 리워드 선택 박스
const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(1.5)" }}
    >
      •
    </Box>
  );
  
  const card1 = (
    <Space direction="vertical" size={16}>
      <Card
        title="추가 후원하기"
        extra={<a href="#">1000+</a>}
        style={{
          width: 300,
        }}
      >
        <InputNumber />
        <br/>
        <br/>
        <Canvas categori={3} name={"후원금액"} info={"리워드 상관없이 후원하기"} price={1000}/>
      </Card>
    </Space>
  );
  
  const card2 = (
    <Space direction="vertical" size={16}>
      <Card
        title="베이직"
        extra={<a href="#">1000+</a>}
        style={{
          width: 300,
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <br/>
        <Canvas categori={rewardData[1].reward_categori} name={rewardData[1].reward_name} info={rewardData[1].reward_info} price={rewardData[1].reward_price}/>
      </Card>
    </Space>
  );
  const card3 = (
    <Space direction="vertical" size={16}>
      <Card
        title="얼리버드"
        extra={<a href="#">1000+</a>}
        style={{
          width: 300,
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <br/>
        <Canvas categori={rewardData[2].reward_categori} name={rewardData[2].reward_name} info={rewardData[2].reward_info} price={rewardData[2].reward_price}/>
      </Card>
    </Space>
  );
  const card4 = (
    <Space direction="vertical" size={16}>
      <Card
        title="슈퍼얼리버드"
        extra={<a href="#">1000+</a>}
        style={{
          width: 300,
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <br/>
        <Canvas categori={rewardData[5].reward_categori} name={rewardData[5].reward_name} info={rewardData[5].reward_info} price={rewardData[5].reward_price}/>
      </Card>
    </Space>
  );
  
  
  function OutlinedCard({ fcard }) {


    OutlinedCard.prototypes = {
        fcard: PropTypes.number.isRequired
      }

      var state = 'null'
      if (fcard == 0) {
        state = 'one';
      }
      if (fcard == 1) {
        state = 'two';
      }
      if (fcard == 2) {
        state = 'three';
      }
      if (fcard == 3) {
        state = 'four';
      }
  
    return (
      <Box sx={{ minWidth: 275, maxWidth: 320 }}>
        <Card rewardno1={1} sx={{ borderRadius: 3 }} variant="outlined">
        {
        { 
           one : card1,
           two : card2,
           three : card3,
           four : card4
        }[state]
      }
          
        </Card>
      </Box>
    );
  }

  export default OutlinedCard;