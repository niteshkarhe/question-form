import React from "react";
import { useRef, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useStyles } from './landingPage.style';

import { getQuestionsOfRequestedJobId } from '../api/jobs';

const LandingPage = ({ isValidJob }) => {
    const { classes } = useStyles();
    const nameInputRef = useRef('');
    const roleInputRef = useRef('');
    const jobIdInputRef = useRef('');
    const [questionApiCallState, setQuestionApiCallState] = useState(false);

    const getQuestionsApiCall = useQuery({
        queryKey: ["getQuestions"],
        queryFn: () => getQuestionsOfRequestedJobId(jobIdInputRef.current.value),
        enabled: questionApiCallState,
        onSuccess: () => setIsValidJobId()
    });

    const setIsValidJobId = () => {

        if (getQuestionsApiCall.isLoading) return "Loading..."

        if (getQuestionsApiCall.error)
            return "An error has occured: " + getQuestionsApiCall.error

        console.log('Data')
        console.log(getQuestionsApiCall.data.role)
        console.log(roleInputRef.current.value)

        if (getQuestionsApiCall.data.role == roleInputRef.current.value) {
            isValidJob(true);
        }
    }

    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    const submitHandler = async (event) => {
        event.preventDefault();
        getQuestionsApiCall.refetch();
        setQuestionApiCallState(true);
        
        console.log(getQuestionsApiCall)

        if (getQuestionsApiCall.isLoading) return "Loading..."

        if (getQuestionsApiCall.isPending) 
        {
            // await new Promise(resolve => setTimeout(resolve, 10000));
            // getQuestionsApiCall.refetch();
            return "Pending..."
        }

        if (getQuestionsApiCall.error)
            return "An error has occured: " + getQuestionsApiCall.error

        if (getQuestionsApiCall.data.role == roleInputRef.current.value) {
            isValidJob(true);
        }
    }


    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardContent className={classes.titleCard}>
                    <Typography className={classes.title}>
                        Enter Details
                    </Typography>
                </CardContent>
                <CardContent className={classes.fieldCardContent}>
                    <form className={classes.userForm} onSubmit={submitHandler}>
                        <TextField
                            id="fullname"
                            label="Name"
                            variant="outlined"
                            className={classes.inputBox}
                            required
                            inputRef={nameInputRef}
                        />
                        <TextField
                            id="role"
                            label="Job Role"
                            variant="outlined"
                            className={classes.inputBox}
                            required
                            inputRef={roleInputRef}
                        />
                        <TextField
                            id="jobid"
                            label="Job Id"
                            variant="outlined"
                            className={classes.inputBox}
                            required
                            inputRef={jobIdInputRef}
                        />
                        <button>Submit</button>
                    </form>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default LandingPage;