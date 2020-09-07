import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
export default class Home extends Component {
  state = {
    subject: "",
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div>
              <div className="jumbotron">
                <h1 className="display-4">A SIMPLE PAST QUESTION APP (JAMB)</h1>
              </div>
              <div className="takeQuestions mx-2">
                <button>
                  <Link to="/mockupdetail">Take jamb mockup</Link>
                </button>


              </div>
              <div className="subjects container">
                <div className="listUl my-4">


                  <button>
                    <Link to="/subject/mathematics">
                      Mathematics
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/commerce">
                      Commerce
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/accounting">
                      Accounting
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/biology">
                      Biology
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/english">
                      English
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/chemistry">
                      Chemistry
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/physics">
                      Physics
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/government">
                      Government
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/crk">
                      C R K
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/geography">
                      Geography
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/economics">
                      Economics
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/irk">
                      I R K
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/civiledu">
                      Civil Education
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/insurance">
                      Insurance
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/currentaffairs">
                      Current Affairs
                  </Link>
                  </button>
                  <button>
                    <Link to="/subject/history">
                      History
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
