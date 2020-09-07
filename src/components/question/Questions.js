import React, { Component } from "react";

import CreateQuestion from "../layout/CreateQuestion";
import { Link } from "react-router-dom";
class Questions extends Component {
  state = {
    questionsArray: [],
    subject: "",
  };
  async componentDidMount() {
    const { subject } = this.props.match.params;

    let data = await fetch(
      `https://questions.aloc.ng/api/m?subject=${subject}`
    );
    let res = await data.json();
    this.setState({ questionsArray: res.data, subject });

  }
  checkAnswer = (arr) => {
    let correct = 0,

      idQuestion,
      optionPicked,
      takeAgain = document.querySelector(".takeAgain");
    let { questionsArray } = this.state;
    arr.forEach((ans) => {
      idQuestion = parseInt(ans.className.split(" ")[2]);
      optionPicked = ans.className.split(" ")[3];
      questionsArray.forEach((question) => {
        if (question.id === idQuestion) {
          if (optionPicked === question.answer) {
            correct++;
          }
        }
      });
    });
    alert(`You got ${correct} answer`);
    let options = document.querySelectorAll(".options");
    questionsArray.forEach((question) => {

      options.forEach((opt) => {
        opt.childNodes.forEach((option) => {

          if (question.id === parseInt(option.className.split(" ")[2])) {

            if (question.answer === option.className.split(" ")[3]) {
              option.style.backgroundColor = "green";
            }
          }
        })
      })
    })

    takeAgain.style.display = "block";
  };
  submitAnswer = () => {
    let chosenAnswer = [];
    let options = document.querySelectorAll(".options");
    options.forEach((opt) => {
      opt.childNodes.forEach((option) => {
        if (option.style.backgroundColor === "rgb(9, 9, 102)") {
          chosenAnswer.push(option);
        }
      });
    });
    this.checkAnswer(chosenAnswer);
  };

  render() {

    let { questionsArray, subject } = this.state;
    return (
      <div className="py-4">
        <div className="text-center text-white">
          <h1>{subject}</h1>

        </div>

        <div id="question">
          {questionsArray[0]
            ? questionsArray.map((question) => {
              let number = 0;
              let optionKeys = Object.keys(question.option);

              return (
                <CreateQuestion
                  key={question.id}
                  question={question}
                  number={number}
                  optionKeys={optionKeys}
                  subject={subject}
                />
              );
            })
            : null}
          <div className="button-container">
            <div>
              <button className="submit" onClick={this.submitAnswer}>
                Submit
                  </button>
            </div>

          </div>
          <div className="takeAgain">
            <button className="submit">
              <Link to="/">Take another question</Link>
            </button>
          </div>
        </div>
      </div>
    );


  }
}
export default Questions;
