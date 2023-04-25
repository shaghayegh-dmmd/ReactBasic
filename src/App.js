import "./index.css";
import Post from "./Post";
import { useState, useEffect } from "react";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';
import { ThemeProvider } from "@material-ui/core/styles";
import CustomTheme from "./assets/CustomTheme";
import "./assets/fonts/fontiran.css";
import { Typography } from "@material-ui/core";
import { Button, Slider } from "@mui/material";
import { Stack } from "@mui/material";




const Base_Url = "https://jsonplaceholder.typicode.com";
const Header = {"Content-Type":"applicayion/json"};
// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});



function App() {
  const[arrayData,setArrayData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`${Base_Url}/Posts/`, {
      method:"GET",
      headers:Header,
    })
    .then((Response) => Response.json())
    .then((data) => setArrayData(data))
    .catch((error) => console.log(error.messege));
  }

  return (
   <>{arrayData && arrayData.map(element => <Post data={element} />)}
      <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
        <Typography variant="h1">شقایق</Typography>
        <form className="flex justify-center items-center">
          <div className="bg-red-500 flex-col">
            <label htmlFor="item">New item</label>
            <input type="text" id="item" className="bg-tahiti border-2 "></input>
            <Button variant="contained">Submit</Button>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <Stack spacing={{ xs: 1, sm: 10 }} direction="row"  flexWrap="wrap">
            <Button variant="contained">Item 1</Button>
              <Button variant="contained">button 2</Button>
              <Button variant="contained">Long content</Button>
              <Button  variant="outlined">test3</Button>
            </Stack>
          </div>
        </form>
      </StylesProvider>
    </ThemeProvider>
    </>
 
  );
}

export default App;


