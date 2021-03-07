import Form from "./components/Form/Form";
import Theme from "./components/Theme/Theme";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/Theme/GlobalStyles";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <GlobalStyles />
      <Form />
    </MuiThemeProvider>
  );
}

export default App;
