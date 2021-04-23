import { createMuiTheme } from "@material-ui/core";

const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#004E93",
    },
  },
  typography: {
    fontFamily: ["Oswald", "Sans-Serif"].join(","),
  },
});
export default CustomTheme;
