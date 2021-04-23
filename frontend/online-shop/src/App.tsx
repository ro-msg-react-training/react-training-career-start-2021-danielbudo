import ProductList from "./components/ProductList";
import ProductDetailedView from "./components/ProductDetailedView";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import CustomTheme from "./themes/CustomTheme";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline>
        <BrowserRouter>
          <Switch>
            <Route path="/products/:id" component={ProductDetailedView} />
            <Route exact path="/">
              <Redirect to="/products" />
            </Route>
            <Route path="/products" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
