import React from "react";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";

import { saveUserData } from '../../api/users';

import VideoRecorder from "./VideoRecorder";

const DisplayQuestion = (props) => {
    const [show, setShow] = useState(false);
    const [userQuestionId, setuserQuestionId] = useState('');

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

    const {isLoading, data, isSuccess, error, mutate } = useMutation((payload) => saveUserData(payload), {
        onSuccess: async(data) => {
            setuserQuestionId(data.id);
        },
        OnError: () => {
            console.log('error')
        },
        enabled: false
    });

    console.log('Saved data id: ' + userQuestionId);


    return (
        <React.Fragment>
            {
                !show && props.question !== undefined && <button onClick={revealQueHandler}>Reveal Question</button>
            }
            <div>{show && <div>{props.question}</div>}</div>
            {show && <VideoRecorder recordId={userQuestionId}/>}
        </React.Fragment>
    );
}

export default DisplayQuestion;