import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Textarea from "react-textarea-count";

// const useStyles = makeStyles((theme) => ({

// }))

const Form = () => {
  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Textarea countLimit={100} countShow={100} />
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
