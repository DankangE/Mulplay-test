import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "./Button";

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
    btnColor: theme.palette.augmentColor({
      color: {
        main: "#EE833E", // 메인 색상
        contrastText: "#fff", // 텍스트 색상
        dark: "#DE8D42", // 호버 색상
      },
      name: "btnColor",
    }),
  },
});

function Fundingbtn() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="btnColor" pill>
        <span className="btn-text">펀딩하기</span>
      </Button>
    </ThemeProvider>
  );
}

function Nextbtn() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{
          margin: "50px 0",
          position: "absolute",
          bottom: "-150px",
          right: "231px",
        }}
        variant="contained"
        color="btnColor"
        pill
      >
        <span className="btn-text">다음 단계</span>
      </Button>
    </ThemeProvider>
  );
}

export { Fundingbtn, Nextbtn };
