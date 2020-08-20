import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import avatar from "../images/avatar.png";
import {connect} from "react-redux";

const useStyles = makeStyles({
  button: {
    marginTop: "1rem",
  },
  acc: {
    marginTop: "5rem",
    width: "15rem",
  },
  accSum: {
    marginTop: "5rem",
    width: "10rem",
    height: "auto",
  },
  accSumP: {
    marginLeft: "1rem",
  },

  accTF: {
    marginBottom: "1rem",
  },
  textArea: {
    width: "100%",
  },
  paper: {
    height: "auto",
    width: "60%",
    backgroundColor: "rgb(241, 241, 241)",
    margin: "1rem auto auto auto",
  },
  imgStyle: {
    height: "10rem",
    width: "10rem",
  },
});

function CreateTweet(props) {
  const classes = useStyles();

  const [tweet, setTweet] = useState({
    title: "",
    content: "",
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setTweet((prevVal) => {
      if (name === "titleField") {
        return { ...prevVal, title: value };
        
      } else if (name === "contentField") {
        return { ...prevVal, content: value };
      }
    });
  }

  function handleOnClick(event){
    const tweetPostBin = {
      title: tweet.title,
      content: tweet.content
    }

    fetch('https://postb.in/1597933615757-1540582636371?'+JSON.stringify(tweetPostBin))
    .then(response => response.json())
    .then(data => console.log(data));;
    if (tweet.title !== "" && tweet.content !== "") {
      props.dispatch({
        type: 'add_to_tweets',
        payload: tweet
        
      });
    } else {
      alert("Please fill both the fields");
    }
    setTweet({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  var accAttributes = {
    className: classes.acc,
  };

  return (
    <Accordion {...accAttributes}>
      <AccordionSummary className={classes.accSum}>
        <p className={classes.accSumP}> Create New Tweet </p>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <TextField
            className={classes.accTF}
            id="outlined-basic"
            label="Tweet Title"
            variant="filled"
            name="titleField"
            onChange={handleOnChange}
            value={tweet.title}
          />
          <TextField
            id="outlined-basic"
            label="Tweet"
            multiline
            name="contentField"
            rows={6}
            variant="filled"
            onChange={handleOnChange}
            value={tweet.content}
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            endIcon={<CreateIcon />}
            onClick={handleOnClick}
          >
            Create
          </Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

export function Tweet(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper} elevation={1}>
        <Grid container>
          <Grid item xs={2}>
            <img className={classes.imgStyle} src={avatar} alt="" />
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant="h4"
              gutterbottom
              style={{
                marginLeft: "3rem",
                paddingTop: "1rem",
                width: "inherit",
                height: "inherit",
              }}
            >
              {props.title}
            </Typography>
            <Typography
              variant="body1"
              gutterbottom
              style={{ margin: "1rem 0 1rem 3rem", height: "inherit" }}
            >
              {props.content}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

function mapStateToProps(state){
  return {
    tweet: {
      title: state.title,
      content: state.content
    },
    tweets : state.tweets
  }
}

export default connect(mapStateToProps)(CreateTweet);
connect(mapStateToProps)(Tweet);