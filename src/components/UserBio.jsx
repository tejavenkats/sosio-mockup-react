import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // padding: "1rem",
    marginTop: "4rem",

    width: "15rem",
    height: "auto",
    // boxShadow: "0px 2px 2px 2px rgba(0,0,0,0.25)",
  },
});

function UserBio(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3">{props.username}</Typography>
      <Typography variant="body1">{props.tagline}</Typography>
    </div>
  );
}

export default UserBio;
