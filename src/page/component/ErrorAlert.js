import { useState, useEffect } from 'react';
import { makeStyles } from "tss-react/mui";

import Alert from '@mui/material/Alert';

const ErrorAlert = () => {
    const useStyles = makeStyles()((theme) => ({
        alertContainer: {
            textAlign: "center"
        }
    }));

    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(false)
        }, 10000)

        return () => {
            clearTimeout(timeId)
        }
    }, []); 

    return (
        <div className={useStyles.alertContainer}>
            {show && <Alert variant="outlined" severity="error">Entered role did not match for the job id!</Alert> }
        </div>
    );
}

export default ErrorAlert;