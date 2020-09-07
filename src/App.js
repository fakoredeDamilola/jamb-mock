import React from "react";
import "./App.css";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/layout/Home";
import Questions from "./components/question/Questions";
import MockupDetail from "./components/question/MockupDetail";
import MockupQuestion from "./components/question/MockupQuestion";

import Footer from "./components/layout/Footer";
import bg from "./bg.jpg"
function App() {
  return (
    <Provider>
      <Router>
        <div className="App " style={{
          backgroundImage: `linear-gradient(rgba(42, 43, 44, 0.733), rgba(44, 43, 43, 0.733)),url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
          <div className=" container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/subject/:subject" component={Questions} />
              <Route exact path="/mockupdetail" component={MockupDetail} />
              <Route exact path="/mockup/exam" component={MockupQuestion} />
            </Switch>

          </div>

        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
