import ProductList from "./components/ProductList";
import ProductDetailedView from "./components/ProductDetailedView";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import CustomTheme from "./themes/CustomTheme";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import EditView from "./components/EditView";

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Provider store={store}>
        <CssBaseline>
          <BrowserRouter>
            <Switch>
              <Route path="/products/:id" component={ProductDetailedView} />
              <Route exact path="/">
                <Redirect to="/products" />
              </Route>
              <Route path="/products" component={ProductList} />
              <Route path="/cart" component={Cart} />
              <Route path="/edit/:id" component={EditView} />
              <Route path="*" component={Error404} />
            </Switch>
          </BrowserRouter>
        </CssBaseline>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
