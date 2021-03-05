import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LimitedWordTextarea } from "../WordCountForm/WordCountForm";

const Form = () => {
  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <LimitedWordTextarea limit={5} value="Hello there!" />
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
