import React, { Component } from "react";
import { Consumer } from "../../context";
class MockupDetail extends Component {
  state = {
    arr: [],
    time: "120"
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value })
  selectSubject = (subject, e) => {
    if (e.target.id === "not-subject") {
      e.target.id = "subject";
      this.setState({ arr: [...this.state.arr, subject] })

    } else {
      e.target.id = "not-subject";
      let newArr = this.state.arr.filter(sub => sub !== subject)
      this.setState({ arr: newArr })

    }
  };
  submitSelected = (dispatch) => {
    const { arr, time } = this.state


    if (arr.length === 4 && time !== "") {
      dispatch({ type: "FILL_SUBJECTS", payload: arr });
      dispatch({ type: "FILL_TIME", payload: time });

      this.props.history.push("/mockup/exam");
    } else {
      alert("please pick 4 subject and input a duration in minutes");
    }
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <div>
                <div>
                  <div className="jumbotron">
                    <h1 className="display-4">JAMB MOCK</h1>
                    <ul className="list-group">
                      <li className="list-group-item"> You are to pick the four subjects that you will like to take</li>
                      <li className="list-group-item">You can specify how long you want this exam to be. But once your time is up, it will automatically submit itself. The questions are constant at 40</li>
                      <li className="list-group-item">
                        Take note of the buttons you are clicking and dont press the submit button by mistake. That is dangerous
                 </li>
                      <li className="list-group-item">
                        The grading is simple, each question is one mark, 160 question = 160 marks. 160/160 * 400= 400
                 </li>
                      <li className="list-group-item">
                        This is a mock and it is in no way affiliated with the JAMB exam. Therefore, there is a tendency that some answers might be wrong or might not be included and because of that here is the grading
                   <ul className="list-group my-3">
                          <li className="list-group-item">red : below 200: fair</li>
                          <li className="list-group-item">orange : 200-250: pass</li>
                          <li className="list-group-item">blue : 250-300: good</li>
                          <li className="list-group-item">green : 300-350: Distinction</li>
                          <li className="list-group-item">purple : 350-400: Excellent</li>
                        </ul>
                      </li>
                      <li className="list-group-item">Note that your score is not a determinant that you are set for the exam. This is just to help you a little. Read more after taking this.</li>
                      <li className="list-group-item">Special thanks to <a href="https://questions.aloc.ng/">aloc api</a>, they made about 5000 questions available for free to anyone. </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <h2 className="text-white">Select 4 subjects</h2>
                  <div className="mockup">



                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "physics")}
                      id="not-subject"
                    >
                      physics
                    </button>


                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "chemistry")}
                      id="not-subject"
                    >
                      Chemistry
                    </button>


                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "biology")}
                      id="not-subject"
                    >
                      Biology
                    </button>


                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "mathematics")}
                      id="not-subject"
                    >
                      Mathematics
                    </button>


                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "english")}
                      id="not-subject"
                    >
                      English
                    </button>
                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "history")}
                      id="not-subject"
                    >
                      History
                    </button>
                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "currentaffairs")}
                      id="not-subject"
                    >
                      Current Affairs
                    </button>
                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "insurance")}
                      id="not-subject"
                    >
                      Insurance
                    </button>
                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "civiledu")}
                      id="not-subject"
                    >
                      Civil Education
                    </button>
                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "irk")}
                      id="not-subject"
                    >
                      I R K
                    </button>
                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "economics")}
                      id="not-subject"
                    >
                      Economics
                    </button>
                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "geography")}
                      id="not-subject"
                    >
                      Geography
                    </button>
                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "crk")}
                      id="not-subject"
                    >
                      C R K
                    </button>
                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "government")}
                      id="not-subject"
                    >
                      Government
                    </button>

                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "accounting")}
                      id="not-subject"
                    >
                      Accounting
                    </button>
                    <button
                      className="mockup-link"
                      onClick={this.selectSubject.bind(this, "commerce")}
                      id="not-subject"
                    >
                      Commerce
                    </button>


                  </div>
                  <div className="mt-3">
                    <label htmlFor="time">Time :  </label><input type="text" className="input" onChange={this.onChange} name="time" value={this.state.time} placeholder="minutes" />

                  </div>
                  <div className="submitSelected py-4">
                    <button
                      className="btn btn-primary btn-block "
                      onClick={this.submitSelected.bind(this, dispatch)}
                    >
                      Submit selection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default MockupDetail;
