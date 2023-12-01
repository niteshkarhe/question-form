import React from "react";
import { useRef, useState, useEffect } from "react";
import { useQuery } from "react-query";

import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import EmailField from './component/EmailField';
import ErrorAlert from './component/ErrorAlert';

import { useStyles } from './landingPage.style';

import { getCandidateQuestionsData } from '../api/candidates';

const LandingPage = ({ isValidJob, questions }) => {
    const [checked, setChecked] = useState(true);
    const [textFieldState, setTextFieldState] = useState(false);
    const { classes } = useStyles();
    const loginCodeInputRef = useRef('');
    const [email, setEmail] = useState('');
    const [questionApiCallState, setQuestionApiCallState] = useState(false);
    const [roleMatched, setRoleMatched] = useState(true);

    const getQuestionsApiCall = useQuery(
        ["getQuestions"],
        () => getCandidateQuestionsData(loginCodeInputRef.current.value, email),
        {
            enabled: questionApiCallState
        }
    );

    const submitHandler = async (event) => {
        event.preventDefault();
        setQuestionApiCallState(true);
        getQuestionsApiCall.refetch();

        console.log(getQuestionsApiCall)

        if (getQuestionsApiCall.isLoading) return "Loading..."

        if (getQuestionsApiCall.isIdle) {
            // await new Promise(resolve => setTimeout(resolve, 10000));
            // getQuestionsApiCall.refetch();
            getQuestionsApiCall.refetch();
            return "API Idle..."
        }

        if (getQuestionsApiCall.error)
            return "An error has occured: " + getQuestionsApiCall.error

        if (getQuestionsApiCall.data.email == email) {
            isValidJob(true);
            localStorage.setItem('name', getQuestionsApiCall.data.name);
            localStorage.setItem('email', email);
            localStorage.setItem('role', getQuestionsApiCall.data.role);
            questions(getQuestionsApiCall.data.questions)
        }
        else if (getQuestionsApiCall.data !== undefined) {
            setRoleMatched(false);
        }

        event.target.reset();
    }

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
        if (textFieldState === false)
        {
            setTextFieldState(true);
        }
        else
        {
            setTextFieldState(false);
        }
    };

    return (
        <React.Fragment>
            {!roleMatched && <ErrorAlert />}
            <Card className={classes.card}>
                <CardContent className={classes.titleCard}>
                    <Typography className={classes.title}>
                        Enter Details
                    </Typography>
                </CardContent>
                <CardContent className={classes.fieldCardContent}>
                    <FormControlLabel 
                            required control={
                            <Checkbox
                                checked={checked}
                                onChange={handleCheckboxChange}
                            />} 
                            label="I acknowledge that my video response will be saved for evaluation purpose" />
                    <form className={classes.userForm} onSubmit={submitHandler}>
                        <EmailField
                            label="Email"
                            fieldName="Email"
                            className={classes.inputBox}
                            disabled={textFieldState}
                            enteredEmail={setEmail}
                        />
                        <TextField
                            id="login_code"
                            label="Login Code"
                            variant="outlined"
                            className={classes.inputBox}
                            disabled={textFieldState}
                            required
                            inputRef={loginCodeInputRef}
                        />
                        <button className={classes.submitBtn}>SUBMIT</button>
                    </form>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default LandingPage;