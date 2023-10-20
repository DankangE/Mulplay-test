import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from "./Button";

let theme = createTheme({
    // Theme customization goes here as usual, including tonalOffset and/or
    // contrastThreshold as the augmentColor() function relies on these
    shape: {
      pillRadius: 20
    }
  });


  theme = createTheme(theme, {
    // Custom colors created with augmentColor go here
    palette: {
      btnColor: theme.palette.augmentColor({
        color: {
          main: '#EE833E',  // 메인 색상
          contrastText: '#fff',  // 텍스트 색상
          dark: "#DE8D42",  // 호버 색상
        },
        name: 'btnColor',
      }),
      primary: {
        main: '#EE833E'
      },
      secondary: {
        main: '#EE833E'
      },
      error: {
        main: '#009688'
      },
      text: {
        primary: '#e91e63',
        secondary: '#2196f3',
        disabled: '#4caf50',
        hint: '#ffc107',
        myTextColor : '#039be5'
      }
    },
    
  });

  function Button_funding( {text, fontSize, maxHeight = 40, maxWidth, minWidth, minHeight = 30, borderRadius} ) {
    return (
      <ThemeProvider theme={theme}>
          <Button style={{
              maxWidth,
              maxHeight, 
              minWidth, 
              minHeight,
              fontSize,
              borderRadius,
            }} 
             variant="contained" 
             color="btnColor" 
             pill>
            <span className="btn-text">{text}</span>
          </Button>
      </ThemeProvider>
    );
  }

export default Button_funding;