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
  ButtonGroup,
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
  save: {
    margin: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 40,
    },
  },
  delete: {
    margin: "20px",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 40,
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
  const [explanationData, setExplanationData] = useState("");
  const [getCount, setGetCount] = useState([]);
  const [whyCount, setWhyCount] = useState([]);
  const [conclusionCount, setConclusionCount] = useState([]);
  const [explanationCount, setExplanationCount] = useState([]);
  const [jokerMatch, setJokerMatch] = useState([]);

  const totalJokerCount =
    lengthCount(getCount) +
    lengthCount(whyCount) +
    lengthCount(conclusionCount) +
    lengthCount(explanationCount);

  const myJokerData = localStorage.getItem("myJokerWords");
  const savedJokerData = JSON.parse(myJokerData);

  const fullData = get?.concat(why)?.concat(conclusion)?.concat(explanation);

  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    localStorage.setItem("myJokerWords", JSON.stringify(data));
  };

  const deleteContent = () => {
    if (savedJokerData !== null) {
      if (window.confirm("Do you really delete the joker words?")) {
        localStorage.removeItem("myJokerWords");
        window.location.reload();
      }
    }
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
    const isIncluded = fullData?.filter((value) =>
      addJokerData.includes(value)
    );
    // let unique = [...new Set(isIncluded)];
    setJokerMatch(isIncluded);

    const isGet = get?.filter((value) => addJokerData.includes(value));
    setGetCount(isGet);

    const isWhy = why?.filter((value) => addJokerData.includes(value));
    setWhyCount(isWhy);

    const isConclusion = conclusion?.filter((value) =>
      addJokerData.includes(value)
    );
    setConclusionCount(isConclusion);

    const isExplanation = explanation?.filter((value) =>
      addJokerData.includes(value)
    );
    setExplanationCount(isExplanation);
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
                    // defaultValue={jokerMatch.join(" ,")}
                    value={jokerMatch?.join(" ,")}
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
                    defaultValue={savedJokerData?.get}
                    inputRef={register}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel>Why You? 5 sec. 12 words</InputLabel>

                  <Input
                    className={classes.formControl}
                    onChange={(e) => wordCount(e.target.value, "why")}
                    name="why"
                    defaultValue={savedJokerData?.why}
                    inputRef={register}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel>Conclusion 7 sec. 17 words</InputLabel>

                  <Input
                    className={classes.formControl}
                    onChange={(e) => wordCount(e.target.value, "conclusion")}
                    name="conclusion"
                    defaultValue={savedJokerData?.conclusion}
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
                    defaultValue={savedJokerData?.explanation}
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
                      {lengthCount(get) +
                        lengthCount(why) +
                        lengthCount(conclusion) +
                        lengthCount(explanation)}
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
                        [classes.countItemsOk]: totalJokerCount >= 5,
                        [classes.countItemsNotOk]: fullData?.length >= 71,
                      })}
                    >
                      {totalJokerCount}
                    </ListItem>
                    <ListItem
                      className={clsx(classes.countItems, {
                        [classes.countItemsOk]: lengthCount(getCount) > 0,
                      })}
                    >
                      {lengthCount(getCount)}
                    </ListItem>
                    <ListItem
                      className={clsx(classes.countItems, {
                        [classes.countItemsOk]: lengthCount(whyCount) > 0,
                      })}
                    >
                      {lengthCount(whyCount)}
                    </ListItem>
                    <ListItem
                      className={clsx(classes.countItems, {
                        [classes.countItemsOk]:
                          lengthCount(conclusionCount) > 0,
                      })}
                    >
                      {lengthCount(conclusionCount)}
                    </ListItem>
                    <ListItem
                      className={clsx(classes.countItems, {
                        [classes.countItemsOk]:
                          lengthCount(explanationCount) > 0,
                      })}
                    >
                      {lengthCount(explanationCount)}
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
          <Grid container direction="row" justify="center">
            <ButtonGroup>
              <Button
                className={classes.save}
                variant="contained"
                color="primary"
                type="submit"
              >
                Save Content
              </Button>
              {savedJokerData !== null && (
                <Button
                  className={classes.delete}
                  variant="contained"
                  color="primary"
                  onClick={deleteContent}
                >
                  Delete Content
                </Button>
              )}
            </ButtonGroup>
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
