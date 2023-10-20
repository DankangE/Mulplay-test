import React, { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import tdataData from "../../data/tdataData.json";
import projectData from "../../data/projectData.json";
import rewardData from "../../data/rewardData.json";
import PropTypes from 'prop-types';
import "./Canvas.css";


const Canvas = ({categori, name, info, price}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  Canvas.prototypes = {
    categori: PropTypes.number.isRequired
  }
  

  var state = 'null'
  if (categori == 0) {
    state = 'one';
  }
  if (categori == 1) {
    state = 'two';
  }
  if (categori == 2) {
    state = 'three';
  }
  if (categori == 3) {
    state = 'four';
  }

  // const [cartItems, setCartItems] = useState(initialCartItem);
  // const totlalCount = cartItems.reduce(
  //   (acc, cur) => cur.price * cur.count + acc, 0)
  //   .toLocaleString();

  // 브라우더의 로컬 스토리지에 장바구니 목록을 저장하는 함수
  // const saveToLocalStorage = () => {
  //   localStorage.setItem('cartState', JSON.stringify(cartItems));  // JSON.stringify(): JSON 문자열 반환 
  //   alert('브라우저에 결재 정보가 저장되었습니다.');
  // };

  return (
    
    <div className="canvas">
      <Button type="primary" onClick={showDrawer} style={{
              color: '#fff',
              backgroundColor: '#EE833E'
            }} >
        리워드 담기
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="reward-cart-info">
          <div>
          {
        { 
           one : <p>베이직</p>,
           two : <p>얼리버드</p>,
           three : <p>슈퍼얼리버드</p>
        }[state]
      }
          </div>
          <div>
              리워드 상품: {name}
          </div>
          <div>
              리워드 설명: {info}
          </div>
          <div>
              가격: {price}원
          </div>
        </div>
        <div className="total">
              <div className="total-price">
                <p>총 결제금액</p>
                <p className="font-bold" id="total-count">
                  {/* .reduce() 배열의 각 요소에 대하여 callback을 실행하여 1개의 출력 결과를 생성 */}
                  {price}원
                </p>
              </div>
              <a
                id="payment-btn"
                href="./cart"
                className="payment-btn"
              >
                결제하기
              </a>
            </div>
      </Drawer>
    </div>
  );
};

export default Canvas;