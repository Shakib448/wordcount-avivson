import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  "@global": {
    "*:focus": {
      outline: 0,
    },
    "h1,h2,h3,h4,h5,h6": {
      fontFamily: "Lato, sans-serif !important",
    },
    "h1, h2": {
      fontWeight: 400,
      lineHeight: 1.3,
    },

    h2: {
      [theme.breakpoints.up("md")]: {
        fontSize: "35px !important",
        fontWeight: "400 !important",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "30px !important",
        fontWeight: "400 !important",
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: "25px !important",
        fontWeight: "400 !important",
      },
    },

    ".MuiTableCell-root": {
      borderBottom: "1px solid rgba(0, 0, 0, 0.12) !important",
    },

    ".MuiTableRow-root": {
      borderBottom: 0,
    },
    ".slick-slider": {
      margin: "0px 10px",
    },
    ".text-white": {
      color: theme.palette.common.white,
    },

    ".greyBcg": {
      background: theme.palette.grey.main,
    },
    ".listItemLeftPadding": {
      paddingTop: `${theme.spacing(1.75)}px !important`,
      paddingBottom: `${theme.spacing(1.75)}px !important`,
      paddingLeft: `${theme.spacing(4)}px !important`,
      [theme.breakpoints.down("sm")]: {
        paddingLeft: `${theme.spacing(4)}px !important`,
      },
      "@media (max-width:  420px)": {
        paddingLeft: `${theme.spacing(1)}px !important`,
      },
    },
    ".container": {
      width: "100%",
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      marginRight: "auto",
      marginLeft: "auto",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 540,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 720,
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 1170,
      },
    },
    ".row": {
      display: "flex",
      flexWrap: "wrap",
      marginRight: -theme.spacing(2),
      marginLeft: -theme.spacing(2),
    },
    ".container-fluid": {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370,
    },

    ".no-decoration": {
      textDecoration: "none",
    },

    ".capitalize": {
      textTransform: "capitalize",
    },

    ".MuiInput-input": {
      paddingLeft: "10px !important",
    },
    ".MuiInputLabel-outlined": {
      fontSize: "17px",
      fontWeight: "bold",
    },
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
