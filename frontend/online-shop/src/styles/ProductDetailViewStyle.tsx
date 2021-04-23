import { makeStyles } from "@material-ui/core";

export const useProductDetailViewStyles = makeStyles({
  everything: {
    textAlign: "center",
    marginTop: "5%",
    display: "block",
  },
  title: {
    fontSize: "20px",
    marginTop: "1%",
    marginBottom: "0.5%",
    display: "block !important",
  },
  image_product: {
    display: "table",
    clear: "both",
    float: "left",
  },
  product: {
    display: "inline",
    position: "relative",
    float: "right",
  },
  imageContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    maxWidth: "20%",
    overflow: "hidden",
    borderRadius: "20px",
  },
  image: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    transition: "0.5s all ease-in-out",
    "&:hover": {
      transform: "scale(1.35)",
    },
  },
  button: {
    marginTop: "1%",
  },
});
