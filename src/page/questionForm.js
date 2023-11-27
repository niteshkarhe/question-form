import React from 'react';
import { useState } from "react";

import DisplayQuestion from './component/DisplayQuestion';

const QuestionForm = (props) => {
    const [questions, setQuestions] = useState(props.questions.length > 0 ?  props.questions : [])
    const { v4 : uuidv4 } = require("uuid");

    return (
        <React.Fragment>
            <div>Question Form</div>
            <DisplayQuestion questions={props.questions} />
            {
                questions.map((eachQuestion) => {
                    return (<DisplayQuestion key={uuidv4()} question={eachQuestion}/>)
                })
            }
        </React.Fragment>
    )
}

export default QuestionForm;