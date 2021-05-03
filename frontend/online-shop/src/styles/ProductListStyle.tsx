import { makeStyles } from "@material-ui/core";

export const useProductListStyles = makeStyles({
  productList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%",
    paddingBottom: "3%",
  },
  header: {
    display: "block",
  },
  h1: {
    display: "inline-flex",
    marginLeft: "11.5%",
    fontSize: "50px",
  },
  shoppingCartIcon: {},
  body: {
    backgroundColor: "gray",
  },
});
