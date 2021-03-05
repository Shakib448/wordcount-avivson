import { Box, Container, Grid, FormGroup, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
  formControl: {
    marginBottom: "15px",
  },
});

const Form = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Container>
          <Grid container justify="center">
            <Grid item md={6} sm={12} lg={6} className={classes.items}>
              <FormGroup>
                <TextField
                  id="filled-basic"
                  label="Count of joker words with first 70 words"
                  variant="filled"
                  className={classes.formControl}
                />
                <TextField
                  id="filled-basic"
                  label="What You Get 3 sec. 7 words"
                  variant="filled"
                  className={classes.formControl}
                />
                <TextField
                  id="filled-basic"
                  label="Why You?"
                  variant="filled"
                  className={classes.formControl}
                />
                <TextField
                  id="filled-basic"
                  label="Conclusion 7 sec. 17 words"
                  variant="filled"
                  className={classes.formControl}
                />
                <TextField
                  label="Explanation"
                  multiline
                  rows={4}
                  rowsMax={8}
                  variant="filled"
                  className={classes.formControl}
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Form;
