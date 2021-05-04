import { makeStyles } from "@material-ui/core";

export const useProductItemStyles = makeStyles((CustomTheme) => ({
  productDetail: {
    verticalAlign: "middle",
    display: "inline",
    fontSize: "17px",
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
    fontFamily: CustomTheme.typography.fontFamily,
    fontVariant: "Extra-light 200",
    fontSize: "80%",
  },
  product: {
    height: "inherit",
    flexBasis: "16%",
    color: CustomTheme.palette.primary.main,
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
}));
