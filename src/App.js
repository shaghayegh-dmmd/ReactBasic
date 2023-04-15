import "./index.css";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import CustomTheme from "./assets/CustomTheme";
import "./assets/fonts/fontiran.css";
import { Typography } from "@material-ui/core";
// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});


function App() {
  return (
  <ThemeProvider theme={CustomTheme}>
   <StylesProvider jss={jss}>
    <Typography variant="h1">شقایق</Typography>
      <form className="flex justify-center items-center">
        <div className="bg-red-500 flex-col">
          <label htmlFor="item">New item</label>
          <input type="text" id="item" className="bg-tahiti border-2 "></input>
        </div>
      </form>
    </StylesProvider>
  </ThemeProvider>
  );
}

export default App;


