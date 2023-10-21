import * as React from "react";

import "./MyCategory.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function ColorTabs() {
  const [value, setValue] = React.useState("one");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="myCategory">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
        <Tab
          value="one"
          label="회원 정보 수정"
          sx={{ fontSize: 16 }}
          onClick={() => navigate("myinfoedit")}
        />

        <Tab value="two" label="비밀번호 변경" sx={{ fontSize: 16 }} />
        <Tab
          value="three"
          label="나의 프로젝트"
          sx={{ fontSize: 16 }}
          onClick={() => navigate("myprojectmanage")}
        />
        <Tab
          value="four"
          label="수익관리"
          sx={{ fontSize: 16 }}
          onClick={() => navigate("myproceeds")}
        />
        <Tab
          value="five"
          label="후원한 프로젝트"
          sx={{ fontSize: 16 }}
          onClick={() => navigate("myfundingproject")}
        />
        <Tab
          value="six"
          label="관심 프로젝트"
          sx={{ fontSize: 16 }}
          onClick={() => navigate("mylikeproject")}
        />
        <Tab value="seven" label="문의" sx={{ fontSize: 16 }} />
      </Tabs>
    </Box>
  );
}

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
  shape: {
    pillRadius: 10,
  },
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    primary: {
      main: "#EE833E",
    },
    secondary: {
      main: "#EE833E",
    },
    error: {
      main: "#009688",
    },
    text: {
      primary: "#EE833E",
      disabled: "#4caf50",
      hint: "#ffc107",
      myTextColor: "#039be5",
    },
  },
});

function Fundingtab() {
  return (
    <ThemeProvider theme={theme}>
      <ColorTabs />
    </ThemeProvider>
  );
}

export default Fundingtab;
