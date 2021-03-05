import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

const Form = () => {
  return (
    <Box>
      <Grid container justify="center">
        <Grid item>
          <Typography align="center" variant="h3">
            This is form
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
