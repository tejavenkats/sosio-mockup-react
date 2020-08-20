import React from "react";
import Body from "./components/Body";
import {createStore, applyMiddleware,compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

function App() {

  const initialState = {
    username: "Nicole Kidman",
    tagline : "Actress at hollywood, could've been Jimmy fallon's wife!!",
    tweet:{
      title:"",
      content: ""
    },
    tweets : []
  }

  function reducer(state = initialState,action){
    switch (action.type) {
      case "add_to_tweets":
        return {
          username: state.username,
          tagline : state.tagline,
          tweets : [...state.tweets, action.payload]
        };
      default:
        return state;
    }
  }
  const store = createStore(reducer,compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
