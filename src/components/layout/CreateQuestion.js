import React from "react";

const CreateQuestion = (props) => {
  let { question, number, optionKeys, subject } = props;
  const pickOption = (e) => {
    let clicked = e.target;
    let clickedClass = e.target.className.split(" ")[0];
    let array = document.querySelectorAll(`.${clickedClass}`);
    Array.from(array).forEach((item) => {
      item.style.backgroundColor = "transparent";
      item.id = "not-selected";
    });
    clicked.style.backgroundColor = "rgb(9, 9, 102)";
    clicked.style.color = "white"
    clicked.id = "selected";
  };
  return (
    <div>
      <div className={`question quest${question.id}`}>
        <div>
          <div className="examinfo">
            <div className="examType text-muted">{question.examtype}</div>
            <div className="examYear text-muted">{question.examyear}</div>
          </div>
          <div className="questionBox">
            {question.section !== "" ? (
              <div className="sectionBox">{question.section}</div>
            ) : null}
            {question.question}

          </div>
          <div className={`options ${subject}`}>
            <div
              className={`option${question.id} option${
                question.id
                }${number++} ${question.id} ${optionKeys[0]}`}
              id="not-selected"
              onClick={pickOption}
            >
              <span className="mr-2">a.</span>{question.option["a"]}
            </div>
            <div
              className={`option${question.id} option${
                question.id
                }${number++} ${question.id} ${optionKeys[1]}`}
              id="not-selected"
              onClick={pickOption}
            >
              <span className="mr-2">b.</span>{question.option["b"]}
            </div>
            <div
              className={`option${question.id} option${
                question.id
                }${number++} ${question.id} ${optionKeys[2]}`}
              id="not-selected"
              onClick={pickOption}
            >
              <span className="mr-2">c.</span>{question.option["c"]}
            </div>
            <div
              className={`option${question.id} option${
                question.id
                }${number++} ${question.id} ${optionKeys[3]}`}
              id="not-selected"
              onClick={pickOption}
            >
              <span className="mr-2">d.</span>{question.option["d"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateQuestion;
