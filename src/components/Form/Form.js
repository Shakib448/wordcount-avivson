import {
  Container,
  Grid,
  FormGroup,
  Typography,
  Button,
  List,
  ListItem,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useState } from "react";
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
    right: 105,
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

  const [joker, setJoker] = useState("");
  const [{ get }, setGet] = useState("");
  const [{ why }, setWhy] = useState("");
  const [{ conclusion }, setConclusion] = useState("");
  const [{ explanation }, setExplanation] = useState("");
  const [getMatchCount, setGetMatchCount] = useState(0);
  const [whyMatchCount, setWhyMatchCount] = useState(0);
  const [conclusionMatchCount, setConclusionMatchCount] = useState(0);
  const [explanationMatchCount, setExplanationMatchCount] = useState(0);
  const [matchGet, setMatchGet] = useState([]);
  const [matchWhy, setMatchWhy] = useState([]);
  const [matchConclusion, setMatchConclusion] = useState([]);
  const [matchExplanation, setMatchExplanation] = useState([]);
  const [explanationData, setExplanationData] = useState("");
  // const myJokerData = localStorage.getItem("myJokerWords");
  // const savedJokerData = JSON.parse(myJokerData);
  // console.log(savedJokerData);

  const fullData = get?.concat(why)?.concat(conclusion)?.concat(explanation);

  const matchWords = matchGet
    .concat(matchWhy)
    .concat(matchConclusion)
    .concat(matchExplanation);
  let unique = [...new Set(matchWords)];

  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    // localStorage.setItem("myJokerWords", JSON.stringify(data));
  };

  const wordCount = (text, name) => {
    if (name === "joker") {
      setJoker(text);
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
      setExplanationData(text);
      setExplanation({
        explanation: textData(text),
      });
    }
  };

  // const addJokerData = watch_words.concat(joker?.split(" "));
  // const isIncluded = fullData?.filter((value) =>
  //   addJokerData?.includes(value)
  // );
  // if (isIncluded) {
  //   let uniques = [...new Set(isIncluded)];
  //   setUniqueWords(uniques);
  // }

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
    const addJokerData = watch_words.concat(joker?.split(" "));

    let data = 0;
    let jokerGet = [];
    let jokerWhy = [];
    let jokerConclusion = [];
    let jokerExplanation = [];

    for (let i = 0; i < watch_words.length; i++) {
      if (~wData.indexOf(watch_words[i])) {
        if (watch_words[i] === "you") {
          data = data + 1;
          jokerGet.push("you");
          jokerWhy.push("you");
          jokerConclusion.push("you");
          jokerExplanation.push("you");
        }
        if (watch_words[i] === "dig") {
          data = data + 1;
          jokerGet.push("dig");
          jokerWhy.push("dig");
          jokerConclusion.push("dig");
          jokerExplanation.push("dig");
        }
        if (watch_words[i] === "du") {
          data = data + 1;
          jokerGet.push("du");
          jokerWhy.push("du");
          jokerConclusion.push("du");
          jokerExplanation.push("du");
        }
        if (watch_words[i] === "jer") {
          data = data + 1;
          jokerGet.push("jer");
          jokerWhy.push("jer");
          jokerConclusion.push("jer");
          jokerExplanation.push("jer");
        }
        if (watch_words[i] === "dit") {
          data = data + 1;
          jokerGet.push("dit");
          jokerWhy.push("dit");
          jokerConclusion.push("dit");
          jokerExplanation.push("dit");
        }
        if (watch_words[i] === "deres") {
          data = data + 1;
          jokerGet.push("deres");
          jokerWhy.push("deres");
          jokerConclusion.push("deres");
          jokerExplanation.push("deres");
        }
        if (watch_words[i] === "You") {
          data = data + 1;
          jokerGet.push("You");
          jokerWhy.push("You");
          jokerConclusion.push("You");
          jokerExplanation.push("You");
        }
        if (watch_words[i] === "Dig") {
          data = data + 1;
          jokerGet.push("Dig");
          jokerWhy.push("Dig");
          jokerConclusion.push("Dig");
          jokerExplanation.push("Dig");
        }
        if (watch_words[i] === "Du") {
          data = data + 1;
          jokerGet.push("Du");
          jokerWhy.push("Du");
          jokerConclusion.push("Du");
          jokerExplanation.push("Du");
        }
        if (watch_words[i] === "Jer") {
          data = data + 1;
          jokerGet.push("Jer");
          jokerWhy.push("Jer");
          jokerConclusion.push("Jer");
          jokerExplanation.push("Jer");
        }
        if (watch_words[i] === "Dit") {
          data = data + 1;
          jokerGet.push("Dit");
          jokerWhy.push("Dit");
          jokerConclusion.push("Dit");
          jokerExplanation.push("Dit");
        }
        if (watch_words[i] === "Deres") {
          data = data + 1;
          jokerGet.push("Deres");
          jokerWhy.push("Deres");
          jokerConclusion.push("Deres");
          jokerExplanation.push("Deres");
        }
        if (watch_words[i] === "YOU") {
          data = data + 1;
          jokerGet.push("YOU");
          jokerWhy.push("YOU");
          jokerConclusion.push("YOU");
          jokerExplanation.push("YOU");
        }
        if (watch_words[i] === "DIG") {
          data = data + 1;
          jokerGet.push("DIG");
          jokerWhy.push("DIG");
          jokerConclusion.push("DIG");
          jokerExplanation.push("DIG");
        }
        if (watch_words[i] === "DU") {
          data = data + 1;
          jokerGet.push("DU");
          jokerWhy.push("DU");
          jokerConclusion.push("DU");
          jokerExplanation.push("DU");
        }
        if (watch_words[i] === "JER") {
          data = data + 1;
          jokerGet.push("JER");
          jokerWhy.push("JER");
          jokerConclusion.push("JER");
          jokerExplanation.push("JER");
        }
        if (watch_words[i] === "DIT") {
          data = data + 1;
          jokerGet.push("DIT");
          jokerWhy.push("DIT");
          jokerConclusion.push("DIT");
          jokerExplanation.push("DIT");
        }
        if (watch_words[i] === "DERES") {
          data = data + 1;
          jokerGet.push("DERES");
          jokerWhy.push("DERES");
          jokerConclusion.push("DERES");
          jokerExplanation.push("DERES");
        }
      }
      if (jName === "get") {
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
        setMatchExplanation(jokerExplanation);
      }
    }
  };

  function copyToClipBoard() {
    const str = document.getElementById("data")?.innerText;
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  return (
    <main className={classes.root}>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="row" justify="center" spacing={8}>
            <Grid item md={6} sm={12} lg={6} xs={12}>
              <FormGroup>
                <FormControl>
                  <InputLabel>
                    Count of joker words with first 70 words
                  </InputLabel>
                  <Input
                    className={classes.formControl}
                    value={unique.join(" ,")}
                    // defaultValue={
                    //   unique?.length > 0
                    //     ? unique.join(" ,")
                    //     : savedJokerData.joker
                    // }
                    onChange={(e) => wordCount(e.target.value, "joker")}
                    name="joker"
                    inputRef={register}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel>What You Get 3 sec.7 words</InputLabel>

                  <Input
                    className={classes.formControl}
                    onChange={(e) => wordCount(e.target.value, "get")}
                    name="get"
                    // defaultValue={savedJokerData.get}
                    inputRef={register}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel>Why You? 5 sec. 12 words</InputLabel>

                  <Input
                    className={classes.formControl}
                    onChange={(e) => wordCount(e.target.value, "why")}
                    name="why"
                    // defaultValue={savedJokerData.why}
                    inputRef={register}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel>Conclusion 7 sec. 17 words</InputLabel>

                  <Input
                    className={classes.formControl}
                    onChange={(e) => wordCount(e.target.value, "conclusion")}
                    name="conclusion"
                    // defaultValue={savedJokerData.conclusion}
                    multiline
                    rows={2}
                    rowsMax={4}
                    inputRef={register}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel>Explanation</InputLabel>

                  <Input
                    className={classes.formControl}
                    multiline
                    rows={4}
                    rowsMax={8}
                    onChange={(e) => wordCount(e.target.value, "explanation")}
                    name="explanation"
                    // defaultValue={savedJokerData.explanation}
                    inputRef={register}
                  />
                </FormControl>
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
                  <List>
                    <ListItem className={clsx(classes.countItems)}>
                      {lengthCount(fullData)}
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
                    <ListItem className={clsx(classes.countItems)}>
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
                        [classes.countItemsOk]: unique?.length >= 5,
                        [classes.countItemsNotOk]: fullData?.length >= 70,
                      })}
                    >
                      {unique?.length}
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
              <Button
                className={classes.copyBtn}
                variant="contained"
                color="primary"
                type="submit"
                onClick={copyToClipBoard}
              >
                Copy Content
              </Button>
            </Grid>
          </Grid>
        </form>
        <pre
          id="data"
          style={{
            color: "transparent",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        >
          {get?.join(" ")} <br /> <br />
          {why?.join(" ")} <br /> <br />
          {conclusion?.join(" ")} <br /> <br />
          {explanationData}
        </pre>
      </Container>
    </main>
  );
};

export default Form;
