import { makeStyles } from "@material-ui/core";

export const useProductItemStyles = makeStyles({
  productDetail: {
    verticalAlign: "middle",
    display: "inline",
    fontSize: "17px",
    // paddingBottom: "15px",
    // marginBottom: "15px",
    // border: "1px solid",
  },

  imageContainer: {
    overflow: "hidden",
    borderRadius: "20px",
  },

  image: {
    width: "200px",
    height: "200px",
  },

  category: {
    fontFamily: "Oswald",
    fontVariant: "Extra-light 200",
    fontSize: "80%",
  },
  product: {
    height: "inherit",
    flexBasis: "16%",
    color: "#ffffff",
    marginLeft: "2%",
    marginRight: "2%",
    marginBotton: "7%",
    marginTop: "3%",
    display: "block !important",
    padding: "1% 0 1% 0",
    backgroundColor: "#3B7EFF",
    borderRadius: "7%",
    border: "2px solid transparent",
    "&:hover": {
      cursor: "pointer",
      color: "#000000",
      backgroundColor: "#BEE0FF",
      border: "2px solid #3B7EFF",
    },
  },
});
