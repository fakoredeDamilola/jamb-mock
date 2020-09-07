import React, { Component } from "react";

export const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,

        subject: action.payload,
      };
    case "FILL_SUBJECTS":
      return {
        ...state,
        subjectArray: action.payload,
      };
    case "FILL_TIME":
      return {
        ...state,
        time: action.payload,
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    subjectArray: [],
    time: "",
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
