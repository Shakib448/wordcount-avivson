import {
  Box,
  Container,
  Grid,
  FormGroup,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 20px",
    position: "relative",
  },
  formControl: {
    marginBottom: "15px",
  },
  copyBtn: {
    position: "absolute",
    top: 485,
    right: 450,
  },
});

const Form = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Container>
          <Grid container direction="row" justify="center" spacing={8}>
            <Grid item md={6} sm={12} lg={6} xs={12}>
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
            <Grid container md={5} sm={12} lg={4} xs={12} spacing={4}>
              <Grid item>
                <Typography variant="h5">Word Count</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Joker Count</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Button
            className={classes.copyBtn}
            variant="contained"
            color="primary"
          >
            Copy
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Form;
