import React from "react";
import Grid from "@material-ui/core/Grid";
import UserBio from "./UserBio";
import CreateTweet from "./CreateTweet";
import { Tweet } from "./CreateTweet";
import { Typography } from "@material-ui/core";
import {connect} from "react-redux";

function Body(props) {
 

  return (
    <div>
      <Grid container>
        <Grid item xs={6} align="center">
          <UserBio
            username={props.username}
            tagline={props.tagline}
          />
        </Grid>
        <Grid item xs={6} align="center">
          <CreateTweet  />
        </Grid>
      </Grid>
      <hr
        style={{
          margin: "3rem 0 0 15%",
          width: "70%",
          border: "1px solid black",
        }}
      />
      {props.tweets.length === 0 ? (
        <Typography
          variant="h4"
          style={{
            marginTop: "1rem",
            textAlign: "center",
            width: "65%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          No Recent Tweets by {props.username}. Create some Tweets, Go ahead.
        </Typography>
      ) : (
        <Typography
          variant="h4"
          style={{
            marginTop: "1rem",
            textAlign: "center",
            width: "65%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Recent Tweets by {props.username}
        </Typography>
      )}

      {props.tweets.map((singleTweet, index) => {
        return (
          <Tweet
            title={singleTweet.title}
            content={singleTweet.content}
            key={index}
          />
        );
      })}

      <hr
        style={{
          margin: "3rem 0 3rem 15%",
          width: "70%",
          border: "1px solid black",
        }}
      />
    </div>
  );
}

function mapStateToProps(state){
  return {
    username: state.username,
    tagline: state.tagline,
    tweets: state.tweets,
  }
}

export default connect(mapStateToProps)(Body);