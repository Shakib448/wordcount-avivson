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
import { CopyToClipboard } from "react-copy-to-clipboard";
import { lengthCount, textData } from "../../Utils/Utils";

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

  const [{ joker, jokerMatchCount }, setJoker] = useState("");
  const [{ get, getMatchCount }, setGet] = useState("");
  const [{ why, whyMatchCount }, setWhy] = useState("");
  const [{ conclusion, conclusionMatchCount }, setConclusion] = useState("");
  const [{ explanation, explanationMatchCount }, setExplanation] = useState("");

  const wordCount = (text, name) => {
    if (name === "joker") {
      setJoker({
        joker: textData(text),
        jokerMatchCount: 0,
      });
    } else if (name === "get") {
      setGet({ get: textData(text), getMatchCount: 0 });
    } else if (name === "why") {
      setWhy({ why: textData(text), whyMatchCount: 0 });
    } else if (name === "conclusion") {
      setConclusion({
        conclusion: textData(text),
        conclusionMatchCount: 0,
      });
    } else if (name === "explanation") {
      setExplanation({
        explanation: textData(text),
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
                  name="joker"
                  onChange={(e) => wordCount(e.target.value, "joker")}
                />
                <TextField
                  id="filled-basic"
                  label="What You Get 3 sec.7 words"
                  variant="filled"
                  className={classes.formControl}
                  name="get"
                  onChange={(e) => wordCount(e.target.value, "get")}
                />
                <TextField
                  id="filled-basic"
                  label="Why You?"
                  variant="filled"
                  name="why"
                  className={classes.formControl}
                  onChange={(e) => wordCount(e.target.value, "why")}
                />
                <TextField
                  id="filled-basic"
                  label="Conclusion 7 sec. 17 words"
                  variant="filled"
                  name="conclusion"
                  className={classes.formControl}
                  onChange={(e) => wordCount(e.target.value, "conclusion")}
                />
                <TextField
                  label="Explanation"
                  multiline
                  rows={4}
                  rowsMax={8}
                  variant="filled"
                  name="explanation"
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
                      {lengthCount(joker)}
                    </ListItem>
                    <ListItem
                      className={clsx(classes.countItems, {
                        [classes.countItemsOk]: get?.length >= 7,
                        [classes.countItemsNotOk]: get?.length >= 8,
                      })}
                    >
                      {lengthCount(get)}
                    </ListItem>
                    <ListItem
                      className={clsx(classes.countItems, {
                        [classes.countItemsOk]: why?.length >= 7,
                        [classes.countItemsNotOk]: why?.length >= 8,
                      })}
                    >
                      {lengthCount(why)}
                    </ListItem>
                    <ListItem
                      className={clsx(classes.countItems, {
                        [classes.countItemsOk]: conclusion?.length >= 7,
                        [classes.countItemsNotOk]: conclusion?.length >= 8,
                      })}
                    >
                      {lengthCount(conclusion)}
                    </ListItem>
                    <ListItem
                      className={clsx(classes.countItems, {
                        [classes.countItemsOk]: explanation?.length >= 7,
                        [classes.countItemsNotOk]: explanation?.length >= 8,
                      })}
                    >
                      {lengthCount(explanation)}
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h5">Joker Count</Typography>
                <Grid container justify="center">
                  <List>
                    <ListItem className={classes.countItems}>
                      {lengthCount(jokerMatchCount)}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {lengthCount(getMatchCount)}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {lengthCount(whyMatchCount)}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {lengthCount(conclusionMatchCount)}
                    </ListItem>
                    <ListItem className={classes.countItems}>
                      {lengthCount(explanationMatchCount)}
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <CopyToClipboard text={(get, why)}>
                <Button
                  className={classes.copyBtn}
                  variant="contained"
                  color="primary"
                >
                  Copy Content
                </Button>
              </CopyToClipboard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Form;
