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
import clsx from "clsx";
import { useState } from "react";

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
    fontWeight: "bold",
  },
  countItemsOk: {
    color: "green !important",
  },
  countItemsNotOk: {
    color: "red !important",
  },
});

const Form = () => {
  const classes = useStyles();

  const [{ joker, jokerMatchCount }, setJoker] = useState(0);
  const [{ get, getMatchCount }, setGet] = useState(0);
  const [{ why, whyMatchCount }, setWhy] = useState(0);
  const [{ conclusion, conclusionMatchCount }, setConclusion] = useState(0);
  const [{ explanation, explanationMatchCount }, setExplanation] = useState(0);

  const wordCount = (text, name) => {
    if (name === "joker") {
      setJoker({ joker: text?.split(" ").filter(Boolean), jokerMatchCount: 0 });
    } else if (name === "get") {
      setGet({ get: text?.split(" ").filter(Boolean), getMatchCount: 0 });
    } else if (name === "why") {
      setWhy({ why: text?.split(" ").filter(Boolean), whyMatchCount: 0 });
    } else if (name === "conclusion") {
      setConclusion({
        conclusion: text?.split(" ").filter(Boolean),
        conclusionMatchCount: 0,
      });
    } else if (name === "explanation") {
      setExplanation({
        explanation: text?.split(" ").filter(Boolean),
        explanationMatchCount: 0,
      });
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
                    <ListItem
                      className={clsx(classes.countItems, {
                        [classes.countItemsOk]: joker?.length >= 7,
                        [classes.countItemsNotOk]: joker?.length >= 8,
                      })}
                    >
                      {joker?.length > 0 ? joker?.length : 0}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {get?.length > 0 ? get?.length : 0}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {why?.length > 0 ? why?.length : 0}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {conclusion?.length > 0 ? conclusion?.length : 0}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {explanation?.length > 0 ? explanation?.length : 0}
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h5">Joker Count</Typography>
                <Grid container justify="center">
                  <List>
                    <ListItem className={classes.countItems}>
                      {jokerMatchCount}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {getMatchCount}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {whyMatchCount}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {conclusionMatchCount}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {explanationMatchCount}
                    </ListItem>
                  </List>
                </Grid>
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
