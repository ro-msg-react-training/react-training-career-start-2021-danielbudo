import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetailedView from "./components/ProductDetailedView";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import StandardTheme from "./themes/StandardTheme";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
// import ProductItem from "./components/ProductItem";

function App() {
  return (
    <ThemeProvider theme={StandardTheme}>
      <CssBaseline>
        <BrowserRouter>
          <Switch>
            <Route path="/products/:id" component={ProductDetailedView} />
            <Route exact path="/">
              <Redirect to="/products" />
            </Route>
            <Route path="/products" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/" render={() => <div>404: Page not found</div>} />
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
