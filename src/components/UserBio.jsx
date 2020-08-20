import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";

const useStyles = makeStyles({
  root: {
    marginTop: "4rem",
    width: "15rem",
    height: "auto",
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

function mapStateToProps(state){
    return {
      username: state.username,
      tagline: state.tagline
    }
}

export default connect(mapStateToProps)(UserBio);
