import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function ColorTabs( {tab1, tab2, tab3, tab4, tab5, fontSize} ) {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        
      >
{/*         
        <Tab value="one" label={tab1} style={{ fontSize: `${fontSize}px`}}/>
        <Tab value="two" label={tab2} style={{ fontSize: `${fontSize}px`}}/>
        <Tab value="three" label={tab3} style={{ fontSize: `${fontSize}px`}}/> */}
        {tab1 ? <Tab value="one" label={tab1} style={{ fontSize: `${fontSize}px`}}/> : null}
        {tab2 ? <Tab value="two" label={tab2} style={{ fontSize: `${fontSize}px`}}/> : null}
        {tab3 ? <Tab value="three" label={tab3} style={{ fontSize: `${fontSize}px`}}/> : null}
        {tab4 ? <Tab value="four" label={tab4} style={{ fontSize: `${fontSize}px`}}/> : null}
        {tab5 ? <Tab value="five" label={tab5} style={{ fontSize: `${fontSize}px`}}/> : null} {/* Tab 추가 시에 value값, label값 수정 */}
      </Tabs>
    </Box>
  );
}

let theme = createTheme({
    // Theme customization goes here as usual, including tonalOffset and/or
    // contrastThreshold as the augmentColor() function relies on these
    shape: {
      pillRadius: 10
    }
  });


  theme = createTheme(theme, {
    // Custom colors created with augmentColor go here
    palette: {
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
        primary: '#EE833E',
        secondary: '#000',
        disabled: '#4caf50',
        hint: '#ffc107',
        myTextColor : '#039be5'
      }
    },
    
  });

  function Fundingtab( {text1, text2, text3, text4, text5, size} ) {
    return (
      <ThemeProvider theme={theme}>
          <ColorTabs tab1={text1} tab2={text2} tab3={text3} tab4={text4} tab5={text5} fontSize={size}/>
      </ThemeProvider>
    );
  }

export default Fundingtab;