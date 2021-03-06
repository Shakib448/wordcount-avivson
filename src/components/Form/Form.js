import {
  Box,
  Container,
  Grid,
  FormGroup,
  TextField,
  Typography,
  Button,
  List,
  ListItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState, useCallback } from "react";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 20px",
  },
  formControl: {
    marginBottom: "15px",
  },
  countArea: {
    position: "relative",
  },
  copyBtn: {
    position: "absolute",
    top: 405,
    right: 270,
  },
  countItems: {
    fontSize: 25,
    color: "#543210",
    marginBottom: 20,
  },
});

const Form = () => {
  const classes = useStyles();

  const [joker, setJoker] = useState(0);
  const [get, setGet] = useState(0);
  const [why, setWhy] = useState(0);
  const [conclusion, setConclusion] = useState(0);
  const [explanation, setExplanation] = useState(0);

  const wordCount = (text, name) => {
    if (name === "joker") {
      setJoker(text?.split(" ").filter(Boolean));
    } else if (name === "get") {
      setGet(text?.split(" ").filter(Boolean));
    } else if (name === "why") {
      setWhy(text?.split(" ").filter(Boolean));
    } else if (name === "conclusion") {
      setConclusion(text?.split(" ").filter(Boolean));
    } else if (name === "explanation") {
      setExplanation(text?.split(" ").filter(Boolean));
    }
  };

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
                  onChange={(e) => wordCount(e.target.value, "joker")}
                />
                <TextField
                  id="filled-basic"
                  label="What You Get 3 sec.7 words"
                  variant="filled"
                  className={classes.formControl}
                  onChange={(e) => wordCount(e.target.value, "get")}
                />
                <TextField
                  id="filled-basic"
                  label="Why You?"
                  variant="filled"
                  className={classes.formControl}
                  onChange={(e) => wordCount(e.target.value, "why")}
                />
                <TextField
                  id="filled-basic"
                  label="Conclusion 7 sec. 17 words"
                  variant="filled"
                  className={classes.formControl}
                  onChange={(e) => wordCount(e.target.value, "conclusion")}
                />
                <TextField
                  label="Explanation"
                  multiline
                  rows={4}
                  rowsMax={8}
                  variant="filled"
                  className={classes.formControl}
                  onChange={(e) => wordCount(e.target.value, "explanation")}
                />
              </FormGroup>
            </Grid>
            <Grid
              container
              md={5}
              sm={12}
              lg={4}
              xs={12}
              spacing={4}
              className={classes.countArea}
            >
              <Grid item>
                <Typography variant="h5">Word Count</Typography>
                <Grid container justify="center">
                  <List>
                    <ListItem className={classes.countItems}>
                      {joker.length > 0 ? joker.length : 0}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {get.length > 0 ? get.length : 0}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {why.length > 0 ? why.length : 0}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {conclusion.length > 0 ? conclusion.length : 0}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {explanation.length > 0 ? explanation.length : 0}
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h5">Joker Count</Typography>
              </Grid>
              <Button
                className={classes.copyBtn}
                variant="contained"
                color="primary"
              >
                Copy Content
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Form;
