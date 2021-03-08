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
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 25px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "200px",
    },
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
    left: 0,
    right: 130,
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      top: 405,
      left: 0,
      right: 0,
    },
  },
  countItems: {
    fontSize: 25,
    color: "#543210",
    marginBottom: 20,
    fontWeight: "bold",
  },
  countItemsWord: {
    fontSize: 25,
    color: "#543210",
    marginBottom: 40,
    fontWeight: "bold",
  },
  countItemsOk: {
    color: "green !important",
  },
  countItemsNotOk: {
    color: "red !important",
  },
  countSection: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 25,
    },
  },
}));

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
  const [copyData, setCopyData] = useState();
  const [matchGet, setMatchGet] = useState([]);
  const [matchWhy, setMatchWhy] = useState([]);
  const [matchConclusion, setMatchConclusion] = useState([]);

  const matchWords = matchGet.concat(matchWhy).concat(matchConclusion);
  let unique = [...new Set(matchWords)];

  console.log(unique);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setCopyData([data.get, data.why, data.conclusion, data.explanation]);
  };

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
    let jokerGet = [];
    let jokerWhy = [];
    let jokerConclusion = [];
    for (let i = 0; i < watch_words.length; i++) {
      if (~wData.indexOf(watch_words[i])) {
        if (watch_words[i] === "you") {
          data = data + 1;
          jokerGet.push("you");
          jokerWhy.push("you");
          jokerConclusion.push("you");
        }
        if (watch_words[i] === "dig") {
          data = data + 1;
          jokerGet.push("dig");
          jokerWhy.push("dig");
          jokerConclusion.push("dig");
        }
        if (watch_words[i] === "du") {
          data = data + 1;
          jokerGet.push("du");
          jokerWhy.push("du");
          jokerConclusion.push("du");
        }
        if (watch_words[i] === "jer") {
          data = data + 1;
          jokerGet.push("jer");
          jokerWhy.push("jer");
          jokerConclusion.push("jer");
        }
        if (watch_words[i] === "dit") {
          data = data + 1;
          jokerGet.push("dit");
          jokerWhy.push("dit");
          jokerConclusion.push("dit");
        }
        if (watch_words[i] === "deres") {
          data = data + 1;
          jokerGet.push("deres");
          jokerWhy.push("deres");
          jokerConclusion.push("deres");
        }
        if (watch_words[i] === "You") {
          data = data + 1;
          jokerGet.push("You");
          jokerWhy.push("You");
          jokerConclusion.push("You");
        }
        if (watch_words[i] === "Dig") {
          data = data + 1;
          jokerGet.push("Dig");
          jokerWhy.push("Dig");
          jokerConclusion.push("Dig");
        }
        if (watch_words[i] === "Du") {
          data = data + 1;
          jokerGet.push("Du");
          jokerWhy.push("Du");
          jokerConclusion.push("Du");
        }
        if (watch_words[i] === "Jer") {
          data = data + 1;
          jokerGet.push("Jer");
          jokerWhy.push("Jer");
          jokerConclusion.push("Jer");
        }
        if (watch_words[i] === "Dit") {
          data = data + 1;
          jokerGet.push("Dit");
          jokerWhy.push("Dit");
          jokerConclusion.push("Dit");
        }
        if (watch_words[i] === "Deres") {
          data = data + 1;
          jokerGet.push("Deres");
          jokerWhy.push("Deres");
          jokerConclusion.push("Deres");
        }
        if (watch_words[i] === "YOU") {
          data = data + 1;
          jokerGet.push("YOU");
          jokerWhy.push("YOU");
          jokerConclusion.push("YOU");
        }
        if (watch_words[i] === "DIG") {
          data = data + 1;
          jokerGet.push("DIG");
          jokerWhy.push("DIG");
          jokerConclusion.push("DIG");
        }
        if (watch_words[i] === "DU") {
          data = data + 1;
          jokerGet.push("DU");
          jokerWhy.push("DU");
          jokerConclusion.push("DU");
        }
        if (watch_words[i] === "JER") {
          data = data + 1;
          jokerGet.push("JER");
          jokerWhy.push("JER");
          jokerConclusion.push("JER");
        }
        if (watch_words[i] === "DIT") {
          data = data + 1;
          jokerGet.push("DIT");
          jokerWhy.push("DIT");
          jokerConclusion.push("DIT");
        }
        if (watch_words[i] === "DERES") {
          data = data + 1;
          jokerGet.push("DERES");
          jokerWhy.push("DERES");
          jokerConclusion.push("DERES");
        }
      }
      if (jName === "joker") {
        setJokerMatchCount(data);
      } else if (jName === "get") {
        setGetMatchCount(data);
        setMatchGet(jokerGet);
      } else if (jName === "why") {
        setWhyMatchCount(data);
        setMatchWhy(jokerWhy);
      } else if (jName === "conclusion") {
        setConclusionMatchCount(data);
        setMatchConclusion(jokerConclusion);
      } else if (jName === "explanation") {
        setExplanationMatchCount(data);
      }
    }
  };

  return (
    <main className={classes.root}>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="row" justify="center" spacing={8}>
            <Grid item md={6} sm={12} lg={6} xs={12}>
              <FormGroup>
                <TextField
                  id="outlined-basic"
                  label="Count of joker words with first 70 words"
                  variant="outlined"
                  className={classes.formControl}
                  name="joker"
                  onChange={(e) => wordCount(e.target.value, "joker")}
                />
                <TextField
                  id="outlined-basic"
                  label="What You Get 3 sec.7 words"
                  variant="outlined"
                  className={classes.formControl}
                  name="get"
                  inputRef={register}
                  onChange={(e) => wordCount(e.target.value, "get")}
                />
                <TextField
                  id="outlined-basic"
                  label="Why You? 5 sec. 12 words"
                  variant="outlined"
                  name="why"
                  inputRef={register}
                  className={classes.formControl}
                  onChange={(e) => wordCount(e.target.value, "why")}
                />
                <TextField
                  id="outlined-basic"
                  label="Conclusion 7 sec. 17 words"
                  variant="outlined"
                  name="conclusion"
                  inputRef={register}
                  className={classes.formControl}
                  onChange={(e) => wordCount(e.target.value, "conclusion")}
                />
                <TextField
                  id="outlined-basic"
                  label="Explanation"
                  multiline
                  rows={4}
                  rowsMax={8}
                  variant="outlined"
                  name="explanation"
                  inputRef={register}
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
              className={clsx(classes.countArea, classes.countSection)}
            >
              <Grid item>
                <Typography variant="h5">Word Count</Typography>
                <Grid container justify="center">
                  <List style={{ marginTop: "35px" }}>
                    <ListItem
                      className={clsx(classes.countItems, {
                        [classes.countItemsOk]: joker?.length >= 70,
                        [classes.countItemsNotOk]: joker?.length >= 71,
                      })}
                    >
                      {/* {lengthCount(joker)} */}
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
                      {getMatchCount + whyMatchCount + conclusionMatchCount}
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
              <CopyToClipboard text={copyData}>
                <Button
                  className={classes.copyBtn}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Copy Content
                </Button>
              </CopyToClipboard>
            </Grid>
          </Grid>
        </form>
      </Container>
    </main>
  );
};

export default Form;
