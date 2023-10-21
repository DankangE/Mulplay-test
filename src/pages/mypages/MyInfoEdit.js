import * as React from "react";
import Stack from "@mui/joy/Stack";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./MyInfoEdit.css";
import profile from "../../assets/image/profile.png";
import profile1 from "../../assets/image/profile1.png";
import profile2 from "../../assets/image/profile2.png";
import profile3 from "../../assets/image/profile3.png";
import profile4 from "../../assets/image/profile4.png";

import user from "../../data/userData.json";

import InputMedium from "../../components/elements/InputMedium";

const images = [profile1, profile2, profile3, profile4];

export default function MyInfoEdit() {
  const loggedInUserId = 1;

  const loggedInUser = user.find((user) => user.user_no === loggedInUserId);

  // 기본값을 "null"로 설정하여 초기값이 undefined인 경우를 방지
  const [userName, setUserName] = React.useState(
    loggedInUser ? loggedInUser.user_name : "null"
  );
  const [userPhone, setUserPhone] = React.useState(
    loggedInUser ? loggedInUser.user_phone : "null"
  );
  const [userAddress, setUserAddress] = React.useState(
    loggedInUser ? loggedInUser.user_address : "null"
  );
  const [selectedImage, setSelectedImage] = React.useState(profile);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    setUserName(loggedInUser.user_name);
    setUserPhone(loggedInUser.user_phone);
    setUserAddress(loggedInUser.user_address);

    alert("회원정보가 수정되었습니다.");
  };

  const handleDelete = () => {
    const userIndex = user.findIndex((user) => user.user_no === loggedInUserId);

    if (userIndex !== -1) {
      user.splice(userIndex, 1);
      alert("회원탈퇴가 완료되었습니다.");
    }
  };

  // const handleImageUpload = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     let imgFile = event.target.files[0];
  //     let reader = new FileReader();
  //     reader.onloadend = () => {
  //       setSelectedImage(reader.result);
  //     };
  //     reader.readAsDataURL(imgFile);
  //   }
  // };
  return (
    <form className="myInfoEdit" onSubmit={handleSubmit}>
      <Stack spacing={1}>
        <ul className="editForm">
          <li>
            <h1 className="editHeader">회원정보수정</h1>
          </li>

          <li className="imgEdit">
            <span>프로필 이미지</span>
            <div>
              <img src={selectedImage} alt="profile-img" />
              <button type="button" onClick={() => setModalOpen(true)}>
                이미지변경
              </button>
            </div>
          </li>
          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                borderRadius: 10,
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
              }}
            >
              <div className="imageSelection">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`selectable-img-${index}`}
                    onClick={() => {
                      setSelectedImage(image); // 클릭 시 해당 이미지로 변경
                      setModalOpen(false); // 클릭 후 모달 창 닫기
                    }}
                  />
                ))}
              </div>
            </Box>
          </Modal>
          <li>
            <span>아이디</span>
            <InputMedium placeholder={loggedInUser.user_id} disabled />
          </li>
          <li>
            <span>이름</span>
            <InputMedium
              name="user_name"
              placeholder={"이름을 입력하세요"}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </li>
          <li>
            <span>전화번호</span>
            <InputMedium
              name="user_phone"
              placeholder={"전화번호를 입력하세요"}
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              required
            />
          </li>
          <li>
            <span>주소</span>
            <InputMedium
              name="user_address"
              placeholder={"주소를 입력하세요"}
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              required
            />
          </li>
          <li className="buttonSection">
            <button type="submit" className="editButton">
              회원정보수정
            </button>

            <button
              type="button"
              className="deleteButton"
              onClick={handleDelete}
            >
              회원탈퇴
            </button>
          </li>
        </ul>
      </Stack>
    </form>
  );
}
