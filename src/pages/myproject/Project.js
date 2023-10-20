// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Tabs, Tab, Typography } from "@mui/material";
//import { Routes, Route, useParams } from "react-router-dom";

//import NextBtn from "./NextBtn";
import "./Project.css";
import BasicInfo from "./BasicInfo";
import RewardInfo from "./RewardInfo";
import ProjectInfo from "./ProjectInfo";

const ProjectTitle = () => {
  return (
    <div className="procontainer" sx={{ position: "relative" }}>
      <p className="projectitle"> 프로젝트 작성 </p>
    </div>
  );
};

// 메뉴 탭 //

export function CenteredTabs() {
  // const { tabnum } = useParams();

  // const dumptest = tabnum === undefined ? 0 : Number(tabnum);

  // console.log("tabnum >> ", typeof tabnum, " ", tabnum);

  // const [value, setValue] = useState(tabnum === undefined ? 0 : Number(tabnum));

  // useEffect(() => {
  //   setValue(tabnum === undefined ? 0 : Number(tabnum));
  //   console.log("호출한다아~");
  // }, [tabnum]);

  // console.log("value >> ", typeof value, " ", value);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "absolute",
        top: 270,
        left: 0,
      }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab sx={{ fontSize: 18, fontWeight: 600 }} label="기본 정보" />
        <Tab sx={{ fontSize: 18, fontWeight: 600 }} label="리워드 정보" />
        <Tab sx={{ fontSize: 18, fontWeight: 600 }} label="프로젝트 정보" />
      </Tabs>

      {value === 0 && (
        <Typography sx={{ p: 2 }}>
          <BasicInfo />
        </Typography>
      )}

      {value === 1 && (
        <Typography sx={{ p: 2 }}>
          <RewardInfo />
        </Typography>
      )}

      {value === 2 && (
        <Typography sx={{ p: 2 }}>
          <ProjectInfo />
        </Typography>
      )}
    </Box>
  );
}

// 메뉴 탭 색깔 테마 //

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
      secondary: "#888888",
      disabled: "#4caf50",
      hint: "#ffc107",
      myTextColor: "#039be5",
    },
  },
});

// function NextPage() {
//   return (
//     <Routes>
//       <Route path="/" element={<NextBtn />} />
//       <Route path="/RewardInfo" element={<RewardInfo />} />
//     </Routes>
//   );
// }

function Project() {
  return (
    <div className="project">
      <ProjectTitle />
      <ThemeProvider theme={theme}>
        <CenteredTabs />
      </ThemeProvider>
    </div>
  );
}

export default Project;
