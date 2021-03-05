import { Box, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LimitedWordTextarea } from "../WordCountForm/WordCountForm";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  items: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
});

const Form = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Grid item className={classes.items}>
          <LimitedWordTextarea />
        </Grid>
      </Box>
    </>
  );
};

export default Form;
