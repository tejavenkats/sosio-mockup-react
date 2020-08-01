import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import UserBio from "./UserBio";
import CreateTweet from "./CreateTweet";
import { Tweet } from "./CreateTweet";
import { Typography } from "@material-ui/core";

export default function Body() {
  const [tweetsArr, setTweetsArr] = useState([]);

  function onAddTemp(tweet) {
    setTweetsArr((prevVal) => {
      return [...prevVal, tweet];
    });
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={6} align="center">
          <UserBio
            username="Nicole Kidman"
            tagline="Actress at hollywood, could've been Jimmy fallon's wife!"
          />
        </Grid>
        <Grid item xs={6} align="center">
          <CreateTweet onAdd={onAddTemp} />
        </Grid>
      </Grid>
      <hr
        style={{
          margin: "3rem 0 0 15%",
          width: "70%",
          border: "1px solid black",
        }}
      />
      {tweetsArr.length === 0 ? (
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
          No Recent Tweets by Nicole Kidman. Create some Tweets, Go ahead.
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
          Recent Tweets by Nicole Kidman
        </Typography>
      )}

      {tweetsArr.map((singleTweet, index) => {
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
