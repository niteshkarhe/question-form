import React from "react";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";

import { saveUserData } from '../../api/users';

import VideoRecorder from "./VideoRecorder";

const DisplayQuestion = (props) => {
    const [show, setShow] = useState(false);
    const [userQuestionId, setuserQuestionId] = useState('');
    const [uploadState, setUploadState] = useState(false);

    useEffect(() => {
        if (uploadState) {
            const questionNum = props.questionNum + 1;
            props.setQuestionNum(questionNum)
        }

        setUploadState(false);

    }, [uploadState])

    const revealQueHandler = () => {
        const payload = {
            "email": localStorage.getItem('email'),
            "name": localStorage.getItem('name'),
            "role": localStorage.getItem('role'),
            "question": props.question
        }

        mutate(payload);
        setShow(true);
    };

    const { isLoading, data, isSuccess, error, mutate } = useMutation((payload) => saveUserData(payload), {
        onSuccess: async (data) => {
            setuserQuestionId(data.id);
        },
        OnError: () => {
            console.log('error')
        },
        enabled: false
    });

    return (
        <React.Fragment>
            {
                !show && props.question !== undefined && <button disabled={props.item != props.questionNum} onClick={revealQueHandler}>Reveal Question</button>
            }
            <div>{show && <div>{props.question}</div>}</div>
            {show && <VideoRecorder recordId={userQuestionId} uploadApiState={setUploadState} />}
        </React.Fragment>
    );
}

export default DisplayQuestion;