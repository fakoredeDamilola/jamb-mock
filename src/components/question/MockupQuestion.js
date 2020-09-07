import React, { Component } from "react";
import { Context } from "../../context"
import { Link } from "react-router-dom"
import CreateQuestion from "../layout/CreateQuestion";
import Message from "../layout/Message"
import { Consumer } from "../../context";
export default class MockupQuestion extends Component {

  static contextType = Context
  state = {
    subjectArray: [],
    questionArray: [],
    number: 1,
    message: false,
    score: "",
    color: "",
    review: "",
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  async componentDidMount() {
    const { subjectArray, time } = this.context
    let hours, minutes
    if (parseInt(time) > 60) {
      hours = Math.floor(parseInt(time) / 60)
      minutes = parseInt(time) % 60
    } else {
      hours = 0;
      minutes = parseInt(time)
    }
    this.setState({ hours, minutes })
    let data = await Promise.all([
      fetch(`https://questions.aloc.ng/api/m?subject=${subjectArray[0]}`),
      fetch(`https://questions.aloc.ng/api/m?subject=${subjectArray[1]}`),
      fetch(`https://questions.aloc.ng/api/m?subject=${subjectArray[2]}`),
      fetch(`https://questions.aloc.ng/api/m?subject=${subjectArray[3]}`)
    ]).then(function (subject) {
      return Promise.all(subject.map(response => response.json()))
    })
    this.myInterval = setInterval(() => {
      let { minutes, seconds, hours } = this.state
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }

      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(this.myInterval)
            this.getOptions()
          } else {
            this.setState(({ minutes, hours }) => ({
              hours: hours - 1,
              minutes: 59,
              seconds: 59
            }))
          }

        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }

    }
      , 1000)
    this.setState({ questionArray: data, subjectArray })
    let subject1 = document.querySelector(".subject1")
    subject1.style.display = "block"
  }

  changeSubject = (value) => {

    let { number } = this.state

    if (value === "next") {
      if (number >= 4)
        number = 1
      else
        number = number + 1

      let subject = document.querySelector(`.subject${number}`)
      let subjects = document.querySelectorAll(".subject")
      subjects.forEach(subject => subject.style.display = "none")
      subject.style.display = "block"
      this.setState({ number })
    } else if (value === "previous") {
      if (number <= 1)
        number = 4
      else
        number = number - 1

      let subject = document.querySelector(`.subject${number}`)
      let subjects = document.querySelectorAll(".subject")
      subjects.forEach(subject => subject.style.display = "none")
      subject.style.display = "block"
      this.setState({ number })
    }
  }
  checkAnswer = (arr) => {
    let correct = 0,
      idQuestion,
      optionPicked,
      subject1Selected = [],
      subject2Selected = [],
      subject3Selected = [],
      subject4Selected = [],
      subject1 = [],
      subject2 = [],
      subject3 = [],
      subject4 = [],
      totalSubject = [],
      totalSelected = []

    let { questionArray, subjectArray } = this.state;
    arr.forEach((ans) => {
      let parentClassname = ans.parentElement.className.split(" ")[1]
      if (parentClassname === subjectArray[0]) {
        subject1Selected.push(ans)
      }
      else if (parentClassname === subjectArray[1]) {
        subject2Selected.push(ans)
      }
      else if (parentClassname === subjectArray[2]) {
        subject3Selected.push(ans)
      }
      else if (parentClassname === subjectArray[3]) {
        subject4Selected.push(ans)
      }

    })
    questionArray.forEach(question => {
      if (question.subject === subjectArray[0]) {
        subject1.push(question.data)
      }
      else if (question.subject === subjectArray[1]) {
        subject2.push(question.data)
      }
      else if (question.subject === subjectArray[2]) {
        subject3.push(question.data)
      }
      else if (question.subject === subjectArray[3]) {

        subject4.push(question.data)
      }
    })
    totalSubject = [subject1, subject2, subject3, subject4]
    totalSelected = [subject1Selected, subject2Selected, subject3Selected, subject4Selected]
    totalSelected.forEach(selected => {
      totalSubject.forEach(subject => {

        selected.forEach((ans) => {
          idQuestion = parseInt(ans.className.split(" ")[2]);
          optionPicked = ans.className.split(" ")[3];
          subject[0].forEach((question) => {
            if (question.id === idQuestion) {
              if (optionPicked === question.answer) {
                correct = correct + 1
              }
            }
          });
        });
      })
    })
    let takeAgain = document.querySelector(".takeAgain");
    takeAgain.style.display = "block";
    let score = (correct / 160) * 400
    let color, review
    if (score <= 200) {
      color = "red"
      review = "Nice, but you have to work harder"
    } else if (score > 200 && score <= 250) {
      color = "orange"
      review = "Good job, you are getting there"
    } else if (score > 250 && score <= 300) {
      color = "blue"
      review = "Awesome, keep the fire burning, keep working"
    } else if (score > 300 && score <= 350) {
      color = "green"
      review = "Wonderful, this is superb. Keep it up"
    } else if (score > 350) {
      color = "purple"
      review = "Excellent, work on you weak areas"
    }
    this.setState({ score, message: true, color, review })
    let options = document.querySelectorAll(".options");
    totalSubject.forEach(subject => {
      subject[0].forEach(question => {
        options.forEach(opt => {

          opt.childNodes.forEach(option => {

            if (question.id === parseInt(option.className.split(" ")[2])) {
              if (question.answer === option.className.split(" ")[3]) {
                option.style.backgroundColor = "green";
              }
            }
          })
        })
      })
    })

  };

  submitAnswer = () => {
    if (window.confirm("are you  sure you want to submit")) {
      this.getOptions()
    }
  }
  getOptions = () => {
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
  }
  render() {
    let { questionArray } = this.state

    return (
      <Consumer>
        {(value) => {
          let { hours, minutes, seconds } = this.state

          return (
            <div>
              <div className="pt-5 text-center text-white">
                <h1>MOCK</h1>
                {questionArray[0] ?
                  <div className="timer">
                    <div>
                      <h3> {hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</h3>
                    </div>
                  </div>
                  : null
                }

              </div>
              {this.state.message ?
                <div>
                  <div className="cancelBtn" onClick={() => { this.setState({ message: false }) }}>X</div>
                  <Message color={this.state.color} score={this.state.score} review={this.state.review} />
                </div>
                : null

              }
              <div className="subject subject1">
                <div className="text-center text-white">
                  {questionArray[0] ?
                    (<h2>{questionArray[0].subject}</h2>) : null

                  }

                </div>

                <div id="question">
                  {questionArray[0]
                    ? questionArray[0].data.map((question) => {
                      let number = 0;
                      let optionKeys = Object.keys(question.option);

                      return (
                        <CreateQuestion
                          key={question.id}
                          question={question}
                          number={number}
                          optionKeys={optionKeys}
                          subject={questionArray[0].subject}
                        />
                      );
                    })
                    : null}

                </div>

              </div>

              <div className="subject subject2">
                <div>
                  {questionArray[1] ?
                    (<h2>{questionArray[1].subject}</h2>) : null

                  }

                </div>

                <div id="question">
                  {questionArray[1]
                    ? questionArray[1].data.map((question) => {
                      let number = 0;
                      let optionKeys = Object.keys(question.option);

                      return (
                        <CreateQuestion
                          key={question.id}
                          question={question}
                          number={number}
                          optionKeys={optionKeys}
                          subject={questionArray[1].subject}
                        />
                      );
                    })
                    : null}

                </div>

              </div>

              <div className="subject subject3">
                <div>
                  {questionArray[2] ?
                    (<h2>{questionArray[2].subject}</h2>) : null

                  }

                </div>

                <div id="question">
                  {questionArray[2]
                    ? questionArray[2].data.map((question) => {
                      let number = 0;
                      let optionKeys = Object.keys(question.option);

                      return (
                        <CreateQuestion
                          key={question.id}
                          question={question}
                          number={number}
                          optionKeys={optionKeys}
                          subject={questionArray[2].subject}
                        />
                      );
                    })
                    : null}

                </div>

              </div>
              <div className="subject subject4">
                <div>
                  {questionArray[3] ?
                    (<h2>{questionArray[3].subject}</h2>) : null

                  }

                </div>

                <div id="question">
                  {questionArray[3]
                    ? questionArray[3].data.map((question) => {
                      let number = 0;
                      let optionKeys = Object.keys(question.option);

                      return (
                        <CreateQuestion
                          key={question.id}
                          question={question}
                          number={number}
                          optionKeys={optionKeys}
                          subject={questionArray[3].subject}
                        />
                      );
                    })
                    : null}

                </div>

              </div>
              <div className="button-container">

                <div><button className="nextmockup" onClick={this.changeSubject.bind(this, "previous")}>previous </button></div>
                <div>
                  <button className="submitmockup" onClick={this.submitAnswer}>
                    Submit
            </button>
                </div>

                <div><button className="nextmockup" onClick={this.changeSubject.bind(this, "next")}>next</button></div>
              </div>

              <div className="takeAgain">
                <button className="submit">
                  <Link to="/">Go to home page</Link>
                </button>
              </div>
            </div>

          )
        }}
      </Consumer>
    );
  }
}
