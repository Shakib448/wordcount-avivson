import {
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
    margin: "0 25px",
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

  const [{ joker }, setJoker] = useState("");
  const [{ get }, setGet] = useState("");
  const [{ why }, setWhy] = useState("");
  const [{ conclusion }, setConclusion] = useState("");
  const [{ explanation }, setExplanation] = useState("");

  const [jokerMatchCount, setJokerMatchCount] = useState(0);
  const [getMatchCount, setGetMatchCount] = useState(0);
  const [whyMatchCount, setWhyMatchCount] = useState(0);
  const [conclusionMatchCount, setConclusionMatchCount] = useState(0);
  const [explanationMatchCount, setExplanationMatchCount] = useState(0);

  const wordCount = (text, name) => {
    if (name === "joker") {
      watchWords(text, name);
      setJoker({
        joker: textData(text),
      });
    } else if (name === "get") {
      setTimeout(() => {
        watchWords(text, name);
      }, 3000);

      setGet({ get: textData(text) });
    } else if (name === "why") {
      setTimeout(() => {
        watchWords(text, name);
      }, 5000);

      setWhy({ why: textData(text) });
    } else if (name === "conclusion") {
      setTimeout(() => {
        watchWords(text, name);
      }, 7000);

      setConclusion({
        conclusion: textData(text),
      });
    } else if (name === "explanation") {
      watchWords(text, name);
      setExplanation({
        explanation: textData(text),
      });
    }
  };

  const watchWords = (wData, jName) => {
    const watch_words = [
      "You",
      "Dig",
      "Du",
      "Jer",
      "Dit",
      "Deres",
      "you",
      "dig",
      "du",
      "jer",
      "dit",
      "deres",
      "YOU",
      "DIG",
      "DU",
      "JER",
      "DIT",
      "DERES",
    ];
    let data = 0;
    for (let i = 0; i < watch_words.length; i++) {
      if (~wData.indexOf(watch_words[i])) {
        if (watch_words[i] === "you") {
          data = data + 1;
        }

        if (watch_words[i] === "dig") {
          data = data + 1;
        }

        if (watch_words[i] === "du") {
          data = data + 1;
        }
        if (watch_words[i] === "jer") {
          data = data + 1;
        }
        if (watch_words[i] === "dit") {
          data = data + 1;
        }
        if (watch_words[i] === "deres") {
          data = data + 1;
        }
        if (watch_words[i] === "You") {
          data = data + 1;
        }
        if (watch_words[i] === "Dig") {
          data = data + 1;
        }
        if (watch_words[i] === "Du") {
          data = data + 1;
        }
        if (watch_words[i] === "Jer") {
          data = data + 1;
        }
        if (watch_words[i] === "Dit") {
          data = data + 1;
        }
        if (watch_words[i] === "Deres") {
          data = data + 1;
        }
        if (watch_words[i] === "YOU") {
          data = data + 1;
        }
        if (watch_words[i] === "DIG") {
          data = data + 1;
        }
        if (watch_words[i] === "DU") {
          data = data + 1;
        }
        if (watch_words[i] === "JER") {
          data = data + 1;
        }
        if (watch_words[i] === "DIT") {
          data = data + 1;
        }
        if (watch_words[i] === "DERES") {
          data = data + 1;
        }
      }
      if (jName === "joker") {
        setJokerMatchCount(data);
      } else if (jName === "get") {
        setGetMatchCount(data);
      } else if (jName === "why") {
        setWhyMatchCount(data);
      } else if (jName === "conclusion") {
        setConclusionMatchCount(data);
      } else if (jName === "explanation") {
        setExplanationMatchCount(data);
      }
    }
  };

  return (
    <main className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          spacing={8}
          style={{ border: "5px solid red" }}
        >
          <Grid item md={6} sm={12} lg={6} xs={12}>
            <FormGroup>
              <TextField
                id="filled-basic"
                label="Count of joker words with first 70 words"
                variant="outlined"
                className={classes.formControl}
                name="joker"
                onChange={(e) => wordCount(e.target.value, "joker")}
              />
              <TextField
                id="filled-basic"
                label="What You Get 3 sec.7 words"
                variant="outlined"
                className={classes.formControl}
                name="get"
                onChange={(e) => wordCount(e.target.value, "get")}
              />
              <TextField
                id="filled-basic"
                label="Why You? 5 sec. 12 words"
                variant="outlined"
                name="why"
                className={classes.formControl}
                onChange={(e) => wordCount(e.target.value, "why")}
              />
              <TextField
                id="filled-basic"
                label="Conclusion 7 sec. 17 words"
                variant="outlined"
                name="conclusion"
                className={classes.formControl}
                onChange={(e) => wordCount(e.target.value, "conclusion")}
              />
              <TextField
                label="Explanation"
                multiline
                rows={4}
                rowsMax={8}
                variant="outlined"
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
                      [classes.countItemsOk]: joker?.length >= 70,
                      [classes.countItemsNotOk]: joker?.length >= 71,
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
                      [classes.countItemsOk]: why?.length >= 12,
                      [classes.countItemsNotOk]: why?.length >= 13,
                    })}
                  >
                    {lengthCount(why)}
                  </ListItem>
                  <ListItem
                    className={clsx(classes.countItems, {
                      [classes.countItemsOk]: conclusion?.length >= 17,
                      [classes.countItemsNotOk]: conclusion?.length >= 18,
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
                  <ListItem
                    className={clsx(classes.countItems, {
                      [classes.countItemsOk]: jokerMatchCount !== 0,
                    })}
                  >
                    {jokerMatchCount}
                  </ListItem>
                  <ListItem
                    className={clsx(classes.countItems, {
                      [classes.countItemsOk]: getMatchCount !== 0,
                    })}
                  >
                    {getMatchCount}
                  </ListItem>
                  <ListItem
                    className={clsx(classes.countItems, {
                      [classes.countItemsOk]: whyMatchCount !== 0,
                    })}
                  >
                    {whyMatchCount}
                  </ListItem>
                  <ListItem
                    className={clsx(classes.countItems, {
                      [classes.countItemsOk]: conclusionMatchCount !== 0,
                    })}
                  >
                    {conclusionMatchCount}
                  </ListItem>
                  <ListItem
                    className={clsx(classes.countItems, {
                      [classes.countItemsOk]: explanationMatchCount !== 0,
                    })}
                  >
                    {explanationMatchCount}
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
    </main>
  );
};

export default Form;
